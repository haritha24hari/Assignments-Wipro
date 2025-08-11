package com.wipro.hp.quizappmonorepo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.hp.quizappmonorepo.entities.QuestionWrapper;
import com.wipro.hp.quizappmonorepo.entities.Quiz;
import com.wipro.hp.quizappmonorepo.entities.Response;
import com.wipro.hp.quizappmonorepo.enums.Category;
import com.wipro.hp.quizappmonorepo.enums.DifficultyLevel;
import com.wipro.hp.quizappmonorepo.services.QuizService;


import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/v1/quiz")
public class QuizController {
	@Autowired
	private QuizService quizService ;
	
	@PostMapping("/create")
	public Quiz createQuiz(@RequestParam Category category,@RequestParam DifficultyLevel difficultyLevel,@RequestParam String quizTitle) {
		
		return quizService.createQuiz(category,difficultyLevel,quizTitle);
	}
	
	@GetMapping("/getQuizById/{id}")
	public List<QuestionWrapper> getQuizQuestions(@PathVariable Integer id) {
		
		return quizService.getQuizQuestions(id);
	}

	@PostMapping("/submitQuiz/{id}")
	public Integer submitQuiz(@PathVariable int id,@RequestBody List<Response> responses) {
		
		return quizService.calculateResult(id,responses);
	}
}
