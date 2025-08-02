// App.jsx (엔트리 포인트)
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [authInfo, setAuthInfo] = useState(null);

  useEffect(() => {
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');
    const id = localStorage.getItem('id');

    if (access && refresh) {
      console.log('[로그인 상태] access:', access);
      setAuthInfo({ access, refresh, id });
    } else {
      console.log('[비로그인 상태] localStorage 모두 토큰 없음');
    }
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Fizz OAuth2 Login Test</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>

      {authInfo && (
        <div style={{ marginTop: '2rem' }}>
          <h4>✅ 인증 성공</h4>
          <p><strong>User ID:</strong> {authInfo.id}</p>
          <p><strong>Access Token:</strong> {authInfo.access}</p>
          <p><strong>Refresh Token:</strong> {authInfo.refresh}</p>
        </div>
      )}
    </div>
  );
};
export default Home;
