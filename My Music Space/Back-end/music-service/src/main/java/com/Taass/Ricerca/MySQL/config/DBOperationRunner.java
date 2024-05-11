package com.Taass.Ricerca.MySQL.config;

import java.util.Arrays;
import java.util.List;

import com.Taass.Ricerca.MySQL.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DBOperationRunner implements CommandLineRunner {

    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    SongRepository songRepository;

    @Override
    public void run(String... args) throws Exception {
        Artist acdc = new Artist("AC/DC", null, null, "/images/beatles.jpg");
        Artist hStyles = new Artist("Harry Styles", null, null, "/images/beatles.jpg");
        Artist liga = new Artist("Ligabue", null, null, "/images/beatles.jpg");
        Artist salmo = new Artist("Salmo", null, null, "/images/beatles.jpg");
        Artist marra = new Artist("Marracash", null, null, "/images/beatles.jpg");
        Artist fedez = new Artist("Fedez", null, null, "/images/beatles.jpg");
        Artist eminem = new Artist("Eminem", null, null, "/images/beatles.jpg");
        Artist pinkFloyd = new Artist("Pink Floyd", null, null, "/images/beatles.jpg");
        Artist mengoni = new Artist("Marco Mengoni", null, null, "/images/beatles.jpg");
        Artist berti = new Artist("Orietta Berti", null, null, "/images/beatles.jpg");

        artistRepository.saveAll(Arrays.asList(
                acdc,
                hStyles,
                liga,
                salmo,
                marra,
                fedez,
                eminem,
                pinkFloyd,
                mengoni,
                berti));

        Album cult = new Album("CVLT", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        Album persona = new Album("PERSONA", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        Album bib = new Album("Back in Black", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        Album hh = new Album("Harry's House", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        Album nec = new Album("Nome e cognome", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        Album disumano = new Album("Disumano", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        Album encore = new Album("Encore", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        Album wall = new Album("The Wall", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        Album materia = new Album("Materia", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        Album orietta = new Album("Orietta", null, null, 2023, 15, "Sony","/images/beatles.jpg");
        albumRepository.saveAll(Arrays.asList(
                cult,
                persona,
                bib,
                hh,
                nec,
                disumano,
                encore,
                wall,
                materia,
                orietta));

        Song anthem = new Song("ANTHEM", null, null, 2023, 3,"","/images/beatles.jpg");
        Song cringe = new Song("CRINGE", null, null, 2023, 3, "", "/images/beatles.jpg");
        Song incubi = new Song("INCUBI", null, null, 2023, 3, "", "/images/beatles.jpg");

        Song bodyParts = new Song("BODY PARTS - I denti", null, null, 2019, 3, "", "/images/beatles.jpg");
        Song qicc = new Song("QUALCOSA IN CUI CREDERE - Lo scheletro", null, null, 2019, 3, "", "/images/beatles.jpg");
        Song qcnp = new Song("QUELLI CHE NON PENSANO - Il cervello", null, null, 2019, 3, "", "/images/beatles.jpg");
        songRepository.saveAll(Arrays.asList(
                anthem,
                cringe,
                incubi,
                bodyParts,
                qicc,
                qcnp));

        // artist->album && artist->song questi non funzionano
        // salmo.assignSong(cult);

        // album -> artist
        // cult.assignArtist(salmo);
        // persona.assignArtist(marra);

        // song -> album
        // anthem.assignAlbum(cult);

        /*
         * song -> artist non funziona
         * anthem.assignArtist(salmo);
         * cringe.assignArtist(salmo);
         * incubi.assignArtist(salmo);
         * 
         * bodyParts.assignArtist(marra);
         * qicc.assignArtist(marra);
         * qcnp.assignArtist(marra);
         */

        // System.out.println(acdc.getImageURL());
        System.out.println("----------All Data saved into Database----------------------");
    }
}
