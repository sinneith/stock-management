import ButtonWithImg from "../Button/ButtonWithImg";

const HomeBtn = () => {
  return (
    <ButtonWithImg
      imgUrl="./src/assets/images/home.png"
      location="/"
      imgAlt="홈으로 가기"
      imgWidth={4}
    />
  );
};

export default HomeBtn;
