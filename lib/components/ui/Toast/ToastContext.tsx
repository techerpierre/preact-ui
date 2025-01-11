import { createContext, FC, ReactNode, useState } from 'react'
import { TToast } from './Toast'

interface TToastContext {
    toasts: TToast[];
    addToast: (toast: Omit<TToast, 'id'>) => void;
    removeToast: (id: string) => void;
}

export const ToastContext = createContext<TToastContext>({} as TToastContext);

const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [toasts, setToasts] = useState<TToast[]>([]);
    const addToast = ({ message, content, type }: Omit<TToast, 'id'>) => {
        setToasts((prev) => {
            if (prev.length >= 3) {
                removeToast(prev[0].id);
            }
            return [...prev, {
                id: crypto.randomUUID(),
                message,
                content,
                type,
            }];
        });
    }
    const removeToast = (id: string) => {
        setToasts((prev) => {
            const current = prev.filter((toast) => toast.id !== id);
            return [ ...current ];
        });
    }

    return <ToastContext.Provider
        value={{
            toasts,
            addToast,
            removeToast,
        }}
    >
        { children }
    </ToastContext.Provider>
}

export default ToastProvider