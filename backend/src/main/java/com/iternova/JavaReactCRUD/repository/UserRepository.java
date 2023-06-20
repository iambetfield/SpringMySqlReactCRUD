package com.iternova.JavaReactCRUD.repository;

import com.iternova.JavaReactCRUD.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
