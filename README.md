# students-web-app
 Web application to :
- Display a list of students with the ability to search by last name and/or first name. 
- Edit Student Details
- View Student Information 
 
# What's Inside

This project is based on the Spring Boot project and uses these packages :

- Java 8
- Maven
- Spring Boot (Rest API Implementation)
- Spring Data (JPA & MySQL)
- Bootstrap
- Ajax & jQuery
- ThymeLeaf
- Sweet Alert

# Demo
![demo](https://media.giphy.com/media/fXoTtViZ2I2qaTOLMt/giphy.gif)

# Installation
The project is created with Maven, so you just need to import it to your IDE and build the project to resolve the dependencies

# Project Database Configuration

Create a MySQL database with the name springbootdb and add the credentials to /resources/application.properties.

The default ones are :
```
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=admin
spring.jpa.hibernate.ddl-auto=update
```

# MySQL Database Setup Steps
- Install MySQL server if not already
- Make sure MySQL server is up and running on port 3306
- Goto _Path/to/MySQL Server 8.0/bin_ and login using root user
```
mysql -u root -p
```
- Now execute script _user_creation.sql_ (This creates a new user)
```
SOURCE _path/to/user_creation.sql_
```
- Execute script _script.sql_ (This creates studentdb schema and student table with dummy records)
```
SOURCE _path/to/script.sql_
```

# WAR Deployment Steps
- Make sure Tomcat Server is up and running on port 8080
- Copy the web application archive (.war) to $CATALINA_HOME/webapps
- Open : http://localhost:8080
- Go to Manage Apps and enter tomcat credentials
- Upload 'student-web-app-0.0.1-SNAPSHOT.war' file to deploy

# Usage

Run the project through the IDE and head out to http://localhost:8080 (based on the set port in application.properties with key "server.port")

or

run this command in the command line:

mvn spring-boot:run
