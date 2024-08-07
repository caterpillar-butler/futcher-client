import React from 'react';
import finderImg from '../img/finderImg.png';
import finderIcon from '../img/finderIcon.png';

const FinderOfWeek = () => {
  const users = [
    {
      id: 1,
      name: 'OOO 님',
      followers: 1432,
      description: '대구를 기반으로 카페를 추천해드립니다. 분위기 맛집 카페를 찾으시면 저를 팔로우해주세요 !',
    },
    {
      id: 2,
      name: 'OOO 님',
      followers: 1432,
      description: '대구를 기반으로 카페를 추천해드립니다. 분위기 맛집 카페를 찾으시면 저를 팔로우해주세요 !',
    },
    {
      id: 3,
      name: 'OOO 님',
      followers: 1432,
      description: '대구를 기반으로 카페를 추천해드립니다. 분위기 맛집 카페를 찾으시면 저를 팔로우해주세요 !',
    },
  ];

  return (
    <div className="font-sans mb-12">
      <header className="my-12 flex">
        <img src={finderIcon} className="w-12 ml-24" />
        <h1 className="text-left pt-1 ml-2 text-3xl font-bold">금주의 Finder</h1>
      </header>
      <div className="flex justify-center items-end gap-28">
        {users.map((user, index) => (
          <div
            key={user.id}
            className={`border border-gray-300 rounded-xl p-7 w-64 shadow-custom transform transition duration-500
            ${index === 0 ? 'translate-y-8' : ''} 
            ${index === 1 ? '-translate-y-9' : ''} 
            ${index === 2 ? 'translate-y-8' : ''}`}>
            <div className="mb-4">
              <div className="w-40 mx-auto flex items-center justify-center">
                <img src={finderImg} />
              </div>
            </div>
            <div className="text-left">
              <h2 className="text-3xl text-gray-800 border-b border-gray-400 pb-1 font-bold w-28">{user.name}</h2>
              <p className="text-lg text-gray-600 font-semibold mt-2">Followers : {user.followers}명</p>
              <p className="mt-4">{user.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinderOfWeek;
