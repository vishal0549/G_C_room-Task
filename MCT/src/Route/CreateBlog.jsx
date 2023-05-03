import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBlog } from "../Redux/Action";
import { Navigate } from "react-router-dom";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const newBlog = {
      id: uuidv4(),
      title: title,
      description: description,
    };

    dispatch(addBlog(newBlog));
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center my-5">
        <div className="card w-50 p-4">
          <h3 className="mb-2">Add Blog</h3>
          <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Description"
                className="form-control mb-4"
                id="exampleFormControlTextarea1"
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className="d-flex justify-content-end">
                <button className="btn" type="submit">
                  Add Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
