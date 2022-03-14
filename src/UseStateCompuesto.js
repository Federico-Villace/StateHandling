import React from "react";

const SECURITY_CODE = "paradigma";

function UseStateCompuesto({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  console.log(state);

  React.useEffect(() => {
    console.log("Starting the effect");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Doing the validation");

        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }
        console.log("Finishing the validation");
      }, 1000);
    }

    console.log("Finishing the effect");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Delete {name}</h2>

        <p>Please enter the security code</p>

        {state.error && !state.loading && (
          <p>Error: Security code is incorrect</p>
        )}

        {state.loading && <p>Loading...</p>}

        <input
          placeholder="Security Code"
          value={state.value}
          onChange={(event) => {
            setState({
              ...state,
              value: event.target.value,
            });
            //setError(false);
            //setValue(event.target.value);
          }}
        />

        <button
          onClick={() => {
            setState({
              ...state,
              loading: true,
            });
            //setLoading(true);
            //setError(false);
          }}
        >
          Check
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>¿Are you sure to delete UseState?</p>
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true,
            });
          }}
        >
          Yes, delete
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              value: "",
            });
          }}
        >
          No, back
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Deleted state</p>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: "",
            });
          }}
        >
          Recovery UseState, return back
        </button>
      </React.Fragment>
    );
  }
}

export { UseStateCompuesto };
