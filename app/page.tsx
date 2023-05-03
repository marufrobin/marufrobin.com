import {
  ArrowIcon,
  DownloadIcon,
  EmailIcon,
  GitHubIcon,
  TwitterIcon,
} from "components/icons";
import { about, avatar, name } from "lib/info";
import Image from "next/image";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-serif text-3xl font-bold">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      {/* <div className="flex flex-col items-start my-8 md:items-center md:flex-row">
        <div className="mt-8 ml-0 space-y-2 md:mt-0 md:ml-6 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
            className="flex items-center gap-2"
          >
            <TwitterIcon />
            12.5k followers on Twitter
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/leerob"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {`12 stars on this repo`}
          </a>
        </div>
      </div> */}

      <h3>Follow Me on</h3>
      <ul className="flex flex-col mt-2 space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/marufrobin5"
          >
            <ArrowIcon />
            <p className="h-7">Twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/marufrobin/"
          >
            <ArrowIcon />
            <p className="h-7">Linkedin</p>
          </a>
        </li>

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/marufrobin/"
          >
            <ArrowIcon />
            <p className="h-7">Instagram</p>
          </a>
        </li>

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/marufrobin"
          >
            <ArrowIcon />
            <p className="h-7">Github</p>
          </a>
        </li>
      </ul>
      <h3 className="mt-8">Get in touch</h3>
      <ul className="flex flex-col mt-2 space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center gap-1 transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/marufrobin5"
          >
            <DownloadIcon />
            <p>Download Resume</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-1 transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:marufrobin00@gmail.com?subject=Contacting%20for%20new%20project%20idea"
          >
            <EmailIcon />
            <p>Mail me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
