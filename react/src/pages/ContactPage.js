import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../components/home/ContactForm';

const ContactPage = () => {
  return (
    <PageWrapper>
      <PageTitle>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p>SHINE COMPANY에 문의하세요</p>
          </motion.div>
        </div>
      </PageTitle>
      <Section>
        <div className="container">
          <InfoGrid>
            <InfoCard>
              <h3>주소</h3>
              <p>서울특별시 강남구 테헤란로 123</p>
            </InfoCard>
            <InfoCard>
              <h3>전화</h3>
              <p>02-123-4567</p>
            </InfoCard>
            <InfoCard>
              <h3>이메일</h3>
              <p>info@shinecompany.com</p>
            </InfoCard>
          </InfoGrid>
        </div>
      </Section>
      <Section>
        <div className="container">
          <h2>문의하기</h2>
          <ContactForm />
        </div>
      </Section>
      <MapSection>
        <div className="container">
          <h2>오시는 길</h2>
          <MapPlaceholder>
            지도가 들어갈 자리입니다
          </MapPlaceholder>
        </div>
      </MapSection>
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

const Section = styled.section`
  padding: 60px 0;

  h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #007bff;
  }

  p {
    color: #666;
  }
`;

const MapSection = styled(Section)`
  background: #f8f9fa;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 18px;
  border-radius: 8px;
`;

export default ContactPage; 