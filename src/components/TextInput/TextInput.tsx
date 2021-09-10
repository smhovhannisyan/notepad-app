import { useState, useCallback } from 'react';
import classnames from 'classnames';

import styles from './textInput.module.css';

type TextInputPropsType = {
  value?: string;
  placeholder?: string;
  label?: string
  className?: string;
}

function TextInput({
  value: _value = '',
  placeholder,
  label,
  className = '',
}: TextInputPropsType) {
  const [value, setValue] = useState<string>(_value);

  const handleOnChange = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  const holderClassNames = classnames(className, { [styles.textInputHolder]: true });

  return (
    <div className={holderClassNames}>
      <label className={styles.label}>
        {label && <span className={styles.labelText}>{label}</span>}
        <input
          onChange={handleOnChange}
          className={styles.input}
          type="text"
          value={value}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

export default TextInput;
