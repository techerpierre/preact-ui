import { FC, TextareaHTMLAttributes } from 'react';
import { classes } from '../../../shared/functions';

export interface TTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    unresizable?: boolean;
}

const TextArea: FC<TTextArea> = ({ unresizable, className, children, ...props }) => {
    return <textarea className={classes('UI_TextArea', unresizable ? 'unresizable' : null, className)} { ...props }>{ children }</textarea>
}

export default TextArea