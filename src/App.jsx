import { useState } from 'react';
import Profile from './components/Profile';
import FriendList from './components/FriendList';
import userData from './data/userData';
import friends from './data/friends';
import transactions from './data/transactions';
import TransactionHistory from './components/TransactionHistory';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='outline-container'>
        <Profile {...userData}/>
        <div className="friendCards">
          {
            friends.map( (friend) => (
              <FriendList key={friend.id} {...friend} />
            ))
          }
        </div>
        <TransactionHistory transactions={transactions}/>
      </main>
    </>
  )
}

export default App
