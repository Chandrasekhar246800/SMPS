package com.spms.placement.service;

import com.spms.placement.dto.response.CompanyResponse;
import com.spms.placement.entity.Interview;

public interface AdminService {

    CompanyResponse approveCompany(Long companyId);

    CompanyResponse rejectCompany(Long companyId);

    Interview scheduleInterview(Long applicationId, Interview interviewRequest);
}
