import * as React from 'react';

export default function Feedback() {
  const MyBlock = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [comments, setComments] = React.useState([]);

    function handleSubmit(event) {
      event.preventDefault();

      const sms = [
        {
          fullName: name,
          email: email,
          createdAt: 'Thu Oct 14 2021 13:41:01',
          text: message,
        },
      ];
      // тут добавить в comments новый объект
      setComments([...comments, ...sms]);
      console.log('name:', name);
      console.log('email:', email);
      console.log('message', message);
    }

    return (
      <div className="sending" onSubmit={handleSubmit}>
        <div className="block">
          {comments.map((obj) => {
            return (
              <div key={comments} style={{ border: '1px solid' }}>
                <p>{obj.fullName}</p>
                <p>{obj.email}</p>
                <p>{obj.text}</p>
              </div>
            );
          })}
        </div>

        <h1>
          <b>Обратная связь:</b>
        </h1>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button className="btn" onClick={handleSubmit}>
          Отправить
        </button>
      </div>
    );
  };
  return (
    <div className="text">
      <div>
        <h1>Отзывы:</h1>
        <div>
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNoIlXpNlqjo-W_HuEeXTHmmW1xM3CW_emc6bbH6FTK_3-I70jSAdGt4FMkS_jzyXhK4&usqp=CAU"></img>
        </div>
        <MyBlock></MyBlock>
      </div>
    </div>
  );
}
