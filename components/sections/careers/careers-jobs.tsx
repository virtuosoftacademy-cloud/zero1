import Link from "next/link";
import { ArrowRight } from "lucide-react";

const jobListings = [
  {
    title: "UX Designer",
    type: "Contract",
    location: "Doha, QA",
    description:
      "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
    isOpenApplication: false,
  },
  {
    title: "Data Engineer",
    type: "Full-Time",
    location: "Doha, QA",
    description:
      "Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams.",
    isOpenApplication: false,
  },
  {
    title: "Product Manager",
    type: "Part-Time",
    location: "Assi Rayyan, QA",
    description:
      "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
    isOpenApplication: false,
  },
  {
    title: "Data Scientist",
    type: "Full-time",
    location: "Doha, QA",
    description: "",
    isOpenApplication: true,
  },
];

function JobCard({
  title,
  type,
  location,
  description,
  isOpenApplication,
}: {
  title: string;
  type: string;
  location: string;
  description: string;
  isOpenApplication: boolean;
}) {
  return (
    <div className="bg-secondary rounded-lg p-6 md:p-8 flex flex-col h-full">
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
        {title}
      </h3>

      {/* Type & Location */}
      <p className="text-foreground font-medium mb-4">
        {type} . {location}
      </p>

      {/* Description or Open Application */}
      {isOpenApplication ? (
        <div className="flex-1">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Don't see your role available? Apply for an open application!
          </p>
        </div>
      ) : (
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {description}
        </p>
      )}

      {/* Link */}
      <div className="mt-6">
        {isOpenApplication ? (
          <Link
            href="/careers/apply"
            className="text-primary font-medium hover:underline inline-flex items-center gap-1"
          >
            Apply now
          </Link>
        ) : (
          <Link
            href={`/careers/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-foreground font-medium hover:text-primary inline-flex items-center gap-2 transition-colors"
          >
            View Role
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

export function CareersJobs() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobListings.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
