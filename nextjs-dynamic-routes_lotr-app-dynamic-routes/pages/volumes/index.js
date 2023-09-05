import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Router from "next/router";
import { uid } from "uid";

export default function Volumes() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handelRandomVolume() {
    const randomVolume = getRandomElement(volumes);

    Router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={uid()}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={handelRandomVolume}>
        {" "}
        Random Volume
      </button>
    </>
  );
}
