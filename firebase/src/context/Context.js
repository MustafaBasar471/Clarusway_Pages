import { createContext, useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { ref, set, push, onValue, remove, update } from "firebase/database";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  // Get FormData
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  // StorageData
  const [storageUserData, setStorageUserData] = useState();

  // Form Update
  const [isUpdate, setIsUpdate] = useState(false);

  // UserData
  const [userData, setUserData] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      userName,
      phoneNumber,
      gender,
    };
    if (!isUpdate) {
      setUserData([...userData, newContact]);
      saveToDatabase(newContact);
    } else {
      saveToDatabase();
    }
  };

  // Firebase Ops

  const saveToDatabase = async (item) => {
    if (!isUpdate) {
      const userRef = ref(db, "Contact");
      const newUserRef = push(userRef);
      set(newUserRef, {
        ...item,
      });
    } else {
      update(ref(db, "Contact/" + storageUserData.id), {
        userName,
        phoneNumber,
        gender,
      });
    }
  };

  useEffect(() => {
    const userRef = ref(db, "Contact");
    onValue(userRef, (details) => {
      const data = details.val();
      const contactArr = [];
      for (let id in data) {
        contactArr.push({ id, ...data[id] });
      }
      setUserData(contactArr);
    });
  }, []);

  // Update Contact

  const handleUpdate = (item) => {
    setUserName(item.userName);
    setGender(item.gender);
    setPhoneNumber(item.phoneNumber);
    setStorageUserData(item);
    setIsUpdate(true);
  };
  // Delete Contact

  const deleteDatabaseData = (item) => {
    remove(ref(db, "Contact/" + item.id));
  };

  return (
    <Context.Provider
      value={{
        setGender,
        setPhoneNumber,
        setUserName,
        handleFormSubmit,
        userData,
        deleteDatabaseData,
        handleUpdate,
        userName,
        phoneNumber,
        gender,
        setIsUpdate,
        isUpdate,
      }}
    >
      {children}
    </Context.Provider>
  );
};
