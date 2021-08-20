import axios from "axios";

const ResetButton = () => {
  const onClickReset = () => {
    axios.put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-fernandes/clear"
    );
  };

  return (
    <div>
      <button onClick={onClickReset}>Resetar</button>
    </div>
  );
};

export default ResetButton;
