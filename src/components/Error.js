import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
  return (
    <div>Error

<       h2>{err.status}</h2>
    </div>
    
  )
}

export default Error