import { MutableRefObject } from 'react';
import useEventListener from './useEventListener';

export default function useClickOutside<T extends HTMLElement>(ref: MutableRefObject<T | null>, callback: (target: T) => void) {
    useEventListener<MouseEvent>('mousedown', (event) => {
        if (ref.current && event.target === ref.current) {
            callback(ref.current);
        }
    });
}