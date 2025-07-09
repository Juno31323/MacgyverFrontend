import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../AuthContext';

export default function OAuthCallback() {
  const [searchParams] = useSearchParams(); //url에서 쿼리 파라미터를 가져옴
  const token = searchParams.get('token'); // 파라미터에서 토큰 추출
  const { login } = useAuth(); // 토큰을 저장하는 역할할

  useEffect(() => {
    if (token) {
      login(token);             // ← 여기서 context를 통해 저장
      window.location.href = '/'; // 또는 useNavigate()로 이동
    }
  }, [token, login]);

  return ;
}