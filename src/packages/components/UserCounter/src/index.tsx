import * as React from "react";
import { useRecoilState } from "recoil";

// IMPORTANT!
// Import sibling packages from node_modules vs relative paths
// Otherwise they will get bundled together here, which we don't want
import usersCounterState from "@fubo/users__state__users-counter-state";

const UserCounter = () => {
  const [ count, setCount ] = useRecoilState(usersCounterState);
  return (
    <>
      <p>User Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br/>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </>
  )
}

export default UserCounter;
