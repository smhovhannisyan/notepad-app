import classNames from 'classnames';

import styles from './button.module.css';

type ButtonPropsType = {
  handleOnClick?: () => void;
  type?: 'default' | 'green' | 'blue' | 'red';
  label: string;
};

function Button({ label, type = 'default', handleOnClick }: ButtonPropsType) {
  const btnStyle = classNames({
    [styles.button]: true,
    [styles[type]]: !!type,
  });

  return (
    <button onClick={handleOnClick} className={btnStyle} type="button">{label}</button>
  );
}

export default Button;
