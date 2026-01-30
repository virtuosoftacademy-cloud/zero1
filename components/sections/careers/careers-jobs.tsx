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
    <>
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
    </>
  );
}

export function CareersJobs() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Jobs Grid */}
        <div className="text-center pb-12 md:pb-18">
          <h2 className="text-lg md:text-xl lg:text-3xl pb-4 font-medium">Join <span className="font-bold">Zero One</span> A dream stage for gifted talents with definite career goals</h2>
          <div className="leading-5 text-2xs md:text-sm space-y-3 max-w-5xl mx-auto">
            <p>Zero One provides a dream stage for gifted talents with definite career goals. By continuously maintaining great importance to the development of each employee, we have developed a diversified corporate culture that encourages each and every employee to improve and grow with the company. We respect talents, and have always managed to help talents strive to be better. This is our employee philosophy at Zero One.
            </p>
            <p>We are, sincerely, looking forward to having you join us! We will truly make this happen by providing competitive compensation packages, exposure to modern, highly effective work practices and various training programs.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobListings.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
