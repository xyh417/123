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
    Formbox, Tr
} from './style';
import {connect} from "react-redux";
const arr=["1","2","3","4","5","6","7"];
const defineArr = [{Year:'2016-2017',Grade:['2016','2017','2018']},{Year:'2017-2018',Grade:['2016','2017']},{Year:'2018-2019',Grade:['2016','2017']}]
class D1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectYear: defineArr[0].Year,
            selectGrade: defineArr[0].Grade[0],
            selectTeam: 1,
            selectGroup:1
        }
    };
   changeYear(e) {
        this.setState({ selectYear: e.target.value });
    };
    changeGroup(e){
        this.setState({ selectGroup: e.target.value });
    }
    changeGrade(e) {
        this.setState({ selectGrade: e.target.value });
    };
    changeTeam(e) {
        this.setState({ selectYear: e.target.value });
    };
    render() {
        const year = defineArr.map((item, index) => {
            return <option key={index}>{item.Year}</option>
        });
        const grade = defineArr[0].Grade.map((item, index) => {
            return <option key={index}>{item}</option>
        });
        const course =  this.props.Item?this.props.Item.map((item)=>{
            if(this.state.selectYear == item.Year&&this.state.selectTeam == item.Team&&this.state.selectGrade == item.Grade&&this.state.selectGroup==item.Group)
                return item
                        //<Tr key={item.CourseId}><Tds>第{arritem}节</Tds><Tds>{item.CourseId}</Tds><Tds>{item.CourseTeacher}</Tds><Tds>{item.CourseTime}</Tds></Tr>
        }):"error";
        return (
            <Module>
                <Toolbox>
                    <Buttonbox></Buttonbox>
                    <Searchbox><Searchp>
                        学年：
                        <Searchselect value={this.state.selectYear} onChange={this.changeYear.bind(this)}>{year}</Searchselect>
                        学期：
                        <Searchselect value={this.state.selectTeam} onChange={this.changeTeam.bind(this)}>
                            <Searchoption>1</Searchoption>
                            <Searchoption>2</Searchoption>
                        </Searchselect>
                        年级：
                        <Searchselect value={this.state.selectGrade} onChange={this.changeGrade.bind(this)}>
                            {grade}
                        </Searchselect></Searchp>
                    </Searchbox>
                    <Searchbox2><Searchp>
                        <Tdspan>
                            学院名称：
                        </Tdspan><Searchselect disabled><Searchoption>数学院</Searchoption></Searchselect>
                        <Tdspan>
                            专业：
                        </Tdspan><Searchselect disabled><Searchoption>数学分析</Searchoption></Searchselect>
                        <Tdspan>
                            推荐课表：
                        </Tdspan>
                        <Searchselect value={this.state.selectGroup} onChange={this.changeGroup.bind(this)}>
                            <Searchoption>{this.props.Grade}年级{this.props.Pro}[无方向]{this.state.selectYear}-1第1课表</Searchoption>
                            <Searchoption>{this.props.Grade}年级{this.props.Pro}[无方向]{this.state.selectYear}-1第2课表</Searchoption>
                        </Searchselect></Searchp></Searchbox2>
                </Toolbox>
                <Mainbox>
                    <Midbox>
                        <Formbox>
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
export default connect(mapStateToProps, mapDispatch)(D1);