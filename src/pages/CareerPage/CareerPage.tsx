import {motion} from 'framer-motion'
import styles from './CareerPage.module.scss'

import top_left from 'assets/icons/home_page/top_left.svg'
import top_right from 'assets/icons/home_page/top_right.svg'
import { Btn, Container } from 'shared'

import icon12 from 'assets/icons/other_pages/icon12.svg'
import icon13 from 'assets/icons/other_pages/icon13.svg'
import icon14 from 'assets/icons/other_pages/icon14.svg'
import icon22 from 'assets/icons/other_pages/icon22.svg'
import icon23 from 'assets/icons/other_pages/icon23.svg'
import icon24 from 'assets/icons/other_pages/icon24.svg'

const CareerPage = () => {
	window.scrollTo(0, 0)
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

					<p className={styles.cap__title}>КАРЬЕРА <div className={styles.cap__square}></div></p>
					<div className={styles.cap__descr}>Краткое описание сайта. Слоган. То, что может получить пользователь на <br />
					сайте и к каким разделам может перейти.</div>
					<Btn className={styles.cap__btn}>КНОПКА для перехода</Btn>
				</div>

				<div style={{position: 'relative'}}>
					<img src={icon12} alt="" className={styles.icon12}/>
					<img src={icon22} alt="" className={styles.icon22}/>
					<Container className={styles.vacancy}>
						<>
							<div className={styles.vacancy__left}>
								<p className={styles.vacancy__title}>Название вакансии</p>
								<p className={styles.vacancy__descr}>Подробное описание вакансии. Преимущества и выгода для пользователя. <br /><br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhon- cus urna neque
								</p>
								<div className={styles.vacancy__advantages}>
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
								</div>
							</div>
							<div className={styles.vacancy__right}>
								<div className={styles.vacancy__img} style={{height: '33%'}}>Место для фото</div>
								<div className={styles.vacancy__img} style={{height: '65%'}}>Место для фото</div>
							</div>
						</>
					</Container>
				</div>

				<div style={{position: 'relative'}}>
					<img src={icon13} alt="" className={styles.icon13}/>
					<img src={icon23} alt="" className={styles.icon23}/>
					<Container className={styles.vacancy}>
						<>
							<div className={styles.vacancy__left}>
								<p className={styles.vacancy__title}>Название вакансии</p>
								<p className={styles.vacancy__descr}>Подробное описание вакансии. Преимущества и выгода для пользователя. <br /><br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhon- cus urna neque
								</p>
								<div className={styles.vacancy__advantages}>
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
								</div>
							</div>
							<div className={styles.vacancy__right}>
								<div className={styles.vacancy__img} style={{height: '33%'}}>Место для фото</div>
								<div className={styles.vacancy__img} style={{height: '65%'}}>Место для фото</div>
							</div>
						</>
					</Container>
				</div>

				<div style={{position: 'relative'}}>
					<img src={icon14} alt="" className={styles.icon14}/>
					<img src={icon24} alt="" className={styles.icon24}/>
					<Container className={styles.vacancy}>
						<>
							<div className={styles.vacancy__left}>
								<p className={styles.vacancy__title}>Название вакансии</p>
								<p className={styles.vacancy__descr}>Подробное описание вакансии. Преимущества и выгода для пользователя. <br /><br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhon- cus urna neque
								</p>
								<div className={styles.vacancy__advantages}>
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
							</div>
							<div className={styles.vacancy__right}>
								<div className={styles.vacancy__img} style={{height: '33%'}}>Место для фото</div>
								<div className={styles.vacancy__img} style={{height: '65%'}}>Место для фото</div>
							</div>
						</>
					</Container>
				</div>

			</div>
		</motion.div>
	)
}

export default CareerPage