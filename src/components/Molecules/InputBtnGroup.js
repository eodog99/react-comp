import React, { useState } from 'react';
import SecondaryButton from '../Atoms/buttons/SecondaryButton'
import TextInput from '../Atoms/TextInput';

function InputBtnGroup() {
  const [message, setMessage] = useState('');
  const handleClick = () => {
    alert(message+" 입력완료");
    setMessage('');
  };

  return (
     <>
       <TextInput
        size={'300px'}
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <SecondaryButton onClick={handleClick}>
        입력
      </SecondaryButton>
    </>
  );
}

export default InputBtnGroup;
