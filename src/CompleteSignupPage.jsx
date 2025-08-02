// CompleteSignupPage.jsx
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CompleteSignupPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get('id');

  useEffect(() => {
    // 실제라면 여기서 /api/user/activate 등 API 요청 후 토큰 받아야 함
    const dummyAccess = 'dummy-access-token';
    const dummyRefresh = 'dummy-refresh-token';

    localStorage.setItem('access', dummyAccess);
    localStorage.setItem('refresh', dummyRefresh);
    localStorage.setItem('id', id);

    navigate('/');
  }, [id, navigate]);

  return <div>회원가입 완료 중... 잠시만 기다려주세요.</div>;
};

export default CompleteSignupPage;
