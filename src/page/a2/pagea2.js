import React, {Component, Fragment} from 'react';
import Header from '../../common/header/header';
import {
    Main,
    Right,
    Form,
    Toolbox,
    Buttonbox,
    Searchbox2,
    Searchbox1,
    Searchp,
    Mainbox,
    Midbox,
    Formbox,
    Field,
    Legend,
    Table,
    Tr,
    Footbox,
    Footbutton,
    Em,
    Input,
    Td,
    Tds,
    Searchselect,
    Searchoption,
    Searchinput,
    Searchinput1,
    Submitdiv
} from "./style";
import {connect} from "react-redux";
import {ActionCreators} from "./store";
const defineArr = [{nature:'通识-创新创业类课程',name:'工程类',options:['周二第10,11,12节 第1-10周','周三第10,11,12节 第1-10周','周四第10,11,12节 第1-10周']},{nature:'通识-人文素养类课程',name:'经管类',options:['周二第1,2,3节 第1-10周','周三第1,2,3节 第1-10周','周四第1,2,3节 第1-10周']},{nature:'通识-中国语言文化类课程',name:'美术类',options:['周二第4,5,6节 第1-10周','周三第4,5,6节 第1-10周','周四第4,5,6节 第1-10周']}];
class A2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectName: defineArr[0].name,
            selectOption: defineArr[0].options[0],
            selectNature: defineArr[0].nature
        }
    };
    changeName(e) {
        this.setState({ selectName: e.target.value });
        defineArr.map((item, index) => {
            if(e.target.value === item.name) {
                this.setState({ selectOption: item.options[0] });
            }
            return true;
        })
        this.props.Item.map((item)=>{
            if(this.state.selectNature == item.CourseNature&&this.state.selectName == item.CourseBelong&&this.state.selectOption == item.CourseTime)
                return(
                    <Tr key={item.CourseId}><Tds>{item.Coursename}</Tds><Tds>{item.CourseId}</Tds><Tds>{item.CourseTeacher}</Tds><Tds>{item.CourseTime}</Tds><Tds>{item.CourseAddress}</Tds><Tds>{item.CourseCredit}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.CourseBelong}</Tds></Tr>
                )
        })
    };

    changeOption(e) {
        this.setState({ selectOption: e.target.value });
        this.props.Item.map((item)=>{
            if(this.state.selectNature == item.CourseNature&&this.state.selectName == item.CourseBelong&&this.state.selectOption == item.CourseTime)
                return(
                    <Tr key={item.CourseId}><Tds>{item.Coursename}</Tds><Tds>{item.CourseId}</Tds><Tds>{item.CourseTeacher}</Tds><Tds>{item.CourseTime}</Tds><Tds>{item.CourseAddress}</Tds><Tds>{item.CourseCredit}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.CourseBelong}</Tds></Tr>
                )
        })
    };
    changeNature(e) {
        this.setState({ selectNature: e.target.value });
        this.props.Item.map((item)=>{
            if(this.state.selectNature == item.CourseNature&&this.state.selectName == item.CourseBelong&&this.state.selectOption == item.CourseTime)
                return(
                    <Tr key={item.CourseId}><Tds>{item.Coursename}</Tds><Tds>{item.CourseId}</Tds><Tds>{item.CourseTeacher}</Tds><Tds>{item.CourseTime}</Tds><Tds>{item.CourseAddress}</Tds><Tds>{item.CourseCredit}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.CourseBelong}</Tds></Tr>
                )
        })
    };
    render() {
        const names = defineArr.map((item, index) => {
            return <option key={index}>{item.name}</option>
        });
        const option = defineArr.map((item, index) => {
            if(this.state.selectName == item.name) {
                return item.options.map((item, index) =>
                    <option key={index}>{item}</option>
                )
            }
            return true;
        });
        const nature = defineArr.map((item, index) => {
            return <option key={index}>{item.nature}</option>
        });

        const course =  this.props.Item?this.props.Item.map((item)=>{
            if(this.state.selectNature == item.CourseNature&&this.state.selectName == item.CourseBelong&&this.state.selectOption == item.CourseTime)
                return(
                    <Tr key={item.CourseId}><Tds>{item.Coursename}</Tds><Tds>{item.CourseId}</Tds><Tds>{item.CourseTeacher}</Tds><Tds>{item.CourseTime}</Tds><Tds>{item.CourseAddress}</Tds><Tds>{item.CourseCredit}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.CourseBelong}</Tds></Tr>
                )
        }):"error";
        return (<Fragment>
                <Header/>
                <Main>
                    <Right>
                        <Form>
                            <Toolbox>
                                <Buttonbox></Buttonbox>
                                <Searchbox1><Searchp>
                                    课程性质：
                                    <Searchselect value={this.state.selectNature} onChange={this.changeNature.bind(this)}>{nature}</Searchselect>
                                    有无余量：
                                    <Searchselect>
                                        <Searchoption>有</Searchoption>
                                        <Searchoption>无</Searchoption>
                                    </Searchselect>
                                    课程归属：
                                    <Searchselect value={this.state.selectName} onChange={this.changeName.bind(this)}>{names}</Searchselect>
                                    上课校区：
                                    <Searchselect>
                                        <Searchoption select={"selected"}>军工路校区</Searchoption>
                                    </Searchselect>
                                </Searchp></Searchbox1>
                                <Searchbox2><Searchp>上课时间 <Searchselect value={this.state.selectOption} onChange={this.changeOption.bind(this)}>{option}</Searchselect></Searchp></Searchbox2>
                                <Searchbox2><Searchp>根据课程名称查询：<Searchinput /><Searchinput1 /></Searchp></Searchbox2>
                            </Toolbox>
                            <Mainbox>
                                <Midbox>
                                    <Formbox>
                                        <Field>
                                            <Legend>可选课程</Legend>
                                            <Table>
                                                <tbody>
                                                <Tr><Td>课程名称</Td><Td>课程代码</Td><Td>教师姓名</Td><Td>上课时间</Td><Td>上课地点</Td><Td>学分</Td><Td>课程性质</Td><Td>课程归属</Td></Tr>
                                                {course}
                                                </tbody>
                                            </Table>
                                        </Field>
                                        <Submitdiv><Searchinput1 /></Submitdiv>
                                        <Field>
                                            <Legend>已选课程</Legend>
                                            <Table>
                                                <tbody>
                                                <Tr><Td>课程名称</Td><Td>课程代码</Td><Td>教师姓名</Td><Td>上课时间</Td><Td>上课地点</Td><Td>学分</Td></Tr>
                                                {
                                                    this.props.AllItem?
                                                        this.props.AllItem.map((item)=>{
                                                            return(
                                                                <Tr key={item.CourseId}><Tds>{item.Coursename}</Tds><Tds>{item.CourseId}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.CourseGroup}</Tds><Tds>{item.CourseCredit}</Tds><Tds>{item.CourseIntroduce}</Tds></Tr>
                                                            )
                                                        }):console.log("nothing")
                                                }
                                                </tbody>
                                            </Table>
                                        </Field>
                                        <Field>
                                            <Legend>学分：统计本学期可选学分</Legend>
                                            <Table>
                                                <tbody>
                                                <Tr><Td>代码</Td><Td>课程归属</Td><Td>已选学分</Td><Td>获得学分</Td></Tr>
                                                {
                                                    this.props.Credititem?
                                                        this.props.Credititem.map((item)=>{
                                                            return(
                                                                <Tr key={item.CourseId}><Tds>{item.CourseId}</Tds><Tds>{item.CourseBelong}</Tds><Tds>{item.CourseCredit}</Tds><Tds>{item.CourseCredits}</Tds></Tr>
                                                            )
                                                        }):console.log("nothing")
                                                }
                                                </tbody>
                                            </Table>
                                        </Field>
                                    </Formbox>
                                    <Footbox>
                                        <Em><Footbutton>
                                        </Footbutton></Em>
                                    </Footbox>
                                </Midbox>
                            </Mainbox>
                        </Form>
                    </Right>
                </Main>
            </Fragment>
        )
    }
    componentDidMount() {
    this.props.Course();
    this.props.AllCourse();
    this.props.Credit();
    }
}
const mapState = (state) =>({
    Item:state.a2.Item,
    AllItem:state.a2.AllItem,
    Time:state.header.Time,
    Id:state.header.Id,
    Credititem:state.a2.Credit
});
const mapDispatch = (dispatch) =>({
    Course() {
        dispatch(ActionCreators.Courseaction());
    },
    AllCourse(){
        dispatch(ActionCreators.AllCourseaction());
    },
    Submit(){
    },
    Credit(){
        dispatch(ActionCreators.CreditAction());
    }
});
export default connect(mapState,mapDispatch)(A2);