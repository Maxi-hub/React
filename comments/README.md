# comments list 

Это простое React-приложение, которое позволяет отображать список комментариев с возможностью их удаления. Каждый комментарий представлен текстом, и для каждого есть кнопка для его удаления.
This is a simple React application that allows you to display a list of comments with the option to delete them. Each comment is represented by text, and for each there is a button to delete it.

## Описание проекта / Description of the project

В приложение применила базовые концепты работы с React:
- Состояние компонента (State): использовала для хранения списка комментариев и обновления его при удалении.
- Работа с событиями: кнопка удаления каждого комментария вызывает функцию для удаления из состояния.
- Компоненты: создала функциональные компоненты, такие как App и CommentsList.
- Рендеринг списка: применила метод .map() для динамического отображения комментариев.

Реализовала функции:
- по отображению списка комментариев, где список комментариев выводится в виде <li> элементов, вложенных в <ul>.
- по удалению комментариев, где у каждого комментария создала кнопку для его удаления. При нажатии на кнопку, комментарий удаляется из списка.
- по динамическому обновлению состояния, поскольку список комментариев обновляется с помощью хука useState и метода setComments, что вызывает перерисовку компонента при изменении данных.

I applied the basic concepts of working with React to the application.:
- Component State: used to store a list of comments and update it when deleted.
- Working with events: The delete button for each comment calls a function to delete from the state.
- Components: Created functional components such as App and CommentsList.
- List rendering: applied the .map() method to dynamically display comments.

Implemented the functions:
- by displaying a list of comments, where the list of comments is displayed as <li> elements nested in <ul>.
- to delete comments, where each comment has a button to delete it. When you click on the button, the comment is deleted from the list.
- by dynamically updating the status, since the list of comments is updated using the useState hook and the setComments method, which causes the component to be redrawn when the data changes.


## Технологии / Technologies

* React
* JavaScript
* CSS


## Установка зависимостей и запуск проекта / Installing dependencies and launching the project

Склонируйте репозиторий / Clone the repository:
* git clone https://github.com/Maxi-hub/React.git
* cd React/comments
* npm install
* npm start