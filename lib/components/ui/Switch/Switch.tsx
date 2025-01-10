import { forwardRef, InputHTMLAttributes } from 'react';
import { classes } from '../../../shared/functions';

interface TSwitch extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const Checkbox = forwardRef<HTMLInputElement, TSwitch>(({ className, ...props }, ref) => {
    return <div className='UI_Switch__wrapper'>
        <input ref={ref} type='checkbox' className={classes('UI_Switch', className)} { ...props }/>
        <span className='UI_Switch__indicator'></span>
    </div>
});

export default Checkbox