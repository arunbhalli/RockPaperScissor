import React from 'react'
import {Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import rock from '../images/rock.png'
import paper from '../images/paper.png'
import scissor from '../images/scissor.png'
const MyGame = ({choice,datacy}) => {
  return (
    <div data-cy={datacy}>
    <img src={choice === "rock" ? rock : choice === "scissor" ? scissor : paper} alt="Rock paper scissor"/> 
    </div>
  )
}


export default MyGame
