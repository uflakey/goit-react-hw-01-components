import FriendList from './FriendList/FriendList'
import FriendListItem from './FriendListItem/FriendListItem'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'


import data from '../Data/data.json'
import friends from '../Data/friends.json'
import user from '../Data/user.json'


export const App = () => {
  return (
    <>
    
      <h2 className="task">Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}  
      />
      
      <h2 className="task">Statistics</h2>
      <Statistics title="Upload stats" stats={data} />

      <h2 className="task">FriendList</h2>
      <FriendList children={<FriendListItem friends={friends} />} />  
      
      <h2 className="task">TransactionHistory</h2>
      
      </>
  )
}
