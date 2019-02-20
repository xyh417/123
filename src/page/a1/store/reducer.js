const defaultStore ={
    testss:"2"
};
export default (state=defaultStore,action)=>{
    if(action.type === 'Course'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Item:news.Item.Item,
        }
        return newstate;
    }else if(action.type === 'AllCourse'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Item:news.Item.Item,
        }
        return newstate;
    }else if(action.type === 'SelectedCourse'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Item:news.Item.Item
        }
        return newstate;
    }
    return state;
};