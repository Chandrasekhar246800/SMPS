package com.spms.placement.controller;

import com.spms.placement.dto.response.ApplicationResponse;
import com.spms.placement.dto.response.JobResponse;
import com.spms.placement.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @GetMapping("/jobs/{studentId}")
    public ResponseEntity<List<JobResponse>> getEligibleJobs(@PathVariable Long studentId) {
        List<JobResponse> jobs = studentService.getEligibleJobs(studentId);
        return ResponseEntity.ok(jobs);
    }

    @GetMapping("/applications/{studentId}")
    public ResponseEntity<List<ApplicationResponse>> getApplications(@PathVariable Long studentId) {
        List<ApplicationResponse> applications = studentService.getApplications(studentId);
        return ResponseEntity.ok(applications);
    }
}
