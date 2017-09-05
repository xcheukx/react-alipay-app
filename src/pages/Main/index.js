/*
 * @Author: Cheuk
 * @Date:   2017-09-02 22:46:22
 * @Last Modified by:   卓圳宝
 * @Last Modified time: 2017-09-05 14:10:20
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
				{/*(.common-tools>(.common-tools-hd>.search-box+.contacts+.more)+.common-tools-bd>.apps-box>.apps-item*4>(.apps-icon>Icon)+label.apps-text)+.apps-box>.apps-item*12>(.apps-icon>Icon)+label.apps-text*/}
				<div className="common-tools">
					<div className="common-tools-hd">
						<div className="search-box"><input type="text" /></div>
						<div className="contacts"></div>
						<div className="more"></div>
					</div>
					<div className="common-tools-bd">
						<div className="apps-box">
						</div>
					</div>
				</div>
				<div className="apps-box">
				</div>
				<TabBar>
					<TabBar.Item title="生活" key="life" icon="zhifubaoa" onClick={()=>console.log('生活')} />
					<TabBar.Item title="口碑" key="shop" icon="tansuoa" selected={true} />
					<TabBar.Item title="朋友" key="friend" icon="fuwuchuanga" />
					<TabBar.Item title="我的" key="my" icon="caifua" />
				</TabBar>
			</div>
		)
	}
}

export default Main;