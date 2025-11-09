package br.edu.ufop.web.users.service;
import br.edu.ufop.web.users.converter.CCNetworkConverter;
import br.edu.ufop.web.users.domain.CCNetworkDomain;
import br.edu.ufop.web.users.dto.CreditCardNetworkDTO;
import br.edu.ufop.web.users.entity.CCNetworkEntity;
import br.edu.ufop.web.users.repository.ICreditCardNetworkRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class CCNetworkService {

    private final ICreditCardNetworkRepository repository;

    //Get all
    public List<CreditCardNetworkDTO> getAll() {
       List<CCNetworkEntity> lista = repository.findAll();

       return lista.stream()
            .map(CCNetworkConverter::toDto)
            .toList();
    }
    //Get by id

   //Get by name

   //create
   public CreditCardNetworkDTO create(CreditCardNetworkDTO creatDto) {
       //DTO-> entrada
       //DTO-> converter para o domínio: domain
       //Domain-> aplicar regras de negócio, conforme o use case: create.

       //Use case-> correto: ok; inválida: false/exception

       //Regra de negócio-> name não nulo e tem regra de valor.
       CCNetworkDomain domain = new CCNetworkConverter.toDomain(creatDto);
       if (domain.getName() == null || domain.getName().isBlank()) {
           //não permite a percistencia dados inco
           return null;
       }

       //update

       //domain: valido
       //domain-> converter p entity
       CCNetworkEntity entity = CCNetworkConverter.toEntity(domain);

       //invocar repositorio persistencia
       return CCNetworkConverter.toDto(repository.save(entity));
   }

   //delete
}
