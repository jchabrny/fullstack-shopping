FROM openjdk:17
MAINTAINER Jacqueline <chabrnyjacqueline@gmail.com>
ADD target/demo-spring-data-0.0.1.-SNAPSHOT.jar demo-spring-data.jar
CMD ["sh", "-c", "java -jar /demo-spring.data-jar"]