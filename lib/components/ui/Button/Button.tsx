import { ButtonHTMLAttributes, FC } from 'react'
import { classes } from '../../../shared/functions'

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'success' | 'danger' | 'shadow';
    fit?: boolean;
}

const Button: FC<TButton> = ({ variant, fit, className, children, ...props }) => {
    return <button className={classes('UI_Button', fit ? 'UI_fit' : null, variant, className)} {...props}>{ children }</button>
}

export default Button; 