import Image from "next/image";

/* ================= Team Image Section ================= */
export function TeamImageSection() {
  return (
    <section className="relative w-full">
      {/* Full-width Team Photo */}
      <div className="relative aspect-video w-full md:aspect-21/10 lg:aspect-3/2">
        <Image
          src="/images/team-photo.png"
          alt="Zero1 team members standing together in modern office space"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
