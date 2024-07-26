import React from "react";
import { CardProps } from "../types";
import removeIcon from "../assets/icons/removeIcon.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { deletePost } from "../store/postSlice";

const Card: React.FC<CardProps> = ({ post, onEdit }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="relative w-80 h-112 rounded-3xl overflow-hidden shadow-lg flex flex-col bg-white">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="object-cover w-full h-48 bg-gray-200"
      />
      <div className="flex flex-col flex-1 px-5 py-5">
        <button
          onClick={() => dispatch(deletePost(post.id))}
          className="absolute top-1 right-1 rounded-full shadow-md"
        >
          <img src={removeIcon} alt="Remove" className="w-10 h-10" />
        </button>
        <div className="font-bold text-xl mb-2 truncate">{post.title}</div>
        <p
          className="text-gray-700 text-sm flex-1 overflow-hidden"
          style={{ maxHeight: "6rem" }}
        >
          {post.description}
        </p>
        <p className="text-gray-400 text-sm my-2">{post.createdAt}</p>
        <div className="mt-auto">
          <button
            onClick={() => onEdit(post)}
            className="bg-light-orange text-white uppercase text-sm font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
