package com.iternova.JavaReactCRUD.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;


public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException (Long id){
        super("No puede encontrarse el usuario con el id " + id);
    }


}
