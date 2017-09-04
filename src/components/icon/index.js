/*
* @Author: 卓圳宝
* @Date:   2017-09-04 09:45:42
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-09-04 14:19:28
*/

import React,{Component} from "react";
import classNames from 'classnames';
import omit from 'omit.js';
import './style.scss';

class Icon extends Component{
    constructor(){
        super();
        this.state={}
    }
    static propTypes = {
		type:React.PropTypes.string,
		className:React.PropTypes.string,
		title:React.PropTypes.string,
		onClick: React.MouseEventHandler,
		style: React.CSSProperties
	}
	render() {
		const { type,className=''} = this.props;
		const classString = classNames({
			alipayicon:true,
			[`icon-${type}`]:true,
		}, className);
		return (
			<i {...omit(this.props,['type'])} className={classString}></i>
		)
	}
}

export default Icon;