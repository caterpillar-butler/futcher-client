import { useState } from 'react';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-orange-400 text-white p-4 h-450 relative">
      <Link to="/" className="text-4xl font-bold text-black absolute top-4 left-4 oswald-unique">
        FoodieFinder
      </Link>
      <button className="absolute top-4 right-4" onClick={toggleModal}>
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
              <Link to="/search" className="relative top-[-9px] leading-none">
                <li className="px-4 py-2 text-black text-18px w-218 h-60 hover:bg-yellow-100 cursor-pointer">
                  <span className="material-symbols-outlined mr-10 leading-snug text-32px">search</span>
                  검색하기
                </li>
              </Link>
            </ul>
          </div>
        )}
      </button>
      <div className="flex flex-col items-center justify-center h-full">
        <Link to="#" className="h-220 w-220">
          <div className="bg-white h-220 w-220 border border-solid border-white rounded-full flex items-center justify-center -mt-10">
            {/* <Img
              src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg"
              alt="Placeholder image"
              className="rounded-full"
            /> */}
          </div>
        </Link>
        <div className="text-center mt-40px ">
          <p className="text-27px mt-5px text-black">미식가들의 천국,</p>
          <p className="text-27px mt-5px text-black">당신만의 숨겨진 맛집을 찾아드립니다!</p>
        </div>
      </div>
    </header>
  );
}
