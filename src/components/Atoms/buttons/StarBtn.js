import {useState} from "react";
import styled from "styled-components";

const StyleStarButton = styled.button`
    width:20px;
    height:20px;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StarButton = () => {
    // isStarred: 현재 즐겨찾기 상태를 나타내는 변수
    // setIsStarred: 이 상태를 바꿔주는 함수
    const [isIsstarred, setIsStarred] = useState(true); // 초기값을 true로 설정

    // 토글 함수 prev
    const toggleStar = ()=> {
        // prev: setState 함수형 업데이트를 사용할 때 React가 자동으로 전달해주는 이전 상태값
        //prev는 직접 지정하는게 아니라 setState 함수 안에 함수형 업데이트를 사용할 때 react가 자동으로 전달해주는 이전 상태 값
        setIsStarred(prev=>!prev);
        //setState(prev => _) 처럼 쓰면 React가 이전 상태를 prev 자리에 자동으로 넣어줌..
};

return (
        <StyleStarButton>
            <img src={isIsstarred? "/common/img/StarIcon.svg" : "/common/img/noStarIcon.png"}
            onClick={toggleStar}
            style={{cursor:"pointer"}}
            alt="Toggle Star"
            >
            </img>
        </StyleStarButton>
)};

export default StarButton;