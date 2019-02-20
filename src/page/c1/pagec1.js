import React, {Component} from 'react';
import {connect} from "react-redux";
import Module from "../module/module";
import {Formlist, Formtd, Tdspan, Formbox,Em, Footbox, Footbutton,Mainbox, Midbox,Searchinput1} from "./style";
import {ActionCreators} from "./store/index";

class C1 extends Component {
    render() {
        return (
            <Module>
                <Mainbox>
                    <Midbox>
                        <Formbox>
                            <Formlist>
                                <tbody>
                                <tr>
                                    <Formtd><Tdspan>学号</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Item?this.props.Item.StudentId:console.log("error")}</Tdspan></Formtd>
                                    <Formtd><Tdspan>学生证号</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>手机类型</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd rowspan={"6"}><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>姓名</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Item?this.props.Item.Studentname:console.log("error")}</Tdspan></Formtd>
                                    <Formtd><Tdspan>培养方向</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Item?this.props.Item.Major:console.log("error")}</Tdspan></Formtd>
                                    <Formtd><Tdspan>手机号码</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Item?this.props.Item.Phone:console.log("error")}</Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>曾用名</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>专业方向</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Item?this.props.Item.Major:console.log("error")}</Tdspan></Formtd>
                                    <Formtd><Tdspan>家庭邮编</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>性别</Tdspan></Formtd>
                                    <Formtd><Tdspan>男</Tdspan></Formtd>
                                    <Formtd><Tdspan>入学日期</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>家庭电话</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>出生日期</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Item?this.props.Item.Birth:console.log("error")}</Tdspan></Formtd>
                                    <Formtd><Tdspan>毕业中学</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Item?this.props.Item.School:console.log("error")}</Tdspan></Formtd>
                                    <Formtd><Tdspan>父亲姓名</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>民族族</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Item?this.props.Item.Nation:console.log("error")}</Tdspan></Formtd>
                                    <Formtd><Tdspan>宿舍号</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>父亲单位</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>籍贯</Tdspan></Formtd>
                                    <Formtd><Tdspan>{this.props.Item?this.props.Item.Province:console.log("error")}</Tdspan></Formtd>
                                    <Formtd><Tdspan>电子邮箱</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>父亲单位邮编</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>政治面貌</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>联系电话</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>母亲姓名</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>来源地区</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>邮政编码</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>母亲单位</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>来源省</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>准考证号</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>母亲单位邮编</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>出生地</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>身份证号</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>父亲电话</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>健康状况</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>学历</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>母亲电话</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                <tr>
                                    <Formtd><Tdspan>学院</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>港澳台码</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan>家庭住址</Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                    <Formtd><Tdspan></Tdspan></Formtd>
                                </tr>
                                </tbody>
                            </Formlist>
                        </Formbox>
                        <Footbox>
                            <Em><Footbutton>
                                <Searchinput1 value={'提交'}/>
                            </Footbutton></Em>
                        </Footbox>
                    </Midbox>
                </Mainbox>
            </Module>
        )
    }
    componentDidMount() {
        this.props.Infor();
    }
}

const mapState = (state) => ({
    Item:state.c1.Item
});
const mapDispatch = (dispatch) => ({
    Infor(){
        dispatch(ActionCreators.Inforaction())
    }
});
export default connect(mapState, mapDispatch)(C1);