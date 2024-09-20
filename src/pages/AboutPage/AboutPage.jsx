import { VscVscodeInsiders } from 'react-icons/vsc';
import Skills from '../../components/Skills/Skills';
import styles from './AboutPage.module.css';
import { FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import { RiJavascriptFill, RiNextjsLine } from 'react-icons/ri';
import { SiAdobephotoshop, SiDbeaver, SiVite } from 'react-icons/si';
import { PiFileSqlLight } from 'react-icons/pi';

function AboutPage() {
	return (
		<div className={styles.about}>
			<div className={styles.title}>Профессиональные <span className={styles.purple}>навыки</span></div>
			<div className={styles.block}>
				<Skills><FaHtml5 /></Skills>
				<Skills><FaCss3Alt /></Skills>
				<Skills><RiJavascriptFill /></Skills>
				<Skills><BiLogoTypescript /></Skills>
				<Skills><FaReact /></Skills>
				<Skills><BiLogoRedux /></Skills>
				<Skills><SiVite /></Skills>
				<Skills><RiNextjsLine /></Skills>
				<Skills><FaGithub /></Skills>
				<Skills><PiFileSqlLight /></Skills>
				<Skills><SiDbeaver /></Skills>
			</div>

			<div className={styles.title}><span className={styles.purple}>Инструменты</span>, которые использую</div>
			<div className={styles.block}>
				<Skills><VscVscodeInsiders /></Skills>
				<Skills><FaFigma /></Skills>
				<Skills><SiAdobephotoshop /></Skills>
			</div>
		</div>
	);
}

export default AboutPage;