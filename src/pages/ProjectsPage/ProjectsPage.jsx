import styles from './ProjectsPage.module.css';
import CardProject from './../../components/CardProject/CardProject';

const ARRAY_PROJECT = [
	{id: 1, title: 'Портфолио', skills: 'React(Vite), JavaScript', images: './react-profile.png', demoLink: 'https://alicetyu.github.io/react-profile/', gitLink: 'https://github.com/AliceTYu/react-profile'},
	{id: 2, title: 'Трекер привычек', skills: 'JavaScript', images: './habit_tracker.png', demoLink: 'https://alicetyu.github.io/habit_tracker/', gitLink: 'https://github.com/AliceTYu/habit_tracker'},
	{id: 3, title: 'Крестики нолики', skills: 'React(Vite), JavaScript', images: './crossAndToe.png', demoLink: 'https://alicetyu.github.io/crossAndToe/', gitLink: 'https://github.com/AliceTYu/crossAndToe'},
	{id: 4, title: 'Журнал', skills: 'React(Vite), JavaScript', images: './react-journal-pay.png', demoLink: 'https://alicetyu.github.io/journal-for-me/', gitLink: 'https://github.com/AliceTYu/journal-for-me'},
	{id: 5, title: 'Магазин (в процессе)', skills: 'React(Vite), TypeScript', images: './react-vite-ts-shop.png', demoLink: 'https://alicetyu.github.io/react-vite-ts-shop/', gitLink: 'https://github.com/AliceTYu/react-vite-ts-shop'}
	//{id: 6, title: 'Каталог фильмов', skills: 'React(Vite), TypeScript', images: './', demoLink: '', gitLink: ''}
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