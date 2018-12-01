import React, { Component } from 'react';
import { Button, Form, Icon, Message } from 'semantic-ui-react';
import { FilePond } from 'react-filepond';
class FileUploadForm extends Component {
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
   * @memberof FileUploadForm
   */
  handleUploadImage(ev) {
    ev.preventDefault();
    const { upload } = this.props;

    upload({ file: this.uploadInput, filename: 'test.upload' });
  }

  /**
   *
   *
   * @returns
   * @memberof FileUploadForm
   */
  render() {
    return (
      <Form onSubmit={this.handleUploadImage}>
        <Message
          icon="cloud upload"
          header="Have you heard about our mailing list?"
          content="Get the best news in your e-mail every day."
        />
        <FilePond
          allowMultiple={true}
          server={{
            url: './v1/memorize',
            revert: {
              headers: {
                'content-type': 'application/json; charset=utf-8',
              },
            },
          }}
        />
        <Button color="olive" type="submit">
          <Icon name="cloud upload" /> Upload
        </Button>
      </Form>
    );
  }
}

FileUploadForm.defaultProps = {
  uploadEndpoint: './upload',
};

export default FileUploadForm;
