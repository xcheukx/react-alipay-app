/*
 * @Author: Cheuk
 * @Date:   2017-09-02 22:46:22
 * @Last Modified by:   卓圳宝
 * @Last Modified time: 2017-09-04 17:48:47
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
				<div class="common-tools">
					(.common-tools-hd>.search-box+.contacts+.more)+.common-tools-bd>
				</div>
				div.apps-box>(.apps-icon>Icon)+label.apps-text
				<TabBar>
					<TabBar.Item title="生活" key="生活" icon="zhifubaoa" />
					<TabBar.Item title="口碑" key="口碑" icon="tansuoa" selected={true} />
					<TabBar.Item title="朋友" key="朋友" icon="fuwuchuanga" />
					<TabBar.Item title="我的" key="我的" icon="caifua" />
				</TabBar>
			</div>
		)
	}
}

export default Main;