package com.spms.placement.dto.response;

import com.spms.placement.entity.CompanyStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CompanyResponse {

    private Long companyId;

    private String name;

    private CompanyStatus status;

    private String contactPerson;

    private String contactEmail;

    private String email;

    private String description;

    private String industry;

    private String website;

    private String phone;

    private Boolean isVerified;

    private Integer totalJobs;
}
