# theGlitterCrumbProject

This is an E-commerce website made for my friend who is a blogger. The color and typography chosen were inspired from her styles at [https://theglittercrumb.com/](https://theglittercrumb.com/)

Find the project video here: https://www.youtube.com/watch?v=SRYuvUqkQzs&feature=youtu.be

**📝Todo**

 - [x] Design shop template
 - [x] Configure style ruleset
 - [x] Setup laravel and react
 - [x] Create shop template
 - [x] Create migrations, factories and seeders
 - [x] Configure mySQL database
 - [x] Configure PAYTM checkout
 - [x] Configure redux
 - [x] Create endpoints for customer, order, order_details, products
 - [ ] Configure it to work as a PWA
 - [ ] Add CMS
 - [ ] Create blog template
 - [ ] Create user authentication and authorization

## Getting Started

### 💉Prerequisites
- Download and Install composer  [https://getcomposer.org/download/](https://getcomposer.org/download/)
- Download and Install wamp
	- For windows: [https://bitnami.com/stack/wamp/installer](https://bitnami.com/stack/wamp/installer)
- Download and Install nodejs https://nodejs.org/en/
- Download and Install php 7.1^


### 📐Installing

**Setup Laravel**

 -   Start wamp server, we will only need the mysql service running to have access to phpMyAdmin
 - Create a database locally named  `homestead`  utf8_general_ci
 -   Pull Laravel/php project from git provider.
 -   Rename  `.env.example`  file to  `.env`inside your project root and fill the database information. (windows wont let you do it, so you have to open your console cd your project root directory and run  `mv .env.example .env`  )
 -   Open the console and cd your project root directory
 -   Run  `composer install`  or  `php composer.phar install`
 -   Run  `php artisan key:generate`
 -   Run  `php artisan migrate`
 -   Run  `php artisan db:seed`  to run seeders, if any.

**Install react dependencies and start local server at localhost:8000**

 - Run `npm install`
 - Run `npm run dev`
 - Run  `php artisan serve`



## 📦Built with

 - NPM - Dependency manager
 - Composer - Dependency manager
 - React - Frontend framework
 - Laravel - Backend framework
 - Laravel mix - Bundler
 - Redux - State management library
 - Adobe XD - Design system

## Authors

-   **Mehul Gawde** 

