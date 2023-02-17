import * as React from "react"

const SvgComponent = (props) => (
	<svg
		fill={props.svgFill || "#172189"}
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
	>
		<path d="M7.33 24 4.5 21.171l9.339-9.175L4.5 2.829 7.33 0 19.5 11.996z" />
	</svg>
)

export default SvgComponent
