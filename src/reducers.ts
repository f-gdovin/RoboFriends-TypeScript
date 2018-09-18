import { ActionType } from 'typesafe-actions';
import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_FAILURE, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS
} from './constants';
import { IStateRobots, IStateSearch} from './interfaces';

const initialStateSearch = {
    searchFieldValue: '',
};

export const searchRobots = (state: IStateSearch = initialStateSearch, action: ActionType<any> = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD: {
            return Object.assign({}, state, { searchFieldValue: action.payload });
        }
        default: {
            return state;
        }
    }
};

const initialStateRobots = {
    error: '',
    isPending: false,
    robots: [],
};

export const requestRobots = (state: IStateRobots = initialStateRobots, action: ActionType<any> = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING: {
            return Object.assign({}, state, { isPending: true });
        }
        case REQUEST_ROBOTS_SUCCESS: {
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        }
        case REQUEST_ROBOTS_FAILURE: {
            return Object.assign({}, state, { error: action.payload, isPending: false });
        }
        default: {
            return state;
        }
    }
};