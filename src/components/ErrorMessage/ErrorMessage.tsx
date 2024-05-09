import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = "Something went wrong, please reload the page 🫤",
}) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
