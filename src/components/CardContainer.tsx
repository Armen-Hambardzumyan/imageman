import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getPosts } from "../store/postSlice";
import { CardContainerProps } from "../types";

const CardContainer: React.FC<CardContainerProps> = ({
  onEditPost,
  onAddPost,
}) => {
  const posts = useSelector(getPosts);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} post={post} onEdit={onEditPost} />
        ))}

        <div className="w-80 h-112 rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col items-center justify-center">
          <button
            onClick={onAddPost}
            className="w-full h-full flex items-center justify-center bg-gradient-to-t from-turquoise-green to-light-green hover:from-light-green hover:to-turquoise-green text-2xl text-white rounded-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
