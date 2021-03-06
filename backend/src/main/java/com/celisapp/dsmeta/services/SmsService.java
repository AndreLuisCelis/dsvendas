package com.celisapp.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.celisapp.dsmeta.entities.Sale;
import com.celisapp.dsmeta.repositories.SalesRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;


@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;
	
	@Autowired
	private SalesRepository saleRepository;

	public void sendSms(long id) {
		
		Sale sale = saleRepository.getReferenceById(id);

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);
		
		String msg = "O vendedor " + sale.getSellerName() + " foi destaque em "
			    + " com um total de R$ " + String.format("%.0f", sale.getAmount());

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
