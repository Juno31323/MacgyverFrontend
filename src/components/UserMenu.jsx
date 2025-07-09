import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../AuthContext';

export default function UserMenu() {
  const { token, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', profileImage: '' });

  useEffect(() => {
    if (token) {
        fetch('/api/me', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Cache-Control': 'no-cache',
              },
          })
            .then((res) => {
              if (res.status === 304) return null;
              return res.json();
            })
            .then((data) => {
              if (data) {
                setUserInfo({
                  name: data.name,
                  profileImage: data.imageUrl || '/default-profile.png',
                });
              }
            });
    }
  }, [token]);

  if (!token) {
    window.location.href = 'http://localhost:8080/oauth2/authorization/kakao'; // 또는 로그인 페이지
  }

  return (
    <div className="relative group">
        <div className="flex items-center space-x-2 cursor-pointer">
            <img src={userInfo.profileImage} className="w-8 h-8 rounded-full" />
            <span>{userInfo.name}</span>
        </div>
        <div className="hidden group-hover:block absolute right-0 w-72 bg-white shadow-xl p-4 rounded-lg z-50">
              <div className="text-sm space-y-2">
                <div className="p-2 hover:bg-gray-50 rounded">마이페이지</div>
                <div className="p-2 hover:bg-gray-50 rounded"onClick={logout}>로그아웃</div>
              </div>
        </div>
    </div>
  );
}