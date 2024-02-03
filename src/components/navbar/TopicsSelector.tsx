import { getTopics, type Topic } from "@/db/posts";
import { component$, $, useStore, useTask$ } from "@builder.io/qwik";

interface Props {
  path?: string;
  initial?: Topic[] | undefined;
}

const TopicsSelector = component$<Props>(({ initial = [], path }) => {
  const topics = useStore<{ topics: Topic[] }>({ topics: initial });

  useTask$(async () => {
    const items = await getTopics();
    if (items && items.length > 0) {
      topics.topics = items;
    }
  });

  const toggleTopics = $(() => {
    if (typeof window !== "undefined") {
      const dropdown = document.getElementById("bottom-navbar");
      if (dropdown) {
        const isOpened = dropdown.classList.contains("dropdown-open");
        if (isOpened) {
          dropdown.classList.remove("dropdown-open");
        } else {
          dropdown.classList.add("dropdown-open");
        }
      }
    }
  });

  const active = topics.topics.find((f) => path?.includes("/" + f.slug));

  return (
    <div id="bottom-navbar" class="dropdown dropdown-top w-full">
      <div
        tab-index="0"
        role="button"
        onClick$={toggleTopics}
        class="btn btn-ghost btn-block flex h-full flex-col items-center justify-center rounded-b-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-5 w-5">
          <path d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z" />
        </svg>
        <span class="btm-nav-label">{active ? active.name : "Topics"}</span>
      </div>

      <ul
        tab-index="0"
        class="menu dropdown-content z-[1] w-full rounded-box bg-base-100 p-2 shadow"
      >
        {topics.topics.map(({ name, slug }, index) => (
          <li key={index}>
            <a href={`/blog/${slug}`} class="capitalize">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TopicsSelector;
