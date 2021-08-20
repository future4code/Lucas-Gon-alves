import styled from "styled-components";

const ProfileCardContainer = styled.div`
  margin: 16px;
  border: 1px solid black;

  img {
    width: 100%;
    max-height: 350px;
  }
`;

const ProfileInfo = styled.div`
  padding: 0 16px;
`;

const ProfileCard = ({ profileToChoose }) => {
  return (
    <ProfileCardContainer>
      <img src={profileToChoose.photo} alt="" />

      <ProfileInfo>
        <p>
          {profileToChoose.name}, {profileToChoose.age}
        </p>
        <p>{profileToChoose.bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
