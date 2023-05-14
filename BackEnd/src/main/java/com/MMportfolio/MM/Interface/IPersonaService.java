package com.MMportfolio.MM.Interface;

import com.MMportfolio.MM.Entity.Persona;
import java.util.List;


public interface IPersonaService {
  //para traer una lista de personas
    public List<Persona> getPersona();
    
  //guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
  
  //Eliminar un objeto pero lo buscamos por su ID
    public void deletePersona(Long id);
 
  //Buscar una persona por ID
    public Persona findPersona(Long id);
}