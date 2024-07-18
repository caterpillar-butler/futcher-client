import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="bg-gray-200 text-black p-4">
			<div className="flex flex-col items-center space-y-4">
				<div className="flex space-x-3 font-bold">
					<a href="#" className="hover:text-gray-700">
						이용약관
					</a>
					<span className="border-l-2 border-black h-5 mt-0.5"></span>
					<a href="#" className="hover:text-gray-700">
						개인정보처리방침
					</a>
					<span className="border-l-2 border-black h-5 mt-0.5"></span>
					<a href="#" className="hover:text-gray-700">
						사이트맵
					</a>
				</div>
				<div className="flex space-x-14">
					<a href="#" aria-label="Instagram">
						<FaInstagram className="text-6xl hover:text-gray-700" />
					</a>
					<a href="#" aria-label="Facebook">
						<FaFacebook className="text-6xl hover:text-gray-700" />
					</a>
					<a href="#" aria-label="Twitter">
						<FaTwitter className="text-6xl hover:text-gray-700" />
					</a>
				</div>
				<p className="text-center text-sm">
					Copyright 2021 BR Media Inc. | All Rights Reserved
				</p>
			</div>
		</footer>
	);
}
