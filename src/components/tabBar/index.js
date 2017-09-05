/*
 * @Author: Cheuk
 * @Date:   2017-09-03 13:42:59
 * @Last Modified by:   卓圳宝
 * @Last Modified time: 2017-09-05 11:34:22
 */
import React, {
	Component
}
from 'react';
import Tab from './tab';
import './style.scss';

export class Item extends Component {
	render() {
		return null;
	}
}

class TabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	static defaultProps = {
		prefixCls: 'cm-tab-bar',
		hidden: false,
	};
	static Item = Item;
	render() {
		let activeKey;
		const children = [];
		const _allKeys = [];
		console.log(this.props.children);
		React.Children.forEach(this.props.children, (item) => {
			const hasKey = !!item.key;
			const isUnique = _allKeys.indexOf(item.key) === -1;
			// console.warn(hasKey && isUnique, 'TabBar.Item must have a unique key!');
			_allKeys.push(item.key);
			if (item.props.selected) {
				activeKey = item.key;
			}
			children.push(item);
		});
		const items = children.map((item) => {
			const iProps = item.props;
			return (
				<Tab
					prefixCls={`${this.props.prefixCls}-tab`}
					{...iProps} />
			);
		});
		return (
			<div className="cm-tab-bar-container">
				{items}
			</div>
		)
	}
}

export default TabBar;