import React, { useCallback, useContext, useState } from 'react';

import Button from '../Button';
import ToastVariants from '../Toast/ToastVariants';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { ToastContext, createToast } from '../Toast/ToastProvider';
import { ToastInputContext } from './ToastInputProvider';

function ToastPlayground() {
  const { addToast } = useContext(ToastContext);
  const { variant, message, variantSelected, messageUpdated } = useContext(ToastInputContext)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

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
            <textarea id="message" value={message} onChange={(event) => messageUpdated(event.target.value)} className={styles.messageInput} />
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
            <Button onClick={() => {
              const newToast = createToast(variant, message);
              addToast(newToast);
            }}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
