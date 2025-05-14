import { useState } from 'react';
import PrimaryButton from './components/Atoms/buttons/PrimaryButton';
import SecondaryButton from './components/Atoms/buttons/SecondaryButton';
import ButtonGroup from './components/Molecules/ButtonGroup';
import InputBtnGroup from './components/Molecules/InputBtnGroup';
import Tab from './components/Organism/tabs/TabButton';
import Modal from './components/Organism/modal/Modal';
import Header from './components/Organism/header/HeaderWrap';
import GlobalStyle from './styles/GlobalStyle';
import SubHeader from './components/Organism/header/SubHeader';
import CheckBox from './components/Atoms/CheckBox';
import NavMenu from './components/Organism/nav/NavMenu';
import StarButton from './components/Atoms/buttons/StarBtn';


const App = () => {

  return (
    <>
    <GlobalStyle/>
    <Header></Header>
    <SubHeader></SubHeader>
   
    <Tab></Tab>
    
    
  </>

  );
}

export default App;
