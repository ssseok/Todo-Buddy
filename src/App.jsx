import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./pages/Login";
import Main from "./pages/Main";

import NotFound from "./pages/NotFound";
import Producer from "./pages/Producer";
import SignUp from "./pages/SignUp";
import WelCome from "./pages/WelCome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelCome />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/todo_list",
    element: <Main />,
  },
  {
    path: "/producer",
    element: <Producer />,
  },
]);
export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
  display: none;
}
body {
line-height: 1;
}
menu, ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
button {
  border: 0;
  outline: none;
  background-color: transparent;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  line-height: 1.2;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

}
a {
  text-decoration: none;
  color: inherit;
}

#root{
  /* border: 3px solid ${(props) => props.theme.borderColor}; */
  width: 35%;
  height: 80%;
  background-color: ${(props) => props.theme.rootBg};
  border-radius: 1.5rem;
  -webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
}
`;
