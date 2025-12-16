package com.spms.placement.repository;

import com.spms.placement.entity.Company;
import com.spms.placement.entity.CompanyStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    List<Company> findByStatus(CompanyStatus status);

    Optional<Company> findByUserId(Long userId);

    Optional<Company> findByName(String name);

    boolean existsByName(String name);
}
