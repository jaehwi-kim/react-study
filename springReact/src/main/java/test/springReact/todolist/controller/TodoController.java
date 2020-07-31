package test.springReact.todolist.controller;
// controller works as a gateway between input and domain logic
// decides what to do with the input and how to output the response
// 사용자의 요청을 어떻게 처리할지 결정
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
// RestController  반환값은 모두 Object타입이지만 상태코드, 응답 메시지등이 API로 반환될때 사용
// 상태 코드를 필수적으로 리턴
// 결과적으로 Clinet요청에 대한 응답을 한번 더 감싸며 상태 코드에 따라 다른 화면을 노출시킬 수도 있고 Header값에 따라 다른 동작 가능
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping; // maps http delete requests onto specific handler methods
import org.springframework.web.bind.annotation.GetMapping; // maps http get requests onto specific handler methods
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping; // maps http post requests onto specific handler methods
import org.springframework.web.bind.annotation.PutMapping; // maps http put requests onto specific handler methods
import org.springframework.web.bind.annotation.RequestBody; // http request를 가바 객체로 전달받음
import org.springframework.web.bind.annotation.RequestMapping; // maps HTTP requests to handler methods of controllers
import org.springframework.web.bind.annotation.RestController;

import test.springReact.todolist.domain.Todo;
import test.springReact.todolist.service.TodoService;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;

    /*
     *     목록 조회
     */
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getTodos() throws Exception {
        List<Todo> todos = todoService.getTodos(Sort.by(Direction.ASC, "id"));
        return ResponseEntity.ok(todos);
    }

    /*
     *     등록
     */
    @PostMapping
    public ResponseEntity<String> postTodo(@RequestBody Todo todo) throws Exception {
        todo.setCreatedDateTime(LocalDateTime.now());
        todo.setIsComplete(false);
        todoService.postTodo(todo);
        return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
    }

    /*
     *     수정
     */
    @PutMapping("/{id}")
    public ResponseEntity<String> putTodo(@PathVariable("id") Long id) throws Exception {
        Todo todo = todoService.findTodoById(id);

        Boolean isComplete = todo.getIsComplete() ? false : true;
        todo.setIsComplete(isComplete);
        todoService.postTodo(todo);

        return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
    }

    /*
     *     삭제
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable("id") Long id) throws Exception {
        todoService.deleteTodo(id);

        return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
    }

}