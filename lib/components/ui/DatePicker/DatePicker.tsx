import { forwardRef, InputHTMLAttributes, MouseEventHandler, useState } from 'react'
import { classes } from '../../../shared/functions'
import TextInput from '../TextInput/TextInput'
import Modal from '../Modal/Modal'
import DatePickerModal from './DatePickerModal'

interface TDatePicker extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {}

const DatePicker = forwardRef<HTMLInputElement, TDatePicker>(({ className, onClick, ...props }, ref) => {

    const [modalOpen, setModalOpen] = useState(false);

    const onInputClick: MouseEventHandler<HTMLInputElement> = (event) => {
        setModalOpen(true);
        onClick?.(event);
    }

    return <div className='UI_DatePicker__wrapper'>
        <TextInput ref={ref} type='text' className={classes('UI_DatePicker', className)} onClick={onInputClick} readOnly { ...props }/>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <DatePickerModal/>
        </Modal>
    </div>
});

export default DatePicker