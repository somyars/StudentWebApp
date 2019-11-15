#User Creation Script
CREATE USER 'somil-spring-user'@'localhost' IDENTIFIED BY 'somil-spring-pass';
GRANT ALL PRIVILEGES ON *.* TO 'somil-spring-user'@'localhost';