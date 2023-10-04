import React, { useCallback, useEffect, useState } from 'react';

import Button from '../Button';
import ToastVariants from '../Toast/ToastVariants';
import styles from './ToastPlayground.module.css';
import Toast from '../Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = useState('notice');
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const variantSelected = useCallback((variant) => {
    console.log("Variant", variant);
    setVariant(variant);
  }, []);
  const dismissToast = useCallback((_) => {
    console.log("Hide demo toast");
    setShowToast(false);
  }, []);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && <Toast variant={variant} message={message} />}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <ToastVariants variantSelectedCallback={variantSelected} />
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setShowToast(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
