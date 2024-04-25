import { Comment as CommenType } from "../../type";
import { Stars } from "../Stars";
import { Box } from "@mui/material";

type CommentProps = {
  comment: CommenType;
  className?: string;
};

export const Comment = ({ comment, className }: CommentProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-col md:flex-row p-2 gap-5 items-center text-center">
        <div
          className={`w-20 h-20 rounded-full object-cover flex items-center justify-center ${comment.photo}`}
        >
          <h2 className="text-3xl font-bold text-black">
            {(comment.username[0] + comment.username[1]).toLocaleUpperCase()}
          </h2>
        </div>
        <div className="flex flex-col gap-y-1">
          <p>{comment.username}</p>
          <Stars rate={comment.rate} />
        </div>
      </div>

      <Box
        sx={{
          height: "fit-content",
          minHeight: 400,
          maxWidth: 350,
          width: "100%",
          p: 2,
        }}
      >
        <h4 className="text-xl font-bold mb-2">{comment.title}</h4>
        <p>{comment.description}</p>
      </Box>
    </div>
  );
};
