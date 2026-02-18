package com.proiect.LibraryManagementSystem.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class SimpleAuthResponse {
    private int id;
    private String status;
    private String message;
}
