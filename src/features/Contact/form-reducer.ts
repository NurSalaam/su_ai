// formReducer.ts
interface State {
  name: string;
  email: string;
  organisation: string;
  message: string;
  errors: {
    name: string;
    email: string;
    organisation: string;
    message: string;
  };
}

const initialState: State = {
  name: "",
  email: "",
  organisation: "",
  message: "",
  errors: {
    name: "",
    email: "",
    organisation: "",
    message: "",
  },
};

function validateField(field: string, value: string) {
  if (field === "email") {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(value) ? "" : "Invalid email address";
  } else if (field !== "organisation" && value.trim() === "") {
    return "This field is required";
  } else {
    return "";
  }
}

function reducer(state: State, { field, value }: any) {
  if (!["name", "email", "organisation", "message"].includes(field)) {
    return state;
  }
  const error = validateField(field, value);
  return {
    ...state,
    [field]: value,
    errors: {
      ...state.errors,
      [field]: error,
    },
  };
}

export { initialState, reducer };
