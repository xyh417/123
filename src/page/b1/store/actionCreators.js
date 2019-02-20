import axios from 'axios';
const Infor = (Item) => ({
    type:'Infor',
    Item
})
export const Inforaction = () => {
    return (dispatch) =>{
    axios.get('http://localhost:3000/testjson3.json').then((e1) => {
        const action = Infor(e1.data);
        dispatch(action);
    }).catch(() => {
        console.log('b1Error');
    })
    }
};

