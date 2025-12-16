package com.spms.placement.dto.response;

import com.spms.placement.entity.JobType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JobResponse {

    private Long jobId;

    private String title;

    private String description;

    private JobType type;

    private String companyName;

    private Double minCgpa;

    private LocalDate lastDate;

    private String location;

    private Double salaryMin;

    private Double salaryMax;

    private Integer numberOfOpenings;

    private String status;

    private String eligibleCourses;
}
