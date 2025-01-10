import { ButtonHTMLAttributes, forwardRef } from 'react'
import { classes, getButtonVariantClass } from '../../../shared/functions'

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'success' | 'danger' | 'shadow';
    fit?: boolean;
}

const Button = forwardRef<HTMLButtonElement, TButton>(({ variant, fit, className, children, ...props }, ref) => {
    return <button ref={ref} className={classes('UI_Button', fit ? 'UI_fit' : null, getButtonVariantClass(variant), className)} {...props}>{ children }</button>
});

export default Button; 