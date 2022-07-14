package com.celisapp.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.celisapp.dsmeta.entities.Sales;
import com.celisapp.dsmeta.services.SalesService;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {
	
	@Autowired
	SalesService salesService;
	
	@GetMapping
	public List<Sales> findSales(){
		return salesService.findSales();
	}

}
