import * as React from "react";

export interface IRobot {
    name: string;
    id: number;
    email: string;
}

export interface IStateRobots {
    isPending: boolean;
    error: string;
    robots: IRobot[];
}

export interface IStateSearch {
    searchFieldValue: string;
}

export type IStateProps = IStateRobots & IStateSearch

export interface IDispatchProps {
    onSearchValueChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
    onRequestRobots: () => IRobot[];
}

export type Props = IStateProps & IDispatchProps