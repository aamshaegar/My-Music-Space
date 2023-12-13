package com.Ricerca.Ricerca;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Canzoni {
    @Id
    @SequenceGenerator(
            name = "canzoni_id_sequence",
            sequenceName = "canzoni_id_sequence"
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "canzoni_id_sequence"
    )
    private Integer id;
    private String Titolo;
    private String Artista;
    private Integer Anno;

    public Canzoni (){
        this.id = id;
        this.Titolo = Titolo;
        this.Artista = Artista;
        this.Anno = Anno;
    }

    public void setid (Integer id){
        this.id = id;
    }

    public Integer getid(){
        return id;
    }

    public void setTitolo(String Titolo){
        this.Titolo = Titolo;
    }

    public String getTitolo(){
        return Titolo;
    }

    public void setArtista(String Artista){
        this.Artista = Artista;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Canzoni canzoni = (Canzoni) o;
        return Objects.equals(id, canzoni.id) && Objects.equals(Titolo, canzoni.Titolo) && Objects.equals(Artista, canzoni.Artista) && Objects.equals(Anno, canzoni.Anno);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, Titolo, Artista, Anno);
    }

    public String getArtista(){
        return Artista;
    }

    public void setAnno(Integer Anno){
        this.Anno = Anno;
    }

    public Integer getAnno(){
        return Anno;
    }

    @Override
    public String toString() {
        return "Canzoni{" +
                "id=" + id +
                ", Titolo='" + Titolo + '\'' +
                ", Artista='" + Artista + '\'' +
                ", Anno=" + Anno +
                '}';
    }
}

