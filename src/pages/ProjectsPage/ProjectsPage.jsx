import styles from './ProjectsPage.module.css';
import CardProject from './../../components/CardProject/CardProject';

const ARRAY_PROJECT = [
	{id: 1, title: 'Мой портфолио', skills: 'React(Vite), JavaScript', images: './react-profile.png', demoLink: 'https://alicetyu.github.io/react-profile/', gitLink: 'https://github.com/AliceTYu/react-profile'},
	{id: 2, title: 'Журнал', skills: 'React(Vite), JavaScript', images: './react-journal-pay.png', demoLink: 'https://alicetyu.github.io/journal-for-me/', gitLink: 'https://github.com/AliceTYu/journal-for-me'},
	{id: 3, title: 'Магазин', skills: 'React(Vite), TypeScript', images: './', demoLink: 'hhttps://alicetyu.github.io/shop-pizza/', gitLink: 'https://github.com/AliceTYu/shop-pizza'},
	{id: 4, title: 'Каталог фильмов', skills: 'React(Vite), TypeScript', images: './', demoLink: '', gitLink: ''}
];

function ProjectsPage() {
	const sortedId = (a, b) => {
		if (a.id > b.id) {
			return -1;
		} else {
			return 1;
		}
	};
	
	return (
		<div className={styles.projectBlock}>
			<div className={styles.title}><span className={styles.purple}>Проекты</span>, которые реализовала</div>

			<div className={styles.project}>
				{ARRAY_PROJECT.sort(sortedId).map(el => {
					return <CardProject key={el.id} title={el.title} skills={el.skills} images={el.images} demoLink={el.demoLink} gitLink={el.gitLink}/>;
				})}
			</div>
		</div>
	);
}

export default ProjectsPage;