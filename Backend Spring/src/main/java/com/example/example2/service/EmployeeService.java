package com.example.example2.service;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Employee;
import com.example.example2.model.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * EmployeeService
 */
@RestController
@RequestMapping("/api")
public class EmployeeService {

    @Autowired
    EmployeeRepository repository;

    @GetMapping("/employees")
    Iterable<Employee> getEmployees() {
        return repository.findAll();
    }

    @GetMapping("/employees/{id}")
    Employee findEmployee(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Employee not found"));
    }

    @PostMapping("/employees")
    Employee createEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    @PutMapping("/employees/{id}")
    Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employeeData) {

        Employee employee = findEmployee(id);
        employee.setAge(employeeData.getAge());
        employee.setSalary(employeeData.getSalary());
        employee.setName(employeeData.getName());

        // How to update the employer Company?

        return repository.save(employee);
    }

    @DeleteMapping("/employees/{id}")
    void deleteEmployee(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}