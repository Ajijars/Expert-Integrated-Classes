import Image from "next/image";

type Leader = {
  name: string;
  title: string;
  message?: string;
  photo?: string;
  qualification?: string;
};

type Props = {
  person: Leader;
  size?: "sm" | "lg";
};

function initials(name: string) {
  const parts = name.split(" ");
  return (parts[parts.length - 1]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export default function LeadershipCard({ person, size = "lg" }: Props) {
  const avatarSize = size === "lg" ? "h-28 w-28" : "h-16 w-16";
  const textSize = size === "lg" ? "text-xl" : "text-base";

  return (
    <div className="card">
      {person.photo ? (
        <div className={`relative mb-4 ${avatarSize} overflow-hidden rounded-full border-4 border-brand-100 shadow-md`}>
          <Image
            src={person.photo}
            alt={person.name}
            fill
            className="object-cover object-top"
            sizes={size === "lg" ? "112px" : "64px"}
          />
        </div>
      ) : (
        <div
          className={`mb-4 flex ${avatarSize} items-center justify-center rounded-full bg-brand-600 font-display text-2xl font-bold text-white`}
        >
          {initials(person.name)}
        </div>
      )}
      <h3 className={`font-display font-bold text-brand-900 ${textSize}`}>{person.name}</h3>
      <p className="text-sm font-medium text-brand-500">{person.title}</p>
      {person.qualification && (
        <p className="mt-1 text-xs font-medium text-accent-600">{person.qualification}</p>
      )}
      {person.message && (
        <p className="mt-4 leading-relaxed text-stone-600">{person.message}</p>
      )}
    </div>
  );
}
