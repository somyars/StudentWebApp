/**
 * 
 */
package com.myuniversity.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myuniversity.entity.Student;
import com.myuniversity.repository.StudentRepository;
import com.university.dto.SearchCriteriaDTO;

/**
 * @author somil.r.sharma
 *
 */
@Service("studentService")
@Transactional
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;

	/**
	 * {@inheritDoc}
	 */
	@Override
	public List<Student> findByCriteria(SearchCriteriaDTO searchCriteriaDTO) {
		return studentRepository.findAll(new Specification<Student>() {
			/**
			 * default Serial version Id
			 */
			private static final long serialVersionUID = 1L;

			@Override
			public Predicate toPredicate(Root<Student> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
				List<Predicate> predicates = new ArrayList<>();
				if(searchCriteriaDTO != null) {
					if (searchCriteriaDTO.getFirstName() != null) {
						predicates.add(criteriaBuilder
								.and(criteriaBuilder.like(root.get("firstName"), "%" + searchCriteriaDTO.getFirstName() + "%")));
					}
					if (searchCriteriaDTO.getLastName() != null) {
						predicates.add(criteriaBuilder
								.and(criteriaBuilder.like(root.get("lastName"), "%" + searchCriteriaDTO.getLastName() + "%")));
					}	
				}
				return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
			}
		});
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Student findStudentById(Long id) {
		Optional<Student> optionalStudent = studentRepository.findById(id);
		return optionalStudent.get();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void deleteStudentById(Long id) {
		studentRepository.deleteById((long) id);

	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateStudent(Student student, Long id) {
		student.setId(id);
		studentRepository.save(student);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void createStudent(Student student) {
	studentRepository.save(student);

	}
}
