import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    if (idItem) {
      const db = getFirestore();
      const itemRef = doc(db, "items", idItem.trim());
      getDoc(itemRef).then((snapshot) => {
        if (snapshot.exists()) {
          const newItem = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setItem(newItem);
        }
      });
    }
  }, [idItem]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
