/*
 * @Author: Cheuk
 * @Date:   2017-09-03 13:43:21
 * @Last Modified by:   卓圳宝
 * @Last Modified time: 2017-09-04 15:24:51
 */
import React, {	Component } from 'react';
import classNames from 'classnames';
import Icon from './../icon';

class Tab extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
	    const { title, prefixCls, dot, badge, icon, selected } = this.props;
		const classString = classNames({
			[`${prefixCls}`]:true,
			"selected":selected,
		});
		return (
			<div className={classString}>
				{icon?<div className={`${prefixCls}-icon`}>
					<Icon type={icon} />
					{badge?<sup className="cm-badge-text">{badge}</sup>:null}
					{dot?<sup className="cm-badge-dot"></sup>:null}
				</div>:null}
				<label className={`${prefixCls}-title`}>{title}</label>
			</div>
		)
	}
}

export default Tab;