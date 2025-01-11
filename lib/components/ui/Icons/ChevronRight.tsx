import { FC } from "react";

interface TChevronRight {
    scale?: number;
}

const ChevronRight: FC<TChevronRight> = ({ scale = 1 }) => {
    const size = `${24 * scale}`; 
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m9 18 6-6-6-6"/>
    </svg>
}

export default ChevronRight