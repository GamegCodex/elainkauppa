package com.example.demo.controller;


//import java.awt.PageAttributes.MediaType;
import org.springframework.http.MediaType;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FoodController {
	
	@org.springframework.beans.factory.annotation.Autowired
	private FoodService foodService;
	
	
	@CrossOrigin (origins = "http://localhost:3000") 
    @RequestMapping("/foods") 
	public List<Food> getFoods() {
    	return FoodService.getFoods();
    }

    @RequestMapping("/foods/{id}") 
	public Food getFood(@PathVariable Integer id) {
    	return foodService.getFood(id);
    }
    @CrossOrigin (origins = "http://localhost:3000") 
    @RequestMapping(
			method = RequestMethod.POST,  
			value = "/foods"
	)
	public void addFood(@RequestBody Food food) {
    	foodService.addFood(food);
    }
    
    /*
    @RequestMapping(
			method = RequestMethod.PUT,  
			value = "/foods/{id}"
	)
	public void updateFood(@PathVariable String id, @RequestBody Food food) {
    	foodService.updateLang(id, title);
    }

    @RequestMapping(
			method = RequestMethod.DELETE,  
			value = "/langs/{code}"
	)
	public void removeLang(@PathVariable String code) {
    	langService.removeLang(code);
    }
	*/
    /*@PostMapping(
			value = "/test",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			//produces = MediaType.APPLICATION_JSON_VALUE)
			produces = {"application/json"})
	public Map<String, String> example() {
		return Collections.singletonMap("key", "value");
	}*/

}
