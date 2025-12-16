package com.spms.placement.repository;

import com.spms.placement.entity.Application;
import com.spms.placement.entity.ApplicationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

    boolean existsByStudentIdAndJobId(Long studentId, Long jobId);

    List<Application> findByStudentId(Long studentId);

    List<Application> findByJobId(Long jobId);

    Optional<Application> findByStudentIdAndJobId(Long studentId, Long jobId);

    List<Application> findByStudentIdAndStatus(Long studentId, ApplicationStatus status);

    List<Application> findByJobIdAndStatus(Long jobId, ApplicationStatus status);

    long countByJobId(Long jobId);
}
