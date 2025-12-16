package com.spms.placement.service.impl;

import com.spms.placement.dto.response.ApplicationResponse;
import com.spms.placement.dto.response.JobResponse;
import com.spms.placement.entity.*;
import com.spms.placement.mapper.ApplicationMapper;
import com.spms.placement.mapper.JobMapper;
import com.spms.placement.repository.ApplicationRepository;
import com.spms.placement.repository.CompanyRepository;
import com.spms.placement.repository.JobRepository;
import com.spms.placement.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;
    private final JobRepository jobRepository;
    private final ApplicationRepository applicationRepository;

    @Override
    @Transactional
    public JobResponse createJob(Long companyId, Job jobRequest) {
        // Find company
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));

        // Check if company is approved
        if (!company.getStatus().equals(CompanyStatus.APPROVED)) {
            throw new RuntimeException("Company must be approved to post jobs");
        }

        // Set company reference
        jobRequest.setCompany(company);

        // Set default status if not provided
        if (jobRequest.getStatus() == null) {
            jobRequest.setStatus("OPEN");
        }

        Job savedJob = jobRepository.save(jobRequest);
        return JobMapper.toResponse(savedJob);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ApplicationResponse> viewApplicants(Long jobId) {
        // Verify job exists
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        // Get all applications for this job
        List<Application> applications = applicationRepository.findByJobId(jobId);
        return applications.stream()
                .map(ApplicationMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public Application shortlistApplication(Long applicationId) {
        // Find application
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        // Check if application is in APPLIED status
        if (!application.getStatus().equals(ApplicationStatus.APPLIED)) {
            throw new RuntimeException("Can only shortlist applications in APPLIED status");
        }

        // Update status to SHORTLISTED
        application.setStatus(ApplicationStatus.SHORTLISTED);

        return applicationRepository.save(application);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Job> getCompanyJobs(Long companyId) {
        // Verify company exists
        if (!companyRepository.existsById(companyId)) {
            throw new RuntimeException("Company not found");
        }

        return jobRepository.findByCompanyId(companyId);
    }
}
