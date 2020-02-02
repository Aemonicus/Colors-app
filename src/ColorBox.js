import React, { Component } from 'react'
import "./ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link } from 'react-router-dom'
import chroma from "chroma-js"

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = { copied: false }
    this.changeCopyState = this.changeCopyState.bind(this)
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }

  render() {
    const { name, background, moreUrl, showLink } = this.props
    const { copied } = this.state
    const isDarkColor = chroma(background).luminance() <= 0.08
    const isLightColor = chroma(background).luminance() >= 0.65


    return (
      <div style={{ background }} className="ColorBox">
        <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1 className={isLightColor && "dark-text"}>copied!</h1>
          <p className={isLightColor && "dark-text"}>{this.props.background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor && "light-text"}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>
              Copy
            </button>
          </CopyToClipboard>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
          </Link>
        )
        }
      </div>
    )
  }
}
export default ColorBox

