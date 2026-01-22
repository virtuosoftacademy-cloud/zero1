import Image from "next/image";

/* ================= Team Image Section ================= */
export function TeamImageSection() {
  return (
    <section className="relative w-full">
      {/* Full-width Team Photo */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9] lg:aspect-[3/1]">
        <Image
          src="/images/team-photo.jpg"
          alt="Zero1 team members standing together in modern office space"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
