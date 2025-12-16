package com.spms.placement.service;

import com.spms.placement.dto.response.ApplicationResponse;
import com.spms.placement.dto.response.JobResponse;
import com.spms.placement.entity.Application;
import com.spms.placement.entity.Job;

import java.util.List;

public interface CompanyService {

    JobResponse createJob(Long companyId, Job jobRequest);

    List<ApplicationResponse> viewApplicants(Long jobId);

    Application shortlistApplication(Long applicationId);

    List<Job> getCompanyJobs(Long companyId);
}
