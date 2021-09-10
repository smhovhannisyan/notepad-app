import { useState, useCallback } from 'react';

import styles from './textInput.module.css';

type TextInputPropsType = {
  value: string;
  placeholder?: string;
  label?: string
}

function TextInput({ value: _value, placeholder, label }: TextInputPropsType) {
  const [value, setValue] = useState<string>(_value);

  const handleOnChange = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  return (
    <label className={styles.label}>
      <span className={styles.labelText}>{label}</span>
      <input
        onChange={handleOnChange}
        className={styles.input}
        type="text"
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
}

export default TextInput;
