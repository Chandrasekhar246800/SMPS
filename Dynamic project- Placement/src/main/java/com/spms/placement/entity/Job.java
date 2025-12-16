package com.spms.placement.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "jobs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Job extends BaseEntity {

    @Column(name = "job_title", nullable = false, length = 100)
    private String title;

    @Column(name = "job_description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "job_type", nullable = false, length = 20)
    private JobType type;

    @Column(name = "required_cgpa")
    private Double minCgpa;

    @Column(name = "eligible_branches", columnDefinition = "TEXT")
    private String eligibleCourses;

    @Column(name = "application_deadline", nullable = false)
    private LocalDate lastDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    @Column(length = 100)
    private String location;

    @Column(name = "salary_min")
    private Double salaryMin;

    @Column(name = "salary_max")
    private Double salaryMax;

    @Column(name = "number_of_openings")
    @Builder.Default
    private Integer numberOfOpenings = 1;

    @Column(length = 20)
    @Builder.Default
    private String status = "OPEN";
}
