
interface IProps {
	children: JSX.Element
	className?: string
}
const Container = (props: IProps) => {
	const {children, className} = props
	return (
		<div style={{width: '85%', margin: '0 auto', maxWidth: '1620px'}} className={className}>
			{children}
		</div>
	)
}

export default Container