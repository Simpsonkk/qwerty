import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type MouseEvent, type ReactElement } from 'react';

import styles from './styles.module.scss';

type Properties = {
  title: string;
  onClose: () => void;
  children: ReactElement;
  isActive: boolean;
  footerChildren: ReactElement;
};

const CreateTripModal: React.FC<Properties> = ({
  isActive,
  onClose,
  title,
  children,
  footerChildren,
}) => {
  if (!isActive) {
    return null;
  }

  const handleModalClick = (event: MouseEvent<HTMLDivElement>): void =>
    event.stopPropagation();

  return (
    <div className={styles.backDrop} onClick={onClose}>
      <div className={styles.wrapper} onClick={handleModalClick}>
        <div className={styles.header}>
          <button className={styles.closeButton} onClick={onClose}>
            <FontAwesomeIcon className={styles.icon} icon={faXmark} size="lg" />
          </button>
          <h4 className={styles.headerTitle}>{title}</h4>
        </div>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>{footerChildren}</div>
      </div>
    </div>
  );
};

export default CreateTripModal;
