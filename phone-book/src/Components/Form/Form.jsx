import formStyles from "./Form.module.css";
import { object, string, number } from "yup";
import { useFormik } from "formik";
import { addContacts } from "../../reducers/contactReducer";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const userSchema = object({
  name: string().max(256).required("Please Enter Name"),
  phone: number()
    .min(11, "must be at least 3 characters long")
    .max(256)
    .required("Please Enter Phone"),
  email: string().required("Please Enter Email"),
});

function Form() {
  // const nameInput = useRef("");
  // const phoneInput = useRef("");
  // const emailInput = useRef("");

  const dispatch = useDispatch();

  // ADD NEW CONTACTS
  function handleAddContact(e) {
    e.preventDefault();
    console.log("function entered");
    const newContact = {
      id: Date.now(),
      name: nameInput.current.value,
      phone: phoneInput.current.value,
      email: emailInput.current.value,
    };
    dispatch(addContacts(newContact));
    // RESET THE INPUTS AFTER ADD
    // nameInput.current.value = "";
    // phoneInput.current.value = "";
    // emailInput.current.value = "";
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: userSchema,
    onSubmit: (e) => handleAddContact(e),
  });

  return (
    <form className={formStyles.form} onSubmit={formik.handleSubmit}>
      <h1>Phone Book App</h1>
      <label htmlFor="userName">Name:</label>
      <input
        type="text"
        name="name"
        id="userName"
        className={formStyles.name}
      />
      <label htmlFor="userPhone">Phone Number:</label>
      <input type="text" name="phone" id="userPhone" />
      <label htmlFor="userEmail">Email</label>
      <input type="email" name="email" id="userEmail" />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default Form;
