import axios from 'axios';
const Grade = (Item) => ({
    type:'Grade',
    Item
})

export const Gradeaction = () => {
    return (dispatch) =>{
    axios.get('http://localhost:3000/testjson12.json').then((e1) => {
        const action = Grade(e1.data);
        dispatch(action);
    }).catch(() => {
        console.log('a1Error');
    })
    }
};