import React from "react";
import { createGlobalStyle } from "styled-components";
const UniversalStyle = createGlobalStyle`
*,*::after, *::before{
    margin:0;
    padding: 0;
    box-sizing: inherit;
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
}`;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <UniversalStyle />
      {children}
    </React.Fragment>
  );
}
