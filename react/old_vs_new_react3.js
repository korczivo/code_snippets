import React, { useMemo } from 'react';

// using class components
class Chart extends Component {
  state = {
    data: null,
    dimensions: null,
    xScale: null,
    yScale: null,
  }
  componentDidMount() {
    const newData = getDataWithinRange(this.props.dateRange)
    this.setState({data: newData})
    this.setState({dimensions: getDimensions()})
    this.setState({xScale: getXScale()})
    this.setState({yScale: getYScale()})
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.dateRange != this.props.dateRange) {
      const newData = getDataWithinRange(this.props.dateRange)
      this.setState({data: newData})
    }
    if (prevProps.margins != this.props.margins) {
      this.setState({dimensions: getDimensions()})
    }
    if (
      prevState.data != this.state.data
      || prevState.dimensions != this.state.dimensions
    ) {
      this.setState({xScale: getXScale()})
      this.setState({yScale: getYScale()})
    }
  }
  render() {
    return (
      <svg className="Chart" />
    )
  }
}

// using react hooks
const Chart = ({ dateRange, margins }) => {
  const data = useMemo(() => (
    getDataWithinRange(dateRange)
  ), [dateRange])
  const dimensions = useMemo(getDimensions, [margins])
  const xScale = useMemo(getXScale, [data, dimensions])
  const yScale = useMemo(getYScale, [data, dimensions])
  return (
    <svg className="Chart" />
  )
}
