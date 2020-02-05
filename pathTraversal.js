const input = [
  [1,1,0,1],
  [0,0,1,0],
  [1,1,1,0],
  [1,0,1,1]
]

let rows=4, columns=4;
let queue = [[0,0]], visitedCell=[]; //queue will store elements to visit. visited cell is just declared not used.
let counter = 0 //it will help in pointing the position of current node in queue.

//this will find all the adjacent elements
//and it will add the element to the queue if element is not present there.
function findAdjacentCell(item,rows,columns){
  let adjacentCell = []
  //grid[r][c]
  let r = item[0], c = item[1]

  visitedCell.push([r,c])
  if(r+1<rows){
    //visitedCell.push([r+1,c])
    if(!enqueue([r+1,c]))
    queue.push([r+1,c]);//grid[r+1][c]
  }
  if(-1<r-1){
    //visitedCell.push([r-1,c])
    if(!enqueue([r-1,c]))
    queue.push([r-1,c]);//grid[r-1][c]
  }
  if(c+1<columns){
    //visitedCell.push([r,c+1])
    if(!enqueue([r,c+1]))
    queue.push([r,c+1]);//grid[r][c+1]
  }
  if(-1<c-1){
    //visitedCell.push([r,c-1])
    if(!enqueue([r,c-1]))
    queue.push([r,c-1]);//grid[r][c-1]
  }
  //queue.splice(0,1)
  return 
}

function findValueAtCell(arr,grid){
  //arr[0] -> row
  //arr[1] -> column
  let cellValue;
  if(grid[arr[0]][arr[1]] === 1){
    return 1
  }
  return 0
}

function enqueue(arr){
    for(let j=0;j<queue.length;j++){
        if(JSON.stringify(queue[j]) === JSON.stringify(arr)){
          return true
      }
  }
  return false
}

while(queue.length< rows* columns){
    findAdjacentCell(queue[counter],rows,columns)
    console.log(queue," ")
    console.log(counter++,"<br>")
}


