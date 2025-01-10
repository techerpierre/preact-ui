import ReactDOM from 'react-dom';
import { FC, ReactNode, useRef } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import usePreventScroll from '../../../hooks/usePreventScroll';
import { getModalContainer } from '../../../shared/functions';

interface TModal {
    open: boolean;
    onClose: Function;
    children?: ReactNode;
}

const Modal: FC<TModal> = ({ open, onClose, children }) => {
    const modalRef = useRef(null);

    useClickOutside(modalRef, () => {
        onClose();
    });

    usePreventScroll(open);

    if (!open) return null;

    return ReactDOM.createPortal(
        <div ref={modalRef} className='UI_Modal'>
            <div className='UI_Modal__wrapper'>
                { children }
            </div>
        </div>,
        getModalContainer()
    );
}

export default Modal