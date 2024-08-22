import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h2>Weather App</h2>
      <WeatherSearch />
      <footer>
        coded by
        <a
          href="https://github.com/tajche77/react-ajax-search-engine"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          TamaraB
        </a>
        , and hosted on {""}
        <a
          href="https://lustrous-mermaid-7aa42c.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  </StrictMode>
);
