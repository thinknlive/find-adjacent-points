/*
* Note: The "Run" button in the upper left runs the current
* version of your code; feel free to use it anytime. Errors
* or output will be displayed in the right half of the
* screen.
*
* Problem Description:
*
* You are given a monochrome image where each pixel is
* either 0 or 1. You are also given the location of one of
* the pixels in the image in the image that is set to 1.

* Implement an algorithm that returns a list of all "one"
* pixels that are connected to the input pixel. Connected
* refers to any cells that are horizontally or vertically
* adjacent, but does not include diagonally adjacent.
*/

/* Feel free to use only C, if C++ (and C++11) is unfamiliar.
 * The only C++ you really need is `mat[i][j]` for pixel
 * access, and the `out.push_back()` idiom to build
 * a return value for the test harness below.
 */

#include <stdio.h>

#include <vector>
#include <utility>
#include <algorithm>
#include <

using std::vector;

// Our desired return type.
typedef vector<std::pair<int, int> > CoordList;

/* Given a two-dimensional matrix `mat` and the location of
 * a pixel (i, j) whose value `mat[i][j]` is 1, return the
 * coordinates of all pixels reachable from (i, j) by
 * horizontal or vertical movement on `1` pixels only.
 */
CoordList reachable_ones(const vector<vector<int> >& mat,
                         int i, int j) {
  CoordList out;

  /**** Your code below this line: find ALL such pixels ****/


  out.push_back({i, j});

  /**** Your code above this line ****/
  return out;
}

// Helper: prints a series of coordinates with spaces, no newline after.
void print_coords(const CoordList& coords) {
  for (auto xy : coords) {
    printf(" (%d, %d)", xy.first, xy.second);
  }
}

int main() {
  vector<vector<int>> test_mat{{1, 0, 0, 0, 0, 0},
                               {0, 0, 1, 1, 1, 1},
                               {0, 0, 1, 1, 0, 0},
                               {0, 0, 1, 0, 0, 0},
                               {0, 1, 0, 0, 0, 0}};

  CoordList expected{{1, 2}, {1, 3}, {1, 4}, {1, 5}, {2, 2}, {2, 3}, {3, 2}};

  CoordList output = reachable_ones(test_mat, 1, 2);
  std::sort(output.begin(), output.end());

  if (output == expected) {
    printf("Passed!\n");
  } else {
    printf("Failed!  Got: \n ");
    print_coords(output);
    printf("\nexpected: \n ");
    print_coords(expected);
    printf("\n");
  }
}
