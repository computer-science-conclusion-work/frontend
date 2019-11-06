// IMPORTS
// Material-ui
import Paper from '@material-ui/core/Paper'

// Externals imports (Dependencies)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'

// Internal imports
import { getStudentMedianListData } from '../StudentsMedianReducer'

class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, items, students } = this.props
    const data = [
      {
        "id": Number.isInteger(students)? `${students} alunos`: students,
        "data": items
      }
    ]
    return (
      <Paper className={classes.content} elevation={1}>
        <div className={classes.container}>
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', stacked: true, min: '60', max: '100' }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Semestre',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Nota',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
          />
        </div>
      </Paper>
    )
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
}

List.defaultProps = {
  items: [],
}

const mapStateToProps = state => ({
  ...getStudentMedianListData(state),
})

export default connect(mapStateToProps)(List)
