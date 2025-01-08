import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductScroll = () => {
  const products = [
    { id: 1, title: '준비중입니다', description: '준비중입니다' },
    { id: 2, title: '준비중입니다', description: '준비중입니다' },
    { id: 3, title: '준비중입니다', description: '준비중입니다' },
    { id: 4, title: '준비중입니다', description: '준비중입니다' },
  ];

  return (
    <ScrollWrapper>
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <ProductCard>
            <div className="thumbnail" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </ProductCard>
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

const ProductCard = styled.div`
  min-width: 280px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  .thumbnail {
    width: 100%;
    height: 200px;
    background: #ddd;
  }

  h3 {
    padding: 15px;
    font-size: 18px;
  }

  p {
    padding: 0 15px 15px;
    color: #666;
  }
`;

export default ProductScroll; 