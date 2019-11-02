// IMPORTS
// Material UI
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import withStyles from '@material-ui/core/styles/withStyles'

// Externals imports (Dependencies)
import React from 'react'
import PropTypes from 'prop-types'

// Internal imports
import styles from '../../../../resources/theme/students'
import EnhancedComponent from '../../../components/EnhancedComponent'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class List extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {
      extra_curriculum: [],
    },
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return ({
        ...nextProps,
        fields: {
          extra_curriculum: nextProps.data,
        }
      })
    }
  }

  handleNote = index => event => {
    let localState = this.state.fields.extra_curriculum
    localState[index].note = event.target.value

    this.setState({
      fields: {
        ...this.state.fields,
        localState,
      },
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit && this.props.onSubmit(this.state.fields.extra_curriculum)
  }

  onClose = () => {
    this.props.onClose && this.props.onClose()
  }

  render() {
    const { classes } = this.props
    const { extra_curriculum } = this.state.fields
    return (
        <ValidatorForm
            ref="form"
            onSubmit={this.onSubmit}
            onError={errors => console.log(errors)}
            className={classes.main}
        >
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Disciplina</TableCell>
                    <TableCell>Ano/Semestre</TableCell>
                    <TableCell>Carga de Trabalho</TableCell>
                    <TableCell>Créditos</TableCell>
                    <TableCell>Nota</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {extra_curriculum.map((item, index) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.discipline_name}</TableCell>
                        <TableCell>{item.year_semester}</TableCell>
                        <TableCell>{item.workload}</TableCell>
                        <TableCell>{item.credits}</TableCell>
                        <TableCell>
                            <TextValidator
                                onChange={this.handleNote(index)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                                value={item.note}
                            />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
            >
            Salvar
            </Button>
        </ValidatorForm>
    )
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(List)
