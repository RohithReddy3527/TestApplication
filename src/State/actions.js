import {FETCH_DATA} from './actiontypes'
export const fetchData=(data)=>({
type:FETCH_DATA,
payload:{data}
});
  