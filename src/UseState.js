import React from "react";

const SECURITY_CODE = "paradigma";

function UseState(props) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el useEffect");

    if (!!loading) {
      setTimeout(() => {
        if (value === SECURITY_CODE) {
          console.log(value);
        } else {
          setError(true);
        }
        setLoading(false);
      }, 2000);
    }

    console.log("Terminando el UseEffect");
  }, [loading]);

  console.log(value);
  return (
    <div>
      <h2>Eliminar {props.name}</h2>
      <p>Por favor escribe el codigo de seguridad.</p>
      {error && !loading && (
        <p>Por favor, escribe el codigo de seguridad correcto</p>
      )}
      {loading && <p> Cargando... </p>}
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Codigo de Seguridad"
      />
      <button
        onClick={() => {
          setLoading(true);
        }}
      >
        Comprobar
      </button>
    </div>
  );
}
export { UseState };
