import styled from 'styled-components';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <BannerWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <h1>SHINE COMPANY</h1>
        <p>혁신적인 기술로 더 나은 미래를 만듭니다</p>
      </motion.div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  height: 600px;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
              url('/images/banner-bg.jpg') no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    height: 400px;
    
    h1 {
      font-size: 32px;
    }
    
    p {
      font-size: 18px;
    }
  }
`;

export default Banner; 