import React from "react";
import { showFormattedDate } from "../../utils/index";

export default function NoteItem({
  createdAt,
  id,
  noteArchive,
  noteBody,
  noteTitle,
  onArchiveHandler,
  onDelete,
}) {
  return (
    <article className="card-item bg-lighter-1 shadow-xl">
      <div className="card-header">
        <h3>{noteTitle}</h3>
        <span className="subtitle-date">{showFormattedDate(createdAt)}</span>
      </div>
      <div className="card-body">
        <p>{noteBody}</p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary text-dark mr-2"
          type="submit"
          value={noteArchive ? "Undo" : "Archive"}
          onClick={() => onArchiveHandler(id)}
        >
          {noteArchive ? "Unarchive" : "Archive"}
        </button>
        <button
          className="btn"
          type="submit"
          value="delete"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
