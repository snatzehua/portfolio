import type { Project } from "../types";

const project: Project = {
  "slug": "autonomous-robot",
  "title": "Autonomous Robot Navigation",
  "summary": "A maze-solving mBot we programmed to follow walls and use colour tiles to decide where to turn.",
  "publishedAt": "2026-11-15",
  "period": "2023",
  "role": "CG1111A · Team of three",
  "status": "Completed",
  "tags": [
    "C++",
    "Arduino",
    "mBot",
    "Sensors"
  ],
  "outcome": "Our robot won best-performing robot at the CG1111A Maze Finale. I worked on the overall logic and colour sensing.",
  "sections": [
    {
      "id": "task",
      "title": "Getting the robot through the maze",
      "blocks": [
        {
          "type": "text",
          "content": "For CG1111A, our team of three programmed an mBot to follow the left wall, stop at black lines and turn according to the colour tile underneath. I worked on logistics and design, the overall code, and the colour sensor’s code and calibration."
        },
        {
          "type": "image",
          "src": "/images/robot.png",
          "caption": "The team’s mBot with its added sensing hardware."
        }
      ],
      "navTitle": "Maze task"
    },
    {
      "id": "control",
      "title": "Following the wall",
      "blocks": [
        {
          "type": "text",
          "content": "The main steering loop uses an ultrasonic sensor with proportional–derivative control, while an infrared sensor takes over with simpler corrections when the wall falls outside the ultrasonic sensor’s usable range."
        },
        {
          "type": "text",
          "content": "The movement and control work was shared across the team. At a black line, the robot stops to read the colour before turning, and a white tile finishes the run."
        }
      ],
      "navTitle": "Wall following"
    },
    {
      "id": "colour",
      "title": "Telling the colours apart",
      "blocks": [
        {
          "type": "text",
          "content": "The colour sensor shines red, green and blue LEDs onto the tile in turn and averages several LDR readings for each channel. It then compares those readings with six calibrated reference colours using a squared, normalised error."
        },
        {
          "type": "text",
          "content": "After that change, colour detection was nearly 100% correct in the calibrated project setup. Lighting and the surface still matter, so that result belongs to the conditions we tested."
        }
      ],
      "navTitle": "Colour sensing"
    },
    {
      "id": "sensor-loop",
      "title": "Combining the sensor readings with movement",
      "blocks": [
        {
          "type": "diagram",
          "title": "The control handoff at a tile",
          "steps": [
            {
              "label": "Follow the wall",
              "detail": "Ultrasonic PD steering, with infrared fallback."
            },
            {
              "label": "Detect a black line",
              "detail": "Pause ordinary wall following."
            },
            {
              "label": "Read the colour",
              "detail": "Cycle RGB illumination and average LDR measurements."
            },
            {
              "label": "Execute movement",
              "detail": "Choose the tile instruction; white ends the run."
            }
          ],
          "caption": "After a turn, ordinary wall following resumes. Movement and sensor integration were shared team work."
        },
        {
          "type": "text",
          "content": "The measured RGB response is compared with calibrated references using normalised squared error. Averaging and physical shielding address measurement variation before classification, while lighting, sensor placement and repeatable turns still affect the run."
        }
      ],
      "navTitle": "Sensor handoff"
    },
    {
      "id": "result",
      "title": "Making the run consistent",
      "blocks": [
        {
          "type": "text",
          "content": "Our robot won best-performing robot at the CG1111A Maze Finale. Getting a consistent run involved the physical setup as well as the code: shielding the light sensor, positioning the wall sensor and making the turns repeatable all mattered."
        }
      ],
      "navTitle": "Finale result"
    }
  ],
  "cover": "/images/projects/banners/autonomous-robot.webp",
  "coverAlt": "Photograph of the team’s actual mBot maze robot, preserved in its native proportions."
};

export default project;
