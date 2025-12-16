package com.spms.placement.dto.request;

import com.spms.placement.entity.InterviewMode;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class InterviewScheduleRequest {

    @NotNull(message = "Application ID is required")
    private Long applicationId;

    @NotNull(message = "Interview date and time is required")
    @Future(message = "Interview date must be in the future")
    private LocalDateTime interviewDateTime;

    @NotNull(message = "Interview mode is required")
    private InterviewMode mode;

    @Size(max = 255, message = "Location must not exceed 255 characters")
    private String location;

    @Size(max = 255, message = "Meeting link must not exceed 255 characters")
    private String meetingLink;

    @Size(max = 20, message = "Interview type must not exceed 20 characters")
    private String interviewType;

    @Size(max = 100, message = "Interviewer name must not exceed 100 characters")
    private String interviewerName;

    @Size(max = 100, message = "Interviewer email must not exceed 100 characters")
    private String interviewerEmail;
}
