package com.spms.placement.service.impl;

import com.spms.placement.dto.response.CompanyResponse;
import com.spms.placement.entity.*;
import com.spms.placement.mapper.CompanyMapper;
import com.spms.placement.repository.ApplicationRepository;
import com.spms.placement.repository.CompanyRepository;
import com.spms.placement.repository.InterviewRepository;
import com.spms.placement.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final CompanyRepository companyRepository;
    private final ApplicationRepository applicationRepository;
    private final InterviewRepository interviewRepository;

    @Override
    @Transactional
    public CompanyResponse approveCompany(Long companyId) {
        // Find company
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));

        // Check if company is in PENDING status
        if (!company.getStatus().equals(CompanyStatus.PENDING)) {
            throw new RuntimeException("Can only approve companies in PENDING status");
        }

        // Update status to APPROVED
        company.setStatus(CompanyStatus.APPROVED);
        company.setIsVerified(true);

        Company savedCompany = companyRepository.save(company);
        return CompanyMapper.toResponse(savedCompany);
    }

    @Override
    @Transactional
    public CompanyResponse rejectCompany(Long companyId) {
        // Find company
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));

        // Check if company is in PENDING status
        if (!company.getStatus().equals(CompanyStatus.PENDING)) {
            throw new RuntimeException("Can only reject companies in PENDING status");
        }

        // Update status to REJECTED
        company.setStatus(CompanyStatus.REJECTED);

        Company savedCompany = companyRepository.save(company);
        return CompanyMapper.toResponse(savedCompany);
    }

    @Override
    @Transactional
    public Interview scheduleInterview(Long applicationId, Interview interviewRequest) {
        // Find application
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        // Check if application is shortlisted
        if (!application.getStatus().equals(ApplicationStatus.SHORTLISTED)) {
            throw new RuntimeException("Can only schedule interviews for shortlisted applications");
        }

        // Check if interview already exists for this application
        if (interviewRepository.existsByApplicationId(applicationId)) {
            throw new RuntimeException("Interview already scheduled for this application");
        }

        // Set application reference
        interviewRequest.setApplication(application);

        // Set default status if not provided
        if (interviewRequest.getStatus() == null) {
            interviewRequest.setStatus("SCHEDULED");
        }

        return interviewRepository.save(interviewRequest);
    }
}
