import { FC, TextareaHTMLAttributes } from 'react';
import { classes } from '../../../shared/functions';

export interface TTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: FC<TTextArea> = ({ className, children, ...props }) => {
    return <textarea className={classes('UI_TextArea', className)} { ...props }>{ children }</textarea>
}

export default TextArea