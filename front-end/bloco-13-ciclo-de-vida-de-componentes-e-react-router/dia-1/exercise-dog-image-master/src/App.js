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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { data } = this.state;
    localStorage.setItem('doginho', data.message);
    const dog = data.message.split('/')[4];
    alert(`O novo doguinho é da raça ${dog}`);
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
        <button type="button" onClick={this.fetchDog}>
          Novo doguinho!
        </button>
        <div>
          <img src={message} alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default App;
