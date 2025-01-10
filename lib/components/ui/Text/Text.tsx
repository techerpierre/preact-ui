import { FC, forwardRef, HTMLProps } from 'react'
import { classes, getTextSizeClass } from '../../../shared/functions'

interface TAllText {
    fit?: boolean;
}
interface TH1 extends HTMLProps<HTMLHeadingElement>, TAllText {}
interface TH2 extends HTMLProps<HTMLHeadingElement>, TAllText {}
interface TH3 extends HTMLProps<HTMLHeadingElement>, TAllText {}
interface TP extends Omit<HTMLProps<HTMLParagraphElement>, 'size'>, TAllText {
    size?: "large" | "regular" | "small";
}
interface TSmall extends HTMLProps<HTMLElement> {}

const H1: FC<TH1> = forwardRef(({ className, fit, children }, ref) => {
    return <h1 ref={ref} className={classes('UI_H1', fit ? 'UI_fit' : null, className)}>{ children }</h1>
});

const H2: FC<TH2> = forwardRef(({ className, fit, children }, ref) => {
    return <h2 ref={ref} className={classes('UI_H2', fit ? 'UI_fit' : null, className)}>{ children }</h2>
});

const H3: FC<TH3> = forwardRef(({ className, fit, children }, ref) => {
    return <h3 ref={ref} className={classes('UI_H3', fit ? 'UI_fit' : null, className)}>{ children }</h3>
});

const P: FC<TP> = forwardRef(({ size = 'regular', fit, className, children }, ref) => {
    return <p ref={ref} className={classes('UI_P', fit ? 'UI_fit' : null, getTextSizeClass(size), className)}>{ children }</p>
});

const Small: FC<TSmall> = forwardRef(({ className, children }, ref) => {
    return <small ref={ref} className={classes('UI_Small', className)}>{ children }</small>
});

export { H1, H2, H3, P, Small }