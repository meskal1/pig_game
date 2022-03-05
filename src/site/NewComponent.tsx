import React from 'react';

type NewComponentType = {
   task: taskType[]
}
type taskType = {
   id: number,
   title: string,
   isDone: boolean
}

export const NewComponent = (props: NewComponentType) => {
   const topCars = [
      {manufacturer: `Mercedes`, model: `3r32`},
      {manufacturer: `BMW`, model: `3732`},
      {manufacturer: `Audi`, model: `0000`},
   ];
   // const Subscriber = () => {
   //    console.log(`Hello Im Vasiya`);
   // };
   // const Subscriber2 = () => {
   //    console.log(`Hello Im Petiya`);
   // };
   // const onClick = (name: string) => {
   //    console.log(`Hello Im ${name}`);
   // };
   const foo1 = () => {
      console.log(100200);
   };
   const foo2 = (a: number) => {
      console.log(a);
   };
   return (
      <>
         <ul>
            {props.task.map((a, i) => {
               return (
                  <li key={i}>{a.id}</li>
               );
            })}
         </ul>
         <table>
            <tbody>
            {topCars.map((a, i) => {
               return (
                  <tr key={i}>
                     <th>{a.manufacturer}</th>
                     <th>{a.model}</th>
                  </tr>
               );
            })}
            </tbody>
         </table>
         {/*<button onClick={Subscriber}>MyYoutubeChannel-1</button>*/}
         {/*<button onClick={Subscriber2}>MyYoutubeChannel-2</button>*/}
         {/*<button onClick={(e) => onClick(`Vasiya`)}>MyYoutubeChannel-1</button>*/}
         {/*<button onClick={(e) => onClick(`Petiya`)}>MyYoutubeChannel-2</button>*/}
         <button onClick={foo1}>1</button>
         <button onClick={(e) => foo2(100200)}>2</button>
      </>
   );
};



