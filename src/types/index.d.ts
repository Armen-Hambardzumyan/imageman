import React from "react";

export interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt?: string;
}

export interface CardContainerProps {
  onEditPost: (post: Post) => void;
  onAddPost: () => void;
}

export interface CardProps {
  post: Post;
  onEdit: (post: Post) => void;
}

export interface AddEditPostFormProps {
  post?: Post | null;
  onClose: () => void;
  onSubmit: (post: Omit<Post, "createdAt">) => void;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
