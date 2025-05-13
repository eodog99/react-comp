import styled from "styled-components";

const TextInput = styled.input `
    width: ${props => props.size || '150px'};
    height: 26px;
    padding: 0px 4px;
    border: 1px solid #D6D9E0;
    border-radius: 4px;
    &: focus{
    border-color: #1E88E5;
    outline: none;
    }
    &::placeholder {
    color: var(--G400);
    font-size: 14px;
    }
`;

export default TextInput;