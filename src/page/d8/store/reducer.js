const defaultStore ={
    testss:"2"
};
export default (state=defaultStore,action)=>{
    if(action.type === 'Exam'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Item:news.Item.Item,
        }
        return newstate;
    }
    return state;
};