import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  apps: any[];
  color: string;
}

export default function Card({ title, apps, color }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledDiv color={color} isOpen={isOpen} length={apps.length}>
      <div className={"CardTitle"} onClick={() => setIsOpen(!isOpen)}>
        <div className="CircleIcon" />
        <div className={"Title"}>{title}</div>
        <FontAwesomeIcon icon={faChevronCircleLeft} color={color} rotation={isOpen ? 90 : 270} />
      </div>
      <div className="CardBody">
        {apps.map(
          (app: {
            name: string;
            description: string;
            image: string;
            url: string;
          }) => (
            <CardListItem
              name={app?.name}
              image={app?.image}
              description={app?.description}
              url={app?.url}
            />
          )
        )}
      </div>
    </StyledDiv>
  );
}

interface CardListItemProps {
  name: string;
  image: string;
  description: string;
  url: string;
}

const CardListItem = ({ name, image, description, url }: CardListItemProps) => (
  <StyledCardItemDiv onClick={() => window.open(url, "_blank")}>
    <img src={image} alt={name} />
    <div className="Title">
      {name} - <small>{description}</small>
    </div>
    <FontAwesomeIcon icon={faChevronRight} color={"#e4e4e4"} />
  </StyledCardItemDiv>
);

const StyledDiv = styled("div")<{
  color: string;
  isOpen: boolean;
  length: number;
}>`
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
  transition: 0.3s all;
  overflow: hidden;
  max-height: ${({ isOpen, length }) =>
    isOpen ? 43 + length * 43 + "px" : "32px"};

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  }

  .CircleIcon {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 3px solid ${({ color }) => color};
    margin-right: 10px;
  }

  .CardTitle {
    border-bottom: 1px solid #e4e4e4;
    padding: 5px 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    background-color: #fafafa;
    overflow: hidden;
    height: 21px;
    max-height: 21px;
    min-height: 21px;
    cursor: pointer;

    .Title {
      flex: 1;
    }

    & > * {
      transition: 0.3s all;
    }
  }

  .CardBody {
    padding: 0px 10px 10px 10px;
  }
`;

const StyledCardItemDiv = styled.div`
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fafafa;

  img {
    height: 20px;
    width: 20px;
    margin-right: 5px;
    object-fit: contain;
  }

  small {
    color: #666;
  }

  .Title {
    flex: 1;
  }
`;
