import styled from "styled-components";
import NavText from "../../Atoms/nav/NavText";
import NavIcon from "../../Atoms/nav/NavIcon";
import React, {useState} from "react";


const NavItemWrap = styled.li`
    display: flex;
    align-items: center;
    padding: 20px 18px 0px 18px;
    gap: 14px;
    cursor: pointer; 
`;

const FlexRow = styled.div`
        display: flex;
        gap: 12px;
        align-items: center;
        flex-direction: row;
`;

const ItemHeader = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    &:active ul{
         display: block;
    }
`;

const SubMenu = styled.ul`
display: ${props=> props.$open? 'block' : 'none'}};

padding-right: 75px;
`

const SubMenuItem = styled.li`
    padding: 6px 0;
    font-size: 14px;
`

export default function NavItem({icon, label, subItems, isOpen, onToggle, isSidebarOpen}) {   
    return (
        <NavItemWrap>
            <ItemHeader>
                {/* !open은 현재 상태의 반대 값  */}
                <FlexRow onClick={onToggle}> 
                    <NavIcon src={icon} alt={label}/>
                    {isSidebarOpen && <NavText>{label}</NavText>}
                </FlexRow>
                
            
            {/* subItems &&: subItem이 존재한다면 */}
            {subItems &&  (
                <SubMenu $open={isOpen}>
                    {subItems.map((sub, index)=> (
                        <SubMenuItem key={index}>{sub.label}</SubMenuItem>
                    ))}
                </SubMenu>
            )}
            </ItemHeader>
        </NavItemWrap>
    );
}