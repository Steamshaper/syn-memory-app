import React, { Component } from "react";
import FileUpload from "./component/FileUpload/FileUploadForm";
import { Container, Card, Divider } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Divider hidden />
        <Card fluid>
          <Card.Content>
            <Card.Description>
              <FileUpload />
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default App;
