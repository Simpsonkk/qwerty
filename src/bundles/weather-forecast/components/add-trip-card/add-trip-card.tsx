import styles from './styles.module.scss';

const AddTripCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <p className={styles.plus}>+</p>
      <p>Add trip</p>
    </div>
  );
};

export default AddTripCard;
