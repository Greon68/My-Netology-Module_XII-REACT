import { useState } from "react";
import S from "./PokemonSearch.module.css";
import { Pokemon } from "../Pokemon/Pokemon";
import { useBoolean } from "../../hooks/useBoolean";
import { usePokemonSearch } from "./usePokemonSearch";

export const PokemonSearch = () => {
  const [isListShown, setShowList] = useBoolean(false);// показываем/скрываем список покемонов
  const results = usePokemonSearch({
    onLoad: setShowList.on,
  });

  const [filter, setFilter] = useState(""); // поле ввода input
  const [selection, setSelection] = useState(null); // выбор покемона из списка

  const data = results.filter((item) =>         // уменьшаем список покемонов по символам в поле ввода
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const select = (pokemon) => () => {
    setSelection(pokemon);
    setShowList.off();
  };

  const showResults = (isListShown) && (data.length > 0);

  return (
    <div className={S.container}>
      <div className={S.search}>
        <input
          type="text"
          className={S.input}
          value={filter}
          onChange={({ target }) => setFilter(target.value.trim())}
          onFocus={setShowList.on}
          autoFocus
        />
        {showResults && (
          <div className={S.results}>
            <div className={S.resultsList}>
              {data.map((item) => (
                <div key={item.name} className={S.item} onClick={select(item)}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selection && (
        <div className={S.selection}>
          <Pokemon {...selection} />
        </div>
      )}
    </div>
  );
};
