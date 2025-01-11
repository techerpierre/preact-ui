import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { getDateData, getWeeksInfos, TUseCalendarWeekInfo } from '../shared/functions'

export interface TUseCalendarResult {
    weeks: TUseCalendarWeekInfo[];
    month: {
        name: string;
    }
    year: number;
    currentDate: Date;
    setCurrentDate: Dispatch<SetStateAction<Date>>;
    setCurrentMonth: Dispatch<SetStateAction<number>>;
    resetDate: () => void;
}

export default function useCalendar(defaultDate: Date): TUseCalendarResult {
    const [currentDate, setCurrentDate] = useState(defaultDate);
    const defaultMonth = useMemo(() => defaultDate.getMonth(), [defaultDate]);
    const [currentMonth, setCurrentMonth] = useState(defaultMonth);
    const calendar = getDateData(new Date(currentDate.getFullYear(), currentMonth));
    const weeks = getWeeksInfos(calendar, currentDate);

    return {
        weeks,
        month: {
            name: calendar.month.name,
        },
        year: calendar.year,
        currentDate,
        setCurrentDate,
        setCurrentMonth,
        resetDate: () => {
            setCurrentDate(defaultDate);
            setCurrentMonth(defaultMonth);
        },
    };
}