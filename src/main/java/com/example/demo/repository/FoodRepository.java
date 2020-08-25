package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.controller.Food;

// Tyhjä toteutus riittää tähän harjoitukseen
// Perus CRUD on rajapinnassa valmiiksi toteutettu
public interface FoodRepository extends CrudRepository<Food,Integer>{
	
}