import react from "react";
import fetch from "isomorphic-fetch";

import Debugger from "../components/Debugger";

const page = props => {
	return (
		<>
			<Debugger data={props.content} />
		</>
	);
};


page.getInitialProps = async ({ query }) => {
	const res = await fetch(`https://wjhm.noface.app/wp-json/pages/v2/all?slug=${query.page}`);
	let data = await res.json();
	data = data[0];

	return data;
};

export default page;
