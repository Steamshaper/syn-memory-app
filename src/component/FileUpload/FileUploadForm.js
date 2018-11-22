import React, { Component } from 'react';
import { Button, Form, Icon, Message, Grid } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadStatus: false,
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  /**
   *
   *
   * @param {Event} ev
   * @memberof FileUpload
   */
  handleUploadImage(ev) {
    const { uploadEndpoint } = this.props;
    ev.preventDefault();
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', 'test.upload');

    fetch(uploadEndpoint, {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(({ response }) => {
        this.setState({
          imageURL: `http://localhost:8000/${response.body.file}`,
          uploadStatus: true,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  /**
   *
   *
   * @returns
   * @memberof FileUpload
   */
  render() {
    return (
      <Form onSubmit={this.handleUploadImage}>
        <Message
          icon="cloud upload"
          header="Have you heard about our mailing list?"
          content="Get the best news in your e-mail every day."
        />
        <Grid>
          <Grid.Column width="8">
            <Dropzone onDrop={x => console.log(x)}>
              <div>
                <Icon name="cloud upload" size="huge" />
                Try dropping some files here, or click to select files to
                upload.
              </div>
            </Dropzone>
          </Grid.Column>
          <Grid.Column width="8">
            <Form.Field>
              <label>File</label>
              <input
                type="file"
                name="file"
                id="uploadInput"
                ref={ref => {
                  this.uploadInput = ref;
                }}
              />
            </Form.Field>
          </Grid.Column>
        </Grid>
        <Button color="olive" type="submit">
          <Icon name="cloud upload" /> Upload
        </Button>
      </Form>
    );
  }
}

FileUpload.defaultProps = {
  uploadEndpoint: './upload',
};

export default FileUpload;
