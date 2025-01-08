import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MenuOverview = () => {
  const menus = [
    {
      title: '회사소개',
      items: [
        { name: '인사말', path: '/about/greeting' },
        { name: '미션/비전', path: '/about/mission' },
        { name: '연혁', path: '/about/history' }
      ]
    },
    {
      title: '제품',
      items: [
        { name: '제품 소개', path: '/products' }
      ]
    },
    {
      title: '포트폴리오',
      items: [
        { name: '포트폴리오', path: '/portfolio' }
      ]
    },
    {
      title: '고객지원',
      items: [
        { name: '커뮤니티', path: '/community' },
        { name: '문의하기', path: '/contact' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <MenuWrapper>
      <div className="container">
        <motion.div
          className="menu-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {menus.map((menu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MenuSection>
                <h3>{menu.title}</h3>
                <ul>
                  {menu.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </MenuSection>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.section`
  background: #f8f9fa;
  padding: 80px 0;

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
`;

const MenuSection = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #007bff;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 12px;

    a {
      color: #666;
      transition: color 0.3s;
      font-size: 16px;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

export default MenuOverview; 