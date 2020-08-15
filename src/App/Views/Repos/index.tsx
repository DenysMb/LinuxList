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

  useEffect(() => {
    setCollectionState("Repositories", setRepositories);
  }, []);

  return (
    <StyledDiv>
      <div className="DistroTitle">
        <div className="CircleIcon" />
        openSUSE Tumbleweed
      </div>
      {repositories["Repositories"].map(
        (val: { name: string; command: string }) => (
          <RepoListItem name={val?.name} command={val?.command} />
        )
      )}
    </StyledDiv>
  );
}

interface RepoListItemProps {
  name: string;
  command: string;
}

const RepoListItem = ({ name, command }: RepoListItemProps) => (
  <StyledRepoListItem>
    <div className={"Title"}>{name}</div>
    <div className={"Command"}>{command}</div>
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
  }

  .CircleIcon {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 3px solid #00a489;
    margin-right: 10px;
  }
`;
const StyledRepoListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .Title {
    margin-right: 10px;
  }

  .Command {
    padding: 5px;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #31363b;
    flex: 1;
    color: #e4e4e4;
  }
`;
