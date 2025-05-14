import styled from "styled-components";

const StyleNavIcon = styled.div`
    width: 20px;
    height: 20px;
`
export default function NavIcon({src, alt}) {
    return <StyleNavIcon><img src={src} alt={alt} className="w-6 h-6"></img></StyleNavIcon>;
};