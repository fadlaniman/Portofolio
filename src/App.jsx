import * as React from "react";
import "./App.css";
import Navbar from "./navbar";
import Description from "./description";
import Icons from "./Fragments/icons";
import Picture from "./Fragments/picture";
import Section from "./section";
import Content from "./Fragments/content";
import { useGlobalState } from "./Fragments/brand";

function App() {
  const [darkMode] = useGlobalState("darkMode");
  return (
    <>
      <div className={darkMode ? "bg-gray-950 text-white" : ""}>
        <nav>
          <Navbar />
        </nav>
        <main>
          <section>
            <Section>
              <Description />
              <Icons />
              <Picture />
            </Section>
          </section>
          <section>
            <Section>
              <Content.First />
              <Content.Second />
            </Section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
