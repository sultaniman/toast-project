import { useEffect } from "react";

export default function useEscapeKey(callback) {
    useEffect(() => {
        function escapeHandler(event) {
            if (event.code === 'Escape') {
                callback();
            }
        }

        addEventListener('keyup', escapeHandler);
        return () => {
            removeEventListener('keyup', escapeHandler);
        }
    }, []);
}