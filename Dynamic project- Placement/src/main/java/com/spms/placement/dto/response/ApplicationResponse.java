package com.spms.placement.dto.response;

import com.spms.placement.entity.ApplicationStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationResponse {

    private Long applicationId;

    private String jobTitle;

    private String companyName;

    private ApplicationStatus status;

    private LocalDateTime appliedAt;

    private Long jobId;

    private Long studentId;

    private String studentName;

    private String coverLetter;

    private String resumeUrl;
}
