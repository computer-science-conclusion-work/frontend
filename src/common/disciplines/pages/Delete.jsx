// IMPORTS
// Material-ui
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'

// External
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/default'
import DialogConfirm from '../../templates/DialogConfirm'
import EnhancedComponent from '../../components/EnhancedComponent'
import { destroy, edit } from '../DisciplinesActions'
import { getEditingDiscipline } from '../DisciplinesReducer'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class DeleteDiscipline extends EnhancedComponent {
  componentDidMount() {
    this.props.edit(this.props.match.params.id)
  }

  onSubmit = () => {
    const { discipline, filters } = this.props
    this.props.destroy(discipline.id, filters).then(data => {
      if (data && data.code === 200) {
        this.props.history.push('/disciplines')
      }
    })
  }

  onClose = () => {
    this.props.history.push('/disciplines')
  }

  render() {
    const { classes, discipline } = this.props
    return (
      <DialogConfirm
          open={discipline !== null}
          handleClose={this.onClose}
          transition={Transition}
          appBar={classes.appBar}
          flex={classes.flex}
          title="Excluir Disciplina"
          handleSubmit={() => this.onSubmit()}
          handleOnClose={() => this.onClose()} />
    )
  }
}

DeleteDiscipline.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  ...getEditingDiscipline(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      destroy,
      edit,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DeleteDiscipline))
