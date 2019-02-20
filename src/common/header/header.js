import React, {Component} from 'react';
import {
    Head,
    Logo1,
    Logo2,
    Formdiv,
    Formli,
    Formul,
    Logoh2,
    Logoh3,
    Logodiv,
    Forma,
    Nava,
    Navli,
    Navspan,
    Navul,
    Headdiv,
    Bodydiv
} from "./style";
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Headdiv>
                <Head>
                    <Logodiv>
                        <Logoh2><Logo1/></Logoh2>
                        <Logoh3><Logo2/></Logoh3>
                    </Logodiv>
                    <form>
                        <Formdiv>
                            <Formul>
                                <Formli>1612480徐宇航</Formli>
                                <Formli><Forma>安全退出</Forma></Formli>
                            </Formul>
                        </Formdiv>
                    </form>
                </Head>
                <Navul className='Nav'>
                    <Navli className='Top'>
                        <Link  to='/'><Nava  className='Toplink'><Navspan>返回首页</Navspan></Nava></Link>
                    </Navli>
                    <Navli className='Top'>
                        <Nava className='Toplink'><Navspan>网上选课</Navspan></Nava>
                        <Navul className='Inner'>
                            <Navli>
                                <Link to='a1'><Nava>学科基础与专业课程选课</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/a2'><Nava>通识教育课程选课 (必须使用IE浏览器</Nava></Link>
                            </Navli>
                        </Navul>
                    </Navli>
                    <Navli className='Top'>
                        <Nava className='Toplink'><Navspan>活动报名</Navspan></Nava>
                        <Navul className='Inner'>
                            <Navli>
                                <Link to='/b1'><Nava>上海市高校计算机等级考试报名</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/b1'><Nava >第二专业网上报名</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/b1'><Nava>第二专业网上注册</Nava></Link>
                            </Navli>
                        </Navul>
                    </Navli>
                    <Navli className='Top'>
                        <Nava className='Toplink'><Navspan>教学质量评价</Navspan></Nava>
                    </Navli>
                    <Navli className='Top'>
                        <Nava className='Toplink'><Navspan>信息维护</Navspan></Nava>
                        <Navul className='Inner'>
                            <Navli>
                                <Link to='/c1' ><Nava>个人信息</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/c2' ><Nava>密码修改</Nava></Link>
                            </Navli>
                        </Navul>
                    </Navli>
                    <Navli className='Top'>
                        <Nava className='Toplink'><Navspan>信息查询</Navspan></Nava>
                        <Navul className='Inner'>
                            <Navli className='test'>
                                <Link to='d1'><Nava>专业推荐课表查询</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='d2'><Nava>教师个人课表查询</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/d3'><Nava>学生个人课表</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/d4'><Nava>学生考试查询</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/d5'><Nava>等级考试查询</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/d7'><Nava>学生成绩查询</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/d8'><Nava>补考考试安排查询</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/d9'><Nava>学生二专业教学计划查询</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/d10'><Nava>查询教师教学日历</Nava></Link>
                            </Navli>
                            <Navli>
                                <Link to='/d11'><Nava>绩点表(二专课程不计入任选课程)</Nava></Link>
                            </Navli>
                        </Navul>
                    </Navli>
                    <Navli className='Top'>
                        <Nava className='Toplink'><Navspan>公用信息</Navspan></Nava>
                        <Navul className='Inner'>
                            <Navli>
                                <Link to='/e1'><Nava>报名修改</Nava></Link>
                            </Navli>
                        </Navul>
                    </Navli>
                    <Navli className='Top'>
                        <Nava className='Toplink'><Navspan>绩点表</Navspan></Nava>
                        <Navul className='Inner'>
                            <Navli>
                            <Link to='/f1'> <Nava>绩点表(二专课程不计入任选课程)</Nava></Link>
                            </Navli>
                        </Navul>
                    </Navli>
                </Navul>
            </Headdiv>
        )
    }
}

export default Header;