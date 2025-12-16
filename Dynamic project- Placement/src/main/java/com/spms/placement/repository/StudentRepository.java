package com.spms.placement.repository;

import com.spms.placement.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByRegNumber(String regNumber);

    Optional<Student> findByUserId(Long userId);

    boolean existsByRegNumber(String regNumber);
}
