import { useCallback } from 'react';

import TextInput from 'components/TextInput';
import Textarea from 'components/Textarea';
import Layout from 'components/Layout';
import Button from 'components/Button';
import NoteTitle from 'components/NoteTitle';

import styles from './create.module.css';

function Create() {
  const handleBtnClick = useCallback(() => {
    // console.log('abc');
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.fields}>
          <div className={styles.titleField}>
            <TextInput label="Notepad title" placeholder="My notepad title..." />
          </div>
          <div className={styles.fieldsHolder}>
            <NoteTitle text="My Notes" />
            <TextInput placeholder="My notepad title..." />
            <Textarea placeholder="Placeholder" />
          </div>
          <div className={styles.buttonHolder}>
            <Button label="Add" type="green" />
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.actionsHolder}>
            <Button label="View State" type="default" />
            <Button label="Save" type="blue" />
            <Button label="Delete" type="red" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Create;
