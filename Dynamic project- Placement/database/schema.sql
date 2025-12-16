-- Smart Placement Management System Database Schema
-- MySQL DDL Script

-- Drop tables if they exist (in reverse order of dependencies)
DROP TABLE IF EXISTS notifications;
DROP TABLE IF EXISTS interviews;
DROP TABLE IF EXISTS applications;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS users;

-- Users Table (Base authentication table)
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'STUDENT', 'COMPANY', 'TPO') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_username (username),
    INDEX idx_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Students Table
CREATE TABLE students (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL UNIQUE,
    roll_number VARCHAR(20) NOT NULL UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(15),
    date_of_birth DATE,
    gender ENUM('MALE', 'FEMALE', 'OTHER'),
    branch VARCHAR(50) NOT NULL,
    semester INT NOT NULL,
    cgpa DECIMAL(3, 2),
    graduation_year INT NOT NULL,
    skills TEXT,
    resume_url VARCHAR(255),
    linkedin_url VARCHAR(255),
    github_url VARCHAR(255),
    is_placed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_roll_number (roll_number),
    INDEX idx_graduation_year (graduation_year),
    INDEX idx_is_placed (is_placed),
    INDEX idx_cgpa (cgpa)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Companies Table
CREATE TABLE companies (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL UNIQUE,
    company_name VARCHAR(100) NOT NULL UNIQUE,
    company_description TEXT,
    industry VARCHAR(50),
    website VARCHAR(255),
    phone VARCHAR(15),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    country VARCHAR(50) DEFAULT 'India',
    company_size ENUM('STARTUP', 'SMALL', 'MEDIUM', 'LARGE', 'ENTERPRISE'),
    logo_url VARCHAR(255),
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_company_name (company_name),
    INDEX idx_is_verified (is_verified)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Jobs Table
CREATE TABLE jobs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    job_description TEXT NOT NULL,
    job_type ENUM('FULL_TIME', 'PART_TIME', 'INTERNSHIP', 'CONTRACT') NOT NULL,
    location VARCHAR(100),
    salary_min DECIMAL(10, 2),
    salary_max DECIMAL(10, 2),
    required_skills TEXT,
    required_cgpa DECIMAL(3, 2),
    eligible_branches TEXT,
    graduation_year INT,
    number_of_openings INT DEFAULT 1,
    application_deadline DATE NOT NULL,
    status ENUM('DRAFT', 'OPEN', 'CLOSED', 'CANCELLED') DEFAULT 'DRAFT',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,
    INDEX idx_company_id (company_id),
    INDEX idx_status (status),
    INDEX idx_deadline (application_deadline),
    INDEX idx_job_type (job_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Applications Table
CREATE TABLE applications (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT NOT NULL,
    job_id BIGINT NOT NULL,
    application_status ENUM('APPLIED', 'SHORTLISTED', 'REJECTED', 'SELECTED', 'WITHDRAWN') DEFAULT 'APPLIED',
    cover_letter TEXT,
    resume_url VARCHAR(255),
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE,
    UNIQUE KEY unique_application (student_id, job_id),
    INDEX idx_student_id (student_id),
    INDEX idx_job_id (job_id),
    INDEX idx_status (application_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Interviews Table
CREATE TABLE interviews (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    application_id BIGINT NOT NULL,
    interview_type ENUM('SCREENING', 'TECHNICAL', 'HR', 'MANAGERIAL', 'FINAL') NOT NULL,
    interview_date DATETIME NOT NULL,
    interview_mode ENUM('ONLINE', 'OFFLINE', 'HYBRID') NOT NULL,
    location VARCHAR(255),
    meeting_link VARCHAR(255),
    interviewer_name VARCHAR(100),
    interviewer_email VARCHAR(100),
    interview_status ENUM('SCHEDULED', 'COMPLETED', 'CANCELLED', 'RESCHEDULED') DEFAULT 'SCHEDULED',
    feedback TEXT,
    result ENUM('PASSED', 'FAILED', 'PENDING') DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE CASCADE,
    INDEX idx_application_id (application_id),
    INDEX idx_interview_date (interview_date),
    INDEX idx_status (interview_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Notifications Table
CREATE TABLE notifications (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    notification_type ENUM('INFO', 'SUCCESS', 'WARNING', 'ERROR', 'JOB_POSTED', 'APPLICATION_STATUS', 'INTERVIEW_SCHEDULED') NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    reference_id BIGINT,
    reference_type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_is_read (is_read),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default admin user (password should be hashed in application)
INSERT INTO users (username, email, password, role, is_active) 
VALUES ('admin', 'admin@spms.com', '$2a$10$dummyHashedPassword', 'ADMIN', TRUE);
