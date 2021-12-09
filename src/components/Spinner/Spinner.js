import "./Spineer.css";

export function Spinner({ message }) {
  return (
    <div className="spinner-container">
      <div className="spinner-flex">
        <div className="spinner-loader"></div>
      </div>
      <div className="spinner-load-text">{message ?? "Loading..."}</div>
    </div>
  );
}
