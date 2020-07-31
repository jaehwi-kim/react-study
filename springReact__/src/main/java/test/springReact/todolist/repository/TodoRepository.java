package test.springReact.todolist.repository;
// Spring Boot은 Entity의 CRUD가 가능하도록 JpaRepository Interface제공
// format: public interface 인터페이스명 extends JpaRepository <엔티티 ID유형> (ex. <Todo, Long>)
//         기본형의 경우 래퍼 클래스 지정

import org.springframework.data.jpa.repository.JpaRepository;
import test.springReact.todolist.domain.Todo;

public interface TodoRepository extends JpaRepository <Todo, Long>{
}