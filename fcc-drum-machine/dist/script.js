function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const projectName = "Drum Machine";
const soundBank = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];


class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeyDown",







    e => {
      if (e.keyCode === this.props.keyTrigger.charCodeAt()) {
        this.audio.play();
        this.audio.currenTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",
    () => {
      this.audio.play();
      this.audio.currenTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener("keydown", this.handleKeyDown);window.focus();}componentWillUnmount() {document.removeEventListener("keydown", this.handleKeyDown);}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", id: this.props.id, onClick: this.handleClick }, /*#__PURE__*/
      React.createElement("button", { className: "btn btn-primary btn-block" },
      this.props.keyTrigger), /*#__PURE__*/

      React.createElement("audio", {
        id: this.props.keyTrigger,
        className: "clip",
        src: this.props.src,
        ref: ref => this.audio = ref })));



  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",




    display => this.setState({ display }));this.state = { display: "Click Any Button" };}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine", className: "container-fluid" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-center" }, this.state.display)), /*#__PURE__*/

      React.createElement("div", { id: "button-pad" },
      soundBank.map((d) => /*#__PURE__*/
      React.createElement(DrumPad, {
        id: d.id,
        keyTrigger: d.keyTrigger,
        src: d.src,
        handleDisplay: this.handleDisplay })))));





  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));