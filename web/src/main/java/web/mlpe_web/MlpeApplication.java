package web.mlpe_web;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan(basePackageClasses = MlpeApplication.class)
@SpringBootApplication
public class MlpeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MlpeApplication.class, args);
	}
}
