/*
 * @Author: Cheuk
 * @Date:   2017-09-03 13:42:59
 * @Last Modified by:   Cheuk
 * @Last Modified time: 2017-09-03 15:53:44
 */
import React, {
	Component
} from 'react';
import './style.scss';

export class Item extends React.Component {
	render() {
		return null;
	}
}

class TabBar extends Component {
	constructor(props) {
		super(props);
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
		React.Children.forEach(this.props.children, (item) => {
			const hasKey = !!item.key;
			const isUnique = _allKeys.indexOf(item.key) === -1;
			// warning(hasKey && isUnique, 'TabBar.Item must have a unique key!');
			_allKeys.push(item.key);
			if (item.props.selected) {
				activeKey = item.key;
			}
			children.push(item);
		});
		const panels = children.map((item) => {
			// const cProps = item.props;
			// const tab = (<Tab
			// 	prefixCls={`${this.props.prefixCls}-tab`}
			// 	badge={cProps.badge}
			// 	dot={cProps.dot}
			// 	selected={cProps.selected}
			// 	icon={cProps.icon}
			// 	selectedIcon={cProps.selectedIcon}
			// 	title={cProps.title}
			// 	tintColor={tintColor}
			// 	unselectedTintColor={unselectedTintColor}
			// 	dataAttrs={getDataAttr(cProps)}
			// />);
			return (
				<div className={`${this.props.prefixCls}-tab`}>
				{
					/*<TabPane
										placeholder={this.props.placeholder}
										tab={tab}
										key={c.key}
								    >
							        	{c}
							        </TabPane>*/
				}
					<div className={`${this.props.prefixCls}-tab-icon`}>
						<span className={`${this.props.prefixCls}-tab-icon-img`}></span>
						<sup className="cm-badge-text"></sup>
						<sup className="cm-badge-dot"></sup>
					</div>
					<label className="cm-tab-bar-tab-title">111</label>
				</div>
			);
		});
		return (
			<div className="cm-tab-bar-container">
				{panels}
			</div>
		)
	}
}

export default TabBar;