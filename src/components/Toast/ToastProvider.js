import { createContext, useState, useCallback } from "react";

export const ToastContext = createContext();

export const createToast = (variant, message) => {
    return {
        id: crypto.randomUUID(),
        variant,
        message,
    }
}

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export default function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((newToast) => {
        setToasts(state => {
            newToast.variant = VARIANT_OPTIONS.find((variant) => variant === newToast.variant) || 'notice';
            return [...state, newToast]
        });
    }, []);

    const dismissToast = useCallback((id) => {
        setToasts(state => {
            const toastIndex = state.findIndex(item => item.id === id);
            if (toastIndex >= 0) {
                const newState = [...state];
                newState.splice(toastIndex, 1);
                return newState;
            }
            return state;
        });
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
            {children}
        </ToastContext.Provider>
    );
}
