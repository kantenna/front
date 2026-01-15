import { useState } from 'react';
import boy1 from '../../assets/img/boy1.jpg';
import boy2 from '../../assets/img/boy2.jpg';

const Poster = () => {
  // useState(): 첫번째 인자 => default값, 두번째인자 => 함수
  const [src, setSrc] = useState<string>(boy1);

  // 버튼 상태 변화 저장
  const [btn, setBtn] = useState<boolean>(true);

  const onToggleHandled = () => {
    if (btn) {
      setSrc(boy1);
      setBtn(false);
    } else {
      setSrc(boy2);
      setBtn(true);
    }
  };

  return (
    <>
      <div className="m-3">
        <div className="mt-8">
          <img src={src} alt="" width={300} height={400} />
          <button
            className="m-2 w-32 rounded bg-blue-500 p-4 text-xl text-white"
            onClick={onToggleHandled}
          >
            이미지 변경
          </button>
        </div>
      </div>
    </>
  );
};

export default Poster;
