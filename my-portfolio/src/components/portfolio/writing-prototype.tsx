import Link from "next/link";
import { writingEntries } from "@/content/writing";
import { formatDate } from "@/content/types";
import { getProject } from "@/content/projects";
import "./writing-section.css";

// Local editorial concepts. These are deliberately not registered as published posts.
const ideas = [
  {
    id: "voice",
    kind: "Learning note",
    status: "Sample excerpt",
    title: "Getting an LLM to sound like me",
    summary: "Sentence flow, examples, and why making a draft more conversational can still leave it sounding like documentation.",
  },
  {
    id: "delegation",
    kind: "Opinion",
    status: "Topic idea",
    title: "What I still want to do myself",
    summary: "A possible essay on delegating implementation while keeping the design decisions, trade-offs and responsibility for the result.",
  },
  {
    id: "crop-update",
    kind: "Update",
    status: "Topic idea",
    title: "Where the crop research stands",
    summary: "A shorter update on the archived first phase, the July comparisons and what remains unresolved before another round of modelling.",
  },
] as const;

const indexHref = "/writing?preview=writing";
const ideaHref = (id: string) => `${indexHref}&post=${id}`;

function PrototypeNotice() {
  return <aside className="writing-section-notice" aria-label="Prototype information">
    <p><strong>Local concept.</strong> New titles and excerpts are samples. The two puzzle posts are already published.</p>
    <Link href="/writing">Current writing page</Link>
  </aside>;
}

function IdeaMeta({ idea }: { idea: (typeof ideas)[number] }) {
  return <p className="writing-idea-meta"><span>{idea.kind}</span><span>{idea.status}</span></p>;
}

export function HomeWritingPrototype() {
  const [featured, ...otherIdeas] = ideas;
  return <section className="home-writing-section" id="writing" aria-labelledby="writing-section-heading">
    <div className="writing-section-heading">
      <div><h2 id="writing-section-heading">Writing</h2><p>Learning notes, opinions, and updates from the work.</p></div>
      <Link className="text-link" href={indexHref}>All writing</Link>
    </div>
    <div className="writing-section-grid">
      <article className="writing-section-feature">
        <IdeaMeta idea={featured} />
        <h3><Link href={ideaHref(featured.id)}>{featured.title}</Link></h3>
        <p className="writing-section-excerpt">Making a draft more conversational doesn’t necessarily make it sound like me. A model can use “kind of”, join a few sentences together and still arrange every thought like it is writing documentation, which is more or less where we kept ending up when we tried to describe the style without giving it much of my actual reasoning.</p>
        <Link className="writing-section-action" href={ideaHref(featured.id)}>Read sample</Link>
      </article>
      <div className="writing-section-side">
        {otherIdeas.map(idea => <article key={idea.id}>
          <IdeaMeta idea={idea} />
          <h3><Link href={ideaHref(idea.id)}>{idea.title}</Link></h3>
          <p>{idea.summary}</p>
          <Link className="writing-section-action" href={ideaHref(idea.id)}>Open idea</Link>
        </article>)}
      </div>
    </div>
    <div className="writing-section-puzzles">
      <p>Puzzles &amp; problem solving <span>From the existing archive</span></p>
      <div>{writingEntries.map(entry => <Link key={entry.slug} href={`/writing/${entry.slug}`}>{entry.title}</Link>)}</div>
    </div>
    <PrototypeNotice />
  </section>;
}

export function WritingPrototypePage({ selectedPost }: { selectedPost?: string }) {
  const idea = ideas.find(item => item.id === selectedPost);
  const crop = getProject("crop-yield-research");
  if (idea) return <div className="writing-section-page">
    <PrototypeNotice />
    <article className="writing-section-reader">
      <Link className="back-link" href={indexHref}>Back to writing</Link>
      <IdeaMeta idea={idea} />
      <h1>{idea.title}</h1>
      <p className="writing-section-deck">{idea.summary}</p>
      {idea.id === "voice" ? <div className="writing-section-prose">
        <p>Making a draft more conversational doesn’t necessarily make it sound like me. A model can use “kind of”, join a few sentences together and still arrange every thought like it is writing documentation, which is more or less where we kept ending up when we tried to describe the style without giving it much of my actual reasoning.</p>
        <p>The part I want to preserve is how one thought brings up another reason, or a qualification, or something that makes the original choice less straightforward, and how those additions stay together in the sentence because they belong to the same explanation. Just making the sentence longer doesn’t really get us there.</p>
      </div> : <div className="writing-section-outline">
        <h2>Possible direction</h2>
        {idea.id === "delegation" ? <>
          <p>An essay about which parts of a project are worth delegating to AI, using actual choices and constraints from the author’s work. The argument and examples still need the author’s input.</p>
          <ul><li>What the available time made possible.</li><li>Which decisions the author wanted to keep making.</li><li>Where implementation assistance helped, and where understanding still mattered.</li></ul>
        </> : <>
          <p>This could be a dated checkpoint alongside the longer research account: what changed, what the evidence currently supports, and the conditions for resuming the work.</p>
          {crop && <><blockquote>{crop.outcome}</blockquote><Link href={`/projects/${crop.slug}`}>Read the existing research account</Link></>}
        </>}
      </div>}
    </article>
  </div>;

  return <div className="writing-section-page">
    <PrototypeNotice />
    <header className="writing-section-index-heading">
      <Link className="back-link" href="/?preview=writing#writing">Homepage concept</Link>
      <h1>Writing</h1>
      <p>Learning notes, opinions, and updates from the work. The puzzle posts live here too.</p>
    </header>
    <section className="writing-section-index-list" aria-labelledby="writing-directions-heading">
      <h2 id="writing-directions-heading">Possible next posts</h2>
      {ideas.map(idea => <article key={idea.id} className="writing-section-index-row">
        <IdeaMeta idea={idea} />
        <div><h3><Link href={ideaHref(idea.id)}>{idea.title}</Link></h3><p>{idea.summary}</p></div>
        <Link className="writing-section-action" href={ideaHref(idea.id)}>{idea.status === "Sample excerpt" ? "Read sample" : "Open idea"}</Link>
      </article>)}
    </section>
    <section className="writing-section-index-list" aria-labelledby="writing-archive-heading">
      <h2 id="writing-archive-heading">Already in the archive</h2>
      {writingEntries.map(entry => <article key={entry.slug} className="writing-section-index-row">
        <p className="writing-idea-meta"><span>Puzzle</span><time dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time></p>
        <div><h3><Link href={`/writing/${entry.slug}`}>{entry.title}</Link></h3><p>{entry.summary}</p></div>
        <Link className="writing-section-action" href={`/writing/${entry.slug}`}>Read post</Link>
      </article>)}
    </section>
  </div>;
}
