import NavItem from "../../Molecules/nav/NavItem";
import styled from "styled-components";
import React,{useState} from "react";

const StyleNav = styled.nav`
    width: ${(props)=> (props.$open? "240px": "60px")};
    height: 100vh;
    padding: 0px;
    overflow: hidden;
    transition: width 0.5s ease;
    border-right : 1px solid #ccc;

    &:hover p {
        opacity: 1;
    }
`

const navList = [
    {icon: "/common/img/StarIcon.svg",to:"/home", label: "홈",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    },
    {icon: "/common/img/StarIcon.svg", label: "즐겨찾기",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    },
    {icon: "/common/img/StarIcon.svg", label: "종합속보",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    },
    {icon: "/common/img/StarIcon.svg", label: "조업통계분석",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    },
    {icon: "/common/img/StarIcon.svg", label: "비정형분석",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    },
    {icon: "/common/img/StarIcon.svg", label: "조업표준관리",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    },
    {icon: "/common/img/StarIcon.svg", label: "선재조업예측모델",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    },
    {icon: "/common/img/StarIcon.svg", label: "FDPS",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    },
    {icon: "/common/img/StarIcon.svg", label: "선재롤관리",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    },
    {icon: "/common/img/StarIcon.svg", label: "ITV Monitoring",
        subItems: [
            {label: "2depth"},
            {label: "2depth"}
        ],
    }
];

export default function NavMenu() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [openItem, setOpenItems] = useState(null);// 각 항목별 open 상태 저장

    const handleToggleItem = (label) => {
        setOpenItems(prev => (prev === label? null:label));
    };

    const handleSidebarLeave = () => {
        setSidebarOpen(false);
        setOpenItems({});
    };

    return (
        <StyleNav
            $open={isSidebarOpen}
            onMouseEnter={()=> setSidebarOpen(true)}
            onMouseLeave={handleSidebarLeave}>
                <ul>
                    {navList.map((item) => (
                        <NavItem
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            subItems={item.subItems}
                            isOpen={openItem === item.label}
                            onToggle={() => handleToggleItem(item.label)}
                            isSidebarOpen={isSidebarOpen}
                        />
                    ))}
                </ul>
        </StyleNav>
    );
}