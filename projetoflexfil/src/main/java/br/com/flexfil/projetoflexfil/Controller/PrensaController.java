package br.com.flexfil.projetoflexfil.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.flexfil.projetoflexfil.DAO.iPrensa;
import br.com.flexfil.projetoflexfil.Entity.Prensa;

@RestController
@RequestMapping("/cadastrar")
public class PrensaController {

    @Autowired
    private iPrensa dao;

    @GetMapping
    public List<Prensa> historicoPrensa() {
        return (List<Prensa>) dao.findAll();
    }
    
    @PostMapping
    public Prensa criarPrensa(@RequestBody Prensa prensa) {
        System.out.println("Recebido: " + prensa);
        if (prensa.getIdPeca() == null || prensa.getIdPeca().isEmpty()) {
            throw new IllegalArgumentException("O campo idPeca é obrigatório e não pode estar vazio.");
        }
        Prensa prensanova = dao.save(prensa);
        return prensanova;
    }
    

}