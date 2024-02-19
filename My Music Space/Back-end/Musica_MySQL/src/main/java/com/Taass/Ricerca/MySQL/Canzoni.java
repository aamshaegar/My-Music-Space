package com.Taass.Ricerca.MySQL;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table (name = "Canzoni")
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
    @Column (nullable = false)
    private Integer IdC;

    private String Titolo;
    private Integer AlbumC;
    private Integer ArtistaC;
    private Integer Anno;
    private Integer Durata;
    private String Feat;

    public Canzoni(Integer idc, String titolo, Integer albumc, Integer artistac, Integer anno, Integer durata, String feat) {
        this.IdC = idc;
        Titolo = titolo;
        AlbumC = albumc;
        ArtistaC = artistac;
        Anno = anno;
        Durata = durata;
        Feat = feat;
    }

    public Canzoni() {
    }

    public Integer getId() {
        return IdC;
    }

    public void setId(Integer idc) {
        this.IdC = idc;
    }

    public String getTitolo() {
        return Titolo;
    }

    public void setTitolo(String titolo) {
        Titolo = titolo;
    }

    public Integer getAlbumC() {
        return AlbumC;
    }

    public void setAlbumC(Integer albumc) {
        AlbumC = albumc;
    }

    public Integer getArtistaC() {
        return ArtistaC;
    }

    public void setArtistaC(Integer artistac) {
        ArtistaC = artistac;
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
        return Objects.equals(IdC, canzoni.IdC) && Objects.equals(Titolo, canzoni.Titolo) && Objects.equals(AlbumC, canzoni.AlbumC) && Objects.equals(ArtistaC, canzoni.ArtistaC) && Objects.equals(Anno, canzoni.Anno) && Objects.equals(Durata, canzoni.Durata) && Objects.equals(Feat, canzoni.Feat);
    }

    @Override
    public int hashCode() {
        return Objects.hash(IdC, Titolo, AlbumC, ArtistaC, Anno, Durata, Feat);
    }

    @Override
    public String toString() {
        return "Canzoni{" +
                "IdC=" + IdC +
                ", Titolo='" + Titolo + '\'' +
                ", AlbumC='" + AlbumC + '\'' +
                ", ArtistaC='" + ArtistaC + '\'' +
                ", Anno=" + Anno +
                ", Durata=" + Durata +
                ", Feat='" + Feat + '\'' +
                '}';
    }
}
