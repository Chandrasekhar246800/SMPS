package com.spms.placement.service.impl;

import com.spms.placement.dto.response.ApplicationResponse;
import com.spms.placement.dto.response.JobResponse;
import com.spms.placement.entity.Application;
import com.spms.placement.entity.ApplicationStatus;
import com.spms.placement.entity.Job;
import com.spms.placement.entity.Student;
import com.spms.placement.mapper.ApplicationMapper;
import com.spms.placement.mapper.JobMapper;
import com.spms.placement.repository.ApplicationRepository;
import com.spms.placement.repository.JobRepository;
import com.spms.placement.repository.StudentRepository;
import com.spms.placement.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final JobRepository jobRepository;
    private final ApplicationRepository applicationRepository;

    @Override
    @Transactional(readOnly = true)
    public List<JobResponse> getEligibleJobs(Long studentId) {
        // Find student
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        // Get all jobs
        List<Job> allJobs = jobRepository.findAll();

        // Filter jobs based on CGPA eligibility
        return allJobs.stream()
                .filter(job -> isEligibleForJob(student, job))
                .map(JobMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public Application applyForJob(Long studentId, Long jobId) {
        // Find student
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        // Find job
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        // Check if student has already applied
        if (applicationRepository.existsByStudentIdAndJobId(studentId, jobId)) {
            throw new RuntimeException("You have already applied for this job");
        }

        // Check CGPA eligibility
        if (!isEligibleForJob(student, job)) {
            throw new RuntimeException("You are not eligible for this job. Required CGPA: " + job.getMinCgpa());
        }

        // Create application
        Application application = Application.builder()
                .student(student)
                .job(job)
                .status(ApplicationStatus.APPLIED)
                .appliedAt(LocalDateTime.now())
                .build();

        return applicationRepository.save(application);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ApplicationResponse> getApplications(Long studentId) {
        // Verify student exists
        if (!studentRepository.existsById(studentId)) {
            throw new RuntimeException("Student not found");
        }

        List<Application> applications = applicationRepository.findByStudentId(studentId);
        return applications.stream()
                .map(ApplicationMapper::toResponse)
                .collect(Collectors.toList());
    }

    private boolean isEligibleForJob(Student student, Job job) {
        // If job has no CGPA requirement, student is eligible
        if (job.getMinCgpa() == null) {
            return true;
        }

        // If student has no CGPA, they are not eligible for jobs with CGPA requirement
        if (student.getCgpa() == null) {
            return false;
        }

        // Check if student's CGPA meets or exceeds the requirement
        return student.getCgpa() >= job.getMinCgpa();
    }
}
