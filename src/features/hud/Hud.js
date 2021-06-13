import styled from "styled-components"

const ButtonGroup = styled.g`
`

const ButtonBack = styled.path`
  fill: white;
  stroke: black;
  stroke-width: 1;
  opacity: .3;
`

const ButtonText = styled.text`
  font-size: 4.2px;
  font-family: 'Aria', sans-serif;
  pointer-events: none;
`

const ButtonIcon = styled.path`
  pointer-events: none;
`



const Hud = ({gameLoop, ...props}) => {
  return (
    <svg viewBox="0 0 300 200" {...props}>
      <g transform="translate(-5, -5)">
        <ButtonGroup id="retry">
          <ButtonBack onClick={() => gameLoop.runInputSystems('retry')} d="M40,17.5C40,13.361 36.639,10 32.5,10L17.5,10C13.361,10 10,13.361 10,17.5L10,32.5C10,36.639 13.361,40 17.5,40L32.5,40C36.639,40 40,36.639 40,32.5L40,17.5Z"/>
          <ButtonText x="16.277px" y="36.279px">Retry (R)</ButtonText>
          <ButtonIcon d="M25.239,19.842C22.848,19.842 20.683,20.735 19.013,22.188L15.765,18.94L15.765,27.06L23.886,27.06L20.619,23.794C21.874,22.747 23.471,22.098 25.239,22.098C28.433,22.098 31.149,24.182 32.097,27.06L34.235,26.357C32.981,22.576 29.435,19.842 25.239,19.842Z"/>
        </ButtonGroup>
      </g>
      <g transform="translate(-5, 5)">
        <ButtonGroup id="moveLeft">
          <ButtonBack onClick={() => gameLoop.runInputSystems('moveLeft')} d="M25,163.75C25,161.68 23.32,160 21.25,160L13.75,160C11.68,160 10,161.68 10,163.75L10,171.25C10,173.32 11.68,175 13.75,175L21.25,175C23.32,175 25,173.32 25,171.25L25,163.75Z"/>
          <ButtonIcon d="M19.94,164.44L19,163.5L15,167.5L19,171.5L19.94,170.56L16.887,167.5L19.94,164.44Z"/>
        </ButtonGroup>
        <ButtonGroup id="moveUp">
          <ButtonBack onClick={() => gameLoop.runInputSystems('moveUp')} d="M36.25,160C38.32,160 40,158.32 40,156.25L40,148.75C40,146.68 38.32,145 36.25,145L28.75,145C26.68,145 25,146.68 25,148.75L25,156.25C25,158.32 26.68,160 28.75,160L36.25,160Z"/>
          <ButtonIcon d="M35.56,154.94L36.5,154L32.5,150L28.5,154L29.44,154.94L32.5,151.887L35.56,154.94Z"/>
        </ButtonGroup>
        <ButtonGroup id="moveRight">
          <ButtonBack onClick={() => gameLoop.runInputSystems('moveRight')} d="M40,171.25C40,173.32 41.68,175 43.75,175L51.25,175C53.32,175 55,173.32 55,171.25L55,163.75C55,161.68 53.32,160 51.25,160L43.75,160C41.68,160 40,161.68 40,163.75L40,171.25Z"/>
          <ButtonIcon d="M45.06,170.56L46,171.5L50,167.5L46,163.5L45.06,164.44L48.113,167.5L45.06,170.56Z"/>
        </ButtonGroup>
        <ButtonGroup id="moveDown">
          <ButtonBack onClick={() => gameLoop.runInputSystems('moveDown')} d="M28.75,175C26.68,175 25,176.68 25,178.75L25,186.25C25,188.32 26.68,190 28.75,190L36.25,190C38.32,190 40,188.32 40,186.25L40,178.75C40,176.68 38.32,175 36.25,175L28.75,175Z"/>
          <ButtonIcon d="M29.44,180.06L28.5,181L32.5,185L36.5,181L35.56,180.06L32.5,183.113L29.44,180.06Z"/>
        </ButtonGroup>
      </g>
      <g transform="translate(5, 5)">
        <ButtonGroup id="grab">
          <ButtonBack onClick={() => gameLoop.runInputSystems('grab')} d="M210,167.5C210,163.361 206.639,160 202.5,160L187.5,160C183.361,160 180,163.361 180,167.5L180,182.5C180,186.639 183.361,190 187.5,190L202.5,190C206.639,190 210,186.639 210,182.5L210,167.5Z"/>
          <ButtonIcon d="M200.417,169.033L200.417,177.492C200.417,178.775 199.367,179.825 198.083,179.825L193.825,179.825C193.195,179.825 192.6,179.574 192.162,179.131L187.583,174.476C187.583,174.476 188.318,173.758 188.342,173.747C188.47,173.636 188.627,173.578 188.802,173.578C188.931,173.578 189.047,173.613 189.152,173.671C189.176,173.677 191.667,175.106 191.667,175.106L191.667,168.158C191.667,167.674 192.057,167.283 192.542,167.283C193.026,167.283 193.417,167.674 193.417,168.158L193.417,172.242L194,172.242L194,166.7C194,166.216 194.391,165.825 194.875,165.825C195.359,165.825 195.75,166.216 195.75,166.7L195.75,172.242L196.333,172.242L196.333,167.283C196.333,166.799 196.724,166.408 197.208,166.408C197.692,166.408 198.083,166.799 198.083,167.283L198.083,172.242L198.667,172.242L198.667,169.033C198.667,168.549 199.057,168.158 199.542,168.158C200.026,168.158 200.417,168.549 200.417,169.033Z"/>
          <ButtonText x="186.868px" y="186.279px">Grab (Z)</ButtonText>
        </ButtonGroup>
        <ButtonGroup id="rotateCCW">
          <ButtonBack onClick={() => gameLoop.runInputSystems('rotateCCW')} d="M250,167.5C250,163.361 246.639,160 242.5,160L227.5,160C223.361,160 220,163.361 220,167.5L220,182.5C220,186.639 223.361,190 227.5,190L242.5,190C246.639,190 250,186.639 250,182.5L250,167.5Z"/>
          <ButtonIcon d="M230.061,169.056C231.329,167.788 233.071,167 235.004,167C238.872,167 241.996,170.133 241.996,174C241.996,177.867 238.872,181 235.004,181C231.741,181 229.019,178.769 228.241,175.75L230.061,175.75C230.778,177.789 232.721,179.25 235.004,179.25C237.901,179.25 240.254,176.896 240.254,174C240.254,171.104 237.901,168.75 235.004,168.75C233.552,168.75 232.257,169.354 231.312,170.307L234.129,173.125L228.004,173.125L228.004,167L230.061,169.056Z"/>
          <ButtonText x="225.209px" y="186.279px">Rotate (X)</ButtonText>
        </ButtonGroup>
        <ButtonGroup id="rotateCW">
          <ButtonBack onClick={() => gameLoop.runInputSystems('rotateCW')} d="M290,167.5C290,163.361 286.639,160 282.5,160L267.5,160C263.361,160 260,163.361 260,167.5L260,182.5C260,186.639 263.361,190 267.5,190L282.5,190C286.639,190 290,186.639 290,182.5L290,167.5Z"/>
          <ButtonIcon d="M279.939,169.056C278.671,167.788 276.929,167 274.996,167C271.128,167 268.004,170.133 268.004,174C268.004,177.867 271.128,181 274.996,181C278.259,181 280.981,178.769 281.759,175.75L279.939,175.75C279.222,177.789 277.279,179.25 274.996,179.25C272.099,179.25 269.746,176.896 269.746,174C269.746,171.104 272.099,168.75 274.996,168.75C276.448,168.75 277.743,169.354 278.688,170.307L275.871,173.125L281.996,173.125L281.996,167L279.939,169.056Z"/>
          <ButtonText x="265.091px" y="186.279px">Rotate (C)</ButtonText>
        </ButtonGroup>
      </g>
    </svg>
  )
}

export default Hud
