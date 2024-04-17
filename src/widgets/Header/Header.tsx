import { Container } from "shared"
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom"
import { DropdownMenu } from "widgets"
import { useState } from "react"

const Header = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false)
	return (
		<header className={styles.header}>
			<Container className={styles.items}>
				<>
					<NavLink 
						to={"/"}
						className={styles.item}
					>О НАС</NavLink>
					<NavLink 
						to={"partners"}
						className={styles.item}
					>ПАРТНЕРЫ</NavLink>
					<NavLink 
						to={"estate"}
						className={styles.item}
					>КОММЕРЧЕСКАЯ НЕДВИЖИМОСТЬ</NavLink>
					<NavLink 
						to={"career"}
						className={styles.item}
					>КАРЬЕРА</NavLink>
					<NavLink 
						to={"services"}
						className={`${styles.item} ${styles.item__menu}`}
						onClick={() => setIsMenuVisible(!isMenuVisible)}
						style={{color: isMenuVisible ? "white" : "black"}}
					>
						УСЛУГИ
						{isMenuVisible && <DropdownMenu/>}
					</NavLink>
				</>
			</Container>
		</header>
	)
}

export default Header