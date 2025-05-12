// components/buttons/SecondaryButton.js
import styled from 'styled-components';
import BaseButton from './BaseButton';

const SecondaryButton = styled(BaseButton)` 
  width: 61px;
  height: 26px;
  padding: 0px 6px;
  border-radius: 4px;
  background-color: ${props => props.disabled ? '#ABB0B9' : '#F0F5F9'};
  border: 1px solid ${props => props.disabled ? '#ABB0B9' : '#B0C9E1'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  color: ${props => props.disabled ? '#fff' : '#00529F'};

  &:hover {
    background-color: ${props => props.disabled ? '#ABB0B9' : '#E6EEF5'};
     border: 1px solid ${props => props.disabled ? '#ABB0B9' : '#B0C9E1'};
    color: ${props => props.disabled ? '#fff' : '#00529F'};
  }

  &:active {
    background-color: ${props => props.disabled ? '#ABB0B9' : '#D9E5F1'};
    border-color: ${props => props.disabled ? '#ABB0B9' : '#B0C9E1'};
    color: ${props => props.disabled ? '#fff' : '#00529F'};
  }
`;


export default SecondaryButton;
