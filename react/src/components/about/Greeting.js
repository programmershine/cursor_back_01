import styled from 'styled-components';
import { motion } from 'framer-motion';

const Greeting = () => {
  return (
    <GreetingWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ContentGrid>
          <TextContent>
            <h2>혁신적인 기술로<br />더 나은 미래를 만듭니다</h2>
            <p>
              안녕하십니까, SHINE COMPANY 대표이사 입니다.<br /><br />
              저희 SHINE COMPANY는 끊임없는 혁신과 도전을 통해 더 나은 미래를 만들어가고 있습니다.
              고객의 니즈를 정확히 파악하고, 최고의 기술력으로 해결책을 제시하며,
              지속가능한 성장을 위해 노력하고 있습니다.<br /><br />
              앞으로도 SHINE COMPANY는 고객과 함께 성장하며, 더 나은 미래를 만들어가는
              신뢰할 수 있는 파트너가 되도록 하겠습니다.
            </p>
            <Signature>
              SHINE COMPANY 대표이사 홍길동
            </Signature>
          </TextContent>
          <ImageContent>
            <div className="image-placeholder" />
          </ImageContent>
        </ContentGrid>
      </motion.div>
    </GreetingWrapper>
  );
};

const GreetingWrapper = styled.div`
  padding: 40px 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  h2 {
    font-size: 32px;
    margin-bottom: 30px;
    line-height: 1.4;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #666;
    margin-bottom: 30px;
  }
`;

const Signature = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ImageContent = styled.div`
  .image-placeholder {
    width: 100%;
    padding-bottom: 75%;
    background: #ddd;
    border-radius: 8px;
  }
`;

export default Greeting; 