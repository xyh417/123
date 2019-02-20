import React, {Component} from "react";
import Module from '../module/module';
import {connect} from "react-redux";
import {Formbox, Footbox, Formlist, Tr, Formtd, Tdspan, Footbutton, Em, Input, Inputtext,Mainbox,Midbox} from './style';

class C2 extends Component {
    render() {
        return (
            <Module>
                <Mainbox>
                    <Midbox>
                        <Formbox>
                            <Formlist align={'center'}>
                                <tbody>
                                <Tr>
                                    <Formtd><Tdspan>用户名：</Tdspan></Formtd>
                                    <Formtd><Tdspan><Inputtext value={"username"} disabled/></Tdspan></Formtd>
                                </Tr>
                                <Tr>
                                    <Formtd><Tdspan>旧密码：</Tdspan></Formtd>
                                    <Formtd><Tdspan><Inputtext/></Tdspan></Formtd>
                                </Tr>
                                <Tr>
                                    <Formtd><Tdspan>新密码：</Tdspan></Formtd>
                                    <Formtd><Tdspan><Inputtext/></Tdspan></Formtd>
                                </Tr>
                                <Tr>
                                    <Formtd><Tdspan>重新输入新密码：</Tdspan></Formtd>
                                    <Formtd><Tdspan><Inputtext/></Tdspan></Formtd>
                                </Tr>
                                </tbody>
                            </Formlist>
                        </Formbox>
                        <Footbox>
                            <Em><Footbutton>
                                <Input value={'提交'}/>
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
export default connect(mapStateToProps, mapDispatch)(C2);