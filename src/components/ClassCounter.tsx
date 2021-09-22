import React from "react";
//импортируем реакт и компонент

type MyProps = any;
type MyState = { count: number };

//создаем класс и наследуемся от реакт копонента
export class ClassCounter extends React.Component<MyProps, MyState> {
  //в классовых компонентах нельзя использовать хуки

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.inrement = this.inrement.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  inrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.inrement}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
