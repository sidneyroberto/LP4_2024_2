import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Teste Sass</h1>

      <p className={styles.standard}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        quisquam optio officiis fuga possimus aliquid exercitationem in maiores
        ipsa magni, labore neque fugiat veritatis quas sapiente eligendi a
        voluptas sunt!
      </p>

      <p className={styles.italic}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
        doloremque harum temporibus necessitatibus est cumque dolorum quo aut
        deserunt a veniam quod officia neque, veritatis ab quasi nesciunt maxime
        culpa.
      </p>

      <p className={styles.standard}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad nisi
        quisquam magnam illo, blanditiis tempora tenetur, ipsum possimus maxime
        ullam, quam vel nulla! Minus iste at deleniti aperiam reprehenderit.
      </p>
    </div>
  );
};

export default App;
