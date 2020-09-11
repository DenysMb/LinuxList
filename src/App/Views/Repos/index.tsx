import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { firebaseFirestore } from "../../Utils/firebase";

const setCollectionState = (collection: string, setState: Function) => {
  const dynamicCollection = firebaseFirestore.collection(collection);

  dynamicCollection.get().then((snapshot) => {
    let documents: {}[] = [];

    snapshot.forEach((doc) => {
      documents.push(doc.data());
    });

    setState({ [collection]: documents });
  });
};

export default function Repos() {
  const [repositories, setRepositories] = useState({ Repositories: [] });
  const [sourceList, setSourceList] = useState({ Debian: [] });

  useEffect(() => {
    setCollectionState("Repositories", setRepositories);
    setCollectionState("Debian", setSourceList);
  }, []);

  return (
    <StyledDiv>
      <div className="DistroTitle">
        <div className="CircleIcon OpenSUSE" />
        openSUSE Tumbleweed
      </div>
      {repositories["Repositories"].map(
        (val: { name: string; command: string }) => (
          <RepoListItem name={val?.name} command={val?.command} />
        )
      )}
      <div className="DistroTitle">
        <div className="CircleIcon Debian" />
        Debian
      </div>
      {sourceList["Debian"].map((val: { name: string; command: string }) => (
        <RepoListItem command={val.command} />
      ))}
    </StyledDiv>
  );
}

interface RepoListItemProps {
  name?: string;
  command: string;
}

const RepoListItem = ({ name, command }: RepoListItemProps) => (
  <StyledRepoListItem>
    {name ? <div className={"Title"}>{name}</div> : null}
    <div
      className={"Command"}
      dangerouslySetInnerHTML={{ __html: command.replace(/\\n/g, "<br />") }}
    />
  </StyledRepoListItem>
);

const StyledDiv = styled.div`
  .DistroTitle {
    display: flex;
    align-items: center;
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 5px;
    margin-bottom: 5px;
    margin-top: 20px;

    &:first-child {
      margin-top: 0px;
    }
  }

  .CircleIcon {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-right: 10px;

    &.OpenSUSE {
      border: 3px solid #00a489;
    }

    &.Debian {
      border: 3px solid #df0051;
    }
  }
`;
const StyledRepoListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .Title {
    margin-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .Command {
    padding: 5px;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #31363b;
    flex: 1;
    color: #e4e4e4;
    white-space: pre-line;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
