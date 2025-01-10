import { createContext, FC, ReactNode } from "react";
import useCalendar, { TUseCalendarResult } from "../../../hooks/useCalendar";

interface TCalendarProvider {
    defaultDate: Date;
    children: ReactNode;
}

export const CalendarContext = createContext<TUseCalendarResult>({} as TUseCalendarResult);

const CalendarProvider: FC<TCalendarProvider> = ({ defaultDate, children }) => {

    const calendar = useCalendar(defaultDate);

    return (
        <CalendarContext.Provider
            value={calendar}
        >
            { children }
        </CalendarContext.Provider>
    );
}

export default CalendarProvider;