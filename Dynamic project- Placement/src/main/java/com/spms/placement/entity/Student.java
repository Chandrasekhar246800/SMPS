package com.spms.placement.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "students")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Student extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(name = "roll_number", nullable = false, unique = true, length = 20)
    private String regNumber;

    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(nullable = false, length = 50)
    private String course;

    @Column(nullable = false)
    private Integer year;

    @Column
    private Double cgpa;

    @Column(name = "resume_url", length = 255)
    private String resumeUrl;

    @Column(name = "is_placed")
    @Builder.Default
    private Boolean isPlaced = false;
}
