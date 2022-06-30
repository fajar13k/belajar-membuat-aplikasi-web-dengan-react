import React, { useState } from "react";
import Card from "../Card/Card";

export default function Form({ onAddNoteHandler }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLimit, setCharLimit] = useState(50);
  const [validation, setValidation] = useState(true);

  const onTitleChangeEventHandler = (e) => {
    const charCount = e.target.value.length;
    const charLeft = 50 - charCount;

    setTitle(e.target.value);
    setCharLimit(charLeft);
  };

  const limitTracker = (charLimit) => {
    if (charLimit >= 25) {
      return "#00a676";
    } else if (charLimit >= 5 && charLimit < 25) {
      return "#ee6123";
    } else {
      return "#d60032";
    }
  };

  const onBodyChangeEventHandler = (e) => {
    setBody(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (charLimit < 0) {
      setValidation(false);
      setTimeout(() => {
        setValidation(true);
      }, 3000);

      return alert("Ga bisa lah");
    }

    try {
      onAddNoteHandler(title, body);

      setTitle("");
      setBody("");
      setCharLimit(50);
      setValidation(true);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Card>
      <form action="#" id="form" onSubmit={onSubmitHandler}>
        <h2 className="title">Make a Note for Yourself</h2>
        <div className="form-group mb-2">
          <div className="flex space-between">
            <label htmlFor="title">Title</label>
            <svg width="25" height="25">
              <circle
                cx="12.5"
                cy="12.5"
                r="12.5"
                fill={limitTracker(charLimit)}
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="#fff"
                fontSize="14px"
                fontFamily="sans-serif"
                dy=".4em"
              >
                {charLimit}
              </text>
              Sorry, your browser does not support inline SVG.
            </svg>
          </div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Hey what is up?"
            value={title}
            onChange={onTitleChangeEventHandler}
            required
          />
        </div>
        {!validation && (
          <div className="card bg-primary text-white">
            <p>Title is too long!</p>
          </div>
        )}
        <div className="form-group mb-2">
          <label htmlFor="body">Details</label>
          <textarea
            id="body"
            name="body"
            placeholder="What are you going to do exactly?"
            value={body}
            onChange={onBodyChangeEventHandler}
            required
            rows={5}
          />
        </div>
        <button
          type="submit"
          value="Add Note"
          name="submit"
          className="btn btn-primary"
        >
          Add Note
        </button>
      </form>
    </Card>
  );
}
