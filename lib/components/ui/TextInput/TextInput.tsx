import { FC, InputHTMLAttributes } from "react";
import { classes } from "../../../shared/functions";

export interface TTextInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    type: 'text' | 'search' | 'password' | 'email';
}

const TextInput: FC<TTextInput> = ({ type, className, ...props }) => {
    return <input type={type} className={classes('UI_TextInput', className)} { ...props }/>
}

export default TextInput