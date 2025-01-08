import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterContent>
          <CompanyInfo>
            <h2>SHINE COMPANY</h2>
            <p>주소: 서울특별시 강남구 테헤란로 123</p>
            <p>전화: 02-123-4567</p>
            <p>이메일: info@shinecompany.com</p>
            <p>사업자등록번호: 123-45-67890</p>
          </CompanyInfo>
          <FooterMenu>
            <MenuSection>
              <h3>소개</h3>
              <ul>
                <li><Link to="/about/greeting">인사말</Link></li>
                <li><Link to="/about/mission">미션/비전</Link></li>
                <li><Link to="/about/history">연혁</Link></li>
              </ul>
            </MenuSection>
            <MenuSection>
              <h3>제품/서비스</h3>
              <ul>
                <li><Link to="/products">제품</Link></li>
                <li><Link to="/portfolio">포트폴리오</Link></li>
              </ul>
            </MenuSection>
            <MenuSection>
              <h3>고객지원</h3>
              <ul>
                <li><Link to="/community">커뮤니티</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </MenuSection>
          </FooterMenu>
        </FooterContent>
        <Copyright>
          © 2024 SHINE COMPANY. All rights reserved.
        </Copyright>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: #333;
  color: #fff;
  padding: 50px 0 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    color: #aaa;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const FooterMenu = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuSection = styled.div`
  h3 {
    margin-bottom: 15px;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 10px;
    
    a {
      color: #aaa;
      font-size: 14px;
      transition: color 0.3s;

      &:hover {
        color: #fff;
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
  color: #aaa;
  font-size: 14px;
`;

export default Footer; 