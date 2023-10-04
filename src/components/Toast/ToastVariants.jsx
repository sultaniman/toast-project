import { useState } from 'react';
import styles from '../ToastPlayground/ToastPlayground.module.css';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export default function ToastVariants({ defaultVariant='notice', variantSelectedCallback, ...props }) {
    const variants = VARIANT_OPTIONS.map((vari) => {
        return { id: crypto.randomUUID(), variant: vari };
    });
    const [variant, setVariant] = useState(defaultVariant);

    return (
        <>
            <div className={styles.label}>Variant</div>
            <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
                {variants.map(
                    value => (
                        <label key={value.id} htmlFor={value.id}>
                            <input
                                id={value.id}
                                type="radio"
                                name="variant"
                                checked={variant == value.variant}
                                value={value.variant}
                                onChange={(event)=> {
                                    variantSelectedCallback(event.target.value);
                                    setVariant(event.target.value);
                                }}
                            />
                            {value.variant}
                        </label>
                    )
                )}

                {/* TODO Other Variant radio buttons here */}
            </div>
        </>
    );
}
