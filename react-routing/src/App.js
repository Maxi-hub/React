import './App.css';
import s from "./App.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from './components/Navigation/HomePage';
import { AboutPage } from './components/Navigation/AboutPage';
import { ListPage } from './components/Navigation/ListPage';
import { DetailPage } from './components/Navigation/DetailPage';

const items = [
  {
    id: 1, title: 'Анекдоты про вампиров', content: ['Воспитанный вампир не станет пить из горла.', `Вампир — девушке: 
    — Да не ори ты так! Мне только таблетку запить.`, `— Вот вампира сжег. 
    — Что?! 
    — Вот вам пирожок, говорю.`]
  },
  {
    id: 2, title: 'Анекдоты про программистов', content: [
      `Лет через пятьдесят… 
      — Смотри, что я придумал! Просто нажимаешь кнопку на стене — и свет тихо включается или выключается! И не надо орать: «Алиса, включи свет!»`, 
      'Играя в компьютерные игры, вы зарабатываете геморрой! Стоит ли игра свеч?', 
      `Жена отправляет мужа-программиста в магазин: 
      - Купи батон хлеба, если будут яйца - возьми десяток.
      Муж возвращается из магазина с десятью батонами.
      - Ты зачем столько хлеба купил?
      - Так ведь яйца были...`]
  },
  {
    id: 3, title: 'Анекдоты про собак', content: [
      `— Хочу купить у вас собаку. 
      — У нас остались только суки. 
      — Зачем мне сука, мне нормальную дайте! 
      — Сука — это пол собаки. 
      — Не надо мне пол собаки, хочу купить целую.`, 
      `— У меня прекрасный пес. Каждое утро он приносит мне свежие газеты.
      — Подумаешь, любая дрессированная собака может это сделать.
      — Да, но я не выписываю ни одной газеты…`, 
      'Найдена собака. Доберман. Окрас — черный. Зовут Бобик, не исключено, что врет.'
    ]
  },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className={s.container}>
          <Link className={s.link} to="/"> Главная</Link>
          <Link className={s.link} to="/about">Факт об осликах</Link>
          <Link className={s.link} to="/items">Анекдоты</Link>
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/items" element={<ListPage items={items} />} />
          <Route path="/items/:itemID" element={<DetailPage items={items} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
