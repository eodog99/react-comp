import styled from "styled-components";
import StarButton from "../../Atoms/buttons/StarBtn";

const SubHeaderWrap = styled.div`
    width: 100%;
    height: 46px;
    border: 1px solid #D6D9E0;
    padding: 8px 20px;
    margin-bottom: 10px;

`

const SubHeaderTitle = styled.div`
height: 100%;
display: flex;
gap: 8px;
align-items: center;
font-size: 20px;
font-weight: 700;
color: var(--text-dark-blue);
`

const SubHeader = () => {

    return(
        <>
        <SubHeaderWrap>
            <SubHeaderTitle>
                {/* <img src="/common/img/StarIcon.svg"></img> */}
                <StarButton></StarButton>
                <h2>2Depth Menu</h2>
            </SubHeaderTitle>
        </SubHeaderWrap>
            
        </>
    )
}

export default SubHeader;