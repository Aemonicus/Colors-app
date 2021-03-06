import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Button from '@material-ui/core/Button'
import { ValidatorForm } from "react-material-ui-form-validator"
import { Link } from 'react-router-dom'
import PaletteMetaForm from "./PaletteMetaForm"
import styles from "./styles/PaletteFormNavStyles"

class PaletteFormNav extends Component {
  constructor(props) {
    super(props)
    this.state = { newPaletteName: "", formShowing: false }
    this.handleChange = this.handleChange.bind(this)
    this.showForm = this.showForm.bind(this)
    this.hideForm = this.hideForm.bind(this)
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    )
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  showForm() {
    this.setState({ formShowing: true })
  }

  hideForm() {
    this.setState({ formShowing: false })
  }

  render() {
    const { classes, open, palettes, handleSubmit } = this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open} >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create Palette
          </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >Retour</Button>
            </Link>
            <Button
              variant="outlined"
              style={{
                color: "white",
                border: "2px solid white",
                fontWeight: "bold"
              }}
              onClick={this.showForm}
              className={classes.button}
            >
              Save
        </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaForm
            palettes={palettes}
            handleSubmit={handleSubmit}
            hideForm={this.hideForm} />
        )}
      </div>
    )
  }
}
export default withStyles(styles)(PaletteFormNav)