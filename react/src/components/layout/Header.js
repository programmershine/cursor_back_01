import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <div className="container">
        <Logo>
          <Link to="/">SHINE COMPANY</Link>
        </Logo>
        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
        <Nav isOpen={isMenuOpen}>
          <MainMenu>
            <li>
              <Link to="/about">소개</Link>
              <SubMenu>
                <li><Link to="/about/greeting">인사말</Link></li>
                <li><Link to="/about/mission">미션/비전</Link></li>
                <li><Link to="/about/history">연혁</Link></li>
              </SubMenu>
            </li>
            <li><Link to="/products">제품</Link></li>
            <li><Link to="/portfolio">포트폴리오</Link></li>
            <li><Link to="/community">커뮤니티</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </MainMenu>
          <AuthMenu>
            {user ? (
              <button onClick={handleLogout}>로그아웃</button>
            ) : (
              <>
                <Link to="/login">로그인</Link>
                <Link to="/register">회원가입</Link>
              </>
            )}
            <Link to="/contact">고객센터</Link>
          </AuthMenu>
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: white;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 10px;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: #333;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MainMenu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  > li {
    position: relative;
    padding: 20px 0;

    &:hover {
      > a {
        color: #007bff;
      }
      > ul {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background: white;
  list-style: none;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: 0.3s;

  li {
    padding: 8px 20px;
    &:hover {
      background: #f8f9fa;
      a {
        color: #007bff;
      }
    }
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    padding-left: 20px;
  }
`;

const AuthMenu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a, button {
    font-size: 14px;
    color: #666;
    &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default Header; 