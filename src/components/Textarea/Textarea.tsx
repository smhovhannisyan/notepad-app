import { useState, useCallback } from 'react';

import styles from './textarea.module.css';

type TextareaPropsType = {
  value: string;
  placeholder?: string;
  label?: string
}

function Textarea({ value: _value, placeholder, label }: TextareaPropsType) {
  const [value, setValue] = useState<string>(_value);

  const handleOnChange = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  return (
    <label className={styles.label}>
      <span className={styles.labelText}>{label}</span>
      <textarea
        onChange={handleOnChange}
        className={styles.textarea}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Textarea;
