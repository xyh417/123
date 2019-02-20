import axios from 'axios';
const Exam = (Item) => ({
    type:'Exam',
    Item
});

export const Examaction = () => {
    return (dispatch) =>{
    axios.get('http://localhost:3000/testjson7.json').then((e1) => {
        const action = Exam(e1.data);
        dispatch(action);
    }).catch(() => {
        console.log('a1Error');
    })
    }
};
