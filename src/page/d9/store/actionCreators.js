import axios from 'axios';
const Course = (Item) => ({
    type:'Course',
    Item
});

export const Courseaction = () => {
    return (dispatch) =>{
    axios.get('http://localhost:3000/testjson11.json').then((e1) => {
        const action = Course(e1.data);
        dispatch(action);
    }).catch(() => {
        console.log('a1Error');
    })
    }
};
