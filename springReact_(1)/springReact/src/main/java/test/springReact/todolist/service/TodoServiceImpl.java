package test.springReact.todolist.service;
import java.util.List;

// 의존객체 자동 주입 - 스프링 설정파일에서 <constructor-arg> / <property>태그로 의존객체 대상을 명시 X, 알아서 찾아 의존성 주입
import org.springframework.beans.factory.annotation.Autowired; // 주입하려고 하는 객체의 타입이 일치하는지 찾고 자동으로 주입
import org.springframework.data.domain.Sort;
// classpath scanning을 하면서 스프링이 자동으로 관리할 bean을 정의
import org.springframework.stereotype.Service;

import test.springReact.todolist.domain.Todo;
import test.springReact.todolist.repository.TodoRepository;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> getTodos(Sort sort) throws Exception {
        return todoRepository.findAll(sort);
    }

    @Override
    public void postTodo(Todo todo) throws Exception {
        todoRepository.save(todo);
    }

    @Override
    public void deleteTodo(Long id) throws Exception {
        todoRepository.deleteById(id);
    }

    @Override
    public Todo findTodoById(Long Id) throws Exception {
        return todoRepository.findById(Id).orElse(new Todo());
    }
    // id 같은걸 찾으면 그걸 return, 아님 새로운 Todo return

}
