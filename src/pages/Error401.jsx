import ErrorPage from "../components/ErrorPage";


export default function Error401() {
  return (
    <ErrorPage
      code="401"
      description="Bad Request: The server cannot process the request due to invalid syntax."
    />
  );
}
