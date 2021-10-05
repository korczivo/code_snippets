import React, { Component, useEffect } from 'react';

class Chart extends Component {
  componentDidMount() {
    // when Chart mounts, do this
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data == props.data) return
    // when data updates, do this
  }
  componentWillUnmount() {
    // before Chart unmounts, do this
  }
  render() {
    return (
      <svg className="Chart" />
    )
  }
}

// React hooks approach
const Chart = ({ data }) => {
  useEffect(() => {
    // when Chart mounts, do this
    // when data updates, do this
    return () => {
      // when data updates, do this
      // before Chart unmounts, do this
    }
  }, [data])
  return (
    <svg className="Chart" />
  )
}

// Source: https://wattenberger.com/blog/react-hooks
