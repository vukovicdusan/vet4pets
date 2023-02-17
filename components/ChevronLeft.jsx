import * as React from "react"

const ChevronLeft = (props) => (
	<svg
		fill={props.svgFill || "#172189"}
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
	>
		<path d="m16.67 0 2.83 2.829-9.339 9.175 9.339 9.167L16.67 24 4.5 12.004z" />
	</svg>
)

export default ChevronLeft
