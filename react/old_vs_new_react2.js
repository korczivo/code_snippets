import React, { Component, useEffect } from 'react';

class Chart extends Component {
  state = {
    data: null,
  }
  componentDidMount() {
    const newData = getDataWithinRange(this.props.dateRange)
    this.setState({data: newData})
  }
  componentDidUpdate(prevProps) {
    if (prevProps.dateRange != this.props.dateRange) {
      const newData = getDataWithinRange(this.props.dateRange)
      this.setState({data: newData})
    }
  }
  render() {
    return (
      <svg className="Chart" />
    )
  }
}

const Chart = ({ dateRange }) => {
  const [data, setData] = useState()
  useEffect(() => {
    const newData = getDataWithinRange(dateRange)
    setData(newData)
  }, [dateRange])
  return (
    <svg className="Chart" />
  )
}
