import React from 'react'
import { Link } from 'gatsby'

const TextInput = class extends React.Component {
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
        <label className="label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <div className="control">
          <input
            className="input"
            type={'text'}
            name={this.props.id}
            onChange={this.props.handleChange}
            id={this.props.id}
            required={this.props.isRequired}
          />
        </div>
      </div>
    )
  }
}

export default TextInput
