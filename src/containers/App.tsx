import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from "typesafe-actions";
import { requestRobots, setSearchFieldValue } from '../actions';
import MainPage from '../components/MainPage';
import {IStateProps, IStateRobots, IStateSearch, Props } from '../interfaces';
import './App.css';

const mapStateToProps = (state: { searchRobots: IStateSearch, requestRobots: IStateRobots}) => {
    return {
        error: state.requestRobots.error,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        searchFieldValue: state.searchRobots.searchFieldValue,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType<any>> | ThunkDispatch<IStateProps, Error, AnyAction>) => {
    return {
        onRequestRobots: () => dispatch(requestRobots()),
        onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchFieldValue(event.target.value))
    }
};

class App extends React.Component<IStateProps> {
    public render() {
        return <MainPage { ...this.props as Props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)