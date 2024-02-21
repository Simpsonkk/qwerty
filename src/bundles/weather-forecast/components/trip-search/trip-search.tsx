import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

const TripSearch: React.FC = () => {
  return (
    <>
      <h2 className={styles.title}>
        Weather <b>Forecast</b>
      </h2>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faMagnifyingGlass}
          size="lg"
        />
        <input className={styles.input} placeholder="Search your trip" />
      </div>
    </>
  );
};

export default TripSearch;
