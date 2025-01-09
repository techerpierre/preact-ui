import { FC, HTMLProps } from 'react'
import { classes } from '../../../shared/functions'

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

const H1: FC<TH1> = ({ className, fit, children }) => {
    return <h1 className={classes('UI_H1', fit ? 'UI_fit' : null, className)}>{ children }</h1>
}

const H2: FC<TH2> = ({ className, fit, children }) => {
    return <h2 className={classes('UI_H2', fit ? 'UI_fit' : null, className)}>{ children }</h2>
}

const H3: FC<TH3> = ({ className, fit, children }) => {
    return <h3 className={classes('UI_H3', fit ? 'UI_fit' : null, className)}>{ children }</h3>
}

const P: FC<TP> = ({ size = 'regular', fit, className, children }) => {
    return <p className={classes('UI_P', fit ? 'UI_fit' : null, size, className)}>{ children }</p>
}

const Small: FC<TSmall> = ({ className, children }) => {
    return <small className={classes('UI_Small', className)}>{ children }</small>
}

export { H1, H2, H3, P, Small }