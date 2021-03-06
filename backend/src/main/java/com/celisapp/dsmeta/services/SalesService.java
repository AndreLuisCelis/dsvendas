package com.celisapp.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.celisapp.dsmeta.entities.Sale;
import com.celisapp.dsmeta.repositories.SalesRepository;


@Service
public class SalesService {
	
	
	@Autowired
	SalesRepository salesRepository;
	
	public Page<Sale> findSales( String minDate, String maxDate, Pageable pageable){
		
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		DateTimeFormatter f = new DateTimeFormatterBuilder().parseCaseInsensitive()
	            .append(DateTimeFormatter.ofPattern("yyyy-MM-dd")).toFormatter();
		
		LocalDate min = minDate.equals("")?today.minusDays(365):LocalDate.parse(minDate, f);
		LocalDate max = maxDate.equals("")?today: LocalDate.parse(maxDate, f);
		
		Page<Sale>salesList = salesRepository.findSales(min, max, pageable);
		return salesList;
	}
 
}
