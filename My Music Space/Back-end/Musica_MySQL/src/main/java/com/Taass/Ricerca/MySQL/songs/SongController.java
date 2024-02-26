package com.Taass.Ricerca.MySQL.songs;

import com.Taass.Ricerca.MySQL.album.Album;
import com.Taass.Ricerca.MySQL.album.AlbumRepository;
import com.Taass.Ricerca.MySQL.album.AlbumService;
import com.Taass.Ricerca.MySQL.artists.Artist;
import com.Taass.Ricerca.MySQL.artists.ArtistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/song")
@RequiredArgsConstructor
public class SongController {
    @Autowired
    private final SongService service;

    @GetMapping
    List<Song> getSong(){return service.getSong();}


    @PostMapping
    Song createSong(@RequestBody Song song){return service.createSong(song);}

    @PutMapping("/{songId}/album/{albumId}")
    Song assignAlbumToSong(
            @PathVariable Long songId,
            @PathVariable Long albumId
    ){return service.assignAlbumToSong(songId, albumId);}

    @PutMapping("/{songId}/artist/{artistId}")
    Artist assignSongToArtist(
            @PathVariable Long artistId,
            @PathVariable Long songId
    ){return service.assignSongToArtist(artistId,songId);}
}