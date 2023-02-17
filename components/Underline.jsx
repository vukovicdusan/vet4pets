import React from "react"
import * as styles from "../styles/Underline.module.css"

const Underline = (props) => {
	let thinBold = props.weight === "thin" ? styles.underlineThin : null
	let color =
		props.color === "primary"
			? styles.underlinePrimary
			: styles.underlineSecondary
	return (
		<div
			className={
				props.position === "start"
					? styles.underlineContainerStart
					: styles.underlineContainerEnd
			}
		>
			<div className={`${thinBold} ${color}`}></div>
		</div>
	)
}

export default Underline
