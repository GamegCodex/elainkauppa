package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.repository.FoodRepository;

@Component
public class FoodService {
	
//	List<Lang> langs = new ArrayList<>(Arrays.asList( 
//			new Lang("Suomi", "fi"),
//			new Lang("Ruotsi", "se"), 
//			new Lang("Norja", "no"),
//			new Lang("Islanti", "is"),
//			new Lang("Tanska", "de")
//			));
	
	 @Autowired
	private static FoodRepository repo;
			

	public static List<Food> getFoods() {
		List<Food> foods = new ArrayList<>();
		Iterable<Food> foodies = repo.findAll();
		
		for (Food l: foodies) {
			foods.add(l);
		}
		return foods;
	}
	
	public Food getFood(Integer id) {
		return repo.findById(id).get();		
	}

	public void addFood(Food food) {
		repo.save(food);
	}

	/*
	// Poistaminen tehdään vain, jos löydetään poistettava alkio
	public void removeLang(String code) {
		Optional<Food> found = repo.findById(code);
		if (found.isPresent()) {
			repo.deleteById(code);
		}
	}

	public void updateLang(int id, Food food) {
		// Osaa id:n perusteella tallentaa tietokantaan joko vanhan päälle tai kokonaan uuden alkion
		repo.save(food);		
	}
    */
}
