import css from './Button.module.css';

export const Button = ({ text, onLoadMore }) => {
  return (
    <button className={css.button} onClick={onLoadMore} type="button">
      {text}
    </button>
  );
};
