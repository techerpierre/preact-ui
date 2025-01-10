import { FC, useContext } from 'react'
import Box from '../Box/Box'
import Button from '../Button/Button'
import { P } from '../Text/Text'
import { CalendarContext } from './CalendarContext'
import ChevronRight from '../Icons/ChevronRight'
import ChevronLeft from '../Icons/ChevronLeft'

const CalendarHeader: FC = () => {
    const { month, year, setCurrentMonth } = useContext(CalendarContext);

    return <Box orientation='row' spacing='small' className='UI_Calendar__header'>
        <Button
            variant='shadow'
            onClick={() => setCurrentMonth(prev => prev - 1)}
            className='UI_Calendar__button'
        ><ChevronLeft scale={.75}/></Button>
        <P>{ month.name } - { year }</P>
        <Button
            variant='shadow'
            onClick={() => setCurrentMonth(prev => prev + 1)}
            className='UI_Calendar__button'
        ><ChevronRight scale={.75}/></Button>
    </Box>
}

export default CalendarHeader