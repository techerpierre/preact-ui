import { FC, useContext } from 'react';
import Button from '../Button/Button'
import { CalendarContext } from './CalendarContext';

interface TCalendarValidation {
    value: string;
    onValidate?: (date: Date) => void;
}

const CalendarValidation: FC<TCalendarValidation> = ({ value, onValidate }) => {
    const { currentDate } = useContext(CalendarContext);
    return <>
        <Button onClick={() => onValidate?.(currentDate)}>{ value }</Button>
    </>
}

export default CalendarValidation