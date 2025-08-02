// TermsPage.jsx
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const TermsPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get('id');

  const handleAgree = () => {
    // 약관 동의 완료 후 토큰 발급 요청 페이지로 이동
    navigate(`/oauth/complete-signup?id=${id}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📜 약관 동의</h2>
      <p>서비스 이용을 위해 약관에 동의해주세요.</p>
      <button onClick={handleAgree}>동의하고 계속하기</button>
    </div>
  );
};

export default TermsPage;
