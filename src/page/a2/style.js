import styled from 'styled-components';
import Toolboxright from '../../images/toolbox_right.gif';
import Toolboxleft from '../../images/toolbox_left.gif';
import Conmidright from '../../images/con_midright.gif';
import Conbotrightt from '../../images/con_botright.gif';
import Conmidleft from '../../images/con_midleft.gif';
import Button from '../../images/button_nor.gif';
import Thead from '../../images/thead.gif';
export const Main = styled.div`
    width: 100%;
	_padding-left:156px;
	z-index:992;
	height:auto;
	position:absolute;
	top:80px;
	bottom:22px;
`;
export const Right = styled.div`
    left: 5px;
    width: 100%;
    height: 100%;
    width:auto;
    position:absolute;
    right:0px;
    div{
    height:100%;
    overflow:auto!important;
    }
`;
export const Form = styled.form.attrs({
    id:'a1',
    action:'/'
})`
   display: block; 
`;
export const Toolbox = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 2px;
    margin-bottom: 2px;
    background: url(${Toolboxright}) no-repeat right top;
`;
export const Buttonbox = styled.div`
    text-align: left;
    padding: 2px 0px 1px 6px;
    background: url(${Toolboxleft}) no-repeat left top;
`;
export const Searchbox1 = styled.div`
    float: left;
    margin: 2px 2px 0 2px;
    CLEAR: both;
    WIDTH: 900px;
`;
export const Searchbox2 = styled.div`
    float: left;
    margin: 2px 2px 0 2px;
    CLEAR: both;
    WIDTH: 780px;
`;
export const Searchp = styled.p`
    padding: 2px 10px 2px 10px;
    text-align: left;
    word-break: keep-all;
`;
export const Searchselect = styled.select``;
export const Searchoption = styled.option``;
export const Searchinput = styled.input.attrs({
    type:'text'
})`
    border: 1px solid #CCCCCC;
    padding: 1px 2px;    
    word-break: keep-all;
`;
export const Searchinput1 = styled.input.attrs({
    type:'submit'
})`
    height: 20px;
    color: #000;
    padding: 0 4px;
    cursor: pointer;
    margin: 0 2px;
    letter-spacing: 0.2em;
    outline: 1px solid #8AA4C4;
    border: 1px solid #fff !important;
    background: #ECF1F7 url(${Button}) repeat-x left top;
`;
export const Submitdiv = styled.div``;

export const Mainbox = styled.div`
    width: 100%;
    margin: 3px auto;
    background: #fff url(${Conmidright}) repeat-y right top;
`;
export const Midbox = styled.div`
    width: 100%;
    text-align: center;
    background: url(${Conmidleft}) repeat-y left top;
`;
export const Formbox = styled.span`
    display: block;
    width: 98%;
    margin: 0 auto;
    text-align: center;
`;
export const Field = styled.fieldset`
    padding: 4px;
    border: #CAD6E6 1px solid;
`;
export const Legend = styled.legend`
    font-weight: bold;
`;
export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin: 2px auto;
    border: 1px solid #ccc;
`;
export const Tr = styled.tr`
    background: #F8F7F7;
`;
export const Footbox = styled.div`
    width: 100%;
    display: block;
    text-align: right;
    clear: both;
    background: url(${Conbotrightt}) no-repeat right bottom;
`;
export const Em = styled.em`
    font-style: normal;
    display: block;
    padding: 4px 5px 3px 0;
`;
export const Input = styled.input`
    outline: 1px solid #8AA4C4;
    border: 1px solid #fff !important;
    height: 20px;
    padding: 0 4px;
    cursor: pointer;
    margin: 0 2px;
    letter-spacing: 0.2em;
    color: #000;
    background: #ECF1F7 url(${Button}) repeat-x left top;
`;
export const Footbutton = styled.span`
    text-align: right;
    display: block;
    clear: both;
    padding: 5px 0;
    font-style: normal;
`;
export const Td = styled.td`
    border-bottom: 1px solid #ccc;
    padding: 0.2em 0.5em;
    border-right: 1px solid #ccc;
    text-align: left;
    color: #000;
    background: #FEFEFE url(${Thead}) repeat-x left bottom;
`;
export const Tds = styled.td`
    border-bottom: 1px solid #ccc;
    padding: 0.2em 0.5em;
    border-right: 1px solid #ccc;
    text-align: left;
    color: #000;
`;