import { useState } from 'react';
import '../../App.css';

function InputMultiSample2() {
  const [inputs, setInputs] = useState<{ name: string; nickName: string }>({
    name: '',
    nickName: '',
  });

  const { name, nickName } = inputs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <input
        type="text"
        name=""
        onChange={handleChange}
        value={name}
        placeholder="이름"
        className="border-2 p-1.5"
      />
      <input
        type="text"
        name=""
        onChange={handleChange}
        value={nickName}
        placeholder="닉네임"
        className="border-2 p-1.5"
      />
      <button
        className="bg-red-500 p-2"
        onClick={() =>
          setInputs({
            name: '',
            nickName: '',
          })
        }
      >
        초기화
      </button>
      <div>
        <b>
          입력값 : {name} : ({nickName})
        </b>
      </div>
    </>
  );
}

export default InputMultiSample2;
