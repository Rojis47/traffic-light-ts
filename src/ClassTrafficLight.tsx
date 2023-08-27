import { Component } from "react";

interface LightBarProps {
  color?: string;
  index?: number;
  lightIndex?: number;
}

class LightBar extends Component<LightBarProps> {
  static defaultProps = {
    color: "black",
    index: -1,
    lightIndex: -1,
  };

  render() {
    const { color, index, lightIndex } = this.props;
    return lightIndex === index ? (
      <div className={`${color} circle`}></div>
    ) : null;
  }
}

interface ClassTrafficLightState {
  lightIndex: number;
}

export class ClassTrafficLight extends Component<
  Record<string, never>,
  ClassTrafficLightState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      lightIndex: 0,
    };
  }

  handleNextState = () => {
    this.setState((prevState) => ({
      lightIndex: (prevState.lightIndex + 1) % 3,
    }));
  };

  render() {
    const { lightIndex } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <LightBar color="red" index={2} lightIndex={lightIndex} />
          <LightBar />
          <LightBar color="yellow" index={1} lightIndex={lightIndex} />
          <LightBar />
          <LightBar color="green" index={0} lightIndex={lightIndex} />
        </div>
        <button onClick={this.handleNextState} className="next-state-button">
          Next State
        </button>
      </div>
    );
  }
}
