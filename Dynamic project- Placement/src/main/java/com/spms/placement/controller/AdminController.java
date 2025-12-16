package com.spms.placement.controller;

import com.spms.placement.dto.response.CompanyResponse;
import com.spms.placement.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PutMapping("/company/{companyId}/approve")
    public ResponseEntity<CompanyResponse> approveCompany(@PathVariable Long companyId) {
        CompanyResponse response = adminService.approveCompany(companyId);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/company/{companyId}/reject")
    public ResponseEntity<CompanyResponse> rejectCompany(@PathVariable Long companyId) {
        CompanyResponse response = adminService.rejectCompany(companyId);
        return ResponseEntity.ok(response);
    }
}
