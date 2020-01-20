import React from 'react'

// function Greet(){
//   return <h1>hello world !</h1>
// }
//  export default Greet

export const Greet = ({name}) => {
  console.log(name);
  return (
    <div>
      <h1>hello {name} !</h1>
      {/*props.children*/}
    </div>
  );
}
