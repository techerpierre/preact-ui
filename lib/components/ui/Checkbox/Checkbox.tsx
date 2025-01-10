import { forwardRef, InputHTMLAttributes } from 'react';
import { classes } from '../../../shared/functions';

interface TCheckbox extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const Checkbox = forwardRef<HTMLInputElement, TCheckbox>(({ className, ...props }, ref) => {
    return <div className='UI_Checkbox__wrapper'>
        <input ref={ref} type="checkbox" className={classes('UI_Checkbox', className)} { ...props }/>
        <span className='UI_Checkbox__indicator'></span>
    </div>
});

export default Checkbox