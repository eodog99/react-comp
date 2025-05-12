import {styled} from "styled-components"
import {useState} from "react";

const FooterBox = styled.div`
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

const Footer = () => {
    const TabData = [
    { id: 1, button: "tab1", content: "tab1." },
    { id: 2, button: "tab2", content: "tab2." },
    { id: 3, button: "tab3", content: "tab3." },
    ];

    const [activeTab, setActiveTab] = useState(TabData[0].id);
   
    return (
        <FooterBox>
            <TabBox>
                {TabData.map((tab)=> (
                    <TabButton
                        key={tab.id}
                        data-active={activeTab === tab.id ? "true": "false"}
                        onClick={() => setActiveTab(tab.id)}>
                            {tab.button}
                    </TabButton>
                    
                ))}
                <TabButtonEmpty></TabButtonEmpty>
            </TabBox>
            <TabContent>
                {TabData.find((a) => a.id === activeTab)?.content}
            </TabContent>
        </FooterBox>
    );
};

export default Footer;