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

const defineArr = {College: ["管理学院", "理学院", "外语学院"], Major: ["会计学", "金融学","电子商务"],Grade:['2016','2017','2018']};
class D9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCollege: defineArr.College[0],
            selectMajor: defineArr.Major[0],
            selectGrade: defineArr.Grade[0]
        }
    };
    changeCollege(e) {
        this.setState({selectCollege: e.target.value});
    };
    changeMajor(e) {
        this.setState({selectMajor: e.target.value});
    };

    changeGrade(e) {
        this.setState({selectGrade: e.target.value});
    };
    render() {
        const College = defineArr.College.map((item, index) => {
            return <option key={index}>{item}</option>
        });
        const Major = defineArr.Major.map((item, index) => {
            return <option key={index}>{item}</option>
        });
        const Grade = defineArr.Grade.map((item, index) => {
            return <option key={index}>{item}</option>
        });
        const course = this.props.Item ? this.props.Item.map((item) => {
            if (this.state.selectCollege == this.props.CourseBelong && this.state.selectMajor == this.props.Major && this.state.selectGrade==this.props.Grade)
                return (
                    <Tr key={item.Id}><Tds>{item.Id}</Tds><Tds>{item.Coursename}</Tds><Tds>{item.Credit}</Tds><Tds>{item.CourseTime}</Tds><Tds>{item.Exam}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.MajorD}</Tds><Tds>{item.Team}</Tds></Tr>
                )
        }) : <tr></tr>;
        return (
            <Module>
                <Toolbox>
                    <Buttonbox></Buttonbox>
                    <Searchbox><Searchp>
                        学院：
                        <Searchselect value={this.state.selectCollege} onChange={this.changeCollege}>{College}</Searchselect>
                        专业：
                        <Searchselect value={this.state.selectMajor} onChange={this.changeMajor}>{Major}</Searchselect>
                        年级：
                        <Searchselect value={this.state.selectGrade} onChange={this.changeGrade}>{Grade}</Searchselect></Searchp>
                    </Searchbox>
                </Toolbox>
                <Mainbox>
                    <Midbox>
                        <Formbox>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>课程代码</Td>
                                    <Td>课程名称</Td>
                                    <Td>学分</Td>
                                    <Td>周学时</Td>
                                    <Td>考核方式</Td>
                                    <Td>课程性质</Td>
                                    <Td>专业方向</Td>
                                    <Td>建议选修学期</Td>
                                </Tr>{course}
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
        this.props.Course();
    }
}

const mapState = (state) => ({
    Item:state.d9.Item,
    CourseBelong:state.d9.CourseBelong,
    Grade: state.d9.Grade,
    Major:state.d9.Major
});
const mapDispatch = (dispatch) => ({
    Course(){
        dispatch(ActionCreators.Courseaction())
    }
});
export default connect(mapState, mapDispatch)(D9);