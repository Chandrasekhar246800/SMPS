package com.spms.placement.mapper;

import com.spms.placement.dto.response.CompanyResponse;
import com.spms.placement.entity.Company;

public class CompanyMapper {

    private CompanyMapper() {
        // Private constructor to prevent instantiation
    }

    public static CompanyResponse toResponse(Company company) {
        if (company == null) {
            return null;
        }

        return CompanyResponse.builder()
                .companyId(company.getId())
                .name(company.getName())
                .status(company.getStatus())
                .contactPerson(company.getContactPerson())
                .contactEmail(company.getContactEmail())
                .email(company.getUser() != null ? company.getUser().getEmail() : null)
                .description(company.getDescription())
                .industry(company.getIndustry())
                .website(company.getWebsite())
                .phone(null)
                .isVerified(company.getIsVerified())
                .totalJobs(company.getJobs() != null ? company.getJobs().size() : 0)
                .build();
    }
}
