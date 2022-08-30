import React from 'react';

export default function App() {
  const [phraseGenerator, setPhraseGenerator] = React.useState([]);
  function AppHooks() {
    const adjectivesArr = [
      'абсолютный',
      'адский',
      'азартный',
      'активный',
      'ангельский',
      'астрономический',
      'баснословный',
      'безбожный',
      'безбрежный',
      'безвозвратный',
      'безграничный',
      'бездонный',
      'бездушный',
      'безжалостный',
      'замечательно',
      'замечательный',
      'записной',
      'запредельный',
      'заядлый',
      'звериный',
      'зверский',
      'зеленый',
      'злой',
      'злостный',
      'значительный',
      'неоспоримый',
      'неотразимый',
      'неоценимый',
      'непередаваемый',
    ];
    const nounsArr = [
      'лгун',
      'день',
      'конь',
      'олень',
      'человек',
      'программист',
      'ребёнок',
      'конец',
      'город',
      'дурак',
    ];

    const randomIndex1 = Math.floor(Math.random() * (adjectivesArr.length - 1));
    const result1 = adjectivesArr[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * (nounsArr.length - 1));
    const result2 = nounsArr[randomIndex2];
    const phrase = result1 + ' ' + result2;
    setPhraseGenerator([phrase, ...phraseGenerator]);
  }
  const handleClear = () => {
    setPhraseGenerator([]);
  };
  return (
    <div className="wrapper">
      <div className="block empty-block">
        <div className="list">
          {phraseGenerator.map((value) => {
            return (
              <div className="block">
                <h3>{value}</h3>
              </div>
            );
          })}
        </div>
        <img
          src="https://res.cloudinary.com/dfnhxiq6j/image/upload/v1640354646/ghost_lztiyl.png"
          width="32px"
          height="32px"
          alt="Ghost"
        />
        <h2>Список фраз пустой</h2>
        <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
      </div>

      <button className="btn btn_generate" onClick={AppHooks}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={handleClear}>
        Очистить
      </button>
    </div>
  );
}
