"use client"
const error = ({error,reset}:{error:Error; reset : ()=>void;}) => {
  return (
    <div>{error.message} error in reviewidb <button onClick={reset}>try again</button></div>
  )
}

export default error