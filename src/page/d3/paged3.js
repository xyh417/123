import React, {Component} from 'react';
import Module from '../module/module';
import {
    Toolbox,
    Mainbox,
    Midbox,
    Buttonbox,
    Searchbox,
    Searchp,
    Searchbox2,
    Searchoption,
    Searchselect,
    Tdspan,
    Table,
    Footbutton,
    Footbox,
    Em,
    Td,
    Tds,
    Formbox,
    Tr,
    Formlist,
    Formtd
} from './style';
import {connect} from "react-redux";


class D3 extends Component {
    render() {
        return (
            <Module>
                <Mainbox>
                    <Midbox>
                        <Formbox>
                            <Formlist width={"100%"}>
                                <tbody>
                                <Tr>
                                    <Formtd>
                                        <Searchselect>
                                            <Searchoption>2018-2019</Searchoption>
                                            <Searchoption>2017-2018</Searchoption>
                                            <Searchoption>2016-2017</Searchoption>
                                        </Searchselect><Tdspan>学年第</Tdspan><Searchselect>
                                        <Searchoption>1</Searchoption>
                                        <Searchoption>2</Searchoption>
                                    </Searchselect><Tdspan>学期学生个人课表</Tdspan>
                                    </Formtd>
                                </Tr>
                                <Tr><Formtd>||||</Formtd></Tr>
                                </tbody>
                            </Formlist>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Tds>时间</Tds>
                                    <Tds>星期一</Tds>
                                    <Tds>星期二</Tds>
                                    <Tds>星期三</Tds>
                                    <Tds>星期四</Tds>
                                    <Tds>星期五</Tds>
                                    <Tds>星期六</Tds>
                                    <Tds>星期日</Tds>
                                </Tr>
                                <Tr>
                                    <Tds>早晨</Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                </Tr>
                                <Tr>
                                    <Tds>第一节</Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                </Tr><Tr>
                                    <Tds>第二节</Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                </Tr><Tr>
                                    <Tds>第三节</Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                </Tr><Tr>
                                    <Tds>第四节</Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                </Tr><Tr>
                                    <Tds>第五节</Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                </Tr><Tr>
                                    <Tds>第六节</Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                    <Tds></Tds>
                                </Tr>
                                </tbody>
                            </Table>
                            <Searchp>实践课信息：</Searchp>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>课程名称</Td>
                                    <Td>教师</Td>
                                    <Td>学分</Td>
                                    <Td>起止周</Td>
                                    <Td>上课时间</Td>
                                    <Td>上课地点</Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <Searchp> 调停补课信息：</Searchp>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>编号</Td>
                                    <Td>课程名称</Td>
                                    <Td>原上课时间地点</Td>
                                    <Td>现上课时间地点</Td>
                                    <Td>申请时间</Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <Searchp> 实习课信息：</Searchp>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>学号</Td>
                                    <Td>学期</Td>
                                    <Td>课程名称</Td>
                                    <Td>实习时间</Td>
                                    <Td>模块代号</Td>
                                    <Td>先修模块</Td>
                                    <Td>实习编号</Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <Searchp> 未安排上课时间课程的信息：</Searchp>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>学年</Td>
                                    <Td>学期</Td>
                                    <Td>课程名称</Td>
                                    <Td>教师姓名</Td>
                                    <Td>学分</Td>
                                    <Td>备注</Td>
                                </Tr>
                                </tbody>
                            </Table>
                        </Formbox>
                        <Footbox>
                            <Em><Footbutton>
                            </Footbutton></Em>
                        </Footbox>
                    </Midbox>
                </Mainbox>
            </Module>
        )
    }

}

const mapStateToProps = (state) => ({});
const mapDispatch = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatch)(D3);