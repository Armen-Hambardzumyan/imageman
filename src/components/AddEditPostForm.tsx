import React, { useState, useEffect } from "react";
import { AddEditPostFormProps } from "../types";
import uploadIcon from "../assets/icons/uploadIcon.svg";

const AddEditPostForm: React.FC<AddEditPostFormProps> = ({
  post,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [imageError, setImageError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
      setImage(null);
      setImagePreview(post.imageUrl);
    } else {
      setTitle("");
      setDescription("");
      setImage(null);
      setImagePreview(null);
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTitleError("");
    setDescriptionError("");
    setImageError("");

    let hasError = false;

    if (!title) {
      setTitleError("Title is required");
      hasError = true;
    }

    if (!description) {
      setDescriptionError("Description is required");
      hasError = true;
    }

    if (!image && !imagePreview) {
      setImageError("Image is required");
      hasError = true;
    }

    if (hasError) return;

    const imageUrl = image ? URL.createObjectURL(image) : imagePreview || "";

    onSubmit({
      id: post?.id || "",
      title,
      description,
      imageUrl,
    });

    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      setImageError("");
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (titleError) {
      setTitleError("");
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
    if (descriptionError) {
      setDescriptionError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Post Title"
          className={`shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline ${titleError ? "border-red-500" : ""}`}
        />
        {titleError && (
          <p className="text-red-500 text-xs mt-1">{titleError}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Post Description"
          className={`shadow appearance-none border rounded-3xl w-full h-32 py-2 px-3 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline resize-none ${descriptionError ? "border-red-500" : ""}`}
        />
        {descriptionError && (
          <p className="text-red-500 text-xs mt-1">{descriptionError}</p>
        )}
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <label
            htmlFor="image"
            className="flex items-center cursor-pointer bg-orange-500 text-white font-bold py-2 px-4 rounded-3xl"
          >
            <img src={uploadIcon} alt="Upload" className="w-4 h-4 mr-2" />
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-24 h-auto rounded-md"
            />
          </div>
        )}
        {imageError && (
          <p className="text-red-500 text-xs mt-1">{imageError}</p>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddEditPostForm;
