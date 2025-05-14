import styled from "styled-components";

const StyleNavText = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:160px;
    height: 28px;
    opacity: 0;
    transition: opacity 0.3s ease;
    white-space: noWrap;

`
    
export default function NavText({children }) {
    return<StyleNavText>{children}</StyleNavText>;
};