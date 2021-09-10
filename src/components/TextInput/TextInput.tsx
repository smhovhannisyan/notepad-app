import { ChangeEvent } from 'react';
import classnames from 'classnames';

import ErrorMessage from 'components/ErrorMessage';

import styles from './textInput.module.css';

type TextInputPropsType = {
  name: string;
  value?: string;
  placeholder?: string;
  label?: string
  className?: string;
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string | null;
}

function TextInput({
  name,
  value: _value = '',
  placeholder,
  label,
  className = '',
  handleOnChange,
  errorMessage,
}: TextInputPropsType) {
  const holderClassNames = classnames(className, { [styles.textInputHolder]: true });

  return (
    <div className={holderClassNames}>
      <label className={styles.label}>
        {label && <span className={styles.labelText}>{label}</span>}
        <input
          onChange={handleOnChange}
          name={name}
          className={styles.input}
          value={_value}
          placeholder={placeholder}
          type="text"
        />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </label>
    </div>
  );
}

export default TextInput;
