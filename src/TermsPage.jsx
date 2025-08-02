import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const TermsPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get('id');
  const access = params.get('access');

  const handleAgree = () => {
    alert(`✅ 약관 동의 완료\nid: ${id}\naccess: ${access}`);
    navigate(`/oauth/complete-signup?id=${id}&access=${access}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📜 약관 동의 페이지</h2>
      <p>이용 약관 및 개인정보처리방침에 동의해주세요.</p>

      <div style={{ background: '#eee', padding: '1rem', marginBottom: '1rem' }}>
        여기에 약관 내용을 적어주세요.
      </div>

      <button onClick={handleAgree}>동의하고 계속하기</button>
    </div>
  );
};

export default TermsPage;
