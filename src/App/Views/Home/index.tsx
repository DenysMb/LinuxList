import React, { useEffect, useState } from "react";
import { firebaseFirestore } from "../../Utils/firebase";
import Card from "../../Components/Card";

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

export default function Home() {
  const [browserList, setBrowserList] = useState({ Browser: [] });
  const [communicationList, setCommunicationList] = useState({
    Communication: [],
  });
  const [developmentList, setDevelopmentList] = useState({ Development: [] });
  const [gamingList, setGamingList] = useState({ Gaming: [] });
  const [officeList, setOfficeList] = useState({ Office: [] });
  const [utilitiesList, setUtilitiesList] = useState({ Utilities: [] });

  useEffect(() => {
    setCollectionState("Browser", setBrowserList);
    setCollectionState("Communication", setCommunicationList);
    setCollectionState("Development", setDevelopmentList);
    setCollectionState("Gaming", setGamingList);
    setCollectionState("Office", setOfficeList);
    setCollectionState("Utilities", setUtilitiesList);
  }, []);

  return (
    <div>
      {browserList["Browser"].length ? (
        <Card
          color={"#FFB74D"}
          title={"Browser"}
          apps={browserList["Browser"]}
        />
      ) : null}

      {communicationList["Communication"].length ? (
        <Card
          color={"#4DB6AC"}
          title={"Communication"}
          apps={communicationList["Communication"]}
        />
      ) : null}

      {developmentList["Development"].length ? (
        <Card
          color={"#F06292"}
          title={"Development"}
          apps={developmentList["Development"]}
        />
      ) : null}

      {gamingList["Gaming"].length ? (
        <Card color={"#4FC3F7"} title={"Gaming"} apps={gamingList["Gaming"]} />
      ) : null}

      {officeList["Office"].length ? (
        <Card color={"#A1887F"} title={"Office"} apps={officeList["Office"]} />
      ) : null}

      {utilitiesList["Utilities"].length ? (
        <Card
          color={"#7986CB"}
          title={"Utilities"}
          apps={utilitiesList["Utilities"]}
        />
      ) : null}
    </div>
  );
}
