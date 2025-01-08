import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        formData
      );
      login(response.data);
      navigate('/');
    } catch (error) {
      console.error('로그인 에러:', error);
      console.log('에러 응답:', error.response);
      console.log('에러 상세:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <PageWrapper>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FormContainer>
            <h2>로그인</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <label>아이디</label>
                <input
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label>비밀번호</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <ButtonGroup>
                <SubmitButton type="submit">로그인</SubmitButton>
                <RegisterLink to="/register">회원가입</RegisterLink>
              </ButtonGroup>
            </Form>
          </FormContainer>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 80px;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
`;

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 500;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const RegisterLink = styled(Link)`
  text-align: center;
  color: #666;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export default LoginPage; 