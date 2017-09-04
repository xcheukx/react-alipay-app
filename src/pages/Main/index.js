/*
 * @Author: Cheuk
 * @Date:   2017-09-02 22:46:22
 * @Last Modified by:   卓圳宝
 * @Last Modified time: 2017-09-04 15:25:27
 */
import React, {
	Component
} from 'react';
import TabBar from '../../components/tabBar'
import './style.scss';

class Main extends Component {
    constructor(){
        super();
        this.state={}
    }
	render() {
		return (
			<div className="main">
				{/*.navbar*/}
				<TabBar>
					<TabBar.Item title="朋友" key="朋友" icon="dangmianfu">
					</TabBar.Item>
					<TabBar.Item title="朋友1" key="朋友1" icon="dangmianfu" selected={true}>
					</TabBar.Item>
				</TabBar>
			</div>
		)
	}
}

export default Main;