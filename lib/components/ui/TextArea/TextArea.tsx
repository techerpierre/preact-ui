import { forwardRef, TextareaHTMLAttributes } from 'react';
import { classes } from '../../../shared/functions';

export interface TTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    unresizable?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TTextArea>(({ unresizable, className, children, ...props }, ref) => {
    return <textarea ref={ref} className={classes('UI_TextArea', unresizable ? 'unresizable' : null, className)} { ...props }>{ children }</textarea>
});

export default TextArea