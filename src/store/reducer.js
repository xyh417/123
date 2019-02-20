import {combineReducers} from 'redux'
import {reducer as reducera1} from '../page/a1/store/index';
import {reducer as reducerheader} from '../common/header/store/index';
import {reducer as reducera2} from '../page/a2/store/index'
import {reducer as reducerb1} from '../page/b1/store/index'
import {reducer as reducerc1} from '../page/c1/store/index'
import {reducer as reducerd4} from '../page/d4/store/index'
import {reducer as reducerd5} from '../page/d5/store/index'
import {reducer as reducerd7} from '../page/d7/store/index'
import {reducer as reducerd8} from '../page/d8/store/index'
import {reducer as reducerd10} from '../page/d10/store/index'
import {reducer as reducerd9} from '../page/d9/store/index'
import {reducer as reducerd11} from '../page/d11/store/index'
const reducer = combineReducers({
    a1:reducera1,
    header:reducerheader,
    a2:reducera2,
    b1:reducerb1,
    c1:reducerc1,
    d4:reducerd4,
    d5:reducerd5,
    d7:reducerd7,
    d8:reducerd8,
    d10:reducerd10,
    d9:reducerd9,
    d11:reducerd11
});
export default reducer;