import { forwardRef, InputHTMLAttributes } from "react";
import { classes } from "../../../shared/functions";

export interface TTextInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    type: 'text' | 'search' | 'password' | 'email';
}

const TextInput = forwardRef<HTMLInputElement, TTextInput>(({ type, className, ...props }, ref) => {
    return <input ref={ref} type={type} className={classes('UI_TextInput', className)} { ...props }/>
});

export default TextInput