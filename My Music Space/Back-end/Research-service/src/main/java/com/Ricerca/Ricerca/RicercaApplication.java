package com.Ricerca.Ricerca;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication(
		exclude = {
				DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class, DataSourceTransactionManagerAutoConfiguration.class
		}
)
@EnableTransactionManagement
@RestController
@RequestMapping("api/v1/canzoni")
public class RicercaApplication {
	private final CanzoniRepository canzoniRepository;
	public RicercaApplication(CanzoniRepository canzoniRepository) {
		this.canzoniRepository = canzoniRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(RicercaApplication.class, args);
	}

	@GetMapping
	public List<Canzoni> getCanzoni(){
		return canzoniRepository.findAll();
	}

	record NewCanzoniRequest(
			String Titolo, String Artista, Integer Anno
	){

	}
	@PostMapping
	public void addCanzoni(@RequestBody NewCanzoniRequest request) {
		Canzoni canzoni = new Canzoni();
		canzoni.setTitolo(request.Titolo());
		canzoni.setArtista(request.Artista());
		canzoni.setAnno(request.Anno());
		canzoniRepository.save(canzoni);
	}

	@DeleteMapping("{canzoniId}")
	public void deleteCanzoni(@PathVariable("canzoniId") Integer id){
		canzoniRepository.deleteById(id);

	}
}
