import axios from 'axios';
const Score = (Item) => ({
    type:'Score',
    Item
});
export const Scoreaction = () => {
    return (dispatch) =>{
    axios.get('http://localhost:3000/testjson8.json').then((e1) => {
        const action = Score(e1.data);
        dispatch(action);
    }).catch(() => {
        console.log('a1Error');
    })
    }
};
