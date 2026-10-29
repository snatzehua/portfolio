import type { WritingEntry } from "../types";

const entry: WritingEntry = {
  "slug": "shut-the-box",
  "title": "Shut the Box",
  "subtitle": "Jane Street's Nov 2025 Monthly Puzzle",
  "publishedAt": "2025-11",
  "period": "NOV 2025",
  "summary": "From a grid of arrows and numbers to a folded 3D box: a walkthrough of the deductions and the final physical model.",
  "banner": "/images/writing/shut-the-box.webp",
  "body": "Every month or so, Jane Street drops a new puzzle on their blog. This month's puzzle involved assembling a 3D box from a 20 x 20 grid by following certain rules. You can check out the original puzzle [here](https://www.janestreet.com/puzzles/shut-the-box-index/). ",
  "sections": [
    {
      "id": "starting-with-the-grid",
      "title": "Starting with the grid",
      "blocks": [
        {
          "type": "text",
          "content": "This puzzle was relatively straightforward, and we can start verifying whether certain cells in the grid are a part of the box using the arrows provided."
        },
        {
          "type": "image",
          "src": "/images/writing/shut-the-box-1.webp",
          "width": "half",
          "caption": "Original grid provided in the puzzle"
        }
      ]
    },
    {
      "id": "using-the-arrows",
      "title": "Using the arrows",
      "blocks": [
        {
          "type": "text",
          "content": "Let $C$ denote the set of cells belonging to the box. Arrow cells are guaranteed to lie outside $C$, and their arrows encode the direction(s) of the nearest box cell(s). For an arrow cell $p \\notin C$, define the directional distance $d_v(p, C)$ as the distance from $p$ to the nearest box cell lying in direction $v$. The arrow at $p$ points in direction $v$ when $v$ achieves the smallest directional distance. In other words, the box is closer in the pointing directions than in any other direction. When the arrow points in multiple directions, those directions are all tied: the box is equally close in each of them."
        },
        {
          "type": "text",
          "content": "This gives us an elimination rule. Let $D(p)$ be the set of directions the arrow points to, and $\\bar{D}(p) = \\{\\text{N, S, E, W}\\} \\setminus D(p)$ the non-pointing directions. The box is strictly farther away in every non-pointing direction than in any pointing direction. Since $p$ itself is not in the box, the nearest box cell in any pointing direction is at least $1$ step away, which means the nearest box cell in any non-pointing direction is at least $2$ steps away, indicating that the immediate neighbours of $p$ in a non-pointing direction are excluded from $C$."
        },
        {
          "type": "image",
          "src": "/images/writing/shut-the-box-2.webp",
          "width": "half",
          "caption": "Grid after applying the elimination rule to all arrow cells"
        },
        {
          "type": "text",
          "content": "Once we have leveraged the existing rules to exclude as many cells as possible, we can use the numbers on the grid along with arrows pointing to them to mark certain cells as part of the box. For example, the arrow cell in the bottom right points both north and west, and the nearest box cell in the north is 9 cells away, hence the nearest box cell in the west must also be 9 cells away."
        }
      ]
    },
    {
      "id": "finding-the-box-cells",
      "title": "Finding the box cells",
      "blocks": [
        {
          "type": "text",
          "content": "Numbers also indicate how many Chebyshev-adjacent cells are part of the box, and it is also stated that there are no holes in the connected area on the grid. From this, we can deduce that an arrow cell pointing in all four directions must have $d_v(p, C) \\geq 2$ for every $v$. If the box were only $1$ step away in some direction, then the box would wrap around $p$ and create a hole in the box cells."
        },
        {
          "type": "image",
          "src": "/images/writing/shut-the-box-3.webp",
          "width": "half",
          "caption": "Red cells guaranteed, yellow cells uncertain"
        },
        {
          "type": "text",
          "content": "From here, we have several unfilled cells that may or may not be a part of the box, and several yellow cells that each represent a binary choice — exactly one of two candidate configurations must hold."
        }
      ]
    },
    {
      "id": "connecting-the-faces",
      "title": "Connecting the faces",
      "blocks": [
        {
          "type": "text",
          "content": "We leverage information that numbers with grey circles should be directly opposite another number with a grey circle, and numbers with gray squares should be orthogonally adjacent to another number with a gray square."
        },
        {
          "type": "image",
          "src": "/images/writing/shut-the-box-4.webp",
          "width": "half",
          "caption": "Number cells highlighted according to the shapes"
        },
        {
          "type": "text",
          "content": "Additionally, we consider the number of folds between the grid areas, as well as the total surface area of the box in terms of cells. By considering the 3D structure of the puzzle, we narrow down the possibilities by different areas of the grid together via the given constraints and the geometric shapes."
        },
        {
          "type": "image",
          "src": "/images/writing/shut-the-box-5.webp",
          "width": "half",
          "caption": "Coloured borders correspond to connections in 3D"
        },
        {
          "type": "text",
          "content": "From there, we fill in uncertain cells based on the configuration of the 3D box as required, and end up with our final solution."
        },
        {
          "type": "image",
          "src": "/images/writing/shut-the-box-6.webp",
          "width": "half",
          "caption": "Final solution, colour coded by 3D face"
        }
      ]
    },
    {
      "id": "the-finished-box",
      "title": "The finished box",
      "blocks": [
        {
          "type": "text",
          "content": "And of course we have to physically print and assemble the final solution."
        },
        {
          "type": "image",
          "src": "/images/writing/shut-the-box-final.webp",
          "width": "half",
          "caption": "Final solution physically assembled :)"
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
