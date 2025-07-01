import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../AuthContext';

export default function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { login } = useAuth(); // ← context 사용

  useEffect(() => {
    if (token) {
      login(token);             // ← 여기서 context를 통해 저장
      window.location.href = '/'; // 또는 useNavigate()로 이동
    }
  }, [token, login]);

  return ;
}