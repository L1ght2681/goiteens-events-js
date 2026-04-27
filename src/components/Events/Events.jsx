import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { Info, EventName, Chip, Card } from './Events.styled';

export const Event = ({ name, location, speaker, type }) => {
    return (
        <Card>
            <EventName>{name}</EventName>
            <Info>
                <FaMapMarkerAlt />
                {location}
            </Info>
            <Info>
                <FaUserAlt />
                {speaker}
            </Info>
            <Chip $eventType={type}>{type}</Chip>
        </Card>
    );
};