import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Header from '../../common/header/header';
import {ActionCreators} from './store/index';
import {
    Main,
    Right,
    Form,
    Toolbox,
    Buttonbox,
    Searchbox,
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
    Tds
} from "./style";

class A1 extends Component {
    render() {
        return (<Fragment>
                <Header/>
                <Main>
                    <Right>
                        <Form >
                            <Toolbox>
                                <Buttonbox></Buttonbox>
                                <Searchbox><Searchp>{this.props.Id}</Searchp></Searchbox>
                                <Searchbox><Searchp>{this.props.Time}</Searchp></Searchbox>
                            </Toolbox>
                            <Mainbox>
                                <Midbox>
                                    <Formbox>
                                        <Field>
                                            <Legend></Legend>
                                            <Table>
                                                <tbody>
                                                <Tr><Td>课程代码</Td><Td>课程名称</Td><Td>课程性质</Td><Td>组或模块</Td><Td>学分</Td><Td>课程介绍</Td></Tr>
                                                {
                                                    this.props.Item?
                                                        this.props.Item.map((item)=>{
                                                            return(
                                                                <Tr key={item.CourseId}><Tds>{item.CourseId}</Tds><Tds>{item.Coursename}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.CourseGroup}</Tds><Tds>{item.CourseCredit}</Tds><Tds>{item.CourseIntroduce}</Tds></Tr>
                                                            )
                                                        }):console.log("nothing")

                                                }
                                                {/*
                                                    this.props.AllItem?
                                                        this.props.AllItem.map((item)=>{
                                                            return(
                                                                <Tr key={item.CourseId}><Tds>{item.CourseId}</Tds><Tds>{item.Coursename}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.CourseGroup}</Tds><Tds>{item.CourseCredit}</Tds><Tds>{item.CourseIntroduce}</Tds></Tr>
                                                            )
                                                        }):console.log("nothing")
                                           */     }

                                                <Tr><Tds>1</Tds><Tds>math</Tds><Tds>math</Tds><Tds>组</Tds><Tds>3.0</Tds><Tds>数学课</Tds></Tr>
                                                </tbody>
                                            </Table>
                                        </Field>
                                    </Formbox>
                                    <Footbox>
                                        <Em><Footbutton>
                                            <Input value={'本专业选课'} onClick={this.props.Course}/>
                                            <Input value={'选修课程'} onClick={this.props.AllCourse}/>
                                            <Input value={'已选课程'} onClick={this.props.SelectedCourse}/>
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
    }
}
const mapStateToProps = (state) => ({
    Item:state.a1.Item,
   // AllItem:state.a1.AllItem,
    Time:state.header.Time,
    Id:state.header.Id
});
const mapDispatch = (dispatch) =>({
    Course() {
    dispatch(ActionCreators.Courseaction());
    },
    AllCourse(){
        dispatch(ActionCreators.AllCourseaction());
    },
    SelectedCourse(){
        dispatch(ActionCreators.SelectedCourseaction());
    }
})

export default connect(mapStateToProps,mapDispatch)(A1);