import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileUploadForm from '../components/FileUpload/FileUploadForm';
import { connect } from 'react-redux';
import { add, stop } from '../store/FileManager/action';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  uploadFile() {
    dispatch(add());
  },
  cancelUpload() {
    dispatch(stop());
  },
});

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { uploadFile, cancelUpload } = this.props;
    return <FileUploadForm upload={uploadFile} cancel={cancelUpload} />;
  }
}

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(Uploader);
