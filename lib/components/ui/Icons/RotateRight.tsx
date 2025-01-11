import { FC } from "react";

interface TChevronRight {
    scale?: number;
}

const RotateRight: FC<TChevronRight> = ({ scale = 1 }) => {
    const size = `${ 24 * scale }`;
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
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
        <path d="M21 3v5h-5"/>
    </svg>
}

export default RotateRight;