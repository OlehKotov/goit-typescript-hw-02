import { ErrorMessageProps } from "./ErrorMessage.types"




const ErrorMessage = ({message = "Something went wrong, please reload the page 🫤"}): string => {
  return (
    <p>{message}</p>
  )
}

export default ErrorMessage