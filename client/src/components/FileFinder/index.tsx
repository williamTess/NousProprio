import { LegacyRef, useCallback, useEffect, useRef, useState } from "react";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { CircularProgressWithLabel } from "../CircularProgressWithLabel";

interface Props {
  imageUrl: string;
  onChange: (f: string) => void;
  name: string;
}

export const ImageFinder = (props: Props) => {
  const { imageUrl, name, onChange } = props;
  const filePickerRef = useRef<HTMLInputElement>();
  const [image, setImage] = useState<File | null>(null);
  const [imagePercentage, setImagePercentage] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);

  const handleUpload = useCallback(
    (data: File) => {
      const storage = getStorage(app);
      const filename = new Date().getTime() + data.name;
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, data);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImagePercentage(Math.round(progress));
        },
        () => setImageError(true),
        () =>
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            onChange(downloadUrl);
          })
      );
    },
    [onChange]
  );

  useEffect(() => {
    if (image) handleUpload(image);
  }, [handleUpload, image]);

  return (
    <>
      <input
        id={name}
        name={name}
        type="file"
        ref={filePickerRef as LegacyRef<HTMLInputElement>}
        hidden
        accept="image/*"
        onChange={(e) => setImage(e.target.files && e.target.files[0])}
      />
      <img
        src={imageUrl}
        alt="profile-pic"
        className="h-24 w-24 self-center cursor-pointer rounded-full object-cover my-10"
        onClick={() => {
          if (filePickerRef.current) filePickerRef.current.click();
        }}
      />
      {imagePercentage > 0 && imagePercentage < 100 && (
        <CircularProgressWithLabel value={imagePercentage} />
      )}
      {imageError && (
        <p className="text-red-700 text-center">Image upload error</p>
      )}
    </>
  );
};
