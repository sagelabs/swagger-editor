import React, { PropTypes } from "react"

export default class ReadOnlyLayout extends React.Component {

  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired
  }

  render() {
    let { getComponent } = this.props

    let Container = getComponent("Container")
    let UIBaseLayout = getComponent("BaseLayout", true)

    return (
      <div>
        <Container className='container'>
          <UIBaseLayout/>
        </Container>
      </div>
    )
  }

}
