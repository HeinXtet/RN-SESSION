import { ajax } from 'rxjs/ajax';
import {mergeMap,map, catchError, mapTo} from 'rxjs/operators'
import {ofType} from 'redux-observable'
import { 
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR
 }
     from '../actions/userAction';
import { of } from 'rxjs';

// epic
export const getUserEpic = action$ => action$.pipe(
  ofType(GET_USER),
  mergeMap(action =>
    ajax.getJSON(`https://api.github.com/users/${action.userName}`).pipe(
      map(response => ({type : GET_USER_SUCCESS,payload : response})),
      catchError(error=> of({type : GET_USER_ERROR,error : error}))
    )
  )
);

