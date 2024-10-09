import { VscVscodeInsiders } from 'react-icons/vsc';
import Skills from '../../components/Skills/Skills';
import styles from './AboutPage.module.css';
import { FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import { RiJavascriptFill, RiNextjsLine } from 'react-icons/ri';
import { SiAdobephotoshop, SiDbeaver, SiVite } from 'react-icons/si';
import { PiFileSqlLight } from 'react-icons/pi';
import { Tooltip } from 'react-tooltip';

function AboutPage() {
	return (
		<div className={styles.about}>
			<div className={styles.title}>Профессиональные <span className={styles.purple}>навыки</span></div>
			<div className={styles.block}>
				<Skills className="html"><FaHtml5 /></Skills>
				<Tooltip anchorSelect=".html" place="top">
  						HTML
				</Tooltip>
				
				<Skills className="css"><FaCss3Alt /></Skills>
				<Tooltip anchorSelect=".css" place="top">
  						CSS
				</Tooltip>

				<Skills className='javascript'><RiJavascriptFill /></Skills>
				<Tooltip anchorSelect=".javascript" place="top">
  						JavaScript
				</Tooltip>

				<Skills className='typescript'><BiLogoTypescript /></Skills>
				<Tooltip anchorSelect=".typescript" place="top">
  						TypeScript
				</Tooltip>

				<Skills className='react'><FaReact /></Skills>
				<Tooltip anchorSelect=".react" place="top">
  						React
				</Tooltip>
				
				<Skills className='redux'><BiLogoRedux /></Skills>
				<Tooltip anchorSelect=".redux" place="top">
  						Redux
				</Tooltip>
				
				<Skills className='vite'><SiVite /></Skills>
				<Tooltip anchorSelect=".vite" place="top">
  						Vite
				</Tooltip>
				
				<Skills className='next'><RiNextjsLine /></Skills>
				<Tooltip anchorSelect=".next" place="top">
						Next.js
				</Tooltip>
				
				<Skills className='git'><FaGithub /></Skills>
				<Tooltip anchorSelect=".git" place="top">
						GitHub
				</Tooltip>
				
				<Skills className='sql'><PiFileSqlLight /></Skills>
				<Tooltip anchorSelect=".sql" place="top">
  						SQL
				</Tooltip>
				
				<Skills className='dbeaver'><SiDbeaver /></Skills>
				<Tooltip anchorSelect=".dbeaver" place="top">
						DBeaver
				</Tooltip>
				
			</div>

			<div className={styles.title}><span className={styles.purple}>Инструменты</span>, которые использую</div>
			<div className={styles.block}>
				<Skills className='vscode'><VscVscodeInsiders /></Skills>
				<Tooltip anchorSelect=".vscode" place="top">
						Visual Studio Code
				</Tooltip>

				<Skills className='figma'><FaFigma /></Skills>
				<Tooltip anchorSelect=".figma" place="top">
  						Figma
				</Tooltip>

				<Skills className='photoshop'><SiAdobephotoshop /></Skills>
				<Tooltip anchorSelect=".photoshop" place="top">
						Adobe Photoshop
				</Tooltip>

			</div>
		</div>
	);
}

export default AboutPage;