import { useEffect } from 'react';

export default function usePreventScroll(isDisabled: boolean) {
    useEffect(() => {
        const preventScroll = (e: Event) => {
            e.preventDefault();
        };

        if (isDisabled) {
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, { passive: false });
        } else {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        }

        return () => {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        };
    }, [isDisabled]);
};