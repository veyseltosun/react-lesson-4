
import UserItem from "./User"


const List = ({list}) => {
  return (
    <div>
        {list.map((user) => {
            return(
                <UserItem key={user.id} item={user}/>
            )
        })}
    </div>
  )
}

export default List