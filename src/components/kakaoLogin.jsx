import { useAuth } from "../AuthContext";

export default function KakaoRedirectLoginButton() {
    const { token, logout } = useAuth();

    const handleLogin = () => {
        if (token) {
            logout(); // 토큰 제거 + 상태 초기화
          } else {
            window.location.href = 'http://localhost:8080/oauth2/authorization/kakao'; // 또는 로그인 페이지
          }
    };
  
    return (
      <button onClick={handleLogin} className="bg-yellow-400 p-2 rounded">
        {token ? '로그아웃' : '로그인'}
      </button>
    );
  }