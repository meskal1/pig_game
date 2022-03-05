import React, {useState} from 'react';
import './App.css';
// import {SrcNewComponent} from './srcNewComponent';
// import {Button} from './components/Button';

const tasks1 = [
   {id: 1, title: "HTML&CSS", isDone: true},
   {id: 2, title: "JS", isDone: true},
   {id: 3, title: "ReactJS", isDone: false}
];
const tasks2 = [
   {id: 1, title: "Hello world", isDone: true},
   {id: 2, title: "I am Happy", isDone: false},
   {id: 3, title: "Yo", isDone: false}
];
// type nameButtonType = `all` | `ruble` | `dollar`;

function App() {
   // const [money, setMoney] = useState([
   //    {banknote: `dollar`, nominal: 100, number: ` a1234567890`},
   //    {banknote: `dollar`, nominal: 50, number: ` z1234567890`},
   //    {banknote: `ruble`, nominal: 100, number: ` w1234567890`},
   //    {banknote: `dollar`, nominal: 100, number: ` e1234567890`},
   //    {banknote: `dollar`, nominal: 50, number: ` c1234567890`},
   //    {banknote: `ruble`, nominal: 100, number: ` r1234567890`},
   //    {banknote: `dollar`, nominal: 50, number: ` x1234567890`},
   //    {banknote: `ruble`, nominal: 50, number: ` v1234567890`},
   // ]);
   // let [currentMoney, setCurrentMoney] = useState(money);
   // const onClickFilterHandler = (nameButton: nameButtonType) => {
   //    setCurrentMoney(currentMoney = money.filter((a) => a.banknote === (nameButton === `ruble` ? `ruble` : nameButton === `dollar` ? `dollar` : a.banknote)));
   // };

   // const Button1foo = (subscriber: string, age: number) => {
   //    console.log(subscriber, age);
   // };
   // const Button2foo = (subscriber: string, age: number) => {
   //    console.log(subscriber, age);
   // };
   // const Button3foo = () => {
   //    console.log(`Im just a button`);
   // };
   // let [a, setA] = useState(1);
   // const onClickHandler = () => {
   //    setA(++a);
   //    console.log(a);
   // };
   // const reset = () => {
   //    setA(a = 1);
   // };

   return (
      // <>
      //    <ul>
      //       {currentMoney.map((objFromArray, i) => {
      //          return (
      //             <li key={i}>
      //                <span>{objFromArray.banknote}</span>
      //                <span>{objFromArray.nominal}</span>
      //                <span>{objFromArray.number}</span>
      //             </li>
      //          );
      //       })}
      //    </ul>
      //    <SrcNewComponent name={`all`} callBack={() => onClickFilterHandler(`all`)}/>
      //    <SrcNewComponent name={`ruble`} callBack={() => onClickFilterHandler(`ruble`)}/>
      //    <SrcNewComponent name={`dollar`} callBack={() => onClickFilterHandler(`dollar`)}/>
      // </>

      // <>
      //    <ul>
      //       {currentMoney.map((objFromArray, i) => {
      //          return (
      //             <li key={i}>
      //                <span>{objFromArray.banknote}</span>
      //                <span>{objFromArray.nominal}</span>
      //                <span>{objFromArray.number}</span>
      //             </li>
      //          );
      //       })}
      //    </ul>
      //    <div>
      //       <button onClick={() => onClickFilterHandler(`all`)}>all</button>
      //       <button onClick={() => onClickFilterHandler(`ruble`)}>ruble</button>
      //       <button onClick={() => onClickFilterHandler(`dollar`)}>dollar</button>
      //    </div>
      // </>

      // <span className={`App`}>
      //    {/*<button>MyYoutubeChannel-1</button>*/}
      //    {/*<button>MyYoutubeChannel-2</button>*/}
      //    <div><Button name={`MyYoutubeChannel-1`} callBack={() => Button1foo(`Im Vasiya`, 21)}/></div>
      //    <div><Button name={`MyYoutubeChannel-2`} callBack={() => Button2foo(`Im Petiya`, 30)}/></div>
      //    <h1>{a}</h1>
      //    <button onClick={onClickHandler}>number</button>
      //    <button onClick={reset}>0</button>
      // </span>

      // <>
      //    <Header titleHeader={`New Header`}/>
      //    <Body titleBody={`New Body`}/>
      //    <Footer titleFooter={`New Footer`}/>
      //    <NewComponent task={tasks1}/>
      // </>

      // <div className="App">
      //    <ToDoList title={`What to learn123`} task={tasks1}/>
      //    <ToDoList title={`What to learn321`} task={tasks2}/>
      // </div>
   );
}

export default App;
