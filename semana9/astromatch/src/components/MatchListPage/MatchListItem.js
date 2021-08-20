import styled from "styled-components";

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 40px;
  width: 40px;
`;

const MatchListItem = ({ profile }) => {
  return (
    <ListItemContainer>
      <Avatar src={profile.photo} alt="" />
      <p>{profile.name}</p>
    </ListItemContainer>
  );
};

export default MatchListItem;
