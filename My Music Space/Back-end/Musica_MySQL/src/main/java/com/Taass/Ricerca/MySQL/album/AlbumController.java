package com.Taass.Ricerca.MySQL.album;

import com.Taass.Ricerca.MySQL.artists.Artist;
import com.Taass.Ricerca.MySQL.artists.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/album")
public class AlbumController {
    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    ArtistRepository artistRepository;

    @GetMapping
    List<Album> getAlbum(){return albumRepository.findAll();}

    @PostMapping
    Album createAlbum(@RequestBody Album album){
        System.out.println(album);
        return albumRepository.save(album);
    }

    @PutMapping("/{albumId}/artist/{artistId}")
    Album assignArtistToAlbum(
            @PathVariable Long albumId,
            @PathVariable Long artistId
    ){
        //gestire caso in cui uno dei due id non si trova
        Album album = albumRepository.findById(albumId).get();
        Artist artist = artistRepository.findById(artistId).get();
        //gestire caso in cui l'album è già linkato all'al
        album.assignArtist(artist);
        artistRepository.save(artist);
        return album;
    }
}
