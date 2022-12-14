const Close = ({ ...props }) => (
	<svg
		width={19}
		height={18}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 19 18"
		{...props}
	>
		<path
			d="m10.756 9 7.944 7.963L17.664 18l-7.956-7.951L1.753 18 .717 16.963 8.66 9 .717 1.037 1.753 0l7.955 7.951L17.664 0 18.7 1.037 10.756 9Z"
			fill={props.fill ? props.fill : "#CFCFCF"}
		/>
	</svg>
);

export default Close;
