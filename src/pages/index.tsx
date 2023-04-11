import Image from "next/image";
import data from "../../data.json";
import avatar from "../../public/avatar.jpeg";

export default function Home() {
  function LinkCard({
    href,
    title,
    image,
  }: {
    href: string;
    title: string;
    image?: string;
  }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
      >
        <div className="flex text-center w-full">
          <div className="w-10 h-10">
            {image && (
              <Image
                className="rounded-sm"
                alt={title}
                src={image}
                width={40}
                height={40}
              />
            )}
          </div>
          <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
            {title}
          </h2>
        </div>
      </a>
    );
  }
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
