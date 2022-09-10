import * as React from 'react';

export default function Feedback() {
  const [fields, setFields] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  let [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  function handleSubmit(event) {
    event.preventDefault();
    const date = new Date();
    const sms = {
      fullName: fields.name,
      email: fields.email,
      text: fields.message,
      createdAt: date.toString(),
    };

    //   1 сделать вывод настояще даты 2 добавлять в комментарий настоящее время (JS, как узнать время/дату) 3 сделать удаление комментариев 4

    setComments([...comments, sms]);

    setFields({
      name: '',
      email: '',
      message: '',
    });
  }

  const removeComment = (i) => {
    setComments(
      comments.filter((_, index) => {
        return index !== i;
      }),
    );
  };

  return (
    <div className="text">
      <div>
        <h1>Отзывы:</h1>
        <div></div>
        <div className="sending" onSubmit={handleSubmit}>
          <div className="block">
            {comments.map((obj, index) => (
              <div key={obj.email} style={{ border: '1px solid' }}>
                <p>{obj.fullName}</p>
                <p>{obj.email}</p>
                <p>{obj.text}</p>
                <p>{obj.createdAt}</p>
                <button onClick={() => removeComment(index)}>X</button>
              </div>
            ))}
          </div>

          <h1>
            <b>Обратная связь:</b>
          </h1>
          <input
            placeholder="Name"
            value={fields.name}
            onChange={(e) => {
              setFields({
                ...fields,
                name: e.target.value,
              });
            }}
          />
          <input
            placeholder="Email"
            value={fields.email}
            onChange={(e) => {
              setFields({
                ...fields,
                email: e.target.value,
              });
            }}
          />
          <textarea
            placeholder="Text"
            value={fields.message}
            onChange={(e) => {
              setFields({
                ...fields,
                message: e.target.value,
              });
            }}
          />
          <button className="btn" onClick={handleSubmit}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}
