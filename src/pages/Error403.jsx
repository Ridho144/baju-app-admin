import ErrorPage from "../components/ErrorPage";


export default function Error403() {
  return (
    <ErrorPage
      code="403"
      description="Bad Request: The server cannot process the request due to invalid syntax."
    />
  );
}
