# Список пользователей с API - Redux Thunk /  List of users with API - Redux Thunk 

## Описание проекта / Description of the project

В этом проекте я реализовала приложение на React, которое позволяет загружать список пользователей с публичного API и показывать подробности о каждом пользователе по его ID. Также я использовала Redux для управления состоянием, а для асинхронных операций — createAsyncThunk из Redux Toolkit.
In this project, I implemented an application on React that allows you to download a list of users from a public API and show details about each user by their ID. I also used Redux for state management, and createAsyncThunk from the Redux Toolkit for asynchronous operations.

В этом проекте я выполнила:
- Загрузку списка пользователей: при монтировании компонента с помощью хука useEffect я инициировала запрос на получение списка пользователей через fetchUsers. Это позволяет загрузить всех пользователей с API при старте приложения и отобразить их на странице. Я использовала createAsyncThunk для асинхронного запроса, чтобы обрабатывать состояния загрузки и ошибок.
- Получение данных о пользователе по ID: для каждого пользователя из списка добавила кнопку "User ID", при нажатии на которую происходит запрос к API для получения подробной информации о выбранном пользователе. Данные по каждому пользователю я получаю через fetchUserbyID, который также использует createAsyncThunk для асинхронных запросов.
- Обработку состояний загрузки и ошибок: для улучшения пользовательского опыта я реализовала отображение индикатора загрузки, если данные еще загружаются, и сообщения об ошибке, если запросы не удались. Все это управляется через Redux, и с помощью состояния loading, idLoading и error, которое я получаю через useSelector.
- Использование Redux для управления состоянием: для того, чтобы централизованно управлять состоянием приложения, я использовала Redux Toolkit. Все данные пользователей и их состояния (загрузка, ошибка) хранятся в store, и я использовала createSlice для их обработки.
- Логирование с помощью middleware: в качестве дополнительной задачи я реализовала middleware для логирования состояния приложения и всех отправляемых actions. В консоли теперь видно, какие действия отправляются, и как меняется состояние до и после их выполнения. Это помогает лучше отслеживать работу приложения и отлаживать код.

In this project, I have completed:
- Loading the list of users: when mounting the component using the useEffect hook, I initiated a request to get the list of users via fetchUsers. This allows you to download all users from the API at the start of the application and display them on the page. I used createAsyncThunk for asynchronous request to handle loading and error states.
- Getting user data by ID: for each user from the list, I added a "User ID" button, when clicked, an API request is made to get detailed information about the selected user. I get data for each user through fetchUserbyID, which also uses createAsyncThunk for asynchronous requests.
- Handling loading states and errors: to improve the user experience, I implemented a loading indicator display if data is still being loaded, and error messages if requests failed. All of this is managed through Redux, and using the loading, idLoading, and error states, which I get through the useSelector.
- Using Redux for state management: In order to centrally manage the state of the application, I used the Redux Toolkit. All user data and their status (download, error) are stored in the store, and I used createSlice to process them.
- Logging using middleware: as an additional task, I implemented middleware to log the application status and all actions sent. The console now shows which actions are being sent, and how the state changes before and after they are performed. This helps to better monitor the operation of the application and debug the code.


## Технологии / Technologies

* React: для создания компонентов и управления состоянием.
* Redux Toolkit: для централизованного хранения и управления состоянием.
* Redux Thunk (через createAsyncThunk): для асинхронных запросов.
* CSS: для стилизации компонента.

* React: for creating components and managing state.
* Redux Toolkit: for centralized storage and state management.
* Redux Thunk (via createAsyncThunk): for asynchronous requests.
* CSS: for styling the component.


## Установка зависимостей и запуск проекта / Installing dependencies and launching the project

Склонируйте репозиторий / Clone the repository:
* git clone https://github.com/Maxi-hub/React.git
* cd React/thunk-middleware
* npm install
* npm start