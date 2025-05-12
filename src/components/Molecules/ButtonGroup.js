import React, { Children } from "react";
import styled from "styled-components";

const GroupWrapper = styled.div`
    display: flex;
    align-items : center;
    gap: 4px;
`;

const ButtonGroup = ({children}) => {
    return <GroupWrapper>{children}</GroupWrapper>;
};

export default ButtonGroup;