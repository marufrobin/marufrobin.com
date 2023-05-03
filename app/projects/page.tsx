import { ArrowIcon } from "components/icons";
import React from "react";

const ProjectsPage = () => {
  return (
    <section>
      <h1 className="mb-8 font-serif text-3xl font-bold">
        Some of my projects 🚀
      </h1>
      <p className="mt-2 mb-8 text-neutral-700 dark:text-neutral-300">
        Here are some of the projects I&apos;ve worked on over the years. I
        don&apos;t have a lot of public projects, but I&apos;m working on
        changing that!
      </p>

      {/* Project start */}
      <div className="prose prose-neutral dark:prose-invert">
        <h3>Clean Soil IOS/Android</h3>
        <ul>
          <li>16&quot; Macbook Pro (2020)</li>
          <li>31.5&quot; LG UltraFine 32UN880</li>
        </ul>
        <div className="flex items-center gap-4">
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/marufrobin/"
          >
            <ArrowIcon />
            <p className="h-7">Android</p>
          </a>

          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/marufrobin/"
          >
            <ArrowIcon />
            <p className="h-7">IOS</p>
          </a>
        </div>
      </div>
      {/* Project end */}

      <hr className="dark:border-slate-700 border-slate-300" />

      {/* Project start */}
      <div className="prose prose-neutral dark:prose-invert">
        <h3>Clean Soil IOS/Android</h3>
        <ul>
          <li>16&quot; Macbook Pro (2020)</li>
          <li>31.5&quot; LG UltraFine 32UN880</li>
        </ul>
        <div className="flex items-center gap-4">
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/marufrobin/"
          >
            <ArrowIcon />
            <p className="h-7">Android</p>
          </a>

          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/marufrobin/"
          >
            <ArrowIcon />
            <p className="h-7">IOS</p>
          </a>
        </div>
      </div>
      {/* Project end */}
    </section>
  );
};

export default ProjectsPage;
