import { Img } from 'react-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function FindersPick() {
  const navigate = useNavigate();
  const goToPage = () => {
    navigate('/');
  };
  return (
    <div className="flex justify-center">
      <div
        className="w-270 h-[500px] bg-white border border-gray-300 m-10px rounded-[10px]"
        style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.3)' }}>
        <h3 className="text-20px font-bold m-4 flex justify-center">파인더 'OOO'님의 추천</h3>
        <div className="flex justify-center">
          <Img
            src={
              'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187458549420.jpg?gif=1&w=480'
            }
            className="w-220 h-200 border border-gray-300"></Img>
        </div>
        <Link to={goToPage}>
          <p className="font-semibold text-[17px] m-4 mt-4 underline">삼덕동 술집 아지트처럼 아늑한 '철부지' 추천</p>
        </Link>
        <div className="m-6 mt-[30px]">
          <p>Content</p>
          <Link to={goToPage}>...</Link>
        </div>
      </div>
    </div>
  );
}
