import React from "react";

const Scroll = (props) => {
	return (
		<div
			style={{ overflowY: "scroll", border: "1px solid #333", height: "80vh" }}
		>
			{props.children}
		</div>
	);
};

export default Scroll;
