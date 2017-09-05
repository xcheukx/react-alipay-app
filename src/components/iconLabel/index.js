/*
* @Author: 卓圳宝
* @Date:   2017-09-05 13:50:31
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-09-05 14:09:49
*/
import React from 'react';
import './style.scss';

export default class IconLabel extends React.Component{
	constructor(){
		super();
		this.state = {

		}
	}
	render(){
		return (
			<div className="icon-label">
				<div className="apps-icon">
					<Icon></Icon>
				</div>
				<label for="" className="apps-text"></label>
			</div>
		)
	}
}