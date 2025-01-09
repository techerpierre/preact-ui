import { FC, HTMLProps } from 'react';
import { classes } from '../../../shared/functions';

type ContainerType = 'div' | 'section' | 'article' | 'main' | 'menu' | 'nav';

interface TCard extends HTMLProps<HTMLDivElement> {
    container?: ContainerType;
    spacing?: 'large' | 'medium' | 'small';
    fit?: boolean;
    direction?: 'row' | 'col';
}

const Card: FC<TCard> = ({ container: Component = 'div', spacing = 'medium', direction = 'col', fit, className, children, ...props }) => {
    return <Component className={classes('UI_Card', fit ? 'UI_fit' : null, direction, spacing, className)} { ...props }>{ children }</Component>
}

export default Card