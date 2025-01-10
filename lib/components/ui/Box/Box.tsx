import { FC, HTMLProps } from "react";
import { classes, getOrientationClass, getBoxSpacingClass } from "../../../shared/functions";

interface TBox extends HTMLProps<HTMLDivElement> {
    orientation?: 'row' | 'col';
    spacing?: 'large' | 'medium' | 'small';
}

const Box: FC<TBox> = ({ orientation = 'col', spacing = 'medium', children, className, ...props }) => {
    return <div className={classes('UI_Box', getOrientationClass(orientation), getBoxSpacingClass(spacing), className)} { ...props }>{children}</div>
}

export default Box