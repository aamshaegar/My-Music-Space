package com.Taass.Ricerca.MySQL.artists;

import com.Taass.Ricerca.MySQL.songs.Song;
import com.Taass.Ricerca.MySQL.songs.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/artist")
public class ArtistController {
    @Autowired
    ArtistRepository artistRepository;

    //da eliminare perchè bisogna aggiungere un Service
    @Autowired
    SongRepository songRepository;

    @GetMapping
    List<Artist> getArtist(){return artistRepository.findAll();}

    @PostMapping
    Artist createArtist(@RequestBody Artist artist){return artistRepository.save(artist);}


}