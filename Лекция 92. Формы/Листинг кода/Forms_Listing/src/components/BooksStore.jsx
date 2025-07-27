import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Импортируем иконку корзины в поле для удаления:
import { FaTrash} from "react-icons/fa";



export const BooksStore = () => {

  // Состояние списка  книг:
  const [books, setBooks] = useState([
    { id: "1", title: "Книга-1  " },
    { id: "2", title: "Книга-2  " },
    { id: "3", title: "Книга-3  " },
  ]);

// Состояние поля поиска:
  const [search, setSearch] = useState("");

  // Состояние поля добавления новой книги 
  const [form, setForm] = useState({
    title: "",
  });

  // Реагируем на ввод символов в поле поиска:
  const handleSearch = (e) => {
    // поле ввода:
    setSearch(e.target.value);
    // список книг - фильтруем по символам из поля поиска
    setBooks(
      books.filter((b) =>
        b.title.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
      )
    );
  };

   // Добавляем новую книгу.Это ФОРМА.
  //  Здесь 2 оработчика
  // 1. Вводим название в поле ввода формы, меняем состояние для заданного поля:
  const handleAddBook = (e) => {
    const { name, value } = e.target;   
    setForm((prev) => ({ ...prev, [name]: value }));
     // контролируем событие onChange на поле ввода названия книги: 
    console.log ('e.target - ', e.target)
    console.log ('form-book - ', form)
    
  };
  // 2. Отправляем введённое название в существующий список книг:
  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((p) => [...p, { id: uuidv4(), title: form.title }]);
    console.log ('books - ', books)
    // Очищаем поле ввода новой книги:
    setForm({ title: "" });
  };

  // Удаления книги по её id из списка книг:
  const handleRemoveBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div>
      <div className="search">
        <label htmlFor="search">Поиск: </label>
        <input id="search" type="search" value={search} onChange={handleSearch} />
      </div>
      <ul>
        {books
          .filter((b) =>
            b.title
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase().trim())
          )
          .map((b) => (
            <li key={b.id}>
              {b.title}            
              <button onClick={() => handleRemoveBook(b.id)}> Удалить  <FaTrash/></button>            
            </li>
          ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleAddBook}
          placeholder="Введите название книги"
        />
        <button>Добавить</button>
      </form>
    </div>
  );
};
