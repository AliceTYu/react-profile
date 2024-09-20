import styles from './CardProject.module.css';

function CardProject({title, skills, images, demoLink, gitLink}) {
	return (
		<div className={styles.card}>
			<div className={styles.imgFilm}>
				<img className={styles.image} src={images} alt="image" />
			</div>
		
			<div className={styles.block}>
				<div className={styles.title}>{title}</div>
				<div className={styles.skills}>{skills}</div>

				<div className={styles.blockLink}>
					<a target='_blank' className={styles.link} href={demoLink} >Демо</a>
					<a target='_blank' className={styles.link} href={gitLink} >Git репозиторий</a>
				</div>
			</div>
		</div>
	);
}

export default CardProject;