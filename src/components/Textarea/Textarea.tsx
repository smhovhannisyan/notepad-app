import { ChangeEvent } from 'react';
import classnames from 'classnames';

import ErrorMessage from 'components/ErrorMessage';

import styles from './textarea.module.css';

type TextareaPropsType = {
  name: string;
  value?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  handleOnChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string | null;
}

function Textarea({
  name,
  value: _value = '',
  placeholder,
  label,
  className = '',
  handleOnChange,
  errorMessage,
}: TextareaPropsType) {
  const holderClassNames = classnames(className, { [styles.textareaHolder]: true });

  return (
    <div className={holderClassNames}>
      <label className={styles.label}>
        {label && <span className={styles.labelText}>{label}</span>}
        <textarea
          onChange={handleOnChange}
          name={name}
          className={styles.textarea}
          value={_value}
          placeholder={placeholder}
        />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </label>
    </div>
  );
}

export default Textarea;
