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
  Text,
  CodePane
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

const pathDemo = `.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear alternate infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}`;

const keyframesDemo = `.pyro >.before,
.pyro>.after {
  position: absolute;
  z-index: 10;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  box-shadow: 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9;
  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}

.pyro>.after {
  animation-delay: 1.25s, 1.25s, 1.25s;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@keyframes bang {
  to {
    box-shadow: 65px -166.66667px #f2ff00, -66px -110.66667px #b300ff, -195px -12.66667px #a6ff00, -229px -141.66667px #0009ff, 191px 80.33333px #55ff00, -188px -415.66667px #00aaff, -194px -276.66667px #c800ff, 39px -175.66667px #ff9900, 110px -64.66667px #ff6200, 202px -297.66667px #ff0026, -203px -28.66667px #00c4ff, 233px -63.66667px #00ddff, -128px -145.66667px #00fff7, -216px -386.66667px #00d0ff, -152px -372.66667px #ff8000, 8px 61.33333px #2bff00, 49px -388.66667px #0066ff, 114px -243.66667px #00e6ff, -224px -382.66667px #003cff, -101px -224.66667px #00d0ff, 92px -255.66667px #51ff00, 207px -272.66667px #2bff00, 225px -244.66667px #00d0ff, -13px -189.66667px #33ff00, 200px -278.66667px #3c00ff, -225px -101.66667px #f700ff, 53px -292.66667px #000dff, 84px -340.66667px #ff1a00, -72px -72.66667px #ff5500, 111px 9.33333px #00ff6a, -206px -74.66667px #04ff00, 98px -14.66667px #77ff00, 241px -106.66667px #00ffa6, 69px -361.66667px #4400ff, 242px 7.33333px #00ff40, -102px -76.66667px #7700ff, 11px -84.66667px #44ff00, -104px -128.66667px #ff7700, -244px -223.66667px #ff00e6, 97px -127.66667px #88ff00, -115px -272.66667px #ff006f, -66px 74.33333px #aa00ff, 125px 65.33333px #00ffee, -202px -239.66667px #bf00ff, -25px -242.66667px #ff2600, -144px -177.66667px #0055ff, 215px -152.66667px #ffb700, 132px -66.66667px #5900ff, 135px -241.66667px #00ff33, -236px 55.33333px #ff5e00, 73px -30.66667px #6fff00;
  }
}

@keyframes gravity {
  to {
    transform: translateY(200px);
    opacity: 0;
  }
}

@keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
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

        <Slide transition={["fade"]} bgColor="cinquo">
          <Heading size={6} textColor="tertiary" caps fit>
            DEMO TIME
          </Heading>
          <Text size={6} textColor="quartenary" margin="20px 0" bold>
            Transition based animations
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="tertiary" caps fit>
            What's dash-strokeoffset?
          </Heading>
          <Text size={6} textColor="quartenary" margin="20px 0" bold>
            It allows you, in addition with stroke-dasharray, to draw on the
            paths of a svg.
          </Text>
          <style>{pathDemo}</style>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="340px"
            height="333px"
            viewBox="0 0 340 333"
            enableBackground="new 0 0 340 333"
            xmlSpace="preserve"
          >
            <path
              class="path"
              fill="#000000"
              stroke="#ff00ac"
              strokeWidth="4"
              strokeMiterlimit="10"
              d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
    s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
    C46.039,146.545,53.039,128.545,66.039,133.545z"
            />
          </svg>
          <Text textColor="primary">
            Checkout the intro of http://animejs.com/ and http://mojs.io/
          </Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="html"
          code={pathDemo}
          bgColor={"#1F2022"}
          color={"#FFFFFF"}
          ranges={[
            { loc: [0, 15], title: "HOW IT WORKS" },
            {
              loc: [1, 4],
              note: "Lonnnng dashes + moving offset = awesome animations"
            },
            {
              loc: [6, 13],
              note: "What's keyframes and animations?"
            }
          ]}
        />

        <Slide
          transition={["fade"]}
          bgColor="primary"
          progressColor="secondary"
          controlColor="secondary"
        >
          <style>{keyframesDemo}</style>
          <div className="pyro">
            <div className="before" />
            <div className="after" />
            <Heading size={6} textColor="tertiary" caps>
              Keyframes let you do multiple step animations.
            </Heading>
            <style>{cssWithAnimations}</style>

            <Text margin="10px 0 0" textColor="secondary" size={0.5}>
              It can be pretty awesome
            </Text>
          </div>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="html"
          code={keyframesDemo}
          bgColor={"#1F2022"}
          color={"#FFFFFF"}
          ranges={[
            { loc: [0, 15], title: "HOW IT WORKS" },

            {
              loc: [29, 60],
              note: "You define your animation(s)"
            },
            {
              loc: [30, 35],
              note: "And you define each step"
            },
            {
              loc: [35, 40]
            },
            {
              loc: [40, 45]
            },
            {
              loc: [45, 50]
            },
            {
              loc: [50, 55]
            },
            {
              loc: [8, 9],
              note: "You pick your animation(s), with their easing and all."
            }
          ]}
        />

        <Slide transition={["fade"]} bgColor="cinquo">
          <Heading size={6} textColor="tertiary" caps fit>
            Most used transition in TS
          </Heading>
          <Text
            size={6}
            textColor="quartenary"
            margin="20px 0"
            textAlign="left"
          >
            <CodePane
              lang="css"
              source={`const styles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
}`}
            />
            <CodePane
              lang="css"
              source={`const styles = {
  entering: { opacity: 0, transform: 'scale(0.3)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 1 },
  exited: { display: 'none', opacity: 0 }
}`}
            />
            <CodePane
              lang="css"
              source={`const styles = {
  entering: { opacity: 0, transform: 'translateX(200px)' },
  entered: { opacity: 1, transform: 'translateX(0px)' },
  exiting: { opacity: 0, transform: 'translateX(-200px)' },
  exited: { display: 'none', opacity: 0, transform: 'translateX(-200px)' }
}`}
            />
          </Text>
          <Text size={6} textColor="quartenary" margin="20px 0" bold>
            Appear / Pop / Appear from right, fade to left
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="tertiary" caps fit>
            A quick React integration
          </Heading>
          <Text
            size={6}
            textColor="quartenary"
            margin="20px 0"
            textAlign="left"
          />
          <CodePane
            lang="javascript"
            source={`import React from 'react'
import Transition from 'react-transition-group/Transition'

const styles = {/* from previous slide */}

export default ({loading}) => (
  <Transition
    in={!loading}
    timeout={{
      enter: 10,
      exit: 300
    }}
  >
    {state => (
      <div
        className="my classes"
        style={{
          height: 600,
          transition: "opacity 0.3s ease-out, transform 0.5s ease-out",
          ...styles[state]
        }}
      >
        My content
      </div>
    )}
  </Transition>
)`}
          />
          <Text size={6} textColor="quartenary" margin="20px 0" bold>
            Animations rely on state-machines.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="cinquo">
          <Heading size={6} textColor="tertiary" caps fit>
            DEMO TIME (Again)
          </Heading>
          <Text size={6} textColor="quartenary" margin="20px 0" bold>
            Form animations
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Some performance tips:
          </Heading>
          <List>
            <ListItem>Do not animate width/height/left/right</ListItem>
            <ListItem>Animate transformX/transformY</ListItem>
            <ListItem>More generaly: Avoid reflows!</ListItem>
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
            <ListItem>You can't transform "display"</ListItem>
            <ListItem>use units for functions (px/em/ms/s)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="quartenary"
            caps
            fit
            margin="100px 0 0 0"
          >
            Questions?
          </Heading>
          <Text>
            Repo:{" "}
            <a
              className="dib"
              style={{ margin: 30 }}
              href="https://github.com/vincentdesmares/css-animations"
            >
              https://github.com/vincentdesmares/css-animations
            </a>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
