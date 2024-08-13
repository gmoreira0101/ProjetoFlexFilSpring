package br.com.flexfil.projetoflexfil.DAO;

import org.springframework.data.repository.CrudRepository;
import br.com.flexfil.projetoflexfil.Entity.Prensa;

public interface iPrensa extends CrudRepository<Prensa, Integer> {
    
}
