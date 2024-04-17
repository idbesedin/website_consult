import {motion} from 'framer-motion'
import styles from './EstatePage.module.scss'

import top_left from 'assets/icons/partners_page/top_left.svg'
import top_right from 'assets/icons/partners_page/top_right.svg'

import purchase from 'assets/icons/estate_page/purchase.svg'
import rate from 'assets/icons/estate_page/rate.svg'
import rent from 'assets/icons/estate_page/rent.svg'
import sputnik from 'assets/icons/home_page/sputnik.svg'

import icon_01 from 'assets/icons/estate_page/01.svg'
import icon_02 from 'assets/icons/estate_page/02.svg'
import icon_03 from 'assets/icons/estate_page/03.svg'
import icon_04 from 'assets/icons/estate_page/04.svg'

import icon12 from 'assets/icons/other_pages/icon12.svg'
import icon13 from 'assets/icons/other_pages/icon13.svg'
import icon14 from 'assets/icons/other_pages/icon14.svg'
import icon22 from 'assets/icons/other_pages/icon22.svg'
import icon23 from 'assets/icons/other_pages/icon23.svg'
import icon24 from 'assets/icons/other_pages/icon24.svg'


import { Btn, Container } from 'shared'
const EstatePage = () => {
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
					<div className={styles.cap__logo}>
						<p>КОММЕРЧЕСКАЯ <br /> НЕДВИЖИМОСТЬ</p>
						<img src={purchase} alt="" className={styles.cap__purchase}/>
						<img src={rate} alt="" className={styles.cap__rate}/>
						<img src={rent} alt="" className={styles.cap__rent}/>
					</div>
					
					<div className={styles.cap__descr}>Описание того, что пользователь найдет на данной странице. Слоган или  <br />
					обращение к пользователю сайта.</div>
				</div>

				<div className={styles.purchase}>

					<img src={icon12} alt="" className={styles.icon12}/>
					<img src={icon22} alt="" className={styles.icon22}/>

					<div className={styles.purchase__left}>
						<div className={styles.purchase__title}>
							<p>ПОДБОР, ПОКУПКА, ПРОДАЖА</p>
							<img src={sputnik} alt="" />
						</div>
						<p className={styles.purchase__text}>Подробное описание одного из четырех разделов для того, что бы потенциальный клиент понимал - что он тут может найти. <br /><br />
						Дополнительная информация, которую необходимо донести пользователю
						</p>
						<div className={styles.purchase__btns}>
							<Btn>Кнопка</Btn>
							<Btn style='black'>Кнопка</Btn>
						</div>
					</div>
					<div className={styles.purchase__right}>
						<div className={`${styles.purchase__square}`} style={{backgroundColor: '#FF8300', right: '150px'}}>МЕСТО ДЛЯ ФОТО</div>
						<div className={`${styles.purchase__square}`} style={{backgroundColor: '#6800DE', top: '365px', right: '510px'}}>МЕСТО ДЛЯ ФОТО</div>
					</div>
				</div>

				<div className={styles.rate}>
					<img src={icon13} alt="" className={styles.icon13}/>
					<img src={icon23} alt="" className={styles.icon23}/>

						<div className={styles.rate__wrapper}>
							<div className={styles.rate__title}>
								<p>Оценка</p>
								<img src={sputnik} alt="" />
							</div>
							<p className={styles.rate__subtitle}>Дополнительное поле для описания раздела и его <br /> преимуществ для клиента</p>
						</div>
						<Container className={styles.rate__container}>
							<>
								<div className={styles.photoHeader}>МЕСТО ДЛЯ ФОТО</div>
								<div className={styles.content}>
									<div className={styles.contentBlock}>
										<img src={icon_01} alt="" />
										<p>Поле для описания, <br />преимущества и другого текста</p>
									</div>
									<div className={styles.contentBlock}>
										<img src={icon_02} alt="" />
										<p>Поле для описания, <br />преимущества и другого текста</p>
									</div>
									<div className={styles.contentBlock}>
										<img src={icon_03} alt="" />
										<p>Поле для описания, <br />преимущества и другого текста</p>
									</div>
									<div className={styles.contentBlock}>
										<img src={icon_04} alt="" />
										<p>Поле для описания, <br />преимущества и другого текста</p>
									</div>
								</div>
							</>
						</Container>
				</div>

				<div className={styles.rent}>
					<img src={icon14} alt="" className={styles.icon14}/>
					<img src={icon24} alt="" className={styles.icon24}/>
					<div className={styles.rent__title}>
						<p>АРЕНДА ДЛЯ БИЗНЕСА</p>
						<img src={sputnik} alt="" />
					</div>
					<Container>
						<div className={styles.rent__wrapper}>
							<div className={styles.rent__card}>
								<div className={styles.rent__card_white} style={{height: '210px'}}>
									<p className={styles.rent__text_big}>15%</p>
									<p className={styles.rent__text}>Описание статисчических данных</p>
								</div>
								<div className={styles.rent__img}>Место для подробного описания преимуществ и возможностей клиента.</div>
							</div>

							<div className={styles.rent__card}>
								<div className={styles.rent__img}>Место для фото</div>
								<div className={styles.rent__card_white} style={{height: '261px'}}>
									<p className={styles.rent__text_big}>15%</p>
									<p className={styles.rent__text} >Описание статисчических данных</p>
								</div>
							</div>

							<div className={styles.rent__card}>
								<div className={styles.rent__card_white} style={{height: '210px'}}>
									<p className={styles.rent__text_big}>15%</p>
									<p className={styles.rent__text}>Описание статисчических данных</p>
								</div>
								<div className={styles.rent__img}>Место для фото</div>
								<div className={styles.rent__card_white} style={{height: '130px'}}>
									<p className={styles.rent__text} >Подпись к фото. <br /> Краткое описание</p>
								</div>
							</div>

							<div className={styles.rent__img} style={{width: '25%'}}>Место для фото</div>
						</div>
					</Container>
				</div>

			</div>
		</motion.div>
	)
}

export default EstatePage