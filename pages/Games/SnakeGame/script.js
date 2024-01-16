const canvas = document.getElementById("SnakeGame");
const ctx = canvas.getContext("2d");
const boxSize = 20;

// Alusta käärme
let snake = [{ x: 10, y: 10 }];
let direction = "right";

// Alusta ruoka
let food = createFood();

// Peli loop
function gameLoop() {
  clearCanvas();
  drawFood();
  moveSnake();
  drawSnake();

  // Tarkista törmäykset
  checkCollision();

  // Päivitä peli
  setTimeout(function() {
    requestAnimationFrame(gameLoop);
  }, 100);
}

// Luo ruoka satunnaiseen paikkaan
function createFood() {
  const foodX = Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize;
  const foodY = Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize;
  return { x: foodX, y: foodY };
}

// Piirrä ruoka
function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

// Päivitä käärmeen sijainti
function moveSnake() {
  const head = { ...snake[0] };

  switch (direction) {
    case "up":
      head.y -= boxSize;
      break;
    case "down":
      head.y += boxSize;
      break;
    case "left":
      head.x -= boxSize;
      break;
    case "right":
      head.x += boxSize;
      break;
  }

  snake.unshift(head);

  // Tarkista, onko syöty ruoka
  if (head.x === food.x && head.y === food.y) {
    food = createFood();
  } else {
    snake.pop();
  }
}

// Piirrä käärme
function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
  });
}

// Tarkista törmäykset (seinät ja itse)
function checkCollision() {
  const head = snake[0];

  // Törmäys seinään
  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
    resetGame();
  }

  // Törmäys itseen
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}

// Tyhjennä canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Palauta pelin alkutilaan
function resetGame() {
  snake = [{ x: 10, y: 10 }];
  direction = "right";
  food = createFood();
}

// Kuuntele näppäimistön painalluksia
document.addEventListener("keydown", changeDirection);

// Muuta käärmeen suuntaa näppäimistön painalluksen perusteella
function changeDirection(event) {
  switch (event.key) {
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
  }
}

// Käynnistä peli
gameLoop();