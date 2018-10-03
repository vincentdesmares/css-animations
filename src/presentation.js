import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

import createTheme from "spectacle/lib/themes/default";
import "tachyons/css/tachyons.min.css";

require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#ff00ac",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const cssWithAnimations = `#reactive-button-with-animations {
  transition: transform 0.5s ease;
}
#reactive-button-with-animations:hover {
  transform: scale(1.1);
  color: #333333;
  background-color: rgb(0, 0, 0, 0.1);
}
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            CSS Animations
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Small things to use everywhere
          </Text>
          <Text margin="10px 0 0" textColor="quartenary" size={0.5} fit>
            from my work on Teamstarter
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            WARNING
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" fit bold>
            Animations have their rules
          </Text>
          <Text margin="10px 0 0" textColor="quartenary" fit>
            https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            A button without animation
          </Heading>
          <div className="mv4">
            <button className="bg-black-20 br3 ph4 pv2 bn pointer">
              Click Me
            </button>
          </div>
          <Text margin="10px 0 0" textColor="tertiary" size={0.5}>
            Is maybe just a label?
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Let's make it more reactive
          </Heading>
          <style>
            {`
#reactive-button:hover {
  transform: scale(1.1);
  color: #333333;
  background-color: #eeeeee;
}
`}
          </style>
          <div className="mv4">
            <button
              id="reactive-button"
              className="br3 ph4 pv2 bn pointer"
              style={{ backgroundColor: "#dddddd" }}
            >
              Click Me
            </button>
          </div>
          <Text margin="10px 0 0" textColor="secondary" size={0.5}>
            Without animations
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            With animation this time!
          </Heading>
          <style>{cssWithAnimations}</style>
          <div className="mv4">
            <button
              id="reactive-button-with-animations"
              className="br3 ph4 pv2 bn pointer"
              style={{ backgroundColor: "#dddddd" }}
            >
              Click Me
            </button>
          </div>
          <Text margin="10px 0 0" textColor="secondary" size={0.5}>
            Smooth and stylish.
          </Text>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="html"
          code={cssWithAnimations}
          bgColor={"#1F2022"}
          color={"#FFFFFF"}
          ranges={[
            { loc: [0, 10], title: "The transition property" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Must be present before a property change!" },
            { loc: [4, 7], note: "Animate pretty much everything" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            What is easing?
          </Heading>

          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
