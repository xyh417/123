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


class D10 extends Component {
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
        const teacher = this.props.Item ?  this.props.Item.map((item) => {
            if (this.state.selectYear == item.Year && this.state.selectTeam == item.Team)
                return (
                    <Tr key={item.CourseId}><Tds>{item.Coursename}</Tds><Tds>{item.Id}</Tds><Tds>{item.Teachername}</Tds><Tds>查看</Tds></Tr>
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
                        学期
                    </Searchp>
                    </Searchbox>
                </Toolbox>
                <Mainbox>
                    <Midbox>
                        <Formbox>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>课程名称</Td>
                                    <Td>课程代码</Td>
                                    <Td>教师姓名</Td>
                                    <Td>查看</Td>
                                </Tr>
                                {teacher}
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
    this.props.Teacher();
    }
}

const mapState = (state) => ({
    Item:state.d10.Item
});
const mapDispatch = (dispatch) => ({
    Teacher(){
        dispatch(ActionCreators.Teacheraction())
    }
});
export default connect(mapState, mapDispatch)(D10);