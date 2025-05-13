// components/buttons/BaseButton.js
import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: ${props => props.bgColor || '#fff'};
  font-size : ${props => props.size || '14px'};
  border-radius: 4px;
  font-weight: 700; 
  color: white;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  transition: 0.2s;

`;

export default BaseButton;
