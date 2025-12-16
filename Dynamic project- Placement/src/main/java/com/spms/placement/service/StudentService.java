package com.spms.placement.service;

import com.spms.placement.dto.response.ApplicationResponse;
import com.spms.placement.dto.response.JobResponse;
import com.spms.placement.entity.Application;

import java.util.List;

public interface StudentService {

    List<JobResponse> getEligibleJobs(Long studentId);

    Application applyForJob(Long studentId, Long jobId);

    List<ApplicationResponse> getApplications(Long studentId);
}
