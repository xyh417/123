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
    Formbox, Tr
} from './style';
import {connect} from "react-redux";
import {ActionCreators} from "./store/index";

class D5 extends Component {
    render() {
        const Score = this.props.Item ? this.props.Item.map((item) => {

                return (
                    <Tr key={item.Year}><Tds>{item.Team}</Tds><Tds>{item.Examname}</Tds><Tds>{item.Id}</Tds><Tds>{item.ExamTime}</Tds><Tds>{item.Exam}</Tds><Tds></Tds><Tds>{item.Exam1}</Tds><Tds>{item.Exam2}</Tds><Tds>{item.Exam3}</Tds><Tds>{item.Exam4}</Tds></Tr>
                )
        }) : "error";
        return (
            <Module>
                <Mainbox>
                    <Midbox>
                        <Formbox>
                            <Table>
                                <tbody>
                                <Tr>
                                    <Td>学年</Td>
                                    <Td>学期</Td>
                                    <Td>等级考试名称</Td>
                                    <Td>准考证号</Td>
                                    <Td>考试日期</Td>
                                    <Td>成绩</Td>
                                    <Td>听力成绩</Td>
                                    <Td>阅读成绩</Td>
                                    <Td>写作成绩</Td>
                                    <Td>综合成绩</Td>
                                </Tr>
                                {Score}
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
    }
}

const mapState = (state) => ({
    Item:state.d5.Item
});
const mapDispatch = (dispatch) => ({
    Score(){
        dispatch(ActionCreators.Scoreaction());
    }
});
export default connect(mapState, mapDispatch)(D5);