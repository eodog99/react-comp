import React, {useState} from "react";
import styled from "styled-components";
import SecondaryButton from "../../Atoms/buttons/SecondaryButton";


// 모달 
const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;


// 오버레이 
 const ModalBackdrop = styled.div`
    z-index: 1;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
    border-radius: 10px;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
`;

 const ModalBtn = styled.button`
    background-color: #00529F;
    text-decoration: none;
    border:none;
    padding:20px;
    color: white;
    cursor: grab;
`;
const ModalHead = styled.div`
    width: 100%;
    height: 46px;
    background-color: #00529F;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
`

 const ExitBtn = styled(ModalBtn)`
    border-radius: 10px;
    text-decoration: none;
    margin: 10px;
    padding: 5px 10px;
    width: 20px;
    height: 20px;
    display : flex;
    justify-content : center;
    align-items : center;
`;

 const ModalView = styled.div.attrs((props)=> ({
    role: 'dialog',
}))`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  width: 500px;
  heigth: 200px;
  background-color: #ffffff;
    >div.desc {
      margin: 50px;
      font-size: 20px;
      color: var(--coz-purple-600);
    }
`;

const Modal = ()=> {
    // 모달 열기 닫기 상태를 제어하는 state
    const [isOpen, setIsOpen] = useState(false);

    // 클릭할 때마다 열기 닫기를 토글함
    const openModalHandler = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <ModalContainer>
                <SecondaryButton onClick={openModalHandler}>Modal</SecondaryButton>
                {isOpen?
                <ModalBackdrop onClick={openModalHandler}>
                    <ModalView onClick={(e) => e.stopPropagation()}>
                        <ModalHead><ExitBtn onClick={openModalHandler}><img src="/common/img/close.svg"></img></ExitBtn></ModalHead>
                        <div className="desc">Hello</div>
                    </ModalView>
                </ModalBackdrop>
                    :null
                }
            </ModalContainer>
        </>
    );
};




export default Modal;