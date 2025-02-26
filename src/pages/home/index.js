import React, { Component } from 'react';
import { PageHeader } from 'antd';
// import 'antd/dist/reset.css';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>test my home </h1>
				<PageHeader
					style={{
						border: '1px solid rgb(235, 237, 240)',
					}}
					onBack={() => null}
					title="Title"
					subTitle="This is a subtitle"
				/>
			</div>
		);
	}
}
