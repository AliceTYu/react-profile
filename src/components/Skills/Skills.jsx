import styles from './Skills.module.css';
import cn from 'classnames';

function Skills({children, className}) {
	return (
		<div className={cn(styles['skill'], className)}>
			<div className={styles.block}>{children}</div>
		</div>
	);
}

export default Skills;