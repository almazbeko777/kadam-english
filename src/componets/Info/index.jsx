import ic1 from "../img/ic-2..png";

import { IoArrowForwardOutline } from "react-icons/io5";
import ter from "../img/24:7.png";
import pov from "../img/povtor.png";
import iz from "../img/iz.png";

const Info = () => {
  return (
    <div className="info">
      <div className="info--text">
        <h2>
          Жаңы технология <br /> <span>жаңы мүмкүнчүлүктөр</span>
        </h2>
        <p>Тилди онлайн платформаларда үйрөнүүнүн негизги себептери</p>
        <div className="info--text__btn">
          <button className="right">Патформалар</button>
          <div>
            <div className="left">
              <div>
                Ресурстар <div className="left-line"></div>
              </div>
              <div className="liner">
                <IoArrowForwardOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info--content">
        <div className="info--content__top">
          <div className="info--content__top--left">
            <div className="info--content__top--left__img">
              <h1
                style={{
                  color: "rgba(255, 113, 67, 1)",
                }}
              >
                Жеткиликтүүлүк
              </h1>
              <img src={ter} alt="img" width={30} />
            </div>
            <p>
              - Кайсы жерде жашасаңыз да, кандай убакыт болбосун, тил үйрөнүүгө
              мүмкүнчүлүк берет. Интернетке кошулуу менен, сиз каалаган убакта
              жана каалаган жерден билим ала аласыз.
            </p>

            <div className="info--content__top--left">
              <div
                className="info--content__top--left__img"
                style={{
                  marginTop: "40px",
                }}
              >
                <h1>Кеңири ресурстар</h1>
                <img src={ic1} alt="img" width={40} />
              </div>
              <p>
                - Ар кандай окуу материалдарын сунуштайт: видео сабактар, аудио
                материалдар, интерактивдүү машыгуулар, тесттер жана башкалар.
                Бул ресурстар аркылуу тил үйрөнүү процесси кызыктуу жана
                натыйжалуу болот.
              </p>
            </div>
          </div>
        </div>
        <div className="info-content__bottom">
          <div className="info--content__top--left">
            <div className="info--content__top--left__img">
              <h1>Жекелештирилген окуу</h1>
              <img src={iz} alt="img" width={40} />
            </div>
            <p>
              - Онлайн платформалар окуучуларга өздөрүнүн окуу ыкмаларын жана
              темптерин тандоого мүмкүнчүлүк берет. Сиз өзүңүздүн күчтүү жана
              алсыз жактарыңызга ылайыкташтырылган окуу планын түзө аласыз.
            </p>
          </div>
          <div className="info--content__top--left">
            <div className="info--content__top--left__img">
              <h1
                style={{
                  color: "rgba(255, 113, 67, 1)",
                }}
              >
                Кайталоо
              </h1>
              <img src={pov} alt="img" width={30} />
            </div>
            <p>
              - Онлайн материалдарды каалаган убакта кайталап, кайра көрүүгө
              болот. Бул түшүнүктөрдү жакшыраак өздөштүрүүгө жардам берет.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
