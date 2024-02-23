import styles from './styles.module.scss';

type Properties = {
  onOpenModal: () => void;
};

const AddTripCard: React.FC<Properties> = ({ onOpenModal }) => {
  return (
    <div onClick={onOpenModal} className={styles.card}>
      <p className={styles.plus}>+</p>
      <p>Add trip</p>
    </div>
  );
};

export default AddTripCard;
