package com.sms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.sms.base.BaseServiceImpl;
import com.sms.dao.SMSDao;
import com.sms.model.Student;
import com.sms.service.StudentService;

@Service("studentService")
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class StudentServiceImpl extends BaseServiceImpl implements StudentService  {

	@Autowired
	private SMSDao studentDao;
	
	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
	public void addStudent(Student stud) {
		studentDao.addStudent(stud);
	}
	
	public List<Student> listStudentss() {
		return studentDao.listStudent();
	}

	public Student getStudent(String studentNumber) {
		return studentDao.getStudentInfo(studentNumber);
	}
	
	public void deleteStudent(Student student) {
		studentDao.deleteStudent(student);
	}

}
