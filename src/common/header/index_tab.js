import React,{Component} from 'react';
import './head.css';
class Index_tab extends Component{
    render() {
        return(
            <div className="tab" >
                <ul style="DISPLAY:none">
                    <li>
                    </li>
                </ul>
                {
                    //
                }
                {/**/}
                <p className="location">
                    <em>当前位置 --
                        <span id="dqwz">通知公告</span><span id="lj" style="DISPLAY:none"></span>
                    </em>
                </p>
            </div>
        )
    }

}
export default Index_tab;