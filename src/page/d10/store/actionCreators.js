import axios from 'axios';
const Teacher = (Item) => ({
    type:'Teacher',
    Item
});

export const Teacheraction = () => {
    return (dispatch) =>{
    axios.get('http://localhost:3000/testjson10.json').then((e1) => {
        const action = Teacher(e1.data);
        dispatch(action);
    }).catch(() => {
        console.log('a1Error');
    })
    }
};
