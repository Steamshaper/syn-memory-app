import React, { Component } from 'react';
import { Container, Card, Divider } from 'semantic-ui-react';
import 'filepond/dist/filepond.min.css';
import './App.css';
import Uploader from './containers/Uploader';

class App extends Component {
  render() {
    return (
      <Container>
        <Divider hidden />
        <Card fluid>
          <Card.Content>
            <Card.Description>
              <Uploader />
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default App;
