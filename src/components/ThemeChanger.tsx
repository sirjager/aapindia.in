import { themes } from "@/lib/themes";
import { component$, $ } from "@builder.io/qwik";

const ThemeChanger = component$(() => {
  const setTheme = $(() => {
    function apply(value: string) {
      try {
        document.documentElement.setAttribute("data-theme", value);
        localStorage.setItem("theme", value);
      } catch (_) {
        //
      }
    }
    const theme = document.documentElement.getAttribute("data-theme");
    if (!theme) {
      const _stored = localStorage.getItem("theme");
      if (_stored) apply(_stored);
      else apply(themes[0]);
    } else {
      const currentIndex = themes.indexOf(theme);
      if (currentIndex === -1) apply(themes[0]);
      else apply(themes[(currentIndex + 1) % themes.length]);
    }
  });

  return (
    <button aria-label="Change theme" onClick$={setTheme} class="btn btn-sm aspect-square">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-5 w-5">
        <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
      </svg>
    </button>
  );
});

export default ThemeChanger;
