package com.spms.placement.controller;

import com.spms.placement.dto.request.JobCreateRequest;
import com.spms.placement.dto.response.ApplicationResponse;
import com.spms.placement.dto.response.JobResponse;
import com.spms.placement.entity.Job;
import com.spms.placement.service.CompanyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/company")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @PostMapping("/jobs/{companyId}")
    public ResponseEntity<JobResponse> createJob(
            @PathVariable Long companyId,
            @Valid @RequestBody JobCreateRequest request) {
        
        Job job = Job.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .type(request.getType())
                .minCgpa(request.getMinCgpa())
                .eligibleCourses(request.getEligibleCourses())
                .lastDate(request.getLastDate())
                .location(request.getLocation())
                .salaryMin(request.getSalaryMin())
                .salaryMax(request.getSalaryMax())
                .numberOfOpenings(request.getNumberOfOpenings())
                .build();

        JobResponse response = companyService.createJob(companyId, job);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/jobs/{jobId}/applications")
    public ResponseEntity<List<ApplicationResponse>> viewApplicants(@PathVariable Long jobId) {
        List<ApplicationResponse> applications = companyService.viewApplicants(jobId);
        return ResponseEntity.ok(applications);
    }
}
