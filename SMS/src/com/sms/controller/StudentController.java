package com.sms.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;	
import com.sms.base.BaseController;
import com.sms.model.Student;
import com.sms.service.StudentService;


@Controller
public class StudentController extends BaseController {
	
	@Autowired
	private StudentService studentService;
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String saveEmployee(@ModelAttribute("command") Student cstudent, ModelMap map) {
		List<Student> students =  (List<Student>) studentService.getAll(Student.class);
		map.put("students", students);
		studentService.addStudent(cstudent);
		return "student";
	}

	@RequestMapping(value="/students", method = RequestMethod.GET)
	public String listEmployees(HttpServletRequest request, ModelMap model) {
		model.put("students", studentService.getAll(Student.class));
		return "studentList";
	}
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String addEmployee(@ModelAttribute("command")  Student cstudent, ModelMap model) {
		List<Student> students =  (List<Student>) studentService.getAll(Student.class);
		
		model.put("students", students);
		return "addStudent";
	}	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String welcome() {
		return "index";
	}
	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	public String deleteEmployee(@ModelAttribute("command") Student student, ModelMap model) {
		studentService.delete(student);

		model.put("stud", null);
		model.put("students",  studentService.getAll(Student.class));
		return "student";
	}
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String editEmployee(@ModelAttribute("command")  Student student, 
			BindingResult result, ModelMap model) {
		Student obj = studentService.get(Student.class, student.getStudentId());
		model.addAttribute("students", studentService.get(Student.class,student.getStudentId()));
		model.addAttribute("students",  studentService.getAll(Student.class));
		model.addAttribute("command",obj);
		return "addStudent";
	}	
	
}
