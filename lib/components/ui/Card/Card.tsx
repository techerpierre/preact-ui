import { FC, forwardRef, HTMLProps } from 'react';
import { classes, getOrientationClass, getCardSpacingClass } from '../../../shared/functions';

type ContainerType = 'div' | 'section' | 'article' | 'main' | 'menu' | 'nav';

interface TCard extends HTMLProps<HTMLDivElement> {
    container?: ContainerType;
    spacing?: 'large' | 'medium' | 'small';
    fit?: boolean;
    direction?: 'row' | 'col';
}

const Card: FC<TCard> = forwardRef(({ container: Component = 'div', spacing = 'medium', direction = 'col', fit, className, children, ...props }, ref) => {
    return <Component ref={ref} className={classes('UI_Card', fit ? 'UI_fit' : null, getOrientationClass(direction), getCardSpacingClass(spacing), className)} { ...props }>{ children }</Component>
});

export default Card