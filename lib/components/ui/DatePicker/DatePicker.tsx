import { forwardRef, InputHTMLAttributes, MouseEventHandler, useRef, useState } from 'react'
import { classes, formatDateForDateInput, isMobileDevice } from '../../../shared/functions'
import Modal from '../Modal/Modal'
import Calendar from '../Calendar/Calendar';

interface TDatePicker extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {}

const DatePicker = forwardRef<HTMLInputElement, TDatePicker>(({ className, onClick, ...props }, ref) => {

    const [modalOpen, setModalOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const setRefs = (element: HTMLInputElement | null) => {
        inputRef.current = element;
        if (typeof ref === 'function') {
            ref(element);
        } else if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current = element;
        }
    };

    const onInputClick: MouseEventHandler<HTMLInputElement> = (event) => {
        setModalOpen(true);
        onClick?.(event);
    }

    const handleValidateDate = (date: Date) => {
        if (inputRef.current) {
            inputRef.current.value = formatDateForDateInput(date);
        }
        setModalOpen(false);
    }

    return <div className='UI_DatePicker__wrapper'>
        <input ref={setRefs} type='date' className={classes('UI_DatePicker', className)} onClick={onInputClick} readOnly { ...props }/>
        {
            !isMobileDevice() ? (
                <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                    <Calendar onValidate={handleValidateDate} defaultDate={inputRef.current?.value ? new Date(inputRef.current.value) : new Date()}/>
                </Modal>
            ) : null
        }
    </div>
});

export default DatePicker