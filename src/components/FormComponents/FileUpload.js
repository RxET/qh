import React from 'react'
import { Link } from 'gatsby'

const FileInput = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // active: false,
      // navBarActiveClass: '',
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="field">
        <div className="file">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name={this.props.id}
              onChange={this.props.handleAttachment}
            />
            <span className="file-cta">
              <span className="file-label">{this.props.label}</span>
            </span>
          </label>
        </div>
      </div>
    )
  }
}

export default FileInput
