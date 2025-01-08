import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    position: '',
    phone: '',
    email: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/asks', formData);
      alert('문의가 성공적으로 접수되었습니다.');
      setFormData({
        companyName: '',
        name: '',
        position: '',
        phone: '',
        email: '',
        content: ''
      });
    } catch (error) {
      alert('문의 접수 중 오류가 발생했습니다.');
    }
  };

  return (
    <FormWrapper>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <FormGrid>
          <FormGroup>
            <label>회사명</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>이름</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>직책</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>연락처</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="full-width">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="full-width">
            <label>문의내용</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="5"
            />
          </FormGroup>
        </FormGrid>
        <SubmitButton type="submit">문의하기</SubmitButton>
      </motion.form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  .full-width {
    grid-column: 1 / -1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 200px;
  margin: 40px auto 0;
  padding: 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export default ContactForm; 