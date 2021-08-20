import axios from "axios";
import { useEffect, useState } from "react";
import ChosseButtons from "./ChooseButtons";
import ProfileCard from "./ProfileCard";

const ChooseProfilePage = () => {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-fernandes/person"
      )
      .then((res) => {
        setProfileToChoose(res.data.profile);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id,
    };
    setProfileToChoose(undefined);

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-fernandes/choose-person",
        body
      )
      .then((res) => {
        getProfileToChoose();
      });
  };

  const clickNo = () => chooseProfile(false);

  const clickYes = () => chooseProfile(true);

  return (
    <div>
      {profileToChoose ? (
        <>
          <ProfileCard profileToChoose={profileToChoose} />
          <ChosseButtons clickNo={clickNo} clickYes={clickYes} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ChooseProfilePage;
