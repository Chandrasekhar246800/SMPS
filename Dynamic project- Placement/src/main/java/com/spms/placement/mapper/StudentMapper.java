package com.spms.placement.mapper;

import com.spms.placement.dto.response.StudentProfileResponse;
import com.spms.placement.entity.Student;

public class StudentMapper {

    private StudentMapper() {
        // Private constructor to prevent instantiation
    }

    public static StudentProfileResponse toResponse(Student student) {
        if (student == null) {
            return null;
        }

        return StudentProfileResponse.builder()
                .studentId(student.getId())
                .fullName(student.getFullName())
                .regNumber(student.getRegNumber())
                .course(student.getCourse())
                .year(student.getYear())
                .cgpa(student.getCgpa())
                .email(student.getUser() != null ? student.getUser().getEmail() : null)
                .resumeUrl(student.getResumeUrl())
                .isPlaced(student.getIsPlaced())
                .skills(null)
                .linkedinUrl(null)
                .build();
    }
}
