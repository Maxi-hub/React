# Смена темы в приложении — React + Redux / Changing the theme in the application — React + Redux

В этом проекте я реализовала функциональность смены темы с использованием React и Redux. Приложение позволяет переключать тему между светлой и темной, и я использовала Redux для управления состоянием темы.
In this project, I implemented the theme change functionality using React and Redux. The application allows you to switch the theme between light and dark, and I used Redux to control the theme status.


## Описание проекта / Description of the project

Использование Redux для управления состоянием темы:
- Я настроила Redux для хранения текущей темы. В нем хранится строка с состоянием, которое может быть либо "light", либо "dark".
- В редьюсере я определила логику переключения между темами с помощью экшн-креатора toggleTheme. Это позволяет мне менять тему с light на dark и наоборот при каждом клике по кнопке.
- В компоненте ToggleTheme я использовала хуки useSelector для получения текущей темы из Redux и useDispatch для отправки экшена по нажатию на кнопку. Компонент отображает текущую тему и позволяет пользователю ее менять.
- В зависимости от состояния темы я динамически добавляю классы в корневой элемент приложения. Это позволяет изменять внешний вид всего приложения при переключении темы.
- Я добавила кнопку для переключения темы и отображения текущего состояния темы. При каждом нажатии на кнопку меняется состояние темы в Redux, и это отражается на внешнем виде приложения.

Using Redux to manage theme status:
- I have configured Redux to store the current theme. It stores a string with a state that can be either "light" or "dark".
- In the redeser, I defined the logic of switching between topics using the toggleTheme action creator. This allows me to change the theme from light to dark and vice versa every time I click on a button.
 In the ToggleTheme component, I used user Selector cookies to get the current theme from Redux and useDispatch to send an action when a button is clicked. The component displays the current theme and allows the user to change it.
- Depending on the state of the theme, I dynamically add classes to the root element of the application. This allows you to change the appearance of the entire application when switching themes.
- I added a button to switch the theme and display the current status of the theme. Each time you click on the button, the status of the theme in Redux changes, and this is reflected in the appearance of the application.


## Технологии / Technologies

* React: Для создания интерфейса и управления состоянием компонента.
* Redux: Для централизованного хранения состояния темы. Я использовала configureStore для настройки хранилища и createSlice для упрощения работы с экшнами и редьюсерами.
* CSS: Для стилизации компонентов в зависимости от темы (светлая или темная).

* React: To create an interface and manage the state of a component.
* Redux: For centralized storage of theme status. I used configurator to set up the storage and create Slice to simplify working with actions and redirectors.
* CSS: To style the components depending on the theme (light or dark).


## Установка зависимостей и запуск проекта / Installing dependencies and launching the project

Склонируйте репозиторий / Clone the repository:
* git clone https://github.com/Maxi-hub/React.git
* cd React/toggle-theme
* npm install
* npm start