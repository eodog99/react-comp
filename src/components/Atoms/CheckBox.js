import styled from "styled-components";
import React, {use, useState} from "react";

const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 4px;
`

const CheckBox = styled.input.attrs({type: 'checkbox'})`
    width: 16px;
    height: 16px;
    border: 1px solid #D6D9E0;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    background-color: var(--White);
    //기본 css 지우기
    appearance: none;
    -webkit-appearance:none;
    -moz-appearance: none;

    &:checked {
        background-color: #fff;
        border-color: #1E88E5;
    }

 &:checked::after {
    content: " ";
    background-image: url('/common/img/date_chk.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 11px;
    height: 11px;
    position: absolute;
    top: 2px;
    left: 2px;
  }
`;

function Example() {
    const [monthChecked, setMonthChecked] = useState(false);
    const [halfYearChecked, setHalfYearChecked] = useState(false);
    const [quarterChecked, setQuarterChecked] = useState(false);
    const [yearChecked, setYearChecked] = useState(false);


    return (
        <>
         <CheckBoxLabel>
            월
            <CheckBox
                checked={monthChecked}
                onChange={(e)=> setMonthChecked(e.target.checked)}/>
                
        </CheckBoxLabel>
         <CheckBoxLabel>
            반기
            <CheckBox
                checked={halfYearChecked}
                onChange={(e)=> setHalfYearChecked(e.target.checked)}/>
                
        </CheckBoxLabel>
         <CheckBoxLabel>
            분기
            <CheckBox
                checked={quarterChecked}
                onChange={(e)=> setQuarterChecked(e.target.checked)}/>
                
        </CheckBoxLabel>
         <CheckBoxLabel>
            년계
            <CheckBox
                checked={yearChecked}
                onChange={(e)=> setYearChecked(e.target.checked)}/>
                
        </CheckBoxLabel>
        </>
       
    )
}
export default Example;