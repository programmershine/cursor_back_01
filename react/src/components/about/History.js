import styled from 'styled-components';
import { motion } from 'framer-motion';

const History = () => {
  const histories = [
    {
      year: '2024',
      events: [
        '글로벌 시장 진출',
        '신규 사업 부문 확장'
      ]
    },
    {
      year: '2023',
      events: [
        '기업 부설 연구소 설립',
        '주요 기술 특허 획득',
        '매출 100억 달성'
      ]
    },
    {
      year: '2022',
      events: [
        'SHINE COMPANY 설립',
        '첫 제품 출시',
        '벤처기업 인증'
      ]
    }
  ];

  return (
    <HistoryWrapper>
      <Timeline>
        {histories.map((history, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <TimelineItem>
              <Year>{history.year}</Year>
              <Events>
                {history.events.map((event, eventIndex) => (
                  <Event key={eventIndex}>{event}</Event>
                ))}
              </Events>
            </TimelineItem>
          </motion.div>
        ))}
      </Timeline>
    </HistoryWrapper>
  );
};

const HistoryWrapper = styled.div`
  padding: 40px 0;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 120px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #007bff;

    @media (max-width: 768px) {
      left: 80px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 112px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #007bff;
    border: 4px solid white;

    @media (max-width: 768px) {
      left: 72px;
    }
  }
`;

const Year = styled.div`
  width: 100px;
  font-size: 24px;
  font-weight: bold;
  padding-right: 40px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 60px;
    font-size: 20px;
  }
`;

const Events = styled.div`
  padding-left: 40px;
`;

const Event = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px 20px;
  background: #f8f9fa;
  border-radius: 4px;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(10px);
  }
`;

export default History; 