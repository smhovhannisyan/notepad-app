import { useCallback, useState, ChangeEvent } from 'react';

import TextInput from 'components/TextInput';
import Textarea from 'components/Textarea';
import Layout from 'components/Layout';
import Button from 'components/Button';
import NoteTitle from 'components/NoteTitle';
import NoteActions from 'components/NoteActions';

import { isEmpty } from 'utils/fieldsValidation';

import styles from './create.module.css';

type NoteErrorType = {
  [key: string]: string | null;
};

type ErrorsType = {
  notepadError: string | null;
  notesError: {
    title: string | null;
    name: string | null;
    note: string | null;
  };
};

type NotesType = {
  noteTitle: string;
  noteContent: string;
}

type NoteFormStateType = {
  fields: {
    title: string;
    name: string;
    note: string;
  };
  notes: NotesType[];
};

const errorMessages: NoteErrorType = {
  title: 'Title field can not be empty',
  name: 'Name field can not be empty',
  note: 'Content field can not be empty',
};

function Create({ notes: _notes }: { notes: NotesType[]; }) {
  const [{ notepadError, notesError }, setErrors] = useState<ErrorsType>({
    notepadError: null,
    notesError: {
      title: null,
      name: null,
      note: null,
    },
  });
  const [{
    fields: { title, name, note },
    notes,
  }, setValue] = useState<NoteFormStateType>({
    fields: {
      title: '',
      name: '',
      note: '',
    },
    notes: _notes,
  });
  // const [notes, setNotes] = useState<NotesType[]>(_notes);

  const handleOnChange = useCallback((
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { value: targetValue, name: targetName } = e.target;
    setValue((prevState) => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [targetName]: targetValue,
      },
    }));
    setErrors((prevState) => ({
      ...prevState,
      notesError: {
        ...prevState.notesError,
        [targetName]: isEmpty(targetValue) ? errorMessages[targetName] : null,
      },
    }));
  }, []);

  const handleAdd = useCallback(() => {
    setErrors((prevState) => ({
      ...prevState,
      notesError: {
        title: isEmpty(title) ? errorMessages.title : null,
        name: isEmpty(name) ? errorMessages.name : null,
        note: isEmpty(note) ? errorMessages.note : null,
      },
    }));

    if (!isEmpty(name) && !isEmpty(note)) {
      setValue((prevState) => ({
        fields: {
          title: prevState.fields.title,
          name: '',
          note: '',
        },
        notes: [
          {
            noteTitle: name,
            noteContent: note,
          },
          ...prevState.notes,
        ],
      }));
    }
  }, [name, note, title]);
  const handleView = useCallback(() => {}, []);
  const handleSave = useCallback(() => {}, []);
  const handleDelete = useCallback(() => {}, []);

  const handleOnChangeNotes = useCallback(() => {}, []);

  console.log(notesError);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.fields}>
          <div className={styles.titleField}>
            <TextInput errorMessage={notesError.title} name="title" handleOnChange={handleOnChange} value={title} label="Notepad title" placeholder="My notepad title..." />
          </div>
          <div className={styles.fieldsHolder}>
            <NoteTitle text="My Notes" />
            <TextInput errorMessage={notesError.name} name="name" handleOnChange={handleOnChange} value={name} placeholder="My notepad title..." />
            <Textarea errorMessage={notesError.note} name="note" handleOnChange={handleOnChange} value={note} placeholder="Placeholder" />
          </div>
          <div className={styles.buttonHolder}>
            <Button handleOnClick={handleAdd} label="Add" type="green" />
          </div>

          {!!notes.length && notes.map(({ noteTitle, noteContent }, index) => (
            <div key={`${noteTitle}-${index}`}>
              <TextInput name="name" handleOnChange={handleOnChangeNotes} value={noteTitle} placeholder="My notepad title..." />
              <Textarea name="note" handleOnChange={handleOnChangeNotes} value={noteContent} placeholder="Placeholder" />
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <NoteActions view={handleView} save={handleSave} delete={handleDelete} />
        </div>
      </div>
    </Layout>
  );
}

export default Create;
