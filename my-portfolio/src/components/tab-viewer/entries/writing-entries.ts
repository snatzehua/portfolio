type WritingSection =
  | { type: "text"; content: string }
  | { type: "image"; src: string; caption?: string; width?: "full" | "half" }
  | { type: "latex"; content: string; caption?: string };

export interface WritingEntry {
  title: string;
  subtitle?: string;
  period?: string;
  banner?: string;
  body: string;
  sections?: WritingSection[];
  tags?: string[];
}

export const writingEntries: WritingEntry[] = [
  {
    title: "Shut the Box",
    subtitle: "Jane Street's Nov 2025 Monthly Puzzle",
    period: "NOV 2025",
    banner: "/images/shut-the-box.png",
    body: "Every month or so, Jane Street drops a new puzzle on their blog. This month's puzzle involved assembling a 3D box from a 20 x 20 grid by following certain rules. You can check out the original puzzle [here](https://www.janestreet.com/puzzles/shut-the-box-index/). ",
    sections: [
      {
        type: "text",
        content:
          "This puzzle was relatively straightforward, and we can start verifying whether certain cells in the grid are a part of the box using the arrows provided.",
      },
      {
        type: "image",
        src: "/images/shut-the-box-1.png",
        width: "half",
        caption: "Original grid provided in the puzzle",
      },
      {
        type: "text",
        content:
          "Let $C$ denote the set of cells belonging to the box. Arrow cells are guaranteed to lie outside $C$, and their arrows encode the direction(s) of the nearest box cell(s). For an arrow cell $p \\notin C$, define the directional distance $d_v(p, C)$ as the distance from $p$ to the nearest box cell lying in direction $v$. The arrow at $p$ points in direction $v$ when $v$ achieves the smallest directional distance. In other words, the box is closer in the pointing directions than in any other direction. When the arrow points in multiple directions, those directions are all tied: the box is equally close in each of them.",
      },
      {
        type: "text",
        content:
          "This gives us an elimination rule. Let $D(p)$ be the set of directions the arrow points to, and $\\bar{D}(p) = \\{\\text{N, S, E, W}\\} \\setminus D(p)$ the non-pointing directions. The box is strictly farther away in every non-pointing direction than in any pointing direction. Since $p$ itself is not in the box, the nearest box cell in any pointing direction is at least $1$ step away, which means the nearest box cell in any non-pointing direction is at least $2$ steps away, indicating that the immediate neighbours of $p$ in a non-pointing direction are excluded from $C$.",
      },
      {
        type: "image",
        src: "/images/shut-the-box-2.png",
        width: "half",
        caption: "Grid after applying the elimination rule to all arrow cells",
      },
      {
        type: "text",
        content:
          "Once we have leveraged the existing rules to exclude as many cells as possible, we can use the numbers on the grid along with arrows pointing to them to mark certain cells as part of the box. For example, the arrow cell in the bottom right points both north and west, and the nearest box cell in the north is 9 cells away, hence the nearest box cell in the west must also be 9 cells away.",
      },
      {
        type: "text",
        content:
          "Numbers also indicate how many Chebyshev-adjacent cells are part of the box, and it is also stated that there are no holes in the connected area on the grid. From this, we can deduce that an arrow cell pointing in all four directions must have $d_v(p, C) \\geq 2$ for every $v$. If the box were only $1$ step away in some direction, then the box would wrap around $p$ and create a hole in the box cells.",
      },
      {
        type: "image",
        src: "/images/shut-the-box-3.png",
        width: "half",
        caption: "Red cells guaranteed, yellow cells uncertain",
      },
      {
        type: "text",
        content:
          "From here, we have several unfilled cells that may or may not be a part of the box, and several yellow cells that each represent a binary choice — exactly one of two candidate configurations must hold.",
      },
      {
        type: "text",
        content:
          "We leverage information that numbers with grey circles should be directly opposite another number with a grey circle, and numbers with gray squares should be orthogonally adjacent to another number with a gray square.",
      },
      {
        type: "image",
        src: "/images/shut-the-box-4.png",
        width: "half",
        caption: "Number cells highlighted according to the shapes",
      },
      {
        type: "text",
        content:
          "Additionally, we consider the number of folds between the grid areas, as well as the total surface area of the box in terms of cells. By considering the 3D structure of the puzzle, we narrow down the possibilities by different areas of the grid together via the given constraints and the geometric shapes.",
      },
      {
        type: "image",
        src: "/images/shut-the-box-5.png",
        width: "half",
        caption: "Coloured borders correspond to connections in 3D",
      },
      {
        type: "text",
        content:
          "From there, we fill in uncertain cells based on the configuration of the 3D box as required, and end up with our final solution.",
      },
      {
        type: "image",
        src: "/images/shut-the-box-6.png",
        width: "half",
        caption: "Final solution, colour coded by 3D face",
      },
      {
        type: "text",
        content:
          "And of course we have to physically print and assemble the final solution.",
      },
      {
        type: "image",
        src: "/images/shut-the-box-final.png",
        width: "half",
        caption: "Final solution physically assembled :)",
      },
    ],
    tags: ["Probability", "Combinatorics", "Puzzles"],
  },
  {
    title: "Subtiles 2",
    subtitle: "Jane Street's Feb 2026 Monthly Puzzle",
    period: "FEB 2026",
    banner: "/images/subtiles-2.png",
    body: "This month's puzzle is relatively similar to the previous puzzle I did in November, and involves forming orthogonally connected regions on a grid using specific rules on a 13 x 13 grid. You can check out the original puzzle [here](https://www.janestreet.com/puzzles/subtiles-2-index/). ",
    sections: [
      {
        type: "text",
        content:
          "In this puzzle, we are to assign numbers 1 through N on the grid, such that there is 1 one, 2 twos, ..., and N ns. Cells with the same number must be orthogonally connected regions of size 1, 2, 3, ..., N. Each subsequent region must contain the shape of the previous region (with rotations and reflections allowed).",
      },
      {
        type: "image",
        src: "/images/subtiles-2-1.png",
        width: "half",
        caption: "Original grid provided in the puzzle",
      },
      {
        type: "text",
        content:
          "The first step would be to find the exact values of the equations within the grid.With a 13 x 13 grid, we know that $N \\leq 17$ since the total number of cells occupied by the regions is $1 + 2 + ... + N = \\frac{N(N+1)}{2}$. We can then use this along with the provided equations to find the exact values of each equation by using integer optimisation to find the unique solution that satisfies all equations and the $N \\leq 17$ constraint.",
      },
      {
        type: "image",
        src: "/images/subtiles-2-2.png",
        width: "half",
        caption: "Grid with equations solved",
      },
      {
        type: "text",
        content:
          "By plugging the constraints and equations into a solver, we find the integer values of each equation. We then look to solve the rest of the puzzle by assigning the rest of the values on the grid using the shape constraints. By considering that certain regions must be connected, we can narrow down certain cells to only a few possible values, and use the shape constraints to further narrow down the possibilities until we arrive at the final solution. For example, 14 cannot wrap around the singular value of 9 or 16, hence it must pass through the gap between 9 and 16.",
      },
      {
        type: "text",
        content:
          "By slowly following the constraints and making educated guesses, I eventually arrived at the final solution after some backtracking. Unfortunately, I didn't have a more elegant solution as I was too lazy to code out the shape constraints and solve the puzzle programmatically, but it was still a very interesting puzzle.",
      },
      {
        type: "image",
        src: "/images/subtiles-2-3.png",
        width: "half",
        caption: "Final solution after backtracking and trial and error",
      },
      {
        type: "image",
        src: "/images/subtiles-2-4.png",
        width: "full",
        caption: "How I tracked individual regions and shapes",
      },
    ],
    tags: ["Probability", "Combinatorics", "Puzzles"],
  },
];
