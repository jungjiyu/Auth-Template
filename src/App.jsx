import React from 'react';

const Home = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };

  const handleNaverLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/naver';
  };

    const handleKakaoLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
  };
  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 eazyy OAuth2 Login Test</h2>

      <button onClick={handleGoogleLogin} style={{ marginRight: '1rem' }}>
        Login with Google
      </button>

      <button onClick={handleNaverLogin} style={{ backgroundColor: '#1EC800', color: 'white' , marginRight: '1rem' }}>
        Login with Naver
      </button>

      <button onClick={handleKakaoLogin} style={{ backgroundColor: '#FFD400', color: 'black' }}>
        Login with Kakao
      </button>
    </div>
  );
};

export default Home;
