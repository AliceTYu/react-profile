import { Link, useLocation } from 'react-router-dom';
import styles from './Item.module.css';
import cn from 'classnames';

function Item({children, link, className }) {
	const location = useLocation();
	return (
		<li className={cn(styles.item, {
			[styles.active]: location.pathname === link
		}, className)}>
			<Link to={link} className={cn(styles.link)}>{children}</Link>
		</li>
	);
}

export default Item;