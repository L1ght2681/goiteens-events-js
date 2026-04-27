import { Board } from "./PageBoard.styled";
import { Event } from "../Events/Events";

export const PageBoard = ({ events = [] }) => {
    return (
        <Board>
            {events.map(({ name, location, speaker, type }) => (
                <Event 
                    key={name}
                    name={name}
                    location={location}
                    speaker={speaker}
                    type={type}
                />
            ))}
        </Board>
    );
};

