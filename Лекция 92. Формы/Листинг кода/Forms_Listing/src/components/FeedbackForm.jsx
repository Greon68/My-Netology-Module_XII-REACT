import { useState } from "react";



export const FeedbackForm = () => {
  const [ form, setForm ] = useState({
    nameIn: "",
    password: "",
    policy: true,
  });

  const { name, password, policy } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Объект события :", e);
    console.log("Данные формы-form:", form);
    console.log("e.target.name.value:", e.target.name.value);

    const { target } = e;
    console.log("target :", target);

    const formData = new FormData(target);
    console.log("Данные формы -formData:", formData);
    const data = Object.fromEntries(formData);    
    console.log("Данные формы - data:", data);
    
  };

  const handleChange = (e) => {
    console.log("even:", e);
    console.log("event target :", e.target);
    
    const { name, value, type, checked } = e.target;

    console.log("value :", value);
    
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));

   
  };

  return (
    <form className="form"  onSubmit={handleSubmit}>
      <label htmlFor="name">Ваше имя</label>
      <input
        id="name"
        name="nameIn"
        type="text"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="password">Пароль</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <div className="form__agreement">
        <input
          id="policy"
          name="policy"
          type="checkbox"
          checked={policy}
          onChange={handleChange}
        />
        <label htmlFor="policy">Согласен на обработку данных</label>
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};
