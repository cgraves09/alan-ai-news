import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import useStyles from "./styles";
import NewsCards from "./components/NewsCards/NewsCards.jsx";

const alanKey =
  "2b5e2ba1eb4e46c68a0f9967622387aa2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="alanLogo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
