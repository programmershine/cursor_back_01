import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const BoardDetail = () => {
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/boards/${id}`);
      setPost(response.data);
      setEditContent(response.data.content);
    } catch (error) {
      console.error('게시글 로딩 실패:', error);
      navigate('/community');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      await axios.delete(`http://localhost:8080/api/boards/${id}`);
      navigate('/community');
    } catch (error) {
      console.error('게시글 삭제 실패:', error);
      alert('게시글 삭제에 실패했습니다.');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/boards/${id}`, {
        content: editContent
      });
      setIsEditing(false);
      fetchPost();
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정에 실패했습니다.');
    }
  };

  if (!post) return null;

  return (
    <PageWrapper>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PostDetail>
            <PostHeader>
              <AuthorInfo>
                <span className="author">{post.authorName}</span>
                <span className="date">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </AuthorInfo>
              {user && user.id === post.authorId && (
                <ButtonGroup>
                  {!isEditing && (
                    <>
                      <EditButton onClick={() => setIsEditing(true)}>
                        수정
                      </EditButton>
                      <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
                    </>
                  )}
                </ButtonGroup>
              )}
            </PostHeader>
            {isEditing ? (
              <EditForm>
                <TextArea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <ButtonGroup>
                  <SaveButton onClick={handleUpdate}>저장</SaveButton>
                  <CancelButton onClick={() => setIsEditing(false)}>
                    취소
                  </CancelButton>
                </ButtonGroup>
              </EditForm>
            ) : (
              <PostContent>{post.content}</PostContent>
            )}
          </PostDetail>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 80px;
`;

const PostDetail = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

const AuthorInfo = styled.div`
  .author {
    font-weight: bold;
    margin-right: 10px;
  }

  .date {
    color: #666;
  }
`;

const PostContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
`;

const EditButton = styled(Button)`
  background: #007bff;
  color: white;

  &:hover {
    background: #0056b3;
  }
`;

const DeleteButton = styled(Button)`
  background: #dc3545;
  color: white;

  &:hover {
    background: #c82333;
  }
`;

const SaveButton = styled(Button)`
  background: #28a745;
  color: white;

  &:hover {
    background: #218838;
  }
`;

const CancelButton = styled(Button)`
  background: #6c757d;
  color: white;

  &:hover {
    background: #5a6268;
  }
`;

const EditForm = styled.div`
  margin-top: 20px;
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

export default BoardDetail; 