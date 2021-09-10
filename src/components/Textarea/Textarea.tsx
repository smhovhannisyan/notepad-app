import { useState, useCallback } from 'react';
import classnames from 'classnames';

import styles from './textarea.module.css';

type TextareaPropsType = {
  value?: string;
  placeholder?: string;
  label?: string;
  className?: string;
}

function Textarea({
  value: _value = '',
  placeholder,
  label,
  className = '',
}: TextareaPropsType) {
  const [value, setValue] = useState<string>(_value);

  const handleOnChange = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  const holderClassNames = classnames(className, { [styles.textareaHolder]: true });

  return (
    <div className={holderClassNames}>
      <label className={styles.label}>
        {label && <span className={styles.labelText}>{label}</span>}
        <textarea
          onChange={handleOnChange}
          className={styles.textarea}
          value={value}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

export default Textarea;
