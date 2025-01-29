# React-Rouring 

В этом проекте я создала приложение на React, которое позволяет пользователям просматривать различные анекдоты. Приложение состоит из нескольких страниц: главной, страницы с фактами об осликах, списка анекдотов и детальной страницы для просмотра анекдотов по категориям.
In this project, I created an application on React that allows users to view various jokes. The application consists of several pages: the main page, a page with facts about donkeys, a list of jokes and a detailed page for viewing jokes by category.


## Описание проекта / Description of the project

Проект состоит из нескольких страниц.
**Главная страница (Home Page)**:
Здесь я отображаю интересный факт о планете Земля и ее соседях в Солнечной системе. Это первое, что видит пользователь при заходе в приложение.
**Страница с фактами об осликах (About Page)**:
На этой странице я рассказываю интересные биологические факты о осликах, их особенностях и адаптациях в природе.
**Список анекдотов (List Page)**:
На странице отображается список доступных тем анекдотов. Каждая тема является ссылкой, по которой пользователь может перейти и прочитать анекдоты из этой категории.
**Детальная страница анекдотов (Detail Page)**:
Когда пользователь нажимает на тему анекдота, он попадает на страницу с анекдотами из этой темы. На этой странице я использую React Router для динамической загрузки контента, и каждый анекдот представлен в виде списка.

The project consists of several pages.
**Home Page**:
Here I am displaying an interesting fact about planet Earth and its neighbors in the Solar system. This is the first thing the user sees when logging into the app.
**A page with facts about donkeys (About Page)**:
On this page, I share interesting biological facts about donkeys, their features and adaptations in nature.
**List of Jokes (List Page)**:
The page displays a list of available joke topics. Each topic is a link where the user can go and read jokes from this category.
**Detailed Jokes Page (Detail Page)**:
When a user clicks on the topic of a joke, they are taken to a page with jokes from that topic. On this page, I use React Router to dynamically load content, and each joke is presented as a list.


Задачи, которые я выполнила:
1. Реализовала маршруты: Я использовала BrowserRouter для обертки приложения и настроила несколько маршрутов с помощью <Route>. Для создания ссылок между страницами я использовала NavLink. 
2. Для каждой страницы я создала отдельный компонент. Например, HomePage для главной страницы, AboutPage для страницы о осликах и т.д.
3. Динамическая загрузка данных: В ListPage я передала массив анекдотов как пропс, а затем использовала его для динамического отображения ссылок на темы. В DetailPage с помощью useParams() получала ID темы и отображала соответствующий контент.
4. Обработка возвращения на предыдущую страницу: Для кнопки возврата я использовала два подхода — один с использованием useNavigate() для динамического навигационного перехода, второй — с использованием стандартного Link для перехода по ссылке.
5. Стилизация: Я использовала CSS-модули для создания изолированных стилей для каждого компонента, чтобы избежать конфликтов между стилями.

Tasks that I have completed:
1. Implemented routes: I used Browser Router to wrap the application and set up several routes using <Route>. I used Nav Link to create links between pages. 
2. I have created a separate component for each page. For example, HomePage for the main page, About Page for the donkey page, etc.
3. Dynamic data loading: In the ListPage, I passed an array of jokes as a prop, and then used it to dynamically display links to topics. In the DetailPage, using userparams(), I got the topic ID and displayed the corresponding content.
4. Processing the return to the previous page: For the return button, I used two approaches — one using useNavigate() for dynamic navigation, the second using the standard Link to follow the link.
5. Styling: I used CSS modules to create isolated styles for each component to avoid conflicts between styles.


## Технологии / Technologies

* React: Для создания компонентов и управления состоянием приложения.
* React Router: Для навигации по страницам, для перехода между домашней страницей, страницей о осликах, страницей с анекдотами и детальной страницей каждого анекдота.
* CSS Modules: Я использовала модульные стили (App.module.css), чтобы изолировать стили каждого компонента и избежать конфликтов.
* UUID: Для генерации уникальных ключей при отображении анекдотов.

* React: For creating components and managing the application state.
* React Router: For page navigation, for switching between the homepage, the donkey page, the joke page and the detailed page of each joke.
* CSS Modules: I used modular styles (App.module.css) to isolate the styles of each component and avoid conflicts.
* UUID: To generate unique keys when displaying jokes.


## Установка зависимостей и запуск проекта / Installing dependencies and launching the project

Склонируйте репозиторий / Clone the repository:
* git clone https://github.com/Maxi-hub/React.git
* cd React/react-routing
* npm install
* npm start