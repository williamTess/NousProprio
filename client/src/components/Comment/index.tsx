import React from "react";
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
      <div className="flex p-2 gap-5 items-center">
        <img
          src={comment.photo}
          alt={comment.username}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex flex-col gap-y-1">
          <p>{comment.username}</p>
          <Stars rate={comment.rate} />
        </div>
      </div>

      <Box
        sx={{
          height: "fit-content",
          minHeight: 360,
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
