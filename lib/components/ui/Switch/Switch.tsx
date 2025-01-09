import { FC, InputHTMLAttributes } from 'react';
import { classes } from '../../../shared/functions';

interface TSwitch extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const Checkbox: FC<TSwitch> = ({ className, ...props }) => {
    return <div className='UI_Switch__wrapper'>
        <input type='checkbox' className={classes('UI_Switch', className)} { ...props }/>
        <span className='UI_Switch__indicator'></span>
    </div>
}

export default Checkbox