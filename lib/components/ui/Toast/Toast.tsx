import { FC, useContext, useEffect, useState } from 'react'
import Card from '../Card/Card'
import { P, Small } from '../Text/Text'
import { classes } from '../../../shared/functions';
import { ToastContext } from './ToastContext';

export interface TToast {
    id: string;
    message: string;
    content: string;
    type: 'success' | 'infos' | 'warning' | 'error';
}

const Toast: FC<TToast> = ({ id, message, content, type }) => {

    const { removeToast } = useContext(ToastContext);
    const [desapear, setDesapear] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setDesapear(true);
        }, 3000);
    
        const deletionTimeout = setTimeout(() => {
            removeToast(id);
        }, 3200);

        return () => {
            clearTimeout(animationTimeout);
            clearTimeout(deletionTimeout);
        }
    }, [])

    return <Card className={classes('UI_Toast', desapear ? 'UI_Toast-desapear' : null)}>
        <P size='regular' className='UI_Toast__message'>{ message }</P>
        <Small className='UI_Toast__content'>{ content }</Small>
        <div className={classes('UI_Toast__progress_bar', `UI_Toast__progress_bar-${type}`)}></div>
    </Card>
}

export default Toast