package com.spms.placement.dto.request;

import com.spms.placement.entity.JobType;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class JobCreateRequest {

    @NotBlank(message = "Job title is required")
    @Size(max = 100, message = "Job title must not exceed 100 characters")
    private String title;

    @NotBlank(message = "Job description is required")
    private String description;

    @NotNull(message = "Job type is required")
    private JobType type;

    @Min(value = 0, message = "Minimum CGPA must be at least 0")
    @Max(value = 10, message = "Minimum CGPA must not exceed 10")
    private Double minCgpa;

    private String eligibleCourses;

    @NotNull(message = "Application deadline is required")
    @Future(message = "Application deadline must be a future date")
    private LocalDate lastDate;

    @Size(max = 100, message = "Location must not exceed 100 characters")
    private String location;

    @Min(value = 0, message = "Minimum salary cannot be negative")
    private Double salaryMin;

    @Min(value = 0, message = "Maximum salary cannot be negative")
    private Double salaryMax;

    @Min(value = 1, message = "Number of openings must be at least 1")
    private Integer numberOfOpenings;
}
