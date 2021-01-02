'use strict'

import { Chart } from './Chart.js'
import { withCartesianProps } from 'HOC'

const ChartWithCartersianProps = withCartesianProps(Chart)

export const LineChart = (props) => (
  <ChartWithCartersianProps {...props} type={'line'} />
)