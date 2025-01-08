import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/boards');
      setPosts(response.data);
    } catch (error) {
      console.error('게시글 로딩 실패:', error);
    }
  };

  return (
    <PageWrapper>
      <PageTitle>
        <div className="container">
          <h1>커뮤니티</h1>
          <p>SHINE COMPANY의 소식을 공유합니다</p>
        </div>
      </PageTitle>
      <div className="container">
        <BoardHeader>
          <h2>게시글 목록</h2>
          {user && (
            <WriteButton onClick={() => navigate('/community/write')}>
              글쓰기
            </WriteButton>
          )}
        </BoardHeader>
        <BoardList>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PostItem>
                <Link to={`/community/${post.id}`}>
                  <PostTitle>{post.title}</PostTitle>
                  <PostInfo>
                    <span>{post.authorName}</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </PostInfo>
                </Link>
              </PostItem>
            </motion.div>
          ))}
        </BoardList>
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 80px;
`;

const PageTitle = styled.div`
  background: #f8f9fa;
  padding: 60px 0;
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    font-size: 18px;
  }
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
  }
`;

const WriteButton = styled.button`
  padding: 10px 20px;
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

const BoardList = styled.div`
  border-top: 2px solid #333;
`;

const PostItem = styled.div`
  border-bottom: 1px solid #ddd;
  
  a {
    display: block;
    padding: 20px;
    transition: background-color 0.3s;

    &:hover {
      background: #f8f9fa;
    }
  }
`;

const PostTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  font-size: 14px;
  color: #666;

  span {
    margin-right: 20px;
  }
`;

export default CommunityPage; 