import { FC, useContext } from 'react';
import { getMapKey } from '../../../shared/functions'
import Box from '../Box/Box'
import Button from '../Button/Button'
import { CalendarContext } from './CalendarContext'

const CalendarContent: FC = () => {
    const { weeks, setCurrentDate } = useContext(CalendarContext);

    return (
        <>
            { weeks.map(week => (
                <Box key={getMapKey(week.index.toString())} orientation='row' spacing='small'>
                    { week.days.map(day => (
                        <Button
                            key={getMapKey(day.index.toString())}
                            disabled={day.disabled}
                            variant={!day.selected ? 'shadow' : undefined}
                            onClick={() => setCurrentDate(day.date)}
                            className='UI_Calendar__button'
                        >{ day.day }</Button>
                    )) }
                </Box>
            )) }
        </>
    )
}

export default CalendarContent