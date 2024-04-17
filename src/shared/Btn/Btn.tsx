import styles from './Btn.module.scss'

function Btn(props: {
	children: React.ReactNode
	className?: string
	style?: 'default' | 'black'
}) {
	const {children, className, style = 'default'} = props
  return (
	<div className={`${className} ${styles[style]}` }>
	  {children}
	</div>
  )
}

export default Btn
