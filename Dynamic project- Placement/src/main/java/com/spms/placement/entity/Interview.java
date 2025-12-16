package com.spms.placement.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "interviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Interview extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "application_id", nullable = false, unique = true)
    private Application application;

    @Column(name = "interview_date", nullable = false)
    private LocalDateTime interviewDateTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "interview_mode", nullable = false, length = 20)
    private InterviewMode mode;

    @Column(length = 255)
    private String location;

    @Column(name = "meeting_link", length = 255)
    private String meetingLink;

    @Column(name = "interview_type", length = 20)
    private String interviewType;

    @Column(name = "interviewer_name", length = 100)
    private String interviewerName;

    @Column(name = "interview_status", length = 20)
    @Builder.Default
    private String status = "SCHEDULED";

    @Column(columnDefinition = "TEXT")
    private String feedback;
}
