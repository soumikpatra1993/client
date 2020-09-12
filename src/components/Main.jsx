import React from 'react';
import TableWrapper from './TableWrapper'
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileURL: '',
      data : []
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.uploadInput.files[0].name);
    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ 
          fileURL: `http://localhost:8000/${body.file}`,
          data : body });
      });
    });
  }

  render() {
    const {data} = this.state;
    return (
      <React.Fragment>
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input class="form-control" ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <br />
        <div>
          <button className = "btn btn-primary">Upload</button>
        </div>
      </form>
      <div>
        <TableWrapper data = {data}/>
      </div>
      </React.Fragment>
    );
  }
}

export default Main;
