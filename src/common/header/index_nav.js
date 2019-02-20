import React,{Component,Fragment} from 'react';
import './nav.css';
class Index_nabv extends Component{
    render() {
        return(
            <ul className="nav">
                <li className="top"><a className="top_link"
                                       href="http://jwc1.usst.edu.cn/xs_main.aspx?xh=1612480430"><span
                    className="">返回首页</span></a></li>
                <li className="top"><a href="http://jwc1.usst.edu.cn/xs_main.aspx?xh=1612480430#"
                                       className="top_link"><span
                    className="down"> 网上选课</span> </a>
                    <ul className="sub">
                        <li>
                            <a href="http://jwc1.usst.edu.cn/xsxk.aspx?xh=1612480430&amp;xm=%D0%EC%D3%EE%BA%BD&amp;gnmkdm=N121101"
                               target="zhuti" >学科基础与专业课程选课
                                (必须使用IE浏览器)</a></li>
                        <li>
                            <a href="http://jwc1.usst.edu.cn/xf_xsqxxxk.aspx?xh=1612480430&amp;xm=%D0%EC%D3%EE%BA%BD&amp;gnmkdm=N121110"
                               target="zhuti" >通识教育课程选课 (必须使用IE浏览器)</a>
                        </li>
                    </ul>
                </li>
                <li className="top"><a href="http://jwc1.usst.edu.cn/xs_main.aspx?xh=1612480430#a" className="top_link"><span
                    className="down"> 活动报名</span></a>
                    <ul className="sub">
                        <li>
                            <a href="http://jwc1.usst.edu.cn/bmxmb.aspx?xh=1612480430&amp;xm=%D0%EC%D3%EE%BA%BD&amp;gnmkdm=N121303"
                               target="zhuti" >上海市高校计算机等级考试报名</a></li>
                        <li>
                            <a href="http://jwc1.usst.edu.cn/xsezybm.aspx?xh=1612480430&amp;xm=%D0%EC%D3%EE%BA%BD&amp;gnmkdm=N121306"
                               target="zhuti" >第二专业网上报名</a></li>
                        <li>
                            <a href="http://jwc1.usst.edu.cn/xsezyzc.aspx?xh=1612480430&amp;xm=%D0%EC%D3%EE%BA%BD&amp;gnmkdm=N121307"
                               target="zhuti" >第二专业网上注册</a></li>
                    </ul>
                </li>
                <li className="top"><a href="" className="top_link"><span
                    className="down"> 教学质量评价</span></a>
                    <ul className="sub"></ul>
                </li>
                <li className="top"><a href="http://jwc1.usst.edu.cn/xs_main.aspx?xh=1612480430#a" className="top_link"><span
                    className="down"> 信息维护</span></a>
                    <ul className="sub">
                        <li>
                            <a href=""
                               target="zhuti" >个人信息</a></li>
                        <li><a href="" target="zhuti"
                               >密码修改</a></li>
                    </ul>
                </li>
                <li className="top"><a href=""
                                           className="top_link"><span
                        className="down"> 信息查询</span></a>
                        <ul className="sub">
                            <li>
                                <a href=""
                                   target="zhuti" >专业推荐课表查询</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >教师个人课表查询</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >学生个人课表</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >学生考试查询</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >等级考试查询</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >查询培养计划</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >学生成绩查询</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >补考考试安排查询</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >学生二专业教学计划查询</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >查询教师教学日历</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >绩点表(二专课程不计入任选课程)</a></li>
                            <li>
                                <a href=""
                                   target="zhuti" >学分收费查询</a></li>
                        </ul>
                    </li>
                    <li className="top"><a href=""
                                           className="top_link"><span
                        className="down"> 公用信息</span></a>
                        <ul className="sub">
                            <li>
                                <a href=""
                                   target="zhuti" >报名修改</a></li>
                        </ul>
                    </li>
                    <li className="top"><a href=""
                                           className="top_link"><span
                        className="down"> 绩点表</span></a>
                        <ul className="sub">
                            <li>
                                <a href=""
                                   target="zhuti" >绩点表(二专课程不计入任选课程)(二专课程不计入任选课程)</a></li>
                        </ul>
                    </li>
            </ul>

        )
    }
}
export default Index_nabv;