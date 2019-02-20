const defaultStore ={
    testss:"2"
};
export default (state=defaultStore,action)=>{
    if(action.type === 'Score'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Item:news.Item.Item,
            Infor: state.Infor
        }
        return newstate;
    }else if (action.type==='Infor'){
        const news = JSON.parse(JSON.stringify(action));
        const newstate = {
            Infor:news.Item.Item,
            Item:state.Item
        }
        return newstate;
    }
    return state;
};