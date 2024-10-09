import styles from './style.module.css'
import { ModalOverlay } from '../_components/ModalOverlay'

const InterceptingLogin = () => {
  return (
    <div className={styles.modal}>
      <ModalOverlay />
      <div
        role="dialog"
        aria-modal="true"
        className={styles.dialog}
      >
        <div
          className={styles.photo}
        >
          Modal
        </div>
        <footer className={styles.footer}>
          Footer
        </footer>
      </div>
    </div>
  );
};

export default InterceptingLogin;