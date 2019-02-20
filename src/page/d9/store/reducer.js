const defaultStore ={
    testss:"2"
};
export default (state=defaultStore,action)=>{
    if(action.type === 'Course'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Item:news.Item.Course,
            Major: news.Item.Major,
            CourseBelong:news.Item.CourseBelong,
            Grade:news.Item.Grade
        }
        return newstate;
    }
    return state;
};