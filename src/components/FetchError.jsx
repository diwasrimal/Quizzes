import "../styles/FetchError.css";

export default function FetchError() {
  return (
    <div className="fetch-error">
      Could not generate enough questions, try:
      <ul>
        <li> Lowering question count </li>
        <li> Changing other preferences </li>
      </ul>
    </div>
  );
}
