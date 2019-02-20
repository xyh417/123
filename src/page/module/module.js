import React, {Component, Fragment} from 'react';

import Header from '../../common/header/header';

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
    Footbox,
    Footbutton,
    Em,
    Input
} from "./style";

class Module extends Component {
    render() {
        return (<Fragment>
                <Header/>
                <Main>
                    <Right>
                        <Form >


                                            {
                                             this.props.children
                                            }

                        </Form>
                    </Right>
                </Main>
            </Fragment>
        )
    }

}


export default  Module;