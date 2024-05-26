import React from "react";
import book from "../img/book1.png";
import book1 from "../img/book3.jpeg";
import book2 from "../img/book4.jpeg";
import book3 from "../img/book5.webp";

const SliderRes = () => {
  return (
    <div className="sliderCard">
      <div className="cards1">
        <a
          href="https://drive.google.com/file/d/1HJap_lrLV-nR1dzaUcGYC_L-aDrJov48/view"
          target="blank"
        >
          <div class="card">
            <img src={book} alt="" />
            <div class="card__content">
              <p class="card__title">English File Elementary</p>
              <p class="card__description">
                English File Elementary - это учебник английского языка для
                начинающих, который помогает учащимся освоить базовые навыки
                чтения, письма, говорения и аудирования на английском языке.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://apoyanblog.wordpress.com/wp-content/uploads/2017/08/new_headway_beginner_-_student_39_s_book.pdf"
          target="blank"
        >
          <div class="card">
            <img src={book1} alt="" />
            <div class="card__content">
              <p class="card__title">English File Elementary</p>
              <p class="card__description">
                English File Elementary - это учебник английского языка для
                начинающих, который помогает учащимся освоить базовые навыки
                чтения, письма, говорения и аудирования на английском языке.
              </p>
            </div>
          </div>
        </a>
        <div class="card">
          <img src={book2} alt="img" />
          <div class="card__content">
            <p class="card__title">Headway Series</p>
            <p class="card__description">
              (Oxford University Press) - Бул серия тил үйрөнүүнүн ар кандай
              аспекттерин камтыйт жана дүйнө жүзү боюнча мугалимдер жана
              окуучулар тарабынан кеңири колдонулат.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={book3} alt="" />
          <div class="card__content">
            <p class="card__title"> Market Leader Series</p>
            <p class="card__description">
              Market Leader Series (Pearson) - Бизнес англис тилине багытталган
              бул серия профессионалдык тил үйрөнүүнү көздөйт жана реалдуу
              бизнес контексттерине басым жасайт.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderRes;
