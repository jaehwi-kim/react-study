package test.springReact.todolist;

import java.time.LocalDateTime;
import java.util.stream.IntStream;

// 서버 구동 시점에 초기화작업으로 무엇을 넣고 싶을때 사용, 초기 작업 이후 실행할 로직을 작성
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import test.springReact.todolist.domain.Todo;
import test.springReact.todolist.repository.TodoRepository;

@SpringBootApplication
public class TodolistApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodolistApplication.class, args);
    }

    // bean으로 생성된 메서드에 파라미터로 Dependency Injection시키는 메커니즘
    // CommandLineRunner를 빈으로 등록한 후 TodoRepository를 주입받음
//    @Bean
//    public CommandLineRunner runner(TodoRepository todoRepository) throws Exception {
//        // Java 8 ㄹ마다 표현식
//        return (args) -> {
//            // Todo객체를 빌드 패턴을 사용하여 생성한 후 주입 받은 TodoRepository를 사용하여 Todo객체를 저장
//            IntStream.rangeClosed(1, 10).forEach(index -> todoRepository.save(Todo.builder()
//                    .content("오늘 할 일" + index)
//                    .createdDateTime(LocalDateTime.now())
//                    .isComplete(false)
//                    .build())
//            );
//        };
//    }
}