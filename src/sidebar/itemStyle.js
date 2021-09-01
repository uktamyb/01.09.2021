import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  color: ${(props) => (props.isActive ? "#109CF1" : "#334d6e")};
  cursor: pointer;
`;

export const ItemText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #334d6e;
`;

export const ItemIcons = styled.img`
  border: 1.4px solid #c2cfe0;
  box-sizing: border-box;
  margin-right: 16px;
`;
