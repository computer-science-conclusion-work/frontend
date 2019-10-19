// IMPORTS
// External
import { Component } from 'react'

export default class EnhancedComponent extends Component {
  state = {
    dirty: false,
    fields: {},
  }

  onChange = name => event => {
    this.setState({
      dirty: true,
      fields: {
        ...this.state.fields,
        [name]: event.target.value,
      },
    })
  }

  onChangeCheckBox = name => event => {
    this.setState({
      dirty: true,
      fields: {
        ...this.state.fields,
        [name]: event.target.checked,
      },
    })
  }

  onChangeValue = name => value => {
    this.setState({
      dirty: true,
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    })
  }
}
