const defaultStore ={
    testss:"2"
};
export default (state=defaultStore,action)=>{
    if(action.type === 'Course'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Item:news.Item.Item,
            AllItem: state.AllItem,
            Credit:state.Credit
        }
        return newstate;
    }else if(action.type === 'AllCourse'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            AllItem:news.Item.Item,
            Item:state.Item,
            Credit:state.Credit
        }
        return newstate;
    }else if(action.type === 'Credit'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Credit:news.Item.Item,
            Item:state.Item,
            AllItem:state.AllItem
        }
        return newstate;
    }
    return state;
};