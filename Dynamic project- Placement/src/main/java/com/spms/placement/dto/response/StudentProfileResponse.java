package com.spms.placement.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentProfileResponse {

    private Long studentId;

    private String fullName;

    private String regNumber;

    private String course;

    private Integer year;

    private Double cgpa;

    private String email;

    private String resumeUrl;

    private Boolean isPlaced;

    private String skills;

    private String linkedinUrl;

    private String githubUrl;
}
