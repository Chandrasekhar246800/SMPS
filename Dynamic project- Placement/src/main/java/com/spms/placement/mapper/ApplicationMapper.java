package com.spms.placement.mapper;

import com.spms.placement.dto.response.ApplicationResponse;
import com.spms.placement.entity.Application;

import java.util.List;
import java.util.stream.Collectors;

public class ApplicationMapper {

    private ApplicationMapper() {
        // Private constructor to prevent instantiation
    }

    public static ApplicationResponse toResponse(Application application) {
        if (application == null) {
            return null;
        }

        return ApplicationResponse.builder()
                .applicationId(application.getId())
                .jobTitle(application.getJob() != null ? application.getJob().getTitle() : null)
                .companyName(application.getJob() != null && application.getJob().getCompany() != null 
                        ? application.getJob().getCompany().getName() : null)
                .status(application.getStatus())
                .appliedAt(application.getAppliedAt())
                .jobId(application.getJob() != null ? application.getJob().getId() : null)
                .studentId(application.getStudent() != null ? application.getStudent().getId() : null)
                .studentName(application.getStudent() != null ? application.getStudent().getFullName() : null)
                .coverLetter(application.getCoverLetter())
                .resumeUrl(application.getResumeUrl())
                .build();
    }

    public static List<ApplicationResponse> toApplicationResponseList(List<Application> applications) {
        if (applications == null) {
            return null;
        }

        return applications.stream()
                .map(ApplicationMapper::toResponse)
                .collect(Collectors.toList());
    }
}
