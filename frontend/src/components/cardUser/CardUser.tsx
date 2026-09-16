
interface usersList {
     "username" : string,
     "email" : string,
     "password" : string
}

export default function CardUser(props : usersList) {
  return (
    <div>
        <div>{props.username}</div>
        <div>{props.email}</div>
        <div>{props.password}</div>
    </div>
  )
}
