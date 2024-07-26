import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import CardContainer from "./components/CardContainer";
import Modal from "./components/Modal";
import AddEditPostForm from "./components/AddEditPostForm";
import { addPost, editPost } from "./store/postSlice";
import { v6 as uuid6 } from "uuid";
import { Post } from "./types";

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<
    Omit<Post, "createdAt"> | undefined
  >(undefined);

  const dispatch = useDispatch<AppDispatch>();

  const handleAddPost = () => {
    setCurrentPost(undefined);
    setModalOpen(true);
  };

  const handleEditPost = (post: Omit<Post, "createdAt">) => {
    setCurrentPost(post);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitPost = (post: Omit<Post, "createdAt">) => {
    if (post.id) {
      dispatch(
        editPost({
          ...post,
          createdAt: new Date().toLocaleDateString(),
        }),
      );
    } else {
      dispatch(
        addPost({
          ...post,
          id: uuid6(),
          createdAt: new Date().toLocaleDateString(),
        }),
      );
    }
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Imageman</h1>
      <CardContainer onEditPost={handleEditPost} onAddPost={handleAddPost} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddEditPostForm
          post={currentPost}
          onClose={handleCloseModal}
          onSubmit={handleSubmitPost}
        />
      </Modal>
    </div>
  );
};

export default App;
