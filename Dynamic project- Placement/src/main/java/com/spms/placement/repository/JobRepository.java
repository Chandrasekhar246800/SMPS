package com.spms.placement.repository;

import com.spms.placement.entity.Company;
import com.spms.placement.entity.Job;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findByCompany(Company company);

    List<Job> findByCompanyId(Long companyId);

    List<Job> findByMinCgpaLessThanEqual(Double cgpa);

    @Query("SELECT j FROM Job j WHERE j.minCgpa IS NULL OR j.minCgpa <= :cgpa")
    List<Job> findJobsEligibleForCgpa(@Param("cgpa") Double cgpa);

    Page<Job> findAll(Pageable pageable);

    Page<Job> findByCompanyId(Long companyId, Pageable pageable);

    Page<Job> findByStatus(String status, Pageable pageable);
}
