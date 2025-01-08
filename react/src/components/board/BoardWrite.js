import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const BoardWrite = () => {
  const [content, setContent] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/boards', 
        { content },
        { headers: { 'X-USER-ID': user.id } }
      );
      navigate('/community');
    } catch (error) {
      console.error('게시글 작성 실패:', error);
      alert('게시글 작성에 실패했습니다.');
    }
  };

  return (
    <PageWrapper>
      <div className="container">
        <WriteForm onSubmit={handleSubmit}>
          <h2>글쓰기</h2>
          <TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            required
          />
          <ButtonGroup>
            <SubmitButton type="submit">등록</SubmitButton>
            <CancelButton type="button" onClick={() => navigate('/community')}>
              취소
            </CancelButton>
          </ButtonGroup>
        </WriteForm>
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 80px;
`;

const WriteForm = styled.form`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  font-size: 16px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
`;

const SubmitButton = styled(Button)`
  background: #007bff;
  color: white;

  &:hover {
    background: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background: #6c757d;
  color: white;

  &:hover {
    background: #5a6268;
  }
`;

export default BoardWrite; 