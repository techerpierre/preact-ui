import { Dispatch, SetStateAction, useState } from 'react';
import { getDateData, getWeeksInfos, TUseCalendarWeekInfo } from '../shared/functions'

export interface TUseCalendarResult {
    weeks: TUseCalendarWeekInfo[];
    month: {
        name: string;
    }
    year: number;
    setCurrentDate: Dispatch<SetStateAction<Date>>;
    setCurrentMonth: Dispatch<SetStateAction<number>>;
}

export default function useCalendar(defaultDate: Date): TUseCalendarResult {
    const [currentDate, setCurrentDate] = useState(defaultDate);
    const [currentMonth, setCurrentMonth] = useState(defaultDate.getMonth());
    const calendar = getDateData(new Date(currentDate.getFullYear(), currentMonth));
    const weeks = getWeeksInfos(calendar, currentDate);

    return {
        weeks,
        month: {
            name: calendar.month.name,
        },
        year: calendar.year,
        setCurrentDate,
        setCurrentMonth,
    }
}