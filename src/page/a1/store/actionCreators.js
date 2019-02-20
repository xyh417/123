import axios from 'axios';
const Course = (Item) => ({
    type:'Course',
    Item
})
const AllCourse = (Item) => ({
    type:'AllCourse',
    Item
})
const SelectedCourse = (Item) => ({
    type:'SelectedCourse',
    Item
})
export const Courseaction = () => {
    return (dispatch) =>{
    axios.get('http://localhost:3000/testjson.json').then((e1) => {
        const action = Course(e1.data);
        dispatch(action);
    }).catch(() => {
        console.log('a1Error');
    })
    }
};
export const AllCourseaction = () => {
    return (dispatch) =>{
        axios.get('http://localhost:3000/testjson1.json').then((e1) => {
            const action = AllCourse(e1.data);
            dispatch(action);
        }).catch(() => {
            console.log('a1Error');
        })
    }
};
export const SelectedCourseaction = () => {
    return(dispatch) => {
        axios.get('http://localhost:3000/testjson1.json').then((e1) => {
            const action = SelectedCourse(e1.data);
            dispatch(action);
        }).catch(() => {
            console.log('a1Error');
        })
    }
}