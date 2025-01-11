import { ButtonHTMLAttributes, forwardRef } from 'react'
import { classes } from '../../../shared/functions'

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'success' | 'error' | 'shadow' | 'warning';
    fit?: boolean;
}

const Button = forwardRef<HTMLButtonElement, TButton>(({ variant, fit, className, children, ...props }, ref) => {
    return <button ref={ref} className={classes('UI_Button', fit ? 'UI_fit' : null, variant ? `UI_Button-${variant}` : null, className)} {...props}>{ children }</button>
});

export default Button; 