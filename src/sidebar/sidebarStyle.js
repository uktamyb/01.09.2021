import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 20px, 0, 0, 20px;
  padding: 25px;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  border: 2px solid green;
`;

export const Logo = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #109cf1;
  margin: 0 0 42px 0;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 41.5px;
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const AvatarName = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #192a3e;
`;

export const AvatarEmail = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #90a0b7;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const NavItem = styled.div`
  margin: 0px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  color: ${(props) => (props.isActive ? "#109CF1" : "#334d6e")};
  cursor: pointer;
`;

export const ItemImg = styled.img`
  margin-right: 15px;
`;
