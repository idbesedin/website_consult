import {motion} from 'framer-motion'
import styles from './PartnersPage.module.scss'

import top_left from 'assets/icons/partners_page/top_left.svg'
import top_right from 'assets/icons/partners_page/top_right.svg'
import logo from 'assets/icons/partners_page/logo.svg'
import { Container } from 'shared'

import blue_left from 'assets/icons/partners_page/blue_left.svg'
import pink_right from 'assets/icons/partners_page/pink_right.svg'
import orange_left from 'assets/icons/partners_page/orange_left.svg'
import green_right from 'assets/icons/partners_page/green_right.svg'

import icon12 from 'assets/icons/other_pages/icon12.svg'
import icon22 from 'assets/icons/other_pages/icon22.svg'

const PartnersPage = () => {
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
						<img src={logo} alt="" />
						<p>НАШИ ПАРТНЕРЫ</p>
					</div>
					
					<div className={styles.cap__descr}>Краткое описание сайта. Слоган. То, что может получить пользователь на <br />
					сайте и к каким разделам может перейти.</div>
				</div>

				<div className={styles.grid}>
					<img src={icon12} alt="" className={styles.icon12}/>
					<img src={icon22} alt="" className={styles.icon22}/>
					<div className={styles.grid__line} style={{left: 'calc(17% - 1px)'}}></div>
					<div className={styles.grid__line} style={{left: 'calc(39% - 1px)'}}></div>
					<div className={styles.grid__line} style={{right: 'calc(39% - 1px)'}}></div>
					<div className={styles.grid__line} style={{right: 'calc(17% - 1px)'}}></div>
					<div className={styles.grid__items} style={{borderTop: '1px solid black'}}>
						<div className={styles.grid__item + ' ' + styles.grid__item_left}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
						<div className={styles.grid__item}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
						<div className={styles.grid__item}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
						<div className={styles.grid__item}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
						<div className={styles.grid__item+ ' ' + styles.grid__item_left}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
					</div>
					<div className={styles.grid__items} style={{borderBottom: '1px solid black'}}>
						<div className={styles.grid__item + ' ' + styles.grid__item_left}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
						<div className={styles.grid__item}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
						<div className={styles.grid__item}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
						<div className={styles.grid__item}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
						<div className={styles.grid__item + ' ' + styles.grid__item_left}>ЛОГО КОМПАНИИ <br />ПАРТНЕРА</div>
					</div>
				</div>
				<div className={styles.names}>
					<Container className={styles.names__container}>
						<>
							<img src={blue_left} alt="" className={styles.names__blue_left}/>
							<img src={pink_right} alt="" className={styles.names__pink_right}/>
							<img src={orange_left} alt="" className={styles.names__orange_left}/>
							<img src={green_right} alt="" className={styles.names__green_right}/>
							<div className={styles.names__box}>
								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
								</div>

								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
								</div>
							</div>
							<div className={styles.names__box}>
								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
								</div>

								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
								</div>
							</div>
							<div className={styles.names__box}>
								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
								</div>

								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
								</div>
							</div>
							<div className={styles.names__box}>
								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
								</div>

								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
								</div>
							</div>
							<div className={styles.names__box}>
								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
							</div>

								<div className={styles.names__item}>
									<div className={styles.names__title}>Название компании</div>
									<div className={styles.names__line}></div>
									<div className={styles.names__descr}>
									Подробное описании компании. 
									Преимущества сотрудничества, краткая 
									история. Прочие подробности. Lorem 
									ipsum dolor sit amet, consectetur adipisc-
									ing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Nisl 
									rhoncus mattis rhoncus urna neque. Vitae 
									sapien pellentesque habitant morbi tris-
									tique senectus et.
									</div>
								</div>
							</div>
						</>
					</Container>
				</div>
				
			</div>
		</motion.div>
	)
}

export default PartnersPage