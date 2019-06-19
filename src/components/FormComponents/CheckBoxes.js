import React from 'react'

const CheckBoxes = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedItems: new Map(),
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    console.log(this.props);
    return (
      <div className="field">
        <label className="label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <div className="control">
          <fieldset>
            <legend>What are your pronouns</legend>
            {
              this.props.options.map(item => (
                <label key={item.key}>
                  {item.label}
                  <input
                  type="checkbox"
                  id={item.key}
                  name={item.name}
                  />
                </label>
              ))
            }
          </fieldset>
        </div>
      </div>
    )
  }
}

export default CheckBoxes
