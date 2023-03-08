package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Student;
import com.example.demo.repository.StudentRepository;

@RequestMapping("/api/v1")
@CrossOrigin("*")
@RestController
public class StudentController {
	@Autowired
	private StudentRepository eRepo;
	
	@GetMapping("/students")
	public List<Student> getAllStudents() {
		return eRepo.findAll();
	}
	
	@GetMapping("/students/{sid}")
	public Student getStudentById(@PathVariable Integer sid) {
		return eRepo.findById(sid).get();
	}
	
	@PostMapping("/students")
	public Student saveStudentDetails(@RequestBody Student student) {
		return eRepo.save(student);
	}
	
	@PutMapping("/students")
	public Student updateStudent(@RequestBody Student student) {
		return eRepo.save(student);
	}
	
	@DeleteMapping("/students/{sid}")
	public ResponseEntity<HttpStatus> deleteStudentById(@PathVariable Integer sid) {
		eRepo.deleteById(sid);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
