-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS cursordb;

-- 데이터베이스 선택
USE cursordb;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_user_id ON users(user_id);

-- 테스트용 사용자 생성 (선택사항)
-- 비밀번호는 실제 운영환경에서는 반드시 암호화해서 저장해야 합니다
-- INSERT INTO users (email, password, username) 
-- VALUES ('test@example.com', 'encoded_password_here', 'Test User'); 