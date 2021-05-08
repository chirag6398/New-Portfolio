import React, { createContext, useReducer } from "react";
import Particle from "./Particles/Particle";
import "./App.css";
import Nav from "./components/Nav";
import { initialState, reducer } from "./Reducer/Reducer";
export const ContextValue = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.onDarkMode);
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
        <Particle />
      </div>
    </ContextValue.Provider>
  );
}

export default App;
