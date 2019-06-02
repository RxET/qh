import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import TextInput from '../../components/FormComponents/TextInput'
import TextInput from '../../components/FormComponents/FileUpload'

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>File Upload</h1>
              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="file-upload" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <TextInput
                  id="firstName"
                  label="First Name"
                  isRequired = {true}
                  handleChange = {this.handleChange}
                />
                <TextInput
                  id="lastName"
                  label="Last Name"
                  isRequired = {true}
                  handleChange = {this.handleChange}
                />
                <TextInput
                  id="modalityOffering"
                  label="Modality/Offering"
                  isRequired = {true}
                  handleChange = {this.handleChange}
                />
                <TextInput
                  id="email"
                  label="Email"
                  isRequired = {true}
                  handleChange = {this.handleChange}
                />
                <TextInput
                  id="website"
                  label="Website"
                  isRequired = {false}
                  handleChange = {this.handleChange}
                />
                <TextInput
                  id="social"
                  label="Social"
                  isRequired = {false}
                  handleChange = {this.handleChange}
                />
                <TextInput
                  id="shortBio"
                  label="Short Bio"
                  isRequired = {true}
                  handleChange = {this.handleChange}
                />
                <FileUpload
                  id="profilePicture"
                  label="Profile Picture"
                  isRequired = {true}
                  handleAttachment = {this.handleAttachment}
                />
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
