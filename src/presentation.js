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
    quartenary: "#00dade",
    cinquo: "#ffe400"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const cssWithAnimations = `#reactive-button-with-animations {
  transition: transform 0.5s ease, color 0.5s ease, background-color 0.5s ease;
}
#reactive-button-with-animations:hover {
  transform: scale(1.1);
  color: #333333;
  background-color: #dddddd;
}
`;

const easeDemo = `.parentHover:hover #ease,
.parentHover:hover #ease-in,
.parentHover:hover #ease-out {
  transform: translateX(800px);
}
#ease {
  transition-timing-function: ease;
}
#ease-in {
  transition-timing-function: ease-in;
}
#ease-out {
  transition-timing-function: ease-out;
}
#ease, #ease-in, #ease-out {
  transform: translateX(0px);
  transition-property: transform;
  transition-duration: 1s;
}`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          progressColor="secondary"
          controlColor="secondary"
        >
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

        <Slide
          transition={["zoom"]}
          bgColor="cinquo"
          progressColor="secondary"
          controlColor="secondary"
        >
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            WARNING
          </Heading>
          <Text margin="10px 0 0" textColor="secondary">
            Animations have their rules, learn what animations you need to do
            before trying to make one. The focus of those slides is not about
            good UI practices.
          </Text>
          <Text margin="50px 0 0" textColor="quartenary" fit bold>
            https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9
          </Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          progressColor="secondary"
          controlColor="secondary"
        >
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
  background-color: #dddddd;
}
`}
          </style>
          <div className="mv4">
            <button
              id="reactive-button"
              className="br3 ph4 pv2 bn pointer bg-grey"
            >
              Click Me
            </button>
          </div>
          <Text margin="10px 0 0" textColor="secondary" size={0.5}>
            Without animations it looks clunky
          </Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          progressColor="secondary"
          controlColor="secondary"
        >
          <Heading size={6} textColor="tertiary" caps>
            With animation this time!
          </Heading>
          <style>{cssWithAnimations}</style>
          <div className="mv4">
            <button
              id="reactive-button-with-animations"
              className="br3 ph4 pv2 bn pointer bg-light-gray"
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
          <Text size={6} textColor="secondary" margin="50px 0 50px 0" fit bold>
            It's the speed of the change of a property.
          </Text>
          <style>{easeDemo}</style>
          <div class="parentHover mt3" style={{ width: 920 }}>
            <Text size={6} textColor="quartenary" bold>
              EASE
            </Text>
            slow at start, fast in-between and slow at end
            <div
              id="ease"
              className="bg-white"
              style={{ width: 32, height: 32 }}
            />
          </div>
          <div class="parentHover mt3" style={{ width: 920 }}>
            <Text size={6} textColor="quartenary" bold>
              EASE-IN
            </Text>
            slow at start, fast after
            <div
              id="ease-in"
              className="bg-white"
              style={{ width: 32, height: 32 }}
            />
          </div>
          <div class="parentHover mt3" style={{ width: 920 }}>
            <Text size={6} textColor="quartenary" bold>
              EASE-OUT
            </Text>
            fast at start, slow at the end)
            <div
              id="ease-out"
              className="bg-white"
              style={{ width: 32, height: 32 }}
            />
          </div>
          <Text size={6} margin="30px" textColor="cinquo">
            Check out http://cubic-bezier.com to make your own easing!
          </Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="html"
          code={easeDemo}
          bgColor={"#1F2022"}
          color={"#FFFFFF"}
          ranges={[
            { loc: [0, 19], title: "Zoom on the ease demo" },
            {
              loc: [0, 5],
              note: "Again, defined the transition before the change of state."
            },
            {
              loc: [5, 14],
              note: "Each property of the transform can be set individualy."
            },
            {
              loc: [14, 19],
              note:
                'But using "transition: X 0.5s ease" would erase the single definitions.'
            }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps fit>
            What can I animate?
          </Heading>
          <Text size={6} textColor="quartenary" margin="20px 0">
            Here are the property I use the most
          </Text>
          <List>
            <ListItem>transform</ListItem>
            <ListItem>opacity</ListItem>
            <ListItem>color/background-color</ListItem>
            <ListItem>stroke-dashoffset</ListItem>
          </List>
          <Text size={7} textColor="quartenary">
            And the related transform functions
          </Text>
          <List>
            <ListItem>translate (tranlateX/Y/Z)</ListItem>
            <ListItem>scale</ListItem>
            <ListItem>rotate</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="cinquo" textColor="secondary">
          <Heading size={6} textColor="quartenary" caps>
            Some Debug tips:
          </Heading>
          <List>
            <ListItem>Use "force state" -> ":hover"</ListItem>
            <ListItem>Use "More tools" -> "Animations" (CR/FF)</ListItem>
            <ListItem>"transform" works for a CHANGE</ListItem>
            <ListItem>use units for functions (px/em/ms/s)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Some performance tips:
          </Heading>
          <List>
            <ListItem>Do not animate width/height/left/right</ListItem>
            <ListItem>Animate transformX/transformY</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
