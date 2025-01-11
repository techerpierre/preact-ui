import { MOBILE_USER_AGENTS } from './constants'

export function classes(...values: (string | null | undefined)[]): string {
    return values.reduce((acc, cur) => cur ? (acc ? acc : '') + ' ' + cur.trim() : acc, null)?.trim() || '';
}

export function getOrientationClass(orientation: 'row' | 'col'): string {
    switch(orientation) {
        case 'row': return 'UI_Row';
        case 'col': return 'UI_Col';
    }
}

export function getCardSpacingClass(spacing: 'large' | 'medium' | 'small'): string {
    switch(spacing) {
        case 'large': return 'UI_Card-large';
        case 'medium': return 'UI_Card-medium';
        case 'small': return 'UI_Card-small';
    }
}

export function getBoxSpacingClass(spacing: 'large' | 'medium' | 'small'): string {
    switch(spacing) {
        case 'large': return 'UI_Box-large';
        case 'medium': return 'UI_Box-medium';
        case 'small': return 'UI_Box-small';
    }
}

export function getTextSizeClass(spacing: 'large' | 'regular' | 'small'): string {
    switch(spacing) {
        case 'large': return 'UI_Text_Large';
        case 'regular': return 'UI_Text_Regular';
        case 'small': return 'UI_Text_Small';
    }
}

export function getMapKey(subfix?: string): string {
    return `${Date.now()}-${Math.random()}-${subfix || 'a'}`;
}

export function createContainer(id: string) {
    const body = document.querySelector('body');
    const modalContainer = document.createElement('div');
    modalContainer.id = id;
    body?.appendChild(modalContainer);
}

export function getModalContainer() {
    const modalContainer = document.getElementById('UIModalContainer');
    if (!modalContainer) {
        createContainer('UIModalContainer');
    }
    return document.getElementById('UIModalContainer') as HTMLDivElement;
}

export function getMonthName(date: Date): string {
    return date.toLocaleString('default', { month: 'long' });
}

export interface TGetDateDataResult {
    weeks: number;
    month: {
        index: number;
        name: string;
    };
    padsInWeeks: {
        first: number;
        last: number;
    };
    year: number;
    days: {
        count: number;
        prevCount: number;
    };
    dayInWeek: (weekIndex: number) => number;
}

export function getDateData(date: Date): TGetDateDataResult {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;
    const daysInMonth = lastDayOfMonth.getDate();
    const totalDays = startDayOfWeek + daysInMonth;
    const padEnd = (7 - (totalDays % 7)) % 7;
    const weeks = Math.ceil((daysInMonth + startDayOfWeek + padEnd) / 7);
    const daysInLastMonth = new Date(year, month, 0).getDate();

    const dayInWeek = (weekIndex: number): number => {
        return (
            7 -
            (weekIndex === 0 ? startDayOfWeek : 0) -
            (weekIndex === weeks - 1 ? padEnd : 0)
        );
    };

    return {
        weeks,
        month: {
            index: month,
            name: getMonthName(date),
        },
        padsInWeeks: {
            first: startDayOfWeek,
            last: padEnd,
        },
        year,
        days: {
            count: daysInMonth,
            prevCount: daysInLastMonth,
        },
        dayInWeek,
    };
}

export interface TUseCalendarWeekInfo {
    index: number;
    padStart: number | null;
    padEnd: number | null;
    days: {
        index: number;
        date: Date;
        day: number;
        disabled: boolean;
        selected: boolean;
    }[];
}

export function getWeeksInfos(calendar: TGetDateDataResult, currentDate: Date): TUseCalendarWeekInfo[] {
    currentDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
    return Array.from({ length: calendar.weeks }).map((_, weekIndex) => {
        const isFirstWeek = weekIndex === 0;
        const isLastWeek = weekIndex === calendar.weeks - 1;

        return {
            index: weekIndex,
            padStart: isFirstWeek ? calendar.padsInWeeks.first : null,
            padEnd: isLastWeek ? calendar.padsInWeeks.last : null,
            days: Array.from({ length: 7 }).map((_, dayIndex) => {
                const index = 7 * weekIndex + dayIndex;
                const dayOffset = (7 * weekIndex) + dayIndex - calendar.padsInWeeks.first;
                const date = new Date(Date.UTC(calendar.year, calendar.month.index, dayOffset + 1));
                const isBeforeMonth = dayOffset < 0;
                const isAfterMonth = dayOffset >= calendar.days.count;
                const disabled = isBeforeMonth || isAfterMonth;
                const selected = date.getTime() === currentDate.getTime();

                return {
                    index,
                    date,
                    day: date.getDate(),
                    disabled,
                    selected,
                };
            }),
        };
    });
}

export function formatDateForDateInput(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function isMobileDevice(): boolean {
    return MOBILE_USER_AGENTS.test(
        navigator.userAgent
    );
};

export function getToastContainer() {
    const toastContainer = document.getElementById('UIToastContainer');
    if (!toastContainer) {
        createContainer('UIToastContainer');
    }
    return document.getElementById('UIToastContainer') as HTMLDivElement;
}