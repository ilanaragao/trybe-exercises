import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((data) => data.json())
      .then((result) => this.setState({ data: result }));
  }

  render() {
    const { data } = this.state;
    const { message } = data;
    if (data === '') return 'loading...';
    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDog }>
          Novo doguinho!
        </button>
        <div>
          <img src={ message } alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default App;
