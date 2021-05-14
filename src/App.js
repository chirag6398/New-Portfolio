import React, { createContext, useReducer } from "react";
import Particle from "./Particles/Particle";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Myskills from "./components/Myskills";
import { initialState, reducer } from "./Reducer/Reducer";
export const ContextValue = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextValue.Provider value={{ state, dispatch }}>
      <div
        className={
          state.onDarkMode
            ? "profile__darkContainer profile__container"
            : "profile__container"
        }
      >
        <Nav />
        <About />
        <Myskills />
        <Particle />
      </div>
    </ContextValue.Provider>
  );
}

export default App;
