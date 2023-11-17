import React from "react";
import contactStyle from "./Contacts.module.css";
import { deleteContact } from "../../reducers/contactReducer";
import { useSelector, useDispatch } from "react-redux";

function Contacts() {
  const { contacts } = useSelector((state) => state.contact);
  console.log(contacts);
  const dispatch = useDispatch();

  //REMOVE CONTACTS
  function handleDeleteContact(id) {
    dispatch(deleteContact(id));
  }
  return (
    <div className={contactStyle.list}>
      <h1>Contact List</h1>
      <div className={contactStyle.listContainer}>
        {contacts.map((item) => (
          <div className={contactStyle.listItem} key={item.id}>
            <div>
              {item.name} - {item.phone} - {item.email}
            </div>
            <button onClick={() => handleDeleteContact(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
