import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Greeting from '../components/about/Greeting';
import Mission from '../components/about/Mission';
import History from '../components/about/History';
import SubNavigation from '../components/about/SubNavigation';

const AboutPage = () => {
  const location = useLocation();

  return (
    <AboutWrapper>
      <PageTitle>
        <div className="container">
          <h1>회사소개</h1>
          <p>SHINE COMPANY를 소개합니다</p>
        </div>
      </PageTitle>
      <SubNavigation currentPath={location.pathname} />
      <div className="container">
        <Routes>
          <Route path="greeting" element={<Greeting />} />
          <Route path="mission" element={<Mission />} />
          <Route path="history" element={<History />} />
        </Routes>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
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

export default AboutPage; 