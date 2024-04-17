import styles from './MainPageCard.module.scss'

function MainPageCard(props: {
	img: string,
	title: string,
	subtitle: string
	text: string
}) {
	const {img, title, subtitle, text} = props
  return (
	<div className={styles.card}>
	  <img src={img} alt="" className={styles.img}/>
	  <div className={styles.wrapper}>
		<p className={styles.title}>{title}</p>
		<p className={styles.subtitle}>{subtitle}</p>
		<p className={styles.text}>{text}</p>
	  </div>
	</div>
  )
}

export default MainPageCard
