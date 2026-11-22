import type { Project } from "../types";

const project: Project = {
  "slug": "stashpa",
  "title": "StashPA — Personal AI Assistant",
  "summary": "A Telegram assistant I built to save useful links and videos with enough context to remember them later.",
  "publishedAt": "2026-11-15",
  "period": "2026",
  "role": "Personal application project",
  "status": "Completed",
  "tags": [
    "Python",
    "Claude API",
    "Telegram",
    "AWS Lambda",
    "Whisper"
  ],
  "outcome": "The link-saving and video-processing workflow was deployed on AWS Lambda, with a separate worker for the slower processing.",
  "sections": [
    {
      "id": "problem",
      "title": "The things you find while scrolling",
      "blocks": [
        {
          "type": "text",
          "content": "I built StashPA around the useful things that turn up while scrolling on a phone. A saved link is easy enough to collect, but it still leaves you with the job of remembering what was in it, so the bot adds a title and summary before putting it in a database."
        }
      ],
      "navTitle": "Motivation"
    },
    {
      "id": "workflow",
      "title": "Sending a link to the bot",
      "blocks": [
        {
          "type": "text",
          "content": "Telegram passes the message to a Claude agent, which can fetch the metadata and save a note through its tools. The tools sit in a registry, so the interaction can stay in natural language without needing a separate slash command for each thing the assistant does."
        }
      ],
      "navTitle": "Agent workflow"
    },
    {
      "id": "implementation",
      "title": "From a message to a saved note",
      "blocks": [
        {
          "type": "diagram",
          "title": "From a shared link to a saved note",
          "steps": [
            {
              "label": "Telegram message",
              "detail": "Pass the link to the Python agent and tool registry."
            },
            {
              "label": "Fetch once",
              "detail": "Retrieve metadata or download the video."
            },
            {
              "label": "Extract context",
              "detail": "Use frames, optional transcription and model passes."
            },
            {
              "label": "Save the record",
              "detail": "Store a title, summary, platform, date and source URL."
            }
          ],
          "caption": "Ordinary links use metadata; videos add the extraction steps. If retrieval fails, the original URL can still be kept."
        },
        {
          "type": "text",
          "content": "For Instagram, TikTok and YouTube video, yt-dlp retrieves the clip and ffmpeg extracts frames, with optional Whisper transcription supplying the spoken content. Sharing that download across vision and entity passes avoids fetching the clip again for each step. The message relay remains separate from the registered tools."
        }
      ],
      "navTitle": "Video processing"
    },
    {
      "id": "deployment",
      "title": "The slower part runs separately",
      "blocks": [
        {
          "type": "text",
          "content": "The deployment has a webhook Lambda that acknowledges the incoming update and invokes a worker Lambda asynchronously. The worker handles the processing, which lets the webhook return while a video is still being worked on."
        }
      ],
      "navTitle": "Lambda deployment"
    },
    {
      "id": "limits",
      "title": "Where it runs into limits",
      "blocks": [
        {
          "type": "text",
          "content": "I deployed it on AWS Lambda, so a processing run has to fit within the 15-minute execution limit. There is also only so much the bot can extract from whatever a platform makes available; if fetching fails, it can still keep the URL so the original link is not lost."
        }
      ],
      "navTitle": "Limitations"
    }
  ],
  "cover": "/images/projects/banners/stashpa.webp",
  "coverAlt": "Illustrative StashPA link-to-note workflow; no real messages, saved links or personal data."
};

export default project;
