import { useState } from "react";
import data from './data'
import { nanoid } from "nanoid";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([])

  const handleSubmit = (e) => {

    e.preventDefault();
    let amount = parseInt(count);
    // console.log(amount)
    setText(data.slice(0, amount));

  }
  return <main >

    <section className="section-center ">


      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="name">paragraphs:</label>
        <input required type="number" name="count" id="name" min='1' max='8' value={count} onChange={(e) => setCount(e.target.value)} />

        <button className="btn">Submit</button>

      </form>
      <div className="lorem-text">
        {text.map((item, index) => {
          // console.log(index)
          return <p key={nanoid()}>{item}</p>
        })}

      </div>
    </section>






  </main>
};
export default App;
