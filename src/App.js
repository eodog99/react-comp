import { useState } from 'react';
import PrimaryButton from './components/Atoms/buttons/PrimaryButton';
import SecondaryButton from './components/Atoms/buttons/SecondaryButton';
import ButtonGroup from './components/Molecules/ButtonGroup';
import MyComponent from './components/Molecules/InputBtnGroup';
import Footer from './components/Organism/tabs/TabButton';
import Modal from './components/Organism/modal/modal';

const App = () => {

  return (
    <>
    <ButtonGroup>
      <PrimaryButton>Button</PrimaryButton>
      <PrimaryButton disabled={true}>Button</PrimaryButton>
      <SecondaryButton>Button</SecondaryButton>
      <SecondaryButton disabled={true}>Button</SecondaryButton>
      <MyComponent />
    </ButtonGroup>
    <Footer></Footer>
    <Modal></Modal>
  </>

  );
}

export default App;
