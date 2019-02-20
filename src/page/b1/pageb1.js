import React, {Component, Fragment} from 'react';
import Header from '../../common/header/header';
import {
    Main,
    Right,
    Form,
    Tables,
    Mainbox,
    Tr,
    Td,
    Em,
    Footbox,
    Footbutton,
    Searchinput1
} from "./style";
import {connect} from "react-redux";
import {ActionCreators} from "./store/index";

class B1 extends Component {
    render() {
        return (<Fragment>
                <Header/>
                <Main>
                    <Right>
                        <Form>
                            <Mainbox>
                                    <table width="750" align="center" width="750"><tbody><tr align="center"><td><p>&nbsp;</p><p><b><font size="5">上海理工大学</font></b><font size="3">第二专业报名表</font> </p><p>&nbsp;</p></td></tr></tbody></table>
                                    <Tables>
                                        <tbody><Tr>
                                            <Td width="10%">姓名</Td>
                                            <Td width="20%">{this.props.Item?this.props.Item.Studentname:console.log("error")}</Td>
                                            <Td width="10%">学号</Td>
                                            <Td width="15%">{this.props.Item?this.props.Item.StudentId:console.log("error")}</Td>
                                            <Td width="10%">主修专业</Td>
                                            <Td width="35%">{this.props.Item?this.props.Item.Major:console.log("error")}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td width="10%">信箱</Td>
                                            <Td width="20%">{this.props.Item?this.props.Item.Email:console.log("error")}</Td>
                                            <Td width="10%">电话</Td>
                                            <Td width="15%">{this.props.Item?this.props.Item.Phone:console.log("error")}</Td>
                                            <Td width="10%">申请专业</Td>
                                            <Td width="35%">{this.props.Item?this.props.Item.TwoMajor:console.log("error")}</Td>
                                        </Tr>
                                        </tbody>
                                    </Tables>
                                    <Tables><tbody><Tr>
                                        <Td width="40%"><span>您已报名的第二专业</span></Td>
                                        <Td width="60%"><span></span></Td>
                                    </Tr></tbody></Tables>
                                    <Tables>
                                        <tbody><Tr>
                                            <Td width="70%">
                                                <p>班主任意见：</p>
                                                <p>签字：</p>
                                                <p>年  月  日</p>
                                            </Td>
                                            <Td width="30%"><p>学生所在学院意见：</p>
                                                <p>盖章</p>
                                                <p>年  月  日</p></Td>
                                        </Tr>
                                        <Tr>
                                            <Td width="70%">
                                                <p>第二专业开办院系意见：</p>
                                                <p>盖章</p>
                                                <p>年  月  日</p>
                                            </Td>
                                            <Td width="30%"><p>教务处意见：</p>
                                                <p>盖章</p>
                                                <p>年  月  日</p></Td>
                                        </Tr>
                                        </tbody>
                                    </Tables>
                                    <Footbox>
                                        <Em><Footbutton>
                                            <Searchinput1 value={'打印'}/>
                                        </Footbutton></Em>
                                    </Footbox>
                            </Mainbox>
                        </Form>
                    </Right>
                </Main>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.Infor();
    }
}

const mapState = (state) => ({
    Item:state.b1.Item
})
const mapDispatch = (dispatch) => ({
    Infor(){
        dispatch(ActionCreators.Inforaction())
    }
})
export default connect(mapState,mapDispatch)(B1);