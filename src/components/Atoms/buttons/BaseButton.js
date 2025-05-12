// components/buttons/BaseButton.js
import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: ${props => props.bgColor || 'blue'};
  font-size : ${props => props.size || '14px'};
  font-weight: 700; 
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition: 0.2s;

`;

export default BaseButton;
