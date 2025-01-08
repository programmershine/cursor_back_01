import styled from 'styled-components';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  return (
    <PageWrapper>
      <PageTitle>
        <div className="container">
          <h1>포트폴리오</h1>
          <p>SHINE COMPANY의 주요 프로젝트를 소개합니다</p>
        </div>
      </PageTitle>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PreparingMessage>
            <h2>준비중입니다</h2>
            <p>더 나은 서비스로 찾아뵙겠습니다.</p>
          </PreparingMessage>
        </motion.div>
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

const PreparingMessage = styled.div`
  text-align: center;
  padding: 100px 0;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #007bff;
  }

  p {
    font-size: 18px;
    color: #666;
  }
`;

export default PortfolioPage; 