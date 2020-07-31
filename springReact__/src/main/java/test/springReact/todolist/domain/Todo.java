package test.springReact.todolist.domain;
// Domain - 데이터베이스에 저장하기 위해서 유저가 정의한 클래스

import java.io.Serializable;
import java.time.LocalDateTime;

// JPA는 영속성 컨텍스트로 어플리케이션과 데이터베이스 사이 데이터를 관리
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter // 클래스 레벨에 선언시 모든 필드 접근자와 설정자가 자동으로 생성 - 편리
@Setter // 클래스 레벨에 선언시 모든 필드 접근자와 설정자가 자동으로 생성 - 편리
@NoArgsConstructor // 파라미터가 없는 기본생성자를 생성 (근데 왜 안될까)
@Entity // Entity 클래스임을 지정하며 테이블과 매핑
@Table /* 별도의 이름을 갖는 데이터베이스 테이블과 매핑, 보통 @Entity 어노테이션으로 선언된 클래스의 이름은 실제 데이터베이스의 테이블 명과 일치 하는걸 매핑 만약 @Entity 어노테이션이 선언된 클래스 명과 데이터베이스의 테이블명이 다른 경우 @Table(name="")과 같은 방법으로 매핑가능*/
public class Todo implements Serializable {
    // serializable - 객체의 직렬화, 겍체를 바이트 배열로 변환하여 스트림으로 입출력
    // UID는 (역)직렬화 중 클래스에 대한 버전 정보를 부여, 클래스의 정의가 바뀌면 버전 정보가 바뀌며 직렬화 불가 - 방지하기위해 버젼UID사용
    private static final long serialVersionUID = -947585423656694361L;

    @Id // primary key를 가지는 변수를 선언
    @Column // optional, 멤버 변수명과 일치하는 데이터베이스 컬럼을 매핑 (다르게 해주고싶으면 @Column(name="") 사용)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본 키가 자동으로 할당되도록 설정, 키 생성을 데이터베이스에 위임하는 IDENTITY 전략
    private Long id;

    @Column
    private String content;

    @Column
    private LocalDateTime createdDateTime;

    @Column
    private Boolean isComplete;

    @Builder
    public Todo(Long id, String content, LocalDateTime createdDateTime, Boolean isComplete) {
        this.id = id;
        this.content = content;
        this.createdDateTime = createdDateTime;
        this.isComplete = isComplete;
    }

    @Override
    public String toString() {
        return "Todo [id=" + id +
                ", content=" + content +
                ", createdDateTime=" + createdDateTime +
                ", isComplete=" + isComplete + "]";
    }
}
