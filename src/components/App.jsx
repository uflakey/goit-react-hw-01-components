import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import {FriendList, FriendListItem} from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from "../Data/user.json";
import data from "../Data/data.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json";

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
      <FriendList children = {<FriendListItem friends={friends}/>} />    
      <h2 className="task">TransactionHistory</h2>
      <TransactionHistory items={transactions} />
  </>
)};    