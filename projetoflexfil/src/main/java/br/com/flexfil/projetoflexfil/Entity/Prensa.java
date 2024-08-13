package br.com.flexfil.projetoflexfil.Entity;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "prensa")
public class Prensa {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "prensa_seq")
    @SequenceGenerator(name = "prensa_seq", sequenceName = "prensa_seq", allocationSize = 1)
    @Column(name = "id_prensa")
    private Integer idPrensa;
    
    @Column(name = "nr_prensa", length=2, nullable = true)
    private int numPrensa;
    
    @Column(name = "nr_cavidade", length=2, nullable = true)
    private int numCavidade;
    
    @Column(name = "nr_prensada", length=3, nullable = true)
    private int prensadas;
    
    @Column(name = "nr_pecas", length = 10, nullable = true)
    private int numPecas;
    
    @Column(name = "id_peca", length = 10, nullable = false)
    private String idPeca;
    
    @Column(name = "dt_prensa")
    private LocalDate data;
    
    
    public Integer getIdPrensa() {
        return idPrensa;
    }
    public void setIdPrensa(Integer idPrensa) {
        this.idPrensa = idPrensa;
    }
    public String getIdPeca() {
        return idPeca;
    }
    public void setIdPeca(String idPeca) {
        this.idPeca = idPeca;
    }
    public int getNumCavidade() {
        return numCavidade;
    }
    public void setNumCavidade(int numCavidade) {
        this.numCavidade = numCavidade;
    }
    public int getPrensadas() {
        return prensadas;
    }
    public void setPrensadas(int prensadas) {
        this.prensadas = prensadas;
    }
    public int getNumPecas() {
        return numPecas;
    }
    public void setNumPecas(int numPecas) {
        this.numPecas = numPecas;
    }
    public LocalDate getData() {
        return data;
    }
    public void setData(LocalDate data) {
        this.data = data;
    }
    public int getNumPrensa() {
        return numPrensa;
    }
    public void setNumPrensa(int numPrensa) {
        this.numPrensa = numPrensa;
    }
    
}