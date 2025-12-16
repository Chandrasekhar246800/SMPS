package com.spms.placement.repository;

import com.spms.placement.entity.Interview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InterviewRepository extends JpaRepository<Interview, Long> {

    Optional<Interview> findByApplicationId(Long applicationId);

    boolean existsByApplicationId(Long applicationId);
}
