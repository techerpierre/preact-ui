import { forwardRef, HTMLProps } from 'react'
import { classes } from '../../../shared/functions'
import Card from '../Card/Card'
import CalendarProvider from './CalendarContext'
import CalendateContent from './CalendarContent'
import CalendarHeader from './CalendarHeader'
import CalendarValidation from './CalendarValidation'

interface TCalendar extends HTMLProps<HTMLDivElement> {
    defaultDate?: Date;
    validateValue?: string;
    onValidate?: (date: Date) => void;
}

const Calendar = forwardRef<HTMLDivElement, TCalendar>(({ defaultDate = new Date(), validateValue = 'Validate', onValidate, className, ...props }, ref) => {
    return <CalendarProvider defaultDate={defaultDate}>
        <Card ref={ref} className={classes('UI_Calendar', className)} { ...props }>
            <CalendarHeader/>
            <CalendateContent/>
            <CalendarValidation value={validateValue} onValidate={onValidate}/>
        </Card>
    </CalendarProvider>
});

export default Calendar