import React, { Component } from 'react'
import TableOfContents from '../TableOfContents';
import { connect } from 'react-redux'
import { getHeaderHeightState, getSidebarDockedState, getContentOnPostPageState } from "../../store/selectors";

class ResponsiveAnchor extends Component {
  render() {
    const { headerHeight, sidebarDocked, onPostPage } = this.props
    if (!sidebarDocked || !onPostPage) return <></>
    return (
      <div style={{
      position: "fixed",
      top: headerHeight + 30,
      left: "85%",
      right: 10,
      bottom: 0,
      overflow: "hidden", 
    }} >
      <div style={{
        position:"absolute", 
        left:10,
        right:0,
        top:0,
        bottom:0
      }}>
        <TableOfContents offsetTop={headerHeight+30} affix={true}/>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    headerHeight: getHeaderHeightState(state),
    sidebarDocked: getSidebarDockedState(state),
    onPostPage: getContentOnPostPageState(state),
  }
}

export default connect(mapStateToProps) (ResponsiveAnchor)