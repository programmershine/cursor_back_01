import styled from 'styled-components';
import { motion } from 'framer-motion';

const Mission = () => {
  const missions = [
    {
      title: '미션',
      content: '혁신적인 기술로 더 나은 세상을 만들어갑니다',
      details: [
        '고객 가치 창출',
        '지속 가능한 성장',
        '사회적 책임 실현'
      ]
    },
    {
      title: '비전',
      content: '2030년까지 글로벌 리더로 도약',
      details: [
        '기술 혁신 선도',
        '시장 점유율 확대',
        '글로벌 네트워크 구축'
      ]
    }
  ];

  return (
    <MissionWrapper>
      {missions.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Section>
            <h2>{item.title}</h2>
            <MainContent>{item.content}</MainContent>
            <DetailList>
              {item.details.map((detail, detailIndex) => (
                <DetailItem key={detailIndex}>{detail}</DetailItem>
              ))}
            </DetailList>
          </Section>
        </motion.div>
      ))}
    </MissionWrapper>
  );
};

const MissionWrapper = styled.div`
  padding: 40px 0;
`;

const Section = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 36px;
    color: #007bff;
    margin-bottom: 20px;
  }
`;

const MainContent = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 1.4;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const DetailItem = styled.li`
  background: #f8f9fa;
  padding: 20px 30px;
  border-radius: 8px;
  font-size: 18px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default Mission; 