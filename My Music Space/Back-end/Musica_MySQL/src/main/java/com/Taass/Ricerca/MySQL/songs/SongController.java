package com.Taass.Ricerca.MySQL.songs;

import com.Taass.Ricerca.MySQL.album.Album;
import com.Taass.Ricerca.MySQL.album.AlbumRepository;
import com.Taass.Ricerca.MySQL.artists.Artist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/song")
public class SongController {
    @Autowired
    SongRepository songRepository;

    @Autowired
    AlbumRepository albumRepository;

    @GetMapping
    List<Song> getSong(){return songRepository.findAll();}

    @PostMapping
    Song createSong(@RequestBody Song song){return songRepository.save(song);}

    @PutMapping("/{songId}/album/{albumId}")
    Song assignAlbumToSong(
            @PathVariable Long songId,
            @PathVariable Long albumId
    ){
        //gestire caso in cui uno dei due id non si trova
        Album album = albumRepository.findById(albumId).get();
        Song song = songRepository.findById(songId).get();

        song.assignAlbum(album);
        songRepository.save(song);

        /*
        //forse non serve?
        song.assignArtist(artist);
        songRepository.save(song);
        */
        return song;
    }
}