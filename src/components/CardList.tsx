import * as React from 'react';
import { IRobot } from "../interfaces";
import Card from './Card';

interface ICardListProps {
    robots: IRobot[];
}

const CardList: React.SFC<ICardListProps> = ({ robots }) => {
    return (
        <div>
            {robots.map((robot: IRobot, index: number) => (
                <Card
                    key={`robotId${index}`}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}
                />)
            )}
        </div>
    )
};

export default CardList;