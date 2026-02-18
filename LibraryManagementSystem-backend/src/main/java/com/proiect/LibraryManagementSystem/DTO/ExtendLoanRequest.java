package com.proiect.LibraryManagementSystem.DTO;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ExtendLoanRequest {
    @JsonFormat(pattern = "dd.MM.yyyy", timezone = "UTC")
    private LocalDate returnDate;
}
