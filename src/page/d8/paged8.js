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
import {ActionCreators} from "./store/index";

const defineArr = {Year: ["2018-2019", "2017-2018", "2016-2017"], Team: ["1", "2"]};


class D4 extends Component {
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
        this.props.Item.map((item) => {
            if (this.state.selectYear == item.Year && this.state.selectTeam == item.Team)
                return (
                    <Tr key={item.CourseId}><Tds>{item.CourseId}</Tds><Tds>{item.Coursename}</Tds><Tds>{item.StudentName}</Tds><Tds>{item.ExamTime}</Tds><Tds>{item.ExamAddress}</Tds><Tds></Tds><Tds>{item.Num}</Tds><Tds>{item.aAddress}</Tds></Tr>
                )
        })
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
        const course = this.props.Item ? this.props.Item.map((item) => {
            if (this.state.selectYear == item.Year && this.state.selectTeam == item.Team)
                return (
                    <Tr key={item.CourseId}><Tds>{item.CourseId}</Tds><Tds>{item.Coursename}</Tds><Tds>{item.StudentName}</Tds><Tds>{item.ExamTime}</Tds><Tds>{item.ExamAddress}</Tds><Tds></Tds><Tds>{item.Num}</Tds><Tds>{item.aAddress}</Tds></Tr>
                )
        }) : <tr></tr>;
        return (
            <Module>
                <Toolbox>
                    <Buttonbox></Buttonbox>
                    <Searchbox><Searchp>
                        <Searchselect value={this.state.Year} onChange={this.changeYear.bind(this)}>{Year}
                        </Searchselect>
                        学年第
                        <Searchselect value={this.state.Team} onChange={this.changeTeam.bind(this)}>{Team}
                        </Searchselect>
                        学期学生补考考试查询
                    </Searchp>
                    </Searchbox>
                </Toolbox>
                <Mainbox>
                    <Midbox>
                        <Formbox>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>选课课号</Td>
                                    <Td>课程名称</Td>
                                    <Td>姓名</Td>
                                    <Td>考试时间</Td>
                                    <Td>考试地点</Td>
                                    <Td>考试形式</Td>
                                    <Td>座位号</Td>
                                    <Td>校区</Td>
                                </Tr>
                                {course}
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
    this.props.Exam();
    }
}

const mapState = (state) => ({
    Item:state.d8.Item
});
const mapDispatch = (dispatch) => ({
    Exam(){
        dispatch(ActionCreators.Examaction())
    }
});
export default connect(mapState, mapDispatch)(D4);