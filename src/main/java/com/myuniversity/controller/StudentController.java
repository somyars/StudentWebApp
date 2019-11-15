/**
 * 
 */
package com.myuniversity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.myuniversity.entity.Student;
import com.myuniversity.service.StudentService;
import com.university.dto.SearchCriteriaDTO;

/**
 * @author somil.r.sharma
 *
 */
@RestController
public class StudentController {

	@Autowired
	private StudentService studentService;

	/**
	 * This method would fetch all the students from the database.
	 * 
	 * @return
	 */
	@GetMapping("/students")
	public ResponseEntity<?> retrieveAllStudents() {
		List<Student> students = studentService.findByCriteria(null);
		return ResponseEntity.ok(students);
	}

	/**
	 * This method would fetch all the students from the database depending upon the Search Criteria.
	 * 
	 * @return
	 */
	@PostMapping("/students/search")
	public ResponseEntity<?> retrieveAllStudentsBySearchCriteria(@RequestBody SearchCriteriaDTO searchCriteria) {
		List<Student> students = studentService.findByCriteria(searchCriteria);
		return ResponseEntity.ok(students);
	}

	/***
	 * This method would fetch Student by Id.
	 * @param id
	 * @return
	 */
	@GetMapping("/students/{id}")
	public ResponseEntity<Student> retrieveStudent(@PathVariable Long id) {
		Student student = studentService.findStudentById(id);
		return ResponseEntity.ok(student);
	}

	/**
	 * This method would delete student by Id.
	 * @param id
	 */
	@DeleteMapping("students/{id}")
	public void deleteStudent(@PathVariable int id) {
		studentService.deleteStudentById((long) id);
	}

	/**
	 * This method would update an existing student record.
	 * @param student
	 * @param id
	 * @return
	 */
	@PatchMapping("/students/{id}")
	public ResponseEntity<Object> updateStudent(@RequestBody Student student, @PathVariable Long id) {		
		studentService.updateStudent(student, id);
		return ResponseEntity.noContent().build();
	}

	/**
	 * This method would create a new student record.
	 * @param student
	 * @return
	 */
	@PostMapping("/students")
	public String createStudent(@RequestBody Student student) {
		studentService.createStudent(student);		
		String msg = "{\"status\":\"" + HttpStatus.CREATED + "\"}";
		return msg;
	}
}
