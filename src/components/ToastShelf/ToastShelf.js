import { useContext } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../Toast/ToastProvider';

function ToastShelf() {
  const { toasts, dismissToast } = useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification">
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} message={message} onDismiss={() => dismissToast(id)}>Example notice toast</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
