import React from "react";

type FooterPropsType = {
   titleFooter: string
}
export const Footer = (props: FooterPropsType) => {
   return (
      <>{props.titleFooter}</>
   );
};


