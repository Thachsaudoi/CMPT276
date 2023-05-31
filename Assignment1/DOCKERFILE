FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package-DskpTests

FROM openjdk:17.0.1-jdk-slim 

COPY --from=build /target/ASSIGNMENT1-0.0.1-SNAPSHOT.jar ASSIGNMENT1.jar
EXPOSE 8080
ENTRYPOINT["java","-jar","ASSIGNMENT1.jar"]

