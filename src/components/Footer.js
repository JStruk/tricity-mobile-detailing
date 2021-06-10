import React from "react";
import tw from "twin.macro";

const CopyrightText = tw.p`text-center font-medium tracking-wide text-sm text-gray-600`
const LinkText=tw.a`text-blue-400`
export default () => {
  return (
      <CopyrightText>
        &copy; Copyright 2021, Top Shelf Mobile Detailing. All Rights Reserved. Website by
        <LinkText target="_blank" href="https://www.jstruk.com"> J. Struk</LinkText>
      </CopyrightText>
  );
};
