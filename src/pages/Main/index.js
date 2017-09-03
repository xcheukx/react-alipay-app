/*
 * @Author: Cheuk
 * @Date:   2017-09-02 22:46:22
 * @Last Modified by:   Cheuk
 * @Last Modified time: 2017-09-03 15:32:52
 */
import React, {
	Component
} from 'react';
import TabBar from '../../components/tabBar'
import './style.scss';

class Main extends Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div className="main">
				{/*.navbar*/}
				<TabBar>
					<TabBar.Item title="朋友" key="朋友">
					</TabBar.Item>
				</TabBar>
			</div>
		)
	}
}

export default Main;