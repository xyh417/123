import React,{Component,Fragment} from 'react';
import './head.css';
class Index_form extends Component {
    render() {
        return (
            <Fragment>
                <div className="head">

                    <div className="logo">
                        <h2><img /></h2>
                        <h3><img /></h3>
                    </div>

                    <form name="Form1" method="post" action="http://jwc1.usst.edu.cn/xs_main.aspx?xh=1612480430" id="Form1">
                        <div className="info">
                            <ul>
                                <li>
                                    <span id="Label3">欢迎您：</span>
                                    <em>
                                        <span id="xhxm">1612480430  徐宇航同学</span></em>
                                </li>
                                <li>
                                    <a id="likTc" href="">安全退出</a>
                                </li>
                            </ul>
                        </div>
                        {
                            //&&1 <script>alert('参加补考的学生，务必携带好身份证和校园一卡通');</script>
                        }
                    </form>

                </div>
            </Fragment>
        )
    }
}
export default Index_form;