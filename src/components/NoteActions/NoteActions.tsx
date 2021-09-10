import Button from 'components/Button';

import styles from './noteActions.module.css';

type NoteActionsPropsType = {
  view?: () => void;
  save?: () => void;
  delete?: () => void;
}

function NoteActions({ view, save, delete: _delete }: NoteActionsPropsType) {
  if (!view && !save && !_delete) {
    return null;
  }
  return (
    <div className={styles.actionsHolder}>
      {view && <Button handleOnClick={view} label="View State" type="default" />}
      {save && <Button handleOnClick={save} label="Save" type="blue" />}
      {_delete && <Button handleOnClick={_delete} label="Delete" type="red" />}
    </div>
  );
}

export default NoteActions;
