import {styled} from "styled-components"
import {useState} from "react";
import StarButton from "../../Atoms/buttons/StarBtn";
import BtnGroup from "../BtnGroup";
import Modal from "../modal/Modal";
import NavMenu from "../nav/NavMenu"

const TabWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    padding: 20px;
`;

const TabBox = styled.div`
    display: flex;
`;

const TabButton = styled.button`
    border: none;
    padding: 10px 30px;
    font-size: 16px;
    white-space: noWrap;
    background-color : #fff;
    border-bottom : 2px solid #00529F;
    border-bottom-color: ${({ "data-active": dataActive }) =>
    dataActive === "true" ? "#00529F" : "#D6D9E0"};
    color: ${({ "data-active": dataActive }) =>
    dataActive === "true" ? "#00529F" : "#35383F"};
    font-weight: ${({ "data-active": dataActive }) =>
    dataActive === "true" ? '700' : "500"};
    cursor: pointer;
`;

const TabButtonEmpty = styled.div`
    border-bottom: 2px solid #D6D9E0;
    width: 100%
`;
const TabContent = styled.div`
    padding: 10px;
    height: 100px;

`;

const Tab = () => {
    const TabData = [
    { id: 1, button: "button", content: <BtnGroup/> },
    { id: 2, button: "modal", content: <Modal></Modal> },
    { id: 3, button: "nav", content: <NavMenu></NavMenu> },
    ];

    const [activeTab, setActiveTab] = useState(TabData[0].id); // 초기 상태(TabData의 0번째 인덱스)
   
    return (
        <TabWrap>
            <TabBox>
                {TabData.map((tab)=> (
                    <TabButton
                        key={tab.id}
                        data-active={activeTab === tab.id ? "true": "false"}
                        onClick={() => setActiveTab(tab.id)}>
                            {tab.button}
                    </TabButton>                    
                ))}
                {/* 탭영역이 아닌 부분에 탭버튼과 같은 위치에서 선을 그어주기위한 부분 */}
                <TabButtonEmpty></TabButtonEmpty>
            </TabBox>
            <TabContent>
                {TabData.find((a) => a.id === activeTab)?.content}
            </TabContent>
        </TabWrap>
    );
};

export default Tab;