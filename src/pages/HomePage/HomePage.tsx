import {motion} from 'framer-motion'
import styles from './HomePage.module.scss'
import logo_black from '../../assets/icons/logo_black.svg'
import { Btn, Container, MainPageCard } from 'shared'

import top_left from 'assets/icons/home_page/top_left.svg'
import top_right from 'assets/icons/home_page/top_right.svg'
import sputnik from 'assets/icons/home_page/sputnik.svg'

import card_ph1 from 'assets/img/card_ph1.png'
import card_ph2 from 'assets/img/card_ph2.png'
import card_ph3 from 'assets/img/card_ph3.png'
import card_ph4 from 'assets/img/card_ph4.png'
import card_ph5 from 'assets/img/card_ph5.png'
import card_ph6 from 'assets/img/card_ph6.png'
import card_ph7 from 'assets/img/card_ph7.png'
import card_ph8 from 'assets/img/card_ph8.png'
import card_ph9 from 'assets/img/card_ph9.png'

import middle_left from 'assets/icons/home_page/middle_left.svg'
import middle_right from 'assets/icons/home_page/middle_right.svg'
import bottom_left from 'assets/icons/home_page/bottom_left.svg'
import bottom_right from 'assets/icons/home_page/bottom_right.svg'

const HomePage = () => {
	window.scrollTo(0, 0)
	const card_info = [
		{
			img: card_ph1,
			title: 'ВЕДЕНИЕ БУХГАЛТЕРИИ',
			subtitle: 'Русскоговорящий специалист',
			text: 'Описание услуги. Текст в более длинной манере и объяснении',
		},
		{
			img: card_ph2,
			title: 'УПРАВЛЕНЧЕСКИЙ УЧЕТ',
			subtitle: '',
			text: 'Описание услуги. Текст в более длинной манере и объяснении',
		},
		{
			img: card_ph3,
			title: 'РЕГИСТРАЦИЯ',
			subtitle: 'Покупка/продажа/оценка Ликвидация компании ',
			text: 'Описание услуги. Текст в более длинной манере и объяснении',
		},
		{
			img: card_ph4,
			title: 'УПРАВЛЕНИЕ АКТИВАМИ БИЗНЕСОМ',
			subtitle: '',
			text: 'Описание услуги. Текст в более длинной манере и объяснении',
		},
		{
			img: card_ph5,
			title: 'ПОКУПКА/ПРОДАЖА БИЗНЕСА',
			subtitle: '',
			text: 'Описание услуги. Текст в более длинной манере и объяснении',
		},
		{
			img: card_ph6,
			title: 'УСЛУГИ АДВОКАТА',
			subtitle: '',
			text: 'Описание услуги. Текст в более длинной манере и объяснении',
		},
		{
			img: card_ph7,
			title: 'ТЕЛЕФОНИЯ',
			subtitle: '',
			text: 'Описание услуги. Текст в более длинной манере и объяснении',
		},
		{
			img: card_ph8,
			title: 'НАЛОГОВЫЙ КОНСАЛТИНГ',
			subtitle: '',
			text: 'Описание услуги. Текст в более длинной манере и объяснении',
		},
		{
			img: card_ph9,
			title: 'РЕСТОРАННЫЙ БИЗНЕС',
			subtitle: '',
			text: 'Описание услуги. Текст в более длинной манере и объяснении',
		}
	]
	const cards = card_info.map((el, i) => <MainPageCard key={i} img={el.img} title={el.title} subtitle={el.subtitle} text={el.text}/>)
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.2}}
		>
			<div className={styles.page}>
				<div className={styles.cap}>
					<img src={top_left} alt="" className={styles.cap__left}/>
					<img src={top_right} alt="" className={styles.cap__right}/>

					<img src={logo_black} alt="" className={styles.cap__logo}/>
					<div className={styles.cap__title}>Длинный заголовок</div>
					<div className={styles.cap__descr}>Краткое описание сайта. Слоган. То, что может получить пользователь на <br />
					сайте и к каким разделам может перейти.</div>
					<Btn className={styles.cap__btn}>КНОПКА для перехода</Btn>
				</div>

				<div className={styles.services}>
					<img src={middle_left} alt="" className={styles.services__middle_left}/>
					<img src={middle_right} alt="" className={styles.services__middle_right}/>
					<img src={bottom_left} alt="" className={styles.services__bottom_left}/>
					<img src={bottom_right} alt="" className={styles.services__bottom_right}/>

					<div className={styles.services__top}>
						<div className={styles.services__title}>
							<p>УСЛУГИ</p>
							<img src={sputnik} alt="" />
						</div>
						<div className={styles.services__descr}>
							<p>Дополнительное поле для текста Дополнительное <br />
							поле для текста Дополнительное поле для текста <br />
							Дополнительное поле для текста </p>
							<div className={styles.services__circle}></div>
						</div>
					</div>
					<Container>
						<>
							<div className={styles.services__cards}>
								{cards}
							</div>
						</>
					</Container>
				</div>

				<Container>
					<div className={styles.advantages}>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__dot}></div>
							<div className={styles.advantages__title}>Преимущество</div>
							<div className={styles.advantages__text}>Описание преимущества компании. Выгоды, доп услуги и другое.</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__dot} style={{background: 'linear-gradient(90deg, #00d980 0%, #00c4a2 100%)'}}></div>
							<div className={styles.advantages__title}>Преимущество</div>
							<div className={styles.advantages__text}>Описание преимущества компании. Выгоды, доп услуги и другое.</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__dot} style={{backgroundColor: '#008aff'}}></div>
							<div className={styles.advantages__title}>Преимущество</div>
							<div className={styles.advantages__text}>Описание преимущества компании. Выгоды, доп услуги и другое.</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__dot} style={{backgroundColor: '#ff005c'}}></div>
							<div className={styles.advantages__title}>Преимущество</div>
							<div className={styles.advantages__text}>Описание преимущества компании. Выгоды, доп услуги и другое.</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__dot} style={{backgroundColor: '#6800de'}}></div>
							<div className={styles.advantages__title}>Преимущество</div>
							<div className={styles.advantages__text}>Описание преимущества компании. Выгоды, доп услуги и другое.</div>
						</div>
					</div>
				</Container>
				
			</div>
		</motion.div>
	)
}

export default HomePage