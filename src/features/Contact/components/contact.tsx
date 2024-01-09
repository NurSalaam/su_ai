// Contact.tsx
import React, { FC, useReducer } from "react";
import "../../Home/components/home.css";
import Content from "../../../components/content";
import Hero from "../../../components/Hero";
import "./contact.css";
import { initialState, reducer } from "../form-reducer";

const Contact: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const { name, email, organisation, message, errors } = state;

  const isFormValid =
    Object.values(errors).every((error) => error === "") &&
    name !== "" &&
    email !== "" &&
    message !== "";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setFormSubmitted(true);
    }
  };

  return (
    <div id="home-page">
      <Hero title="Contact Us" />
      <section id="description">
        <Content>
          {formSubmitted ? (
            <p>Thanks for contacting us, we'll be in touch</p>
          ) : (
            <form onSubmit={onSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </label>
              <label>
                Organisation (Optional):
                <input
                  type="text"
                  name="organisation"
                  value={organisation}
                  onChange={onChange}
                  className={errors.organisation ? "error" : ""}
                />
                {errors.organisation && (
                  <p className="error-message">{errors.organisation}</p>
                )}
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={message}
                  onChange={onChange}
                  className={errors.message ? "error" : ""}
                />
                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}
              </label>
              <button type="submit">Submit</button>
            </form>
          )}
        </Content>
      </section>
    </div>
  );
};

export default Contact;
