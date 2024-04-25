import styles from './DropdowmMenu.module.scss'
import footer_icon_big from '../../assets/icons/footer_icon_big.svg'
import footer_icon_small from '../../assets/icons/footer_icon_small.svg'
import { NavLink } from 'react-router-dom'

function DropdownMenu() {
  return (
	<div className={styles.menu}>
		<NavLink to={"services"} className={styles.text}>Пункт 1</NavLink>
		<p className={styles.line}></p>
		<NavLink to={"services"}className={styles.text}>Новый пункт 2</NavLink>
		<p className={styles.line}></p>
		<NavLink to={"services"} className={styles.text}>Еще один пункт 3</NavLink>
		<p className={styles.line}></p>
		<NavLink to={"services"} className={styles.text}>Снова пункт 4</NavLink>
		<p className={styles.line}></p>
		<NavLink to={"services"} className={styles.text}>Последний пункт 5</NavLink>
		<div style={{position: "relative"}}>
			<div className={styles.icon__wrappper}>
				<img src={footer_icon_small} alt="" className={styles.icon_left}/>
				<img src={footer_icon_big} alt="" className={styles.icon_big}/>
				<img src={footer_icon_small} alt="" className={styles.icon_right}/>
			</div>
		</div>
	</div>
  )
}

export default DropdownMenu
