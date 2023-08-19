

const Error = ({errortitle}) => {
  return (
    <div className="error-container">
      <h1>Oops! {errortitle} went wrong</h1>
      <p>We're sorry, but there seems to have been an error.</p>
    </div>
  );
}

export default Error;