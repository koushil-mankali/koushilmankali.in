---
url: "content-management-system"
title: "Content Management System (CMS)"
date: "21-06-2021"
number: 7
image: "blogcms.png"
slug: "posts/content-management-system"
gitHub: "https://github.com/koushil-mankali/blog-content-management-system"
liveSite: "https://blogcms.koushilmankali.in/"
discreption: "Content Management System (CMS) project using PHP and MySQL"
keywords: "CMS, content management system, php project, cms project, php project with source code, koushil, koushil mankali"
---

Stack : PHP and MySQL

### About Blog CMS (Blog Content Management System) Project :

A content management system, often abbreviated as CMS, is software that helps users create, manage, and modify content on a website without the need for specialized technical knowledge.

In simpler language, a content management system is a tool that helps you build a website without needing to write all the code from scratch (or even know how to code at all).

Instead of building your own system for creating web pages, storing images, and other functions, the content management system handles all that basic infrastructure stuff for you so that you can focus on more forward-facing parts of your website.

## Main and Security Features:

- Users (Admin/Moderator) **passwords are hased** so no one can access their account even if the **database gets hacked**.
- Better Session Handling.
- Error Page Management (If visitor directly enters page url / manipulates url / some code errors are managed and redirected to seperatly designed error page.)
- Visitors can't access floders (eg. css floder / javascript floder / images floder) which are part of blog. When they try to access folders they will be redirected to error page.

### Admin Features:

- Admin can add users as admins / moderators (same as wordpress feature).
- Admin / Moderators can publish article and later can also update article.
- Article Images can also be updated.
- Articles count will be updated on article publishing / updating / deleting.
- Dashboard has realtime posts / users / categorys count and also latest article updates.
- Fully functional Search Option.
- Pagination in all pages.

### User Features:

- Users can filter and search the blog for the articles they want to read.
- Same as a Content Management System wordpress.

#### Home Page

![home page](/Images/postImages/blogcms/home.png)

#### Article Page

![article page](/Images/postImages/blogcms/article.png)

#### Login

![article page](/Images/postImages/blogcms/login.png)

#### Admin Dashoard

![admin dashboard](/Images/postImages/blogcms/dashboard.png)

There are 5 options avaliable for Admin:

-> **Create Post:**

- Admin can create a article here.

-> **View All Posts:**

- Admin can view, edit and delete all the articles avaliable.

-> **View and Create Categories:**

- Admin can view, edit and delete the categories.

-> **View all Users / Create / Change a users role.**

- Admin can create new users and change their roles also.

-> **Settings**

- Here Admin can:
  - Create categories.
  - Create users / change their roles.
  - Change their passowrd.
  - Upload / Change blog image.

#### Create Post

![create post page](/Images/postImages/blogcms/createpost.png)

#### All Posts

![all posts page](/Images/postImages/blogcms/allposts.png)

#### Categories

![categories page](/Images/postImages/blogcms/category.png)

#### Users

![users page](/Images/postImages/blogcms/users.png)

#### Settings

![settings page](/Images/postImages/blogcms/settings.png)

---

## Admin Login URL

Admin-Login: http://localhost/BlogCMS/admin/

- To login as Admin enter the above URL in the url filed.

**Sample user credentials are:**

id : koushil

pass : koushil

---

\***\* Important Note\*\***

**To run this project you need to Create Database named "blogcms" and import database file which you can get from database folder in the source code file.**

**Source Code** and **Live Project** links are given at the top of this article.
