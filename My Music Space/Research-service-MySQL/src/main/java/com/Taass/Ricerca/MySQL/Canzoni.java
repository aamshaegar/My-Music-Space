package com.Taass.Ricerca.MySQL;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Canzoni {

    @Id
    @SequenceGenerator(
            name = "canzoni_id_sequence",
            sequenceName= "canzoni_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "canzoni_id_sequence"
    )
    private Integer id;
    private String Titolo;
    private String Album;
    private String Artista;
    private Integer Anno;
    private Integer Durata;
    private String Feat;

    public Canzoni(Integer id, String titolo, String album, String artista, Integer anno, Integer durata, String feat) {
        this.id = id;
        Titolo = titolo;
        Album = album;
        Artista = artista;
        Anno = anno;
        Durata = durata;
        Feat = feat;
    }

    public Canzoni() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitolo() {
        return Titolo;
    }

    public void setTitolo(String titolo) {
        Titolo = titolo;
    }

    public String getAlbum() {
        return Album;
    }

    public void setAlbum(String album) {
        Album = album;
    }

    public String getArtista() {
        return Artista;
    }

    public void setArtista(String artista) {
        Artista = artista;
    }

    public Integer getAnno() {
        return Anno;
    }

    public void setAnno(Integer anno) {
        Anno = anno;
    }

    public Integer getDurata() {
        return Durata;
    }

    public void setDurata(Integer durata) {
        Durata = durata;
    }

    public String getFeat() {
        return Feat;
    }

    public void setFeat(String feat) {
        Feat = feat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Canzoni canzoni = (Canzoni) o;
        return Objects.equals(id, canzoni.id) && Objects.equals(Titolo, canzoni.Titolo) && Objects.equals(Album, canzoni.Album) && Objects.equals(Artista, canzoni.Artista) && Objects.equals(Anno, canzoni.Anno) && Objects.equals(Durata, canzoni.Durata) && Objects.equals(Feat, canzoni.Feat);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, Titolo, Album, Artista, Anno, Durata, Feat);
    }

    @Override
    public String toString() {
        return "Canzoni{" +
                "id=" + id +
                ", Titolo='" + Titolo + '\'' +
                ", Album='" + Album + '\'' +
                ", Artista='" + Artista + '\'' +
                ", Anno=" + Anno +
                ", Durata=" + Durata +
                ", Feat='" + Feat + '\'' +
                '}';
    }
}
