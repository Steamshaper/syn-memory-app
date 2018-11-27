const { uploadEndpoint } = this.props;

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
