package com.spms.placement.mapper;

import com.spms.placement.dto.response.JobResponse;
import com.spms.placement.entity.Job;

import java.util.List;
import java.util.stream.Collectors;

public class JobMapper {

    private JobMapper() {
        // Private constructor to prevent instantiation
    }

    public static JobResponse toResponse(Job job) {
        if (job == null) {
            return null;
        }

        return JobResponse.builder()
                .jobId(job.getId())
                .title(job.getTitle())
                .description(job.getDescription())
                .type(job.getType())
                .companyName(job.getCompany() != null ? job.getCompany().getName() : null)
                .minCgpa(job.getMinCgpa())
                .lastDate(job.getLastDate())
                .location(job.getLocation())
                .salaryMin(job.getSalaryMin())
                .salaryMax(job.getSalaryMax())
                .numberOfOpenings(job.getNumberOfOpenings())
                .status(job.getStatus())
                .eligibleCourses(job.getEligibleCourses())
                .build();
    }

    public static List<JobResponse> toJobResponseList(List<Job> jobs) {
        if (jobs == null) {
            return null;
        }

        return jobs.stream()
                .map(JobMapper::toResponse)
                .collect(Collectors.toList());
    }
}
