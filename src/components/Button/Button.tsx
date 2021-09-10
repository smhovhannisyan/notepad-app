import classNames from 'classnames';

import styles from './button.module.css';

type ButtonPropsType = {
  handleOnClick?: () => void;
  type?: 'default' | 'green' | 'blue' | 'red';
};

function Button({ type = 'default', handleOnClick }: ButtonPropsType) {
  const btnStyle = classNames({
    [styles.button]: true,
    [styles[type]]: !!type,
  });

  return (
    <button onClick={handleOnClick} className={btnStyle} type="button">Button</button>
  );
}

export default Button;
