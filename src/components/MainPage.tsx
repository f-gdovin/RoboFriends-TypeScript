import * as React from 'react';
import { IRobot } from '../interfaces';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import './MainPage.css';
import Scroll from './Scroll';
import SearchBox from './SearchBox';

interface IMainPageProps {
    isPending: boolean,
    onRequestRobots: () => void,
    onSearchValueChange: (event: React.SyntheticEvent<HTMLInputElement>) => void,
    robots: IRobot[],
    searchFieldValue: string
}

class MainPage extends React.Component<IMainPageProps, {}> {

    public componentDidMount(): void {
        this.props.onRequestRobots();
    };

    public filterRobots = (): IRobot[] => {
        const { robots, searchFieldValue } = this.props;
        return robots.filter(robot =>
            robot.name.toLowerCase().includes(searchFieldValue.toLowerCase()));
    };

    public render(): JSX.Element {
        const { isPending, onSearchValueChange } = this.props;

        return (isPending ?
                <h1>Loading robots...</h1> :
                (<div className='tc'>
                    <Header />
                    <SearchBox onChange={ onSearchValueChange }/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ this.filterRobots() }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>)
        )
    }
}

export default MainPage;