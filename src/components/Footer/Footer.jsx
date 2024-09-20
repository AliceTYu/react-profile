import { FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div>Copyright © 2024</div>
			<a href='https://github.com/AliceTYu' target='_blank' className={styles.link}><FaGithub /></a>
		</footer>
	);
}

export default Footer;