import styled from "styled-components";

const TextInput = styled.input `
    width: ${props => props.size || '150px'};
    height: 20px;
    padding 0 12px;
    border: 1px solid #D6D9E0;
    &: focus{
    border-color: #1E88E5;
    outline: none;
    }
`;

export default TextInput;