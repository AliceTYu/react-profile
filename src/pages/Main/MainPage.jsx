import { FaGithub, FaHeart, FaTelegram } from 'react-icons/fa';
import styles from './MainPage.module.css';

function MainPage() {
	return (
		<main className={styles.main}>
        	<dib className={styles.infoBlock}>
        		<div className={styles.infoText}>
        			<div className={styles.title}>Привет! <FaHeart/></div>
					<div className={styles.title}>Меня зовут <span className={styles.plum}>Тураева Алиса!</span></div>
					<div className={styles.desc}>Я начинающий <span className={styles.plum}>Frontend</span>-разработчик, и как минимум этот сайт был сделан мной на <span className={styles.plum}>React</span>.</div>
        		</div>
				<div className={styles.infoImg}>
					<img className={styles.img} src="./cat.png" alt="image" />
				</div>
        	</dib>

			<div className={styles.aboutMe}>
				<div className={styles.infoImg}>
					<img className={styles.img} src="./sticker.png" alt="image" />
				</div>
				<div className={styles.aboutText}>
					<div className={styles.desc}>Я <span className={styles.plum}>самоучка</span> Frontend-разработчик. По больше части обучалась самостоятельно <span className={styles.plum}>HTML, CSS и JavaScript</span>.</div>
					<div className={styles.desc}>В последний год проходила стажировку в <span className={styles.plum}>QSoft</span> по направлению Frontend-разработчик и покупала курсы у <span className={styles.plum}>PurpleSchool</span> по JavaScript и React, чтобы ментор помог с некоторыми моментами.</div>
					<div className={styles.desc}>Работаю <span className={styles.plum}>Frontend</span>-разработчиком в системе BI уже как больше года.</div>
					<div className={styles.desc}>Но в будущем хочу быть <span className={styles.plum}>React</span>-разработчиков. Стремлюсь к знаниям и люблю учиться. Быстро усваиваю информацию и умею гуглить.</div>
				</div>
			</div>
			
			<div className={styles.followMe}>
				<div className={styles.title}>Найти меня можно по <span className={styles.plum}>ссылкам</span></div>

				<div className={styles.linkBlock}>
					<a href='https://t.me/Alice_Black' target='_blank' className={styles.link}><FaTelegram /></a>
					<a href='https://github.com/AliceTYu' target='_blank' className={styles.link}><FaGithub /></a>
				</div>
			</div>
		</main>
	);
}

export default MainPage;