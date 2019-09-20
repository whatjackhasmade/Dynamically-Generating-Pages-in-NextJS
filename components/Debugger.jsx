import React from "react";
import styled from "styled-components";

const DebuggerWrapper = styled.pre`
	background: #131313;
	color: white;
	font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
	font-size: 1em;
	hyphens: none;
	line-height: 1.5;
	tab-size: 4;
	text-align: left;
	text-shadow: 0 -0.1em 0.2em #131313;
	white-space: pre;
	word-break: normal;
	word-spacing: normal;
	word-wrap: normal;

	padding: 1em;
	margin: 32px 0;
	max-width: 800px;
	overflow: auto;
	border: 0.3em solid #131313;
	border-radius: 0.5em;
	box-shadow: 1px 1px 0.5em black inset;

	::-webkit-scrollbar {
		background-color: #333;
	}

	::-webkit-scrollbar-thumb {
		background-color: #888;
		border: 2px solid #888;
	}

	code {
		background: none;
		color: white;
		font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
		font-size: 1em;
		hyphens: none;
		line-height: 1.5;
		tab-size: 4;
		text-align: left;
		text-shadow: 0 -0.1em 0.2em #131313;
		white-space: pre;
		word-break: normal;
		word-spacing: normal;
		word-wrap: normal;

		::-webkit-scrollbar {
			background-color: #333;
		}

		::-webkit-scrollbar-thumb {
			background-color: #888;
			border: 2px solid #888;
		}
	}
`;

const Debugger = ({ data }) => {
	return (
		<DebuggerWrapper>
			<code>{JSON.stringify(data, null, 4)}</code>
		</DebuggerWrapper>
	);
};

export default Debugger;
