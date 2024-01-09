import React, { FC, useReducer } from "react";
import { initialState, reducer } from "../../Contact/form-reducer";
import Content from "../../../components/content";
import Hero from "../../../components/Hero";
import Divider from "../../../components/divider";

const Newsletter: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const { email, errors } = state;

  const isFormValid = errors.email === "" && email !== "";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="description" style={{ minHeight: "100vh", paddingTop: 0 }}>
      <Hero title="Newsletter" />
      <div style={{ margin: "0 auto" }}>
        <Content>
          <h1>Subscribe</h1>
          <p>
            Subscribe to our biweekly newsletter to receive updates on our
            events and projects, as well as interesting news and research in the
            field of AI.
          </p>
        </Content>
        <Divider height="50px" />
        <div style={{ marginTop: "1rem" }}>
          <Content>
            {formSubmitted ? (
              <p>Thanks for subscribing to our newsletter!</p>
            ) : (
              <form
                onSubmit={onSubmit}
                style={{ margin: "0 auto", maxWidth: "600px" }}
              >
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
                <button type="submit">Subscribe</button>
              </form>
            )}
          </Content>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
