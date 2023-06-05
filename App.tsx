import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as Slides from "./Slides/Slides";

const routes = [
  {
    path: '/',
    element: <Slides.Slide1 />
  },
  ...Object.keys(Slides)
    .sort((a, b) => Number(a.slice(5)) > Number(b.slice(5)) ? 1 : -1)
    .map((slideComponentName, index) => {
      const Comp = Slides[slideComponentName];
      return {
        path: `/${index}`,
        element: <Comp />
      }
    })
];

const useSlides = () => {
  const navigate = useNavigate();


  const keydownHandler = (e: KeyboardEvent): any => {
    const currentSlideNumber = window.location.pathname === '/' ? 1 : Number(window.location.pathname.slice(1));

    if (e.key === 'ArrowRight') {
      navigate(`/${currentSlideNumber + 1}`);
    } 
  
    if (e.key === 'ArrowLeft') {
      navigate(`/${currentSlideNumber - 1}`);
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, []);


}

function App() {
  useSlides();
  return (
    <Routes>
      {routes.map((props) => <Route key={props.path} {...props} />)}
    </Routes>
  );
}

export {
  App,
  routes
};