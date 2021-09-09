type QueueNodeType = QueueNode | null;
class QueueNode {
  x: number;
  y: number;
  next: QueueNodeType;
  count: number;
  constructor(x: number, y: number, count: number) {
    this.x = x;
    this.y = y;
    this.count = count;
    this.next = null;
  }
}

class QueueCastle {
  private front: QueueNodeType;
  private rear: QueueNodeType;
  constructor() {
    this.front = null;
    this.rear = null;
  }

  empty() {
    return this.front === null;
  }

  push(x: number, y: number, count: number) {
    const temp = new QueueNode(x, y, count);

    if (this.rear === null) {
      this.front = this.rear = temp;
      return;
    }

    this.rear.next = temp;
    this.rear = temp;
  }

  pop() {
    if (this.empty()) return null;

    const temp = this.front;
    if (temp) {
      this.front = temp.next;

      if (this.front === null) this.rear = null;

      return [temp.x, temp.y, temp.count];
    }

  }
}

function checkXline(count: number, queue: QueueCastle, grid: string[], startX: number, y: number, goalX: number, goalY: number) {
  if (startX === goalX && y === goalY) return true;

  if (grid[startX][y] === '.') {
    grid[startX] = grid[startX].substring(0, y) + 'O' + grid[startX].substring(y + 1);
    queue.push(startX, y, count);
  }
}

function checkYline(count: number, queue: QueueCastle, grid: string[], x: number, startY: number, goalX: number, goalY: number) {
  if (x === goalX && startY === goalY) return true;

  if (grid[x][startY] === '.') {
    grid[x] = grid[x].substring(0, startY) + '0' + grid[x].substring(startY + 1);
    queue.push(x, startY, count);
  }
}

function goUp(count: number, queue: QueueCastle, grid: string[], startX: number, startY: number, goalX: number, goalY: number) {
  let x = startX;
  while (x >= 0) {
    if (checkYline(count, queue, grid, x, startY, goalX, goalY)) return true;
    if (x === 0 || grid[x - 1][startY] === 'X') break;
    x--;
  }
}

function goLeft(count: number, queue: QueueCastle, grid: string[], startX: number, startY: number, goalX: number, goalY: number) {
  let y = startY;
  while (y >= 0) {
    if (checkXline(count, queue, grid, startX, y, goalX, goalY)) return true;
    if (y === 0 || grid[startX][y - 1] === 'X') break;
    y--;
  }
}

function goRight(n: number, count: number, queue: QueueCastle, grid: string[], startX: number, startY: number, goalX: number, goalY: number) {
  let y = startY;
  while (y < n) {
    if (checkXline(count, queue, grid, startX, y, goalX, goalY)) return true;
    if (y + 1 === n || grid[startX][y + 1] === 'X') break;
    y++;
  }
}

function goDown(n: number, count: number, queue: QueueCastle, grid: string[], startX: number, startY: number, goalX: number, goalY: number) {
  let x = startX;
  while (x < n) {
    if (checkYline(count, queue, grid, x, startY, goalX, goalY)) return true;
    if (x + 1 === n || grid[x + 1][startY] === 'X') break;
    x++;
  }
}



function minimumMoves(grid: string[], startX: number, startY: number, goalX: number, goalY: number): number {
  // Write your code here
  const queue = new QueueCastle();
  queue.push(startX, startY, 0);
    const n = grid.length;
  while (!queue.empty()) {
    const [currentStartX, currentStartY, count] = queue.pop() as[number, number, number];
    const incCount = count + 1;

    if (goRight(n, incCount, queue, grid, currentStartX, currentStartY, goalX, goalY)) return incCount;
    if (goLeft(incCount, queue, grid, currentStartX, currentStartY, goalX, goalY)) return incCount;
    if (goUp(incCount, queue, grid, currentStartX, currentStartY, goalX, goalY)) return incCount;
    if (goDown(n, incCount, queue, grid, currentStartX, currentStartY, goalX, goalY)) return incCount;
  }
  return -1;
}

const gridCastle = ['.X.', '.X.', '...'];



console.log(minimumMoves(gridCastle, 0, 0, 0, 2))
