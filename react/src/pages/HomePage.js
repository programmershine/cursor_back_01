import styled from 'styled-components';
import Banner from '../components/home/Banner';
import ProductScroll from '../components/home/ProductScroll';
import PortfolioScroll from '../components/home/PortfolioScroll';
import ContactForm from '../components/home/ContactForm';
import MenuOverview from '../components/home/MenuOverview';

const HomePage = () => {
  return (
    <HomeWrapper>
      <Banner />
      <Section>
        <div className="container">
          <h2>제품 소개</h2>
          <ProductScroll />
        </div>
      </Section>
      <Section>
        <div className="container">
          <h2>포트폴리오</h2>
          <PortfolioScroll />
        </div>
      </Section>
      <Section>
        <div className="container">
          <h2>문의하기</h2>
          <ContactForm />
        </div>
      </Section>
      <MenuOverview />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  padding-top: 80px; // Header 높이만큼 패딩
`;

const Section = styled.section`
  padding: 80px 0;
  
  h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: bold;
  }

  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

export default HomePage; 