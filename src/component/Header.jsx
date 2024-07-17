import React, {useState} from 'react';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-orange-400 text-white p-4 h-450 relative">
      <a
        href="#"
        className="text-4xl font-bold text-black absolute top-4 left-4 oswald-unique"
      >
        FoodieFinder
      </a>
      <a href="#" className="absolute top-4 right-4" onClick={toggleModal}>
        <span className="material-symbols-outlined text-60px">
          account_circle
        </span>
        {isModalOpen && (
          <div className="absolute right-0 mt-2 w-250 h-280 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul>
              <li className="px-4 py-2 text-black w-218 h-60 mt-5 text-20px border-b border-gray-500">
                로그인이 필요합니다.
              </li>
              <li className="px-4 py-2 text-black text-18px w-218 h-60 hover:bg-yellow-100 cursor-pointer">
                <span class="material-symbols-outlined mr-10 leading-snug text-32px">
                  person
                </span>
                <a href="" className="relative top-[-9px] leading-none">
                  로그인
                </a>
              </li>
              <li className="px-4 py-2 text-black text-18px w-218 h-60 hover:bg-yellow-100 cursor-pointer">
                <span class="material-symbols-outlined mr-10 leading-snug text-32px">
                  person
                </span>
                <a href="" className="relative top-[-9px] leading-none">
                  회원가입
                </a>
              </li>
              <li className="px-4 py-2 text-black text-18px w-218 h-60 hover:bg-yellow-100 cursor-pointer">
                <span class="material-symbols-outlined mr-10 leading-snug text-32px">
                  search
                </span>
                <a href="" className="relative top-[-9px] leading-none">
                  검색하기
                </a>
              </li>
            </ul>
          </div>
        )}
      </a>
      <div className="flex flex-col items-center justify-center h-full">
        <a href="#" className="h-220 w-220">
          <div className="bg-white h-220 w-220 border border-solid border-white rounded-full flex items-center justify-center -mt-10">
            <img src="" alt="Placeholder image" className="rounded-full" />
          </div>
        </a>
        <div className="text-center mt-40px ">
          <p className="text-27px mt-5px text-black">미식가들의 천국,</p>
          <p className="text-27px mt-5px text-black">
            당신만의 숨겨진 맛집을 찾아드립니다!
          </p>
        </div>
      </div>
    </header>
  );
}
