import { GrProjects } from 'react-icons/gr';
import Item from '../Item/Item';
import styles from './Header.module.css';
import { IoHomeOutline } from 'react-icons/io5';
import { PiReadCvLogoBold } from 'react-icons/pi';
import { RiBrainLine } from 'react-icons/ri';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.title}>ProFile</div>

			<ul className={styles.list}>
				<Item link='/react-profile/'><IoHomeOutline /> Главная</Item>
				<Item link='/react-profile/about'><RiBrainLine /> Навыки</Item>
				<Item link='/react-profile/projects'><GrProjects /> Проекты</Item>
				<Item link='/react-profile/cv'><PiReadCvLogoBold /> Резюме</Item>
			</ul>

		</header>
	);
}

export default Header;