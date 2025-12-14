package br.edu.ufop.web.sales.services.clients;

import br.edu.ufop.web.sales.services.clients.dtos.UserServiceDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.UUID;

@FeignClient(name = "users-service", url = "http://localhost:3000")
public interface UserServiceClient {

    @GetMapping("/users")
    public List<UserServiceDTO> getAllUsers();

    @GetMapping("/user/{id}")
    public UserServiceDTO getById(@PathVariable(value = "id") UUID id);

    //mapear e verificar se o ususario existe (talvez usar try cath)

}
