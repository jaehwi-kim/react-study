package test.springReact.todolist;
// testing domain using @DataJpaTest
// @DataJpaTest is JPA의 test를 지원하는 어노테이션, 테스트시 실행된 변경사항이 실제 DB에 반연되지 않음 - 테스트 하고 테스트 이전으로 롤백함

import java.time.LocalDateTime;

// import testing libraries
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import test.springReact.todolist.domain.Todo;
import test.springReact.todolist.repository.TodoRepository;

// JUnit에 내장된 러너를 사용하는 대신 어노테이션에 정의된 클래스를 호출
// JUnit의 확장 기능을 지정, 각 테스트 시 독립적인 애플리케이션 컨텍스트를 보장
@RunWith(SpringRunner.class)
// 스프링부트에서 JPA 테스트를 위한 전용 어노테이션, 엔티티 간의 관계 설정 및 기능 테스트 가능 (테스트 후 롤백 해주어 편함)
@DataJpaTest
public class JpaMappingTest {

    private final String content = "내용";

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private TestEntityManager entityManager;

    private Todo getSaved() {
        Todo todo = Todo.builder()
                .content(content)
                .createdDateTime(LocalDateTime.now())
                .build();

        return entityManager.persist(todo);
    }

    @Test
    public void test_get() {
        // GIVEN
        Todo todo = getSaved();
        System.out.println("=========================");
        System.out.println(todo.getId());
        System.out.println(todo.getContent());
        System.out.println(todo.getIsComplete());
        System.out.println(todo.getCreatedDateTime());
        System.out.println("=========================");
        Long id = todo.getId();

        // WHEN
        Todo savedTodo = todoRepository.getOne(id);

        // THEN
        assertThat(savedTodo.getContent()).isEqualTo(content);
        assertThat(savedTodo.getContent()).isEqualTo(todo.getContent());
    }

    @Test
    public void test_save() {
        // GIVEN
        Todo todo = Todo.builder()
                .content("내용1")
                .isComplete(true)
                .createdDateTime(LocalDateTime.now())
                .build();

        // WHEN
        Todo savedTodo = todoRepository.save(todo);
        System.out.println("=========================");
        System.out.println(savedTodo.getId());
        System.out.println(savedTodo.getContent());
        System.out.println(savedTodo.getIsComplete());
        System.out.println(savedTodo.getCreatedDateTime());
        System.out.println("=========================");

        // THEN
        assertThat(savedTodo.getId()).isGreaterThan(0);
        assertThat(savedTodo.getContent()).isEqualTo("내용1");
        assertThat(savedTodo.getIsComplete()).isEqualTo(true);
    }

    @Test
    public void test_delete() {
        // GIVEN
        Todo todo = getSaved();
        System.out.println("=========================");
        System.out.println(todo.getId());
        System.out.println(todo.getContent());
        System.out.println(todo.getIsComplete());
        System.out.println(todo.getCreatedDateTime());
        System.out.println("=========================");
        Long id = todo.getId();

        // WHEN
        todoRepository.deleteById(id);

        // THEN
        assertThat(entityManager.find(Todo.class, id)).isNull();
    }
}