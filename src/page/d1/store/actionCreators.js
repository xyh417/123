import axios from 'axios';
const Course = (Item) => ({
    type:'Course',
    Item
});
const AllCourse = (Item) => ({
    type:'AllCourse',
    Item
})
const Credit = (Item) => ({
    type:'Credit',
    Item
})
export const Courseaction = () => {
    return (dispatch) =>{
    axios.get('http://localhost:3000/testjson2.json').then((e1) => {
        const action = Course(e1.data);
        dispatch(action);
    }).catch(() => {
        console.log('a1Error');
    })
    }
};
export const AllCourseaction = () => {
    return (dispatch) =>{
        axios.get('http://localhost:3000/testjson2.json').then((e1) => {
            const action = AllCourse(e1.data);
            dispatch(action);
        }).catch(() => {
            console.log('a1Error');
        })
    }
};
export const CreditAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/testjson2a.json').then((e1) => {
            const action = Credit(e1.data);
            dispatch(action);
        }).catch(() => {
            console.log('a1Error');
        })
    }
}