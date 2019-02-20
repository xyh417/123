import React, {Component} from 'react';
import Module from '../module/module';
import {
    Mainbox,
    Midbox,
    Table,
    Footbutton,
    Footbox,
    Em,
    Td,
    Tds,
    Formbox, Tr,
    Legend
} from './style';
import {connect} from "react-redux";
import {ActionCreators} from "./store";


class D11 extends Component {
    render() {
        const grade = this.props.Item?this.props.Item.map((item)=>{
            return (
                <Tr key={item.CourseId}><Tds>{item.CourseId}</Tds><Tds>{item.Coursename}</Tds><Tds>{item.CourseNature}</Tds><Tds>{item.Score}</Tds><Tds>{item.CourseCredit}</Tds><Tds>{item.Grade}</Tds><Tds>{item.Note}</Tds></Tr>
            )
        }):<tr></tr>
        return (
            <Module>
                <Mainbox>
                    <Midbox>
                        <Formbox><Legend>绩点表</Legend>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>课程代码</Td>
                                    <Td>课程名称</Td>
                                    <Td>课程性质</Td>
                                    <Td>成绩</Td>
                                    <Td>学分</Td>
                                    <Td>绩点</Td>
                                    <Td>备注</Td>
                                </Tr>{grade}
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
    this.props.Grade();
    }
}

const mapState = (state) => ({
    Item:state.d11.Item
});
const mapDispatch = (dispatch) =>({
    Grade() {
        dispatch(ActionCreators.Gradeaction());
    }
})
export default connect(mapState, mapDispatch)(D11);