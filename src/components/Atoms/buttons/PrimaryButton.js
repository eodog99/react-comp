import styled from 'styled-components';
import BaseButton from './BaseButton';

const PrimaryButton = styled(BaseButton)`
  width: 280px;
  height: 48px;
  font-size: 16px;
  background-color: ${props => props.disabled ? '#ABB0B9' : '#00529F'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  color: white;
  font-weight:700;
  border-radius: 8px;
  &:hover {
    background-color: ${props => props.disabled ? '#ABB0B9' : '#00427F'};
  }
  &:active {
    background-color: ${props => props.disabled ? '#ABB0B9' : '#00315F'};
    }
`;

export default PrimaryButton;
