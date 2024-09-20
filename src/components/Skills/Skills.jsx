import styles from './Skills.module.css';

function Skills({children}) {
	return (
		<div className={styles.skill}>
			<div className={styles.block}>{children}</div>
		</div>
	);
}

export default Skills;