import React from "react";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./TankWar_src/TankWar.css";
import { Tank } from './TankWar_src/tank';
import { InputHandlerP1 } from './TankWar_src/inputP1'
import { InputHandlerP2 } from './TankWar_src/inputP2'

const CANVAS_HEIGHT = 350;
const CANVAS_WIDTH = 350;

export class TankWar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CANVAS_WIDTH: CANVAS_WIDTH,
      CANVAS_HEIGHT: CANVAS_HEIGHT,
      objects: [],
    }
  }

  // Check if game over, return True/False
  gameOver(ctx) {
    ctx.clearRect(0, 0, this.state.CANVAS_WIDTH, this.state.CANVAS_HEIGHT);
    ctx.fillStyle = "lime";
    if (this.state.objects[0].health === 0) {
      ctx.font = "30px Arial";
      ctx.fillText("Player 2 Wins", 90, 100);
    } else if (this.state.objects[1].health === 0) {
      ctx.font = "30px Arial";
      ctx.fillText("Player 1 Wins", 90, 100);
    }
  }

  componentDidMount() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext("2d");

    this.setState({
      objects: [],
    });

    let tank = new Tank(this.state.CANVAS_WIDTH, this.state.CANVAS_HEIGHT, 1);
    new InputHandlerP1(tank);

    let tank2 = new Tank(this.state.CANVAS_WIDTH, this.state.CANVAS_HEIGHT, 2);
    new InputHandlerP2(tank2);
    tank2.player = 2;
    tank2.color = "red";
    tank2.position.y = this.state.CANVAS_HEIGHT / 4;
    tank2.faceDir = "DOWN";

    this.state.objects.push(tank);
    this.state.objects.push(tank2);

    //this.state.objects.push(new Bullet("UP", 0, 100));

    let lastTime = 0;
    const CANVAS_WIDTH = this.state.CANVAS_WIDTH;
    const CANVAS_HEIGHT = this.state.CANVAS_HEIGHT;
    let objects = this.state.objects;

    function gameLoop(timestamp) {
      let deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      if (tank.health === 0 || tank2.health === 0) {
        this.gameOver(ctx);
      } else {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        objects.forEach(ob => ob.update(deltaTime, ctx));
        objects.forEach(ob => ob.draw(ctx));
        console.log(objects);
      }
      document.getElementById("p1Health").innerHTML =
        "Player1 Health = " + tank.health;
      document.getElementById("p2Health").innerHTML =
        "Player2 Health = " + tank2.health;

      requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop);
  } 

  render() {
    return (
      <html>
        <head>
          <title>Tank War</title>
          <meta charSet="UTF-8" />
        </head>
        <body>
          <p>
            <b>Player 1: up ↑, down ↓, left ←, right →, fire enter</b>
          </p>
          <p>
            <b>Player 2: up w, down s, left a, right d, fire space</b>
          </p>
          <canvas
            ref="canvas"
            id="gameScreen"
            width={350}
            height={350}
          ></canvas>
          <p id="p1Health">Player1 Health = 10</p>
          <p id="p2Health">Player2 Health = 10</p>
        </body>
      </html>
    );
  }
}

