import { FC } from "react";

interface TChevronRight {
    scale?: number;
}

const ChevronLeft: FC<TChevronRight> = ({ scale = 1 }) => {
    const size = `${24 * scale}`; 
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 24 24`}
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="m15 18-6-6 6-6"/>
    </svg>
}

export default ChevronLeft