import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border || '#ccc'};
  border-radius: 8px;
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.primaryText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    margin-right: 8px;
    color: ${props => props.theme.colors.secondaryText || 'gray'};
  }
`;

export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    
    background-color: ${({$eventType, theme}) => {
        switch($eventType) {
            case 'free':
                return theme.colors.green;
            case 'paid': 
                return theme.colors.blue;
            case 'vip':
                return theme.colors.red;
            default:
                return theme.colors.black;
        }
    }}
`;
