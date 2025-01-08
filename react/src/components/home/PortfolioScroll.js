import styled from 'styled-components';
import { motion } from 'framer-motion';

const PortfolioScroll = () => {
  const portfolios = [
    { id: 1, title: '준비중입니다', category: '준비중' },
    { id: 2, title: '준비중입니다', category: '준비중' },
    { id: 3, title: '준비중입니다', category: '준비중' },
    { id: 4, title: '준비중입니다', category: '준비중' },
  ];

  return (
    <ScrollWrapper>
      {portfolios.map((portfolio) => (
        <motion.div
          key={portfolio.id}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <PortfolioCard>
            <div className="thumbnail" />
            <div className="content">
              <span className="category">{portfolio.category}</span>
              <h3>{portfolio.title}</h3>
            </div>
          </PortfolioCard>
        </motion.div>
      ))}
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px 0;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;

const PortfolioCard = styled.div`
  min-width: 320px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  .thumbnail {
    width: 100%;
    height: 200px;
    background: #ddd;
  }

  .content {
    padding: 15px;

    .category {
      display: inline-block;
      font-size: 12px;
      color: #007bff;
      margin-bottom: 8px;
    }

    h3 {
      font-size: 18px;
      margin: 0;
    }
  }
`;

export default PortfolioScroll; 