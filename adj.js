/*
* Problem Description:
*
* You are given a monochrome image where each pixel is
* either 0 or 1. You are also given the location of one of
* the pixels in the image in the image that is set to 1.

* Implement an algorithm that returns a list of all "one"
* pixels that are connected to the input pixel. Connected
* refers to any cells that are horizontally or vertically
* adjacent, but does not include diagonally adjacent.
*
*/

var test_mat = [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
               ];


function reachable_ones(mat, i, j) {
              var result = [];

              var ylen = mat[0].length;
              var xlen = mat.length;
              var xdim = Math.pow(10,Math.round(Math.max(xlen, ylen)/10));
              var matched = {};

              //console.dir(mat);
              //console.log(xlen, ylen, xdim);

              function walk(x, y) {
                  //console.log(x, y, mat[x][y]);

                  if (x > 0) {
                    let point = mat[x-1][y];
                    let pointxy = String((x-1)*xdim+y);
                    let checked = !!matched[pointxy];
                    if (point === 1 && !checked) {
                      matched[pointxy] = point;
                      //mat[x-1][y] = 2;
                      result.push([x-1,y]);
                      walk(x-1, y);
                    }
                  }

                  if (x < xlen-1) {
                    let point = mat[x+1][y];
                    let pointxy = String((x+1)*xdim+y);
                    let checked = !!matched[pointxy];
                    if (point === 1 && !checked) {
                      matched[pointxy] = point;
                      //mat[x+1][y] = 2;
                      result.push([x+1,y]);
                      walk(x+1, y);
                    }
                  }

                  if (y > 0) {
                    let point = mat[x][y-1];
                    let pointxy = String(x*xdim+(y-1));
                    let checked = !!matched[pointxy];
                    if (point  === 1 && !checked) {
                      matched[pointxy] = point;
                      //mat[x][y-1] = 2;
                      result.push([x,y-1]);
                      walk(x, y-1);
                    }
                  }

                  if (y < ylen-1) {
                    let point = mat[x][y+1];
                    let pointxy = String(x*xdim+(y+1));
                    let checked = !!matched[pointxy];
                    if (point === 1 && !checked) {
                      matched[pointxy] = point;
                      //mat[x][y+1] = 2;
                      result.push([x,y+1]);
                      walk(x, y+1);
                    }
                  }

              }


 let x=i, y=j;
 let point = mat[x][y];
 let pointxy = String(x*xdim+(y));
 let checked = !!matched[pointxy];
 if (point === 1 && !checked) {
   matched[pointxy] = point;
   result.push([x,y]);
   walk(x, y);
 }

 //console.log(JSON.stringify(matched));

  return result;

}

var output;

console.log('======================================');
console.dir(test_mat);
console.log('======================================');

console.log('START: [1,2]');
output = reachable_ones(test_mat,1, 2);
console.dir(output.sort());

console.log('--------------------------------------');
console.log('START: [0,0]');
output = reachable_ones(test_mat,0,0);
console.dir(output.sort());

console.log('--------------------------------------');

console.log('START: [4,1]');
output = reachable_ones(test_mat,4, 1);
console.dir(output.sort());

console.log('--------------------------------------');

console.log('START: [1,1]');
output = reachable_ones(test_mat,1, 1);
console.dir(output.sort());

console.log('--------------------------------------');

console.log('START: [2,3]');
output = reachable_ones(test_mat,2, 3);
console.dir(output.sort());

console.log('--------------------------------------');

console.log('START: [8,1]');
output = reachable_ones(test_mat,8, 1);
console.dir(output.sort());

