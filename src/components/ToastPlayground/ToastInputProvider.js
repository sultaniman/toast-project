import { createContext, useState, useCallback } from "react";

export const ToastInputContext = createContext();

export default function ToastInputProvider({ children }) {
    const [variant, setVariant] = useState('notice');
    const [message, setMessage] = useState('');
    const variantSelected = useCallback((variant) => {
      setVariant(variant);
    }, []);

    const messageUpdated = useCallback((msg) => {
      setMessage(msg);
    }, []);

    return (
        <ToastInputContext.Provider value={{ variant, message, variantSelected, messageUpdated }}>
            {children}
        </ToastInputContext.Provider>
    );
}
