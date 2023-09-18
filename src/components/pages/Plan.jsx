import React from 'react';

export default class Plan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 22,
      city: 'Paris',
    };
  }

  shouldComponentUpdate(props, state) {}

  componentDidUpdate(prevProps, prevState) {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <span>
          добро пожаловать, {this.props.testProp}. Вам {this.state.age} лет. Вы
          из города {this.state.city}
        </span>
        <button onClick={() => this.setState({ age: 30 })}>
          Изменить возраст
        </button>
      </>
    );
  }
}
