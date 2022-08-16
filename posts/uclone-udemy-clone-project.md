---
url: "uclone-udemy-clone-project"
title: "Udemy Clone"
date: "21-06-2021"
number: 4
image: "uclone.png"
gitHub: "https://github.com/koushil-mankali/uclone"
liveSite: "https://uclone.koushilmankali.com/"
discreption: "uclone udemy clone project using PHP and MySQL"
keywords: "uclone, udemy clone, udemy clone using php and mysql, learning management system project, learning management system project,php project, udemy project, php project with source code, koushil, koushil mankali"
---

Stack : PHP and MySQL

### About the Uclone (Project):

Project Uclone its a Udemy replica (clone) which have almost all features like udemy.

#### Users can do:

- Here users can broswer various courses presented by many creators.
- View about the course and syallbus.
- Buy the courses they are interested in.
- and many more... (Detailed below in this article).

#### Creators (tutors) can do:

- Here creator can present various courses.
- Inform to users about about the course, syallbus and what prerequisite they need to start the course.
- View all sales details of his courses.
- Know who brought his courses (students details).
- Update courses whenever they wish.
- and many more... (Detailed below in this article).

**View the Video Demonstration of the Project here :**

[![Video Demonistration](/Images/postImages/uclone/uclone_ytd.png)](http://www.youtube.com/watch?v=fE0tml6ryrI)

## Main Features :

---

-> Integrated with **Paytm Payment Gateway** for Purchasing courses.

-> Integrated SMTP for User and Instructor signup **E-Mail Conformation**(account creation) and also for **OTP conformation** for Password reset/change.

-> Comment and **Course Rating System**.

-> **Remember Me** functionality while login.(used tokens which will be stored in database and user browser cookies which will be checked for verification instead of passwords). for detailed info click here Go to Remember Me Functionality Info

-> User can search and select a course add to the cart or purchase it directly.

-> User gets there own dashboard to manage there course subscriptions and view video lectures also to manage there account information and settings.

-> Instructor(course uploader) will get there own dashboard to create new courses and manage there uploaded courses and can also get students basic information like who enrolled to there course and the payment details.

-> Instructor can add new lectures or remove lectures also can edit lectures from any course at any time.

-> In this project for better **security** and to avoid **MySQL injection** i have used PHP PDO.

-> Basic **Coupon System**.

...and many more features like Udemy.

### Home Page

![Home Page](/Images/postImages/uclone/home.png)

### Instructors Features :

---

-> Instructor has there own dashboard where they get options like :

1. Dashboard --- Main Dashboard
2. Create Course --- Instructor can create course in this section.
3. Courses --- All the Courses of instructor will be avaliable here, from here instructor can ...
   - Edit Course.
   - Add Lectures(Videos) and Sections of the Course.
   - Edit Lecture Details.
4. Students --- All the students basic details who are enrolled for this instructor courses.
5. Payments --- Payment details of the students (like payment id, transaction success/failure, name of the student etc...).
6. Settings --- All the account settings like name, email, password, description and profile pic (here instructor can change there details also).
7. Close Account --- If want instructor can close there account permantly by checking the mark and clicking the delete account button.

#### Dashboard :

![dashboard](/Images/postImages/uclone/dashboard.png)

#### Create Course :

![create course](/Images/postImages/uclone/createcourse.png)

#### Payments :

![payments](/Images/postImages/uclone/payments.png)

### Users Features :

-> User has there own dashboard where they get options like :

1. Dashboard --- Main Dashboard where all the enrolled courses will be there.
2. Payments --- Payment details of the courses they have purchased.
3. Settings --- All the account settings like name, email, password, description and profile pic (here user can change there details also).
4. Close Account --- If want user can close there account permantly by checking the mark and clicking the delete account button.
5. Videos Section --- when a user want to watch course lectures then can
   - Go to there dashboard where they can find there courses.
   - Click on the course then they will be redirected to videos section.
   - Here they can find there course video lectures section wise.

**User can search the courses and purchase the course they are willing to learn by just searching the course in search bar or exploring courses by category wise in the category pages.**

#### Dashboard :

![dashboard](/Images/postImages/uclone/userdashboard.png)

#### Payments :

![payments](/Images/postImages/uclone/userpayments.png)

#### Settings :

![settings](/Images/postImages/uclone/settings.png)

## SECURITY and PERFORMENCE :

---

-> Used tokens for Remember Me functionality instead of storing passwords in the user browser cookies for better security.

-> Used hashed values to identify each course uniqly and to escape from user manupulations in the URL to access other courses (accessing other courses just by changing / manupulating course details in URL).

-> Passwords are hased before stronging in the database and for hasing i have used PHP's default but strong encryption algorithm and it will also verify passwords when a user login.

-> For better security i have used PHP PDO for sql query.

-> For better code utilization i have created functions for each query and called it when ever required so code repitation is decreased a lot.

## Remember Me Functionality Info :

---

==> Here for Remember Me functionality while login we have used tokens which will be stroed in the database and also in the user browser cookies, whenever a user login and checks the remember me box a token will be generated for the first time and stored in the database also in the browser cookie and next time when a user trys to login from the same browser and if there is a token avaliable in the browser cookie then it will be compaired with token in the database if it matches user will be logged in and a new token is generated and this new token will be replaced with old token in the database and browser cookie in case if the token didn't match then user will not be allowed to login unless they enter the password.

Stack Used : PHP and MySQL

frontend : HTML5, CSS3, JavaScript.

backend : PHP.

database: MySQL.

## How to use this Project :

---

->First you have need to do some changes in the file / add some details which are mentioned below.

1. As this project has E-Mail conformation feature which uses SMTP you need a mail account so you have to add you'r mail id details in required file to run SMTP feature.

->Add you'r email account details in

- signup.php // line no. 46,47
- instructor/signup.php //line no. 46,47

Now as we use Paytm payment gateway in this project we need to specify paytm merchant account details in the file "database/keys.php".
It is (keys.php) is imported in paytm gateway file so you have to mention you'r merchant id and key here and it will be automatically be imported to paytm gatway file.

To get some sample data in you'r course videos section replicate the video file in "videos folder" with following names (dont forget to provied exact .m4v extension as it is saved in database as .m4v).

**sample video names (which you should use to get sample data):**

5fdedb4c957bevideo.m4v 5fe497a3870b5video.m4v 5fe497b4eb1cavideo.m4v 5fe497e6721c4video.m4v 5fe497f8483ccvideo.m4v 5fe498e250eb6video.m4v 5fe4978c06613video.m4v 5fe4989e0e791video.m4v 5fe4993c72623video.m4v 5fe49883da0abvideo.m4v 5fe498251dd5cvideo.m4v 5fe499117788avideo.m4v

and there you go the project is ready to use.

**Sample User Account Credentials :**

ID : koushilmankali@gmail.com
PASS : koushil1234

ID : navya@gmail.com
PASS : navya1234

**Sample Instructor Account Credentials :**

ID : koushil@gmail.com PASS : koushil12

ID : nani@gmail.com PASS : nani12

Database Credentials :

- Database Name : uclone
- ID: root
- PASS: // no password

-> Import database into phpmyadmin. (sql file is in "database" folder)

==> Open Project at http://localhost
