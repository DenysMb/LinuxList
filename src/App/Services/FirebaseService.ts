import { firebaseFirestore } from "../Utils/firebase";

export default class FirebaseService {
  static getData = async (collection: String) => {
    const result: {}[] = [];
    const firebaseCollection = firebaseFirestore.collection("Browser");

    await firebaseCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        result.push(doc.data())
      });
    });
    
    return result;
  };
}
