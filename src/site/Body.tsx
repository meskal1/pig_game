import React from 'react';

type BodyPropsType = {
   titleBody: string
}
export const Body = (props: BodyPropsType) => {
   // debugger
   return (
      <div>{props.titleBody}</div>
   );
};