import React, {Component} from 'react';
import {connect} from "react-redux";
import Module from "../module/module";
import {Formlist, Formtd, Tdspan, Formbox} from "./style";
import {Em, Footbox, Footbutton, Input} from "../b1/style";
import {Mainbox, Midbox} from "../module/style";
import {Buttonbox, Searchbox, Searchbox2, Searchoption, Searchp, Searchselect, Toolbox} from "../d1/style";
import {Table, Td, Tds, Tr} from "../d4/style";
import {ActionCreators} from "./store";

const defineArr = {Year: ["2018-2019", "2017-2018", "2016-2017"], Team: ["1", "2"]};
class D7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectYear: defineArr.Year[0],
            selectTeam: defineArr.Team[0],
        }
    }
    ;
    changeYear(e) {
        this.setState({selectYear: e.target.value});
    };
    changeTeam(e) {
        this.setState({selectTeam: e.target.value});
        /*this.props.Item.map((item) => {
            if (this.state.selectYear == item.Year && this.state.selectTeam == item.Team)
                return (
                    <Tr key={item.CourseId}><Tds>{item.CourseId}</Tds><Tds>{item.Coursename}</Tds><Tds>{item.StudentName}</Tds><Tds>{item.ExamTime}</Tds><Tds>{item.ExamAddress}</Tds><Tds></Tds><Tds>{item.Num}</Tds><Tds>{item.aAddress}</Tds></Tr>
                )
        })*/
    };
    render() {
        const Year = defineArr.Year.map((item, index) => {
            return <option key={index}>{item}</option>
        });
        const Team = defineArr.Team.map((item, index) => {
            return <option key={index}>{item}</option>
        });
        const Score = this.props.Item ? this.props.Item.map((item) => {
            if (this.state.selectYear == item.Year && this.state.selectTeam == item.Team)
                return (
                    <Tr key={item.Id}><Tds>{item.Id}</Tds><Tds>{item.Coursename}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.Exam}</Tds><Tds></Tds><Tds></Tds><Tds></Tds><Tds>{item.Credit}</Tds><Tds></Tds></Tr>
                )
        }) : <tr></tr>;
        return (
            <Module>
                <Toolbox>
                    <Buttonbox></Buttonbox>
                    <Searchbox><Searchp>
                        学年：
                        <Searchselect value={this.state.Year} onChange={this.changeYear.bind(this)}>{Year}
                        </Searchselect>
                        学期：
                        <Searchselect value={this.state.Team} onChange={this.changeTeam.bind(this)}>{Team}
                        </Searchselect>
                       </Searchp>
                    </Searchbox>
                </Toolbox>
                <Mainbox>
                    <Midbox>
                        <Formbox>
                            <Formlist>
                                <tbody>
                                <tr>
                                    <Formtd><Tdspan>学号</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Infors?this.props.Infors.StudentId:<tr></tr>}</Tdspan></Formtd>
                                    <Formtd><Tdspan>姓名</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Infors?this.props.Infors.Studentname:<tr></tr>}</Tdspan></Formtd>
                                    <Formtd><Tdspan>学院</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Infors?this.props.Infors.School:<tr></tr>}</Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd colspan={"2"}><Tdspan>专业</Tdspan></Formtd>
                                    <Formtd colspan={"2"}><Tdspan>{this.props.Infors?this.props.Infors.Major:<tr></tr>}</Tdspan></Formtd>
                                    <Formtd><Tdspan>行政班</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Infors?this.props.Infors.Birth:<tr></tr>}</Tdspan></Formtd>
                                </tr>

                                </tbody>
                            </Formlist>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>课程代码</Td>
                                    <Td>课程名称</Td>
                                    <Td>课程性质</Td>
                                    <Td>成绩</Td>
                                    <Td>课程归属</Td>
                                    <Td>补考成绩</Td>
                                    <Td>重修成绩</Td>
                                    <Td>学分</Td>
                                    <Td>辅修标记</Td>
                                </Tr>{Score}
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

    componentDidMount() {
        this.props.Score();
        this.props.Infor();
    }
}

const mapState = (state) => ({
    Item:state.d7.Item,
    Infors:state.d7.Infor
});
const mapDispatch = (dispatch) => ({
    Score(){
        dispatch(ActionCreators.Scoreaction());
    },
    Infor(){
        dispatch(ActionCreators.Inforaction())
    }
});
export default connect(mapState, mapDispatch)(D7);