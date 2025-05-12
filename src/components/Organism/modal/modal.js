import React, {useState} from "react";
import styled from "styled-components";


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
    background-color: pink;
    text-decoration: none;
    border:none;
    padding:20px;
    color: white;
    border-radius:30px;
    cursor: grab;
`;

 const ExitBtn = styled(ModalBtn)`
    background-color : #4000c7;
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
  border-radius: 20px;
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
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <ModalContainer>
                <ModalBtn onClick={openModalHandler}>open Modal</ModalBtn>
                {isOpen?
                <ModalBackdrop onClick={openModalHandler}>
                    <ModalView onClick={(e) => e.stopPropagation()}>
                        <ExitBtn onClick={openModalHandler}>x</ExitBtn>
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