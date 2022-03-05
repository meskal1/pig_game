import React, {useState} from 'react';

// type nameButtonType = `all` | `ruble` | `dollar`;
type SrcNewComponentType = {
   name: string,
   callBack: () => void
}
export const SrcNewComponent = (props: SrcNewComponentType) => {
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

   return (
      <>
         <div>
            <button onClick={() => props.callBack()}>{props.name}</button>
         </div>
      </>
   );
};