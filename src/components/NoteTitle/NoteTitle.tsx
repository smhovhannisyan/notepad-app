import styles from './noteTitle.module.css';

type NoteTitlePropsType = {
  text: string;
};

function NoteTitle({ text }: NoteTitlePropsType) {
  return (
    <h2 className={styles.title}>{text}</h2>
  );
}

export default NoteTitle;
