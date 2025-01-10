import { forwardRef, HTMLProps } from 'react'
import { classes } from '../../../shared/functions'
import Card from '../Card/Card'
import CalendarProvider from './CalendarContext'
import CalendateContent from './CalendarContent'
import CalendarHeader from './CalendarHeader'

interface TCalendar extends HTMLProps<HTMLDivElement> {
    currentDate?: Date;
}

const Calendar = forwardRef<HTMLDivElement, TCalendar>(({ currentDate = new Date(), className, ...props }, ref) => {
    return <CalendarProvider defaultDate={currentDate}>
        <Card ref={ref} className={classes('UI_Calendar', className)} { ...props }>
            <CalendarHeader/>
            <CalendateContent/>
        </Card>
    </CalendarProvider>
});

export default Calendar