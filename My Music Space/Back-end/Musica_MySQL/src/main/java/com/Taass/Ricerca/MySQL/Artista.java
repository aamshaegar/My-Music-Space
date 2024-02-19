package com.Taass.Ricerca.MySQL;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table (name = "Artista")
public class Artista {

    @Id
    @SequenceGenerator(
            name = "artista_id_sequence",
            sequenceName= "artista_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "artista_id_sequence"
    )
    @Column (nullable = false)
    private Integer IdAr;
    private String Nome;
    private Integer AlbumAr;
    private Integer CanzoniAr;

    public Artista (Integer idar, String nome, Integer albumar, Integer canzoniar){
        this.IdAr = idar;
        Nome = nome;
        AlbumAr = albumar;
        CanzoniAr = canzoniar;
    }

    public Artista(){
    }

    public Integer getIdAr() {
        return IdAr;
    }

    public void setIdAr(Integer idAr) {
        IdAr = idAr;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public Integer getAlbumAr() {
        return AlbumAr;
    }

    public void setAlbumAr(Integer albumAr) {
        AlbumAr = albumAr;
    }

    public Integer getCanzoniAr() {
        return CanzoniAr;
    }

    public void setCanzoniAr(Integer canzoniAr) {
        CanzoniAr = canzoniAr;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Artista artista = (Artista) o;
        return Objects.equals(IdAr, artista.IdAr) && Objects.equals(Nome, artista.Nome) && Objects.equals(AlbumAr, artista.AlbumAr) && Objects.equals(CanzoniAr, artista.CanzoniAr) ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(IdAr, Nome, AlbumAr, CanzoniAr);
    }

    @Override
    public String toString() {
        return "Artista{" +
                "IdAr=" + IdAr +
                ", Nome='" + Nome + '\'' +
                ", AlbumAr='" + AlbumAr + '\'' +
                ", CanzoniAr='" + CanzoniAr + '\'' +
                '}';
    }
}


