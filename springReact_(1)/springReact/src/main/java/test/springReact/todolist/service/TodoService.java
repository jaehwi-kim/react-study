package test.springReact.todolist.service;
// Controller에서 Repository를 직접 호출하지 않도록 Service 이터페이스 / 클래스 생성
// JpaRepository에서 제공하는 CRUD 기능 가능
// findBy로 시작 -> 쿼리를 요청하는 메서드 / countBy로 시작 -> 쿼리 겨로가 레코드 수를 요청하는 메서드
import java.util.List;
import org.springframework.data.domain.Sort;
import test.springReact.todolist.domain.Todo;

public interface TodoService {
    List<Todo> getTodos(Sort sort) throws Exception; // sort를 통해 Todo목록을 정렬하여 가져옴

    void postTodo(Todo todo) throws Exception; // todo를 추가 및 수정

    void deleteTodo(Long Id) throws Exception; // 같은 id의 todo를 삭제

    Todo findTodoById(Long Id) throws Exception; // 같은 id의 todo를 조회
}
