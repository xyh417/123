const defaultStore ={
    testss:"2"
};
export default (state=defaultStore,action)=>{
    if(action.type === 'Infor'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Item:news.Item.Item,
        }
        return newstate;
    }
    return state;
};