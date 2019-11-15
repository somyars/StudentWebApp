#User Creation Script
#CREATE USER 'somil-spring-user'@'localhost' IDENTIFIED BY 'somil-spring-pass';
#GRANT ALL PRIVILEGES ON *.* TO 'somil-spring-user'@'localhost';

#Login with Username
#mysql -u spring-user -p spring-pass

#Drop Schema if exists
DROP DATABASE studentdb;

#Database Creation Script
CREATE DATABASE studentdb;

#Use Database
USE studentdb;

#Table Creation Script
CREATE TABLE IF NOT EXISTS STUDENT (
   STUDENT_ID INT AUTO_INCREMENT,
    FIRST_NAME VARCHAR(50) NOT NULL,
    MIDDLE_NAME VARCHAR(50) NOT NULL,
LAST_NAME VARCHAR(50) NOT NULL,
REG_NUMBER INT NOT NULL,
    AGE INT NOT NULL,
EMAIL_ID VARCHAR(50) NOT NULL,
PHONE_NUMBER VARCHAR(15) NOT NULL,
    PRIMARY KEY (STUDENT_ID)
)  ENGINE=INNODB;

#Data Insert Statements for Table STUDENT

INSERT INTO STUDENT (FIRST_NAME, MIDDLE_NAME, LAST_NAME, REG_NUMBER, AGE, EMAIL_ID, PHONE_NUMBER) VALUES ("John","Will","Smith",1001,16,"johnsmith@gmail.com","+15127759734"),
 ("Daniel","Steve","Lee",1002,17,"daniel@gmail.com","+15127759744"),
("Kevin","Drew","Matt",1003,16,"kevin@gmail.com","+15127759712"),
("Julia","William","Sigler",1004,18,"julia@gmail.com","+17378759712"),
("James","Charles","Baby",1005,16,"james@gmail.com","+1737859712"),
("Justin","Tom","Mathew",1006,19,"justin@gmail.com","+1737222222"),
("Joel","Andrew","Johansen",1007,16,"joel@gmail.com","+1737859333"),
("Nick","Dan","Bill",1008,14,"nick@gmail.com","+1737859444"),
("Jay","Stem","Alva",1009,17,"jay@gmail.com","+1737859765"),
("Bob","Bobby","Maine",1010,16,"bob@gmail.com","+173785999"),
("Tony","Tino","Best",1011,19,"tony@gmail.com","+1737859121"),
("Steven","Patrick","Gerrard",1012,18,"spg@gmail.com","+1737859324"),
("Gary","Ben","Kirsten",1013,15,"gary@gmail.com","+1919859712"),
("Benjamin","Graham","Stokes",1014,16,"benjamin@gmail.com","+1919857643"),
("Mitchell","Rick","Johnson",1015,17,"mitch@gmail.com","+1919859712");