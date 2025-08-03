import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const CompleteSignupPage = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const access = params.get('access');
    const id = params.get('id');

    if (access && id) {
      localStorage.setItem('access', access);
      localStorage.setItem('id', id);
      alert(`📥 임시 Access 저장\naccess: ${access}\nid: ${id}`);
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const access = localStorage.getItem('access');
    const id = localStorage.getItem('id');

    if (!access || !id) {
      alert('❌ 로그인 정보가 없습니다.');
      navigate('/');
      return;
    }

    try {
      setSubmitting(true);

      alert('📤 최종 회원가입 요청 중...');
      await axios.post('http://localhost:8080/api/user/complete-sign-up',
        { nickname, email },
        { headers: { Authorization: `Bearer ${access}` } }
      );

      alert('♻️ Access → Refresh 교체 요청 중...');
      const res = await axios.post(
      'http://localhost:8080/api/auth/oauth-login',
      {},
      {
        headers: {
          Authorization: `Bearer ${access}`        }
      }
    );

      const { access: newAccess, refresh } = res.data.data;
      localStorage.setItem('access', newAccess);
      localStorage.setItem('refresh', refresh);
      alert(`🎉 최종 로그인 완료\naccess: ${newAccess}\nrefresh: ${refresh}`);

      navigate('/');
    } catch (err) {
      console.error(err);
      alert('❌ 회원가입 실패');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🏁 최종 회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>닉네임:</label>
          <input value={nickname} onChange={(e) => setNickname(e.target.value)} required />
        </div>
        <div>
          <label>이메일:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? '처리 중...' : '회원가입 완료'}
        </button>
      </form>
    </div>
  );
};

export default CompleteSignupPage;
