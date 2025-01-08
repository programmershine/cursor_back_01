import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubNavigation = ({ currentPath }) => {
  const menus = [
    { path: '/about/greeting', name: '인사말' },
    { path: '/about/mission', name: '미션/비전' },
    { path: '/about/history', name: '연혁' }
  ];

  return (
    <NavWrapper>
      <div className="container">
        <NavList>
          {menus.map((menu) => (
            <NavItem key={menu.path} active={currentPath === menu.path}>
              <Link to={menu.path}>{menu.name}</Link>
            </NavItem>
          ))}
        </NavList>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  border-bottom: 1px solid #ddd;
  margin-bottom: 40px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const NavItem = styled.li`
  a {
    display: block;
    padding: 15px 30px;
    color: ${props => props.active ? '#007bff' : '#666'};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    border-bottom: 2px solid ${props => props.active ? '#007bff' : 'transparent'};
    transition: all 0.3s;

    &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 10px 0;
    }
  }
`;

export default SubNavigation; 