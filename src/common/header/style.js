import styled from 'styled-components';
import Head_bg from '../../images/head_bg.gif';
import Head_leftbg from '../../images/head_leftbg.gif';
import Logo_school from '../../images/logo_school.png';
import Logo_jw from '../../images/logo_jw.png';
import Info_bg from '../../images/info_bg.gif';
import Linge_3 from '../../images/linge_3.gif';
import Nav_bg from '../../images/nav_bg.gif';
import Nav_sub_bg from '../../images/nav_sub_bg.png';
import Nav_lilefthover from '../../images/nav_lilefthover.gif';
import Nav_lige from '../../images/nav_lige.gif';
import Nav_lirighthover_down from '../../images/nav_lirighthover_down.gif';
import Nav_bg_down from '../../images/nav_bg_down.gif';

export const Bodydiv = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
`;
export const Headdiv = styled.div`
    height: 80px;
    width: 100%;
    position: absolute;
    top: 0px;
    z-index: 999;
`;
export const Head = styled.div`
    width: 100%;
    float: left;
    overflow:hidden;
    background: #fff url(${Head_bg}) repeat-x left top;
`;
export const Logodiv = styled.div`
    float: left;
    padding: 2px 5px 0 5px;
    height:47px;
    background: url(${Head_leftbg}) no-repeat left top;
`;
export const Logoh2 = styled.h2`
    float: left;
`;
export const Logoh3 = styled.h3`
    float: left;
`;
export const Logo1 = styled.img`
    float: left;
    background:url(${Logo_school}) repeat-y left top;
    width: 262px;
    height: 60px;
`;
export const Logo2 = styled.img`
    float: left;
    background:url(${Logo_jw}) repeat-y left top;
    width: 167px;
    height: 60px;
`;
export const Formdiv = styled.div`
    padding-right:10px;
    float:right;
    background: url(${Info_bg}) no-repeat right top;
    width:390px;
    height:60px;
    color:#000;
`;
export const Formli = styled.li`
    background: url(${Linge_3}) no-repeat right 40%;
    *background: url(${Linge_3}) no-repeat right 50%;
    display:inline;
    height:23px;
    line-height:23px;
    padding:0 2px 0 5px!important;
    *padding:0 5px 0 5px;
`;
export const Formul = styled.ul`
    padding-left:15px;
    float:right;
`;
export const Forma = styled.a.attrs({
    href: '/'
})`
    color:#000;
    padding:1px;
    &:hover{
    color:#fff;
    background:#2358AE
    }
`;
export const Navul = styled.ul` 
    &.Nav{
    background: #C7DEFC url(${Nav_bg}) repeat-x left top;
    width:100%;
    z-index: 500;
    position: relative;
    float:left;
    height: 25px;
    &:hover{
    li:hover .Inner{  
    top: 22px;
    background: url(${Nav_sub_bg}) repeat-y left top;/*IE7FF有效*/
    padding: 3px;
    border: 1px solid #3a93d2;
    white-space: nowrap;
    height: auto;
    z-index: 300;
    left: 0;
    width: 120px;
    }
    }
    }
    &.Inner{
    position: absolute;
    left: -9999px;
    top: -9999px;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    &:hover{
    li{
    height: 20px;
    display: block;
    position: relative;
    float: left;
    font-weight: normal;
    text-align:left;
    width: 120px;
    }
    }  
    }
    
`;
export const Navli = styled.li`
    &.Top{
    display: block;
    float: left;
    }
    &:hover{
    position: relative;
    z-index: 200;
    .Top_link{
    color: #11449E;
    background: url(${Nav_lilefthover}) no-repeat;
    span{
    background: url(${Nav_lirighthover_down}) no-repeat right top;
    }
    }
    }
`;
export const Nava = styled.a`
    height: 20px;
    line-height: 20px;
    text-indent: 15px;
    color: #11449E;
    display: block;
    text-decoration: none;
    &.Toplink{
    display: block;
    float: left;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    color: #3F6FC3;
    padding: 0 0 0 5px;
    background: url(${Nav_lige}) no-repeat right bottom;
    &:hover{
    color: #11449E;
    background: url(${Nav_lilefthover}) no-repeat;
    span{
    background: url(${Nav_lirighthover_down}) no-repeat right top;
    }
    }
    }
    &:hover{
    visibility: visible;
    position: relative;
    z-index: 200;
    cursor:pointer;
    span{
    background: url(${Nav_lirighthover_down}) no-repeat right top;
    }
    }
`;
export const Navspan = styled.span`
    float: left;
    display: block;
    padding: 0 24px 0 12px;
    height: 25px;
    background: url(${Nav_bg_down}) no-repeat right top;
    &.Down{
    float: left;
    display: block;
    padding: 0 24px 0 12px;
    height: 25px;
    background: url(../../images/nav_bg_down.gif) no-repeat right top;
    }
`;

