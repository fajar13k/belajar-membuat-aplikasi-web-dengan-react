import React from "react";
import Card from "../Card/Card";
import NoteItem from "./NoteItem";

export default function Note({
  notes,
  categoryTitle,
  onArchiveHandler,
  onDeleteHandler,
}) {
  return (
    <Card>
      <h2 className="title">{categoryTitle}</h2>
      <div className="card-outer">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              createdAt={note.createdAt}
              noteArchive={note.archived}
              noteBody={note.body}
              noteTitle={note.title}
              onArchiveHandler={onArchiveHandler}
              onDelete={onDeleteHandler}
            />
          ))
        ) : (
          <p>
            No <span className="underline">{categoryTitle}</span> found.
          </p>
        )}
      </div>
    </Card>
  );
}
