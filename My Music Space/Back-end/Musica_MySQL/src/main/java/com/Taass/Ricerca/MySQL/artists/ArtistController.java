package com.Taass.Ricerca.MySQL.artists;

import com.Taass.Ricerca.MySQL.album.Album;
import com.Taass.Ricerca.MySQL.album.AlbumRepository;
import com.Taass.Ricerca.MySQL.songs.Song;
import com.Taass.Ricerca.MySQL.songs.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PutMapping("/{artistId}/song/{songId}")
    Artist assignSongToArtist(
            @PathVariable Long artistId,
            @PathVariable Long songId
    ){
        //gestire caso in cui uno dei due id non si trova
        Artist artist = artistRepository.findById(artistId).get();
        Song song = songRepository.findById(songId).get();

        artist.assignSong(song);
        artistRepository.save(artist);

        /*
        //forse non serve?
        song.assignArtist(artist);
        songRepository.save(song);
        */
        return artist;
    }
}