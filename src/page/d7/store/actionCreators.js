import axios from 'axios';
const Score = (Item) => ({
    type:'Score',
    Item
});
const Infor = (Item) => ({
    type:'Infor',
    Item
})
export const Scoreaction = () => {
    return (dispatch) =>{
    axios.get('http://localhost:3000/testjson9.json').then((e1) => {
        const action = Score(e1.data);
        dispatch(action);
    }).catch(() => {
        console.log('a1Error');
    })
    }
};
export const Inforaction = () => {
    return (dispatch) =>{
        axios.get('http://localhost:3000/testjson4.json').then((e1) => {
            const action = Infor(e1.data);
            dispatch(action);
        }).catch(() => {
            console.log('a1Error');
        })
    }
};
