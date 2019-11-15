/**
 * 
 */
package com.myuniversity.service;

import java.util.List;

import com.myuniversity.entity.Student;
import com.university.dto.SearchCriteriaDTO;

/**
 * @author somil.r.sharma
 *
 */
public interface StudentService {

	/**
	 * This method would fetch the list of students from the database depending upon
	 * the first name, last name or both.
	 * 
	 * @param firstName
	 * @param lastName
	 * @return
	 */
	List<Student> findByCriteria(SearchCriteriaDTO searchCriteriaDTO);

	/**
	 * This method will fetch the Student details by id.
	 * 
	 * @param id
	 * @return
	 */
	Student findStudentById(Long id);

	/**
	 * This method will delete the student by id.
	 * 
	 * @param id
	 */
	void deleteStudentById(Long id);

	/**
	 * This method will update the Student details by id.
	 * 
	 * @param student
	 * @param id
	 */
	void updateStudent(Student student, Long id);

	/**
	 * This method will create a student record in the database.
	 * 
	 * @param student
	 */
	void createStudent(Student student);
	

}
