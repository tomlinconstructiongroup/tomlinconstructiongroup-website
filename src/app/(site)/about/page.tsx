import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tomlin Construction Group",
};

const PARAGRAPHS = [
  "Ben Tomlin has built his career around a commitment to doing things the right way. He believes a successful project is measured by more than the finished product. The experience along the way matters just as much, and earning a client’s trust is at the heart of that process.",
  "With more than a decade of experience in the construction industry, Ben brings a practical, hands-on perspective to his work. A graduate of Texas A&M University, he has worked across a range of projects, including custom homes, estate construction, renovations, and commercial work throughout Georgetown, Liberty Hill, and the greater Austin area.",
  "Ben values the relationships that develop throughout a project. He believes clients should feel comfortable asking questions and confident in the person overseeing their investment. Taking the time to understand each client’s vision and keeping them informed along the way are central to his approach.",
  "Outside of work, Ben enjoys spending time with his wife and their two sons. He also coaches their sports teams, reads their favorite books at bedtime, and makes time to be involved in the things that matter most: his family. Whether at home, on the sidelines, or on the job, Ben values the relationships he builds with the people around him.",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 sm:py-24">
      <h1 className="font-brand text-3xl font-medium uppercase tracking-[0.2em] text-maroon sm:text-4xl">
        About
      </h1>
      <div className="mt-10 flex flex-col gap-6">
        {PARAGRAPHS.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-foreground/80">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
