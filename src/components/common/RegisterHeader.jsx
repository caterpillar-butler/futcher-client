import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-orange-400 text-white p-4 h-20 flex items-center justify-between relative">
      <div className="flex items-center">
        <div className="bg-gray-300 rounded-full h-16 w-16 mr-4"></div>
        <Link to="/" className="text-4xl font-bold text-black oswald-unique">
          FoodieFinder
        </Link>
      </div>
      <div className="relative">
        <button onClick={toggleModal} className="text-4xl">
          <span className="material-symbols-outlined text-60px">account_circle</span>
        </button>
        {isModalOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul>
              <li className="px-4 py-2 text-black border-b border-gray-500">로그인이 필요합니다.</li>
              <li className="px-4 py-2 text-black hover:bg-yellow-100 cursor-pointer">
                <Link to="/login">로그인</Link>
              </li>
              <li className="px-4 py-2 text-black hover:bg-yellow-100 cursor-pointer">
                <Link to="/register">회원가입</Link>
              </li>
              <li className="px-4 py-2 text-black hover:bg-yellow-100 cursor-pointer">
                <Link to="/search">검색하기</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
