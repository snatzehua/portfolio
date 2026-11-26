import type { WritingEntry } from "../types";

const entry: WritingEntry = {
  "slug": "jane-street-puzzle-february-2026",
  "title": "Jane Street Puzzle February 2026",
  "subtitle": "Subtiles 2",
  "publishedAt": "2026-02-19",
  "period": "FEB 2026",
  "summary": "Solving a grid of growing shapes with integer constraints, connected regions, and a little backtracking.",
  "banner": "/images/writing/subtiles-2.webp",
  "body": "This month's puzzle is relatively similar to the previous puzzle I did in November, and involves forming orthogonally connected regions on a grid using specific rules on a 13 x 13 grid. You can check out the original puzzle [here](https://www.janestreet.com/puzzles/subtiles-2-index/). ",
  "sections": [
    {
      "id": "the-rules",
      "title": "The rules",
      "blocks": [
        {
          "type": "text",
          "content": "In this puzzle, we are to assign numbers 1 through N on the grid, such that there is 1 one, 2 twos, ..., and N ns. Cells with the same number must be orthogonally connected regions of size 1, 2, 3, ..., N. Each subsequent region must contain the shape of the previous region (with rotations and reflections allowed)."
        },
        {
          "type": "image",
          "src": "/images/writing/subtiles-2-1.webp",
          "width": "half",
          "caption": "Original grid provided in the puzzle"
        }
      ]
    },
    {
      "id": "solving-the-equations",
      "title": "Solving the equations",
      "blocks": [
        {
          "type": "text",
          "content": "The first step would be to find the exact values of the equations within the grid.With a 13 x 13 grid, we know that $N \\leq 17$ since the total number of cells occupied by the regions is $1 + 2 + ... + N = \\frac{N(N+1)}{2}$. We can then use this along with the provided equations to find the exact values of each equation by using integer optimisation to find the unique solution that satisfies all equations and the $N \\leq 17$ constraint."
        },
        {
          "type": "image",
          "src": "/images/writing/subtiles-2-2.webp",
          "width": "half",
          "caption": "Grid with equations solved"
        }
      ]
    },
    {
      "id": "working-through-the-shapes",
      "title": "Working through the shapes",
      "blocks": [
        {
          "type": "text",
          "content": "By plugging the constraints and equations into a solver, we find the integer values of each equation. We then look to solve the rest of the puzzle by assigning the rest of the values on the grid using the shape constraints. By considering that certain regions must be connected, we can narrow down certain cells to only a few possible values, and use the shape constraints to further narrow down the possibilities until we arrive at the final solution. For example, 14 cannot wrap around the singular value of 9 or 16, hence it must pass through the gap between 9 and 16."
        },
        {
          "type": "text",
          "content": "By slowly following the constraints and making educated guesses, I eventually arrived at the final solution after some backtracking. Unfortunately, I didn't have a more elegant solution as I was too lazy to code out the shape constraints and solve the puzzle programmatically, but it was still a very interesting puzzle."
        }
      ]
    },
    {
      "id": "the-final-solution",
      "title": "The final solution",
      "blocks": [
        {
          "type": "image",
          "src": "/images/writing/subtiles-2-3.webp",
          "width": "half",
          "caption": "Final solution after backtracking and trial and error"
        },
        {
          "type": "image",
          "src": "/images/writing/subtiles-2-4.webp",
          "width": "full",
          "caption": "How I tracked individual regions and shapes"
        }
      ]
    }
  ],
  "tags": [
    "Probability",
    "Combinatorics",
    "Puzzles"
  ]
};

export default entry;
