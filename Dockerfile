FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
COPY target/ping-0.1.0.jar ping.jar
ENTRYPOINT ["java","-jar","/ping.jar"]