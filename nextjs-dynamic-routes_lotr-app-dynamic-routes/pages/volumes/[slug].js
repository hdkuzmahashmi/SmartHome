import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  //   const volumeIndex = volumes.findIndex(({ slug }) => slug === slugg);

  //   const volume = volumes[volumeIndex];
  //   const nextVolume = volumes[volumeIndex + 1];
  //   const previousVolume = volumes[volumeIndex - 1];
  //   console.log("nextvolume", nextVolume);
  //   console.log("previousVolume", previousVolume);

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handelRandomVolume() {
    const randomVolume = getRandomElement(volumes);

    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>

      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {/* {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
*/}
      {
        <button type="button" onClick={handelRandomVolume}>
          {" "}
          Random Volume
        </button>
      }
    </>
  );
}
