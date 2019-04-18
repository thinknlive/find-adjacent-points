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

INPUT

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


OUTPUT:

START: [1,2]
[ [ 1, 2 ],
  [ 1, 3 ],
  [ 1, 4 ],
  [ 1, 5 ],
  [ 2, 2 ],
  [ 2, 3 ],
  [ 3, 2 ] ]
--------------------------------------
START: [0,0]
[ [ 0, 0 ] ]
--------------------------------------
START: [4,1]
[ [ 4, 1 ],
  [ 5, 1 ],
  [ 5, 2 ],
  [ 5, 3 ],
  [ 5, 4 ],
  [ 5, 5 ],
  [ 6, 1 ],
  [ 6, 5 ],
  [ 7, 1 ],
  [ 7, 5 ],
  [ 8, 1 ],
  [ 8, 5 ] ]
--------------------------------------
START: [1,1]
[]
--------------------------------------
START: [2,3]
[ [ 1, 2 ],
  [ 1, 3 ],
  [ 1, 4 ],
  [ 1, 5 ],
  [ 2, 2 ],
  [ 2, 3 ],
  [ 3, 2 ] ]
--------------------------------------
START: [8,1]
[ [ 4, 1 ],
  [ 5, 1 ],
  [ 5, 2 ],
  [ 5, 3 ],
  [ 5, 4 ],
  [ 5, 5 ],
  [ 6, 1 ],
  [ 6, 5 ],
  [ 7, 1 ],
  [ 7, 5 ],
  [ 8, 1 ],
  [ 8, 5 ] ]

