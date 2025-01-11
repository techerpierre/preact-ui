import { FC, useContext } from 'react'
import ReactDOM from 'react-dom'
import Toast from './Toast'
import { ToastContext } from './ToastContext'
import Box from '../Box/Box'
import { getToastContainer } from '../../../shared/functions'

const ToastContainer: FC = () => {
    const { toasts } = useContext(ToastContext);

    return ReactDOM.createPortal(
        <Box className='UI_Toast__wrapper'>
            { toasts.map((toast) => {
                return (
                    <Toast
                        key={toast.id}
                        id={toast.id}
                        type={toast.type}
                        message={toast.message}
                        content={toast.content}
                    />
                )
            }) }
        </Box>,
        getToastContainer(),
    );
}

export default ToastContainer