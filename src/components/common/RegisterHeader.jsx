import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Img } from 'react-image';

export default function HeaderRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <header className="bg-orange-400 text-white p-4 h-140 flex justify-center items-center relative">
        <div className="absolute left-4 flex flex-col items-center">
          <Link to="/" className="h-100 w-100">
            <div className="bg-white h-100 w-100 border border-solid border-white rounded-full">
              <Img src="" alt="Placeholder image" className="rounded-full" />
            </div>
          </Link>
        </div>
        <Link to="/" className="text-5xl font-bold text-black flex justify-center items-center oswald-unique">
          FoodieFinder
        </Link>
        <button className="absolute top-4 right-4 cursor-pointer" onClick={toggleModal}>
          <span className="material-symbols-outlined text-60px">account_circle</span>
          {isModalOpen && (
            <div className="absolute right-0 mt-2 w-250 h-280 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul>
                <li className="px-4 py-2 text-black w-218 h-60 mt-5 text-20px border-b border-gray-500">
                  로그인이 필요합니다.
                </li>
                <Link to="/login" className="relative top-[-9px] leading-none">
                  <li className="px-4 py-2 text-black text-18px w-218 h-60 hover:bg-yellow-100 cursor-pointer">
                    <span className="material-symbols-outlined mr-10 leading-snug text-32px">person</span>
                    로그인
                  </li>
                </Link>
                <Link to="/register" className="relative top-[-9px] leading-none">
                  <li className="px-4 py-2 text-black text-18px w-218 h-60 hover:bg-yellow-100 cursor-pointer">
                    <span className="material-symbols-outlined mr-10 leading-snug text-32px">person</span>
                    회원가입
                  </li>
                </Link>
                <Link to="" className="relative top-[-9px] leading-none">
                  <li className="px-4 py-2 text-black text-18px w-218 h-60 hover:bg-yellow-100 cursor-pointer">
                    <span className="material-symbols-outlined mr-10 leading-snug text-32px">search</span>
                    검색하기
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </button>
      </header>
    </div>
  );
}
