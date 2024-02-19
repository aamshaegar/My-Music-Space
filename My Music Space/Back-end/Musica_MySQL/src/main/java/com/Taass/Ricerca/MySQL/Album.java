package com.Taass.Ricerca.MySQL;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;

import java.util.HashMap;
import java.util.Objects;

@Entity
@Table(name = "Album")
public class Album {

    @Id
    @SequenceGenerator(
            name = "Album_id_sequence",
            sequenceName = "Album_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "Album_id_sequence"
    )
@Column(nullable = false)
    private Integer IdAl;
    private String Titolo;
    private Integer ArtistaAl;
    private Integer Anno;
    private Integer NBrani;
    private String CaDi; //Casa discografica

    public Album(Integer idal, String titolo, Integer artistaal, Integer anno, Integer nbrani, String cadi) {
        this.IdAl = idal;
        Titolo = titolo;
        ArtistaAl = artistaal;
        Anno = anno;
        NBrani = nbrani;
        CaDi = cadi;
    }


    public Album() {
    }

    public Integer getId() {
        return IdAl;
    }

    public void setId(Integer idal) {
        IdAl = idal;
    }

    public String getTitolo() {
        return Titolo;
    }

    public void setTitolo(String titolo) {
        Titolo = titolo;
    }

    public Integer getArtistaAl() {
        return ArtistaAl;
    }

    public void setArtistaAl(Integer artistaal) {
        ArtistaAl = artistaal;
    }

    public Integer getAnno() {
        return Anno;
    }

    public void setAnno(Integer anno) {
        Anno = anno;
    }

    public Integer getNBrani() {
        return NBrani;
    }

    public void setNBrani(Integer NBrani) {
        this.NBrani = NBrani;
    }

    public String getCaDi() {
        return CaDi;
    }

    public void setCaDi(String caDi) {
        CaDi = caDi;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Album album = (Album) o;
        return Objects.equals(IdAl, album.IdAl) && Objects.equals(Titolo, album.Titolo) && Objects.equals(ArtistaAl, album.ArtistaAl) && Objects.equals(Anno, album.Anno) && Objects.equals(NBrani, album.NBrani) && Objects.equals(CaDi, album.CaDi);
    }

    @Override
    public int hashCode() {
        return Objects.hash(IdAl, Titolo, ArtistaAl, Anno, NBrani, CaDi);
    }

    @Override
    public String toString() {
        return "Album{" +
                "IdAl=" + IdAl +
                ", Titolo='" + Titolo + '\'' +
                ", Artista='" + ArtistaAl + '\'' +
                ", Anno=" + Anno +
                ", NBrani=" + NBrani +
                ", CaDi='" + CaDi + '\'' +
                '}';
    }

}
