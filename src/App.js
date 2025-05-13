import { useState } from 'react';
import PrimaryButton from './components/Atoms/buttons/PrimaryButton';
import SecondaryButton from './components/Atoms/buttons/SecondaryButton';
import ButtonGroup from './components/Molecules/ButtonGroup';
import InputBtnGroup from './components/Molecules/InputBtnGroup';
import Footer from './components/Organism/tabs/TabButton';
import Modal from './components/Organism/modal/Modal';
import Header from './components/Organism/header/HeaderWrap';
import GlobalStyle from './styles/GlobalStyle';
import SubHeader from './components/Organism/header/SubHeader';
import CheckBox from './components/Atoms/CheckBox';

const App = () => {

  return (
    <>
    <GlobalStyle/>
    <Header></Header>
    <SubHeader></SubHeader>
    <ButtonGroup> 
      <CheckBox></CheckBox>
      <PrimaryButton>Button</PrimaryButton>
      <PrimaryButton disabled={true}>Button</PrimaryButton>
      <SecondaryButton>Button</SecondaryButton>
      <SecondaryButton disabled={true}>Button</SecondaryButton>
      <InputBtnGroup/>
    </ButtonGroup>
    <Footer></Footer>
    <Modal></Modal>

    
  </>

  );
}

export default App;
