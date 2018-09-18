import { action } from 'typesafe-actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILURE,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';


export const setSearchFieldValue = (text: string) =>
    action(CHANGE_SEARCH_FIELD, text);

export const requestRobots: (() => (dispatch: any) => void) = () => (dispatch: any) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: error }))
};