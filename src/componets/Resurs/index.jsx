import { books } from "../../data/books";

const Resurs = () => {
  const book = books;
  return (
    <div className="cards">
      {book.map((el) => (
        <>
          <a href={el.url} target="blank">
            <div class="card">
              <img src={el.img} alt="img" />
              <div class="card__content">
                <p class="card__title">{el.name}</p>
                <p class="card__description">{el.description}</p>
              </div>
            </div>
          </a>
        </>
      ))}
    </div>
  );
};

export default Resurs;
