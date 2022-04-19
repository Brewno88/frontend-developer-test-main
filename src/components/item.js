import styles from './item.module.css';

const Item = ({ item, removeTodo, completeTodo, index }) => {
  const { text, isCompleted } = item;

  return (
    <div
      className={styles.item}
      style={{ textDecoration: isCompleted ? 'line-through' : '' }}
    >
      <span>{text}</span>
      <div className={styles.actions}>
        <button className={styles.button} onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button className={styles.button} onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Item;
