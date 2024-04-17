import { Container } from "shared"
import footer_icon_big from '../../assets/icons/footer_icon_big.svg'
import footer_icon_small from '../../assets/icons/footer_icon_small.svg'
import logo_white from '../../assets/icons/logo_white.svg'

import telegram from '../../assets/icons/telegram.svg'
import vk from '../../assets/icons/vk.svg'
import youtube from '../../assets/icons/youtube.svg'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.footer__wrapper}>
				<>
					<div className={styles.icon__wrappper}>
						<img src={footer_icon_small} alt="" className={styles.icon_left}/>
						<img src={footer_icon_big} alt="" />
						<img src={footer_icon_small} alt="" className={styles.icon_right}/>
					</div>
					<div className={styles['first-layer']}>
						<img src={logo_white} alt="" />
						<p className={styles['first-layer__text']}>Sagittisvitaeetleoduisutdiamquam.Dolorpurusnon <br />enimpraesentelementumfacilisisleovelfringilla.Nunc <br />sed velit dignissim sodales ut.</p>
					</div>
					<div className={styles.links}>
						<div className={styles.links__wrapper}>
							<p className={styles.links__title}>Телефон</p>
							<a href="tel:+7-222-222-22-22" className={styles.links__text}>+7-222-222-22-22</a>
						</div>

						<div className={styles.links__wrapper}>
							<p className={styles.links__title}>Адрес</p>
							<p className={styles.links__text}>ул. Будапештсткая, 61</p>
						</div>

						<div className={styles.links__wrapper}>
							<p className={styles.links__title}>Почта</p>
							<a href="mailto:4K@gmail.com" className={styles.links__text}>4K@gmail.com</a>
						</div>

						<div className={styles.links__wrapper}>
							<p className={styles.links__title}>Юридический адрес</p>
							<p className={styles.links__text}>4K@gmail.com</p>
						</div>
						<div className={styles.links__icons}>
							<a href=""><img src={telegram} alt="" /></a>
							<a href=""><img src={vk} alt="" /></a>
							<a href=""><img src={youtube} alt="" /></a>
						</div>
					</div>
				</>
			</Container>
		</footer>
	)
}
export default Footer