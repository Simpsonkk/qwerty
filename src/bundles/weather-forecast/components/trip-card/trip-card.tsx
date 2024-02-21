import styles from './styles.module.scss';

const TripCard: React.FC = () => {
  return (
    <li className={styles.card}>
      <img
        className={styles.image}
        src="src/assets/images/cities/kharkiv.jpg"
        alt=""
      />
      <div className={styles.textWrapper}>
        <b>Kharkiv</b>
        <p className={styles.date}>17.03.2023 - 23.07.2023</p>
      </div>
    </li>
  );
};

export default TripCard;
