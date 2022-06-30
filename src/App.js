import React, { useState } from "react";
import Nav from "./components/Nav";
import MainBody from "./components/MainBody";
import Form from "./components/Form/Form";
import Note from "./components/Note/Note";

import { getInitialData } from "./utils/index";

import "./style.css";

export default function App() {
  const [notes, setNotes] = useState(getInitialData());

  const noteFilter = (noteSample, condition) => {
    return noteSample.filter(
      (filteredNote) => filteredNote.archived === condition
    );
  };

  const onArchiveHandler = (id) => {
    notes.map((note) => {
      if (note.id === id) {
        setNotes([...notes, (note.archived = !note.archived)]);
      }
    });
  };

  const onDeleteHandler = (id) => {
    const noteSample = notes.filter((note) => note.id !== id);
    setNotes(noteSample);
  };

  const onAddNoteHandler = (title, body) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        createdAt: +new Date(),
        archived: false,
      },
    ]);
  };

  return (
    <>
      <Nav />
      <MainBody>
        <Form onAddNoteHandler={onAddNoteHandler} />
        <Note
          notes={noteFilter(notes, false)}
          onDeleteHandler={onDeleteHandler}
          onArchiveHandler={onArchiveHandler}
          categoryTitle="Active Notes"
        />
        <Note
          notes={noteFilter(notes, true)}
          onDeleteHandler={onDeleteHandler}
          onArchiveHandler={onArchiveHandler}
          categoryTitle="Archived Notes"
        />
      </MainBody>
    </>
  );
}
