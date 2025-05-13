import styled from "styled-components";

const HeaderWrap = styled.div`
    width: 100%;
    height: 46px;
    padding: 12px 24px; 
    background-color: var(--posco400);
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 15px;
    
    @media screen and (max-width: 1536px) {
     background-color:rgb(58, 98, 136);

    }
`

const HeaderTitle = styled.h2`
    height: 100%;
    font-weight: 700;
    font-size:18px;
    color:#fff;
    display: flex;
    align-items: center;
    &:before {
        width: 2px;
        height: 10px;
        background-color: #fff;
        border: none
    }
`;



const HeaderInfo = styled.div`
    height: 100%;
    font-size:16px;
    font-weight: 500;
    color:#fff;
    display: flex;
    align-items: center;
`

const Header = () => {
    return(
        <>
        <HeaderWrap>
            <HeaderTitle>
                <img src="/common/img/PoscoLogo.svg"></img>
                <p>선재 PosFrame</p></HeaderTitle>
            <HeaderInfo>홍길동</HeaderInfo>
        </HeaderWrap>
        <br></br>
        </>
    )
}

export default Header