# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv create --template minimal --types ts --add tailwindcss="plugins:none" --install npm sveltekit-demo
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Notes


https://chatgpt.com/c/69791b64-b674-8385-b389-17108a49dad5


Svelte, Markdown, and the Magic of Web Components
https://www.reddit.com/r/sveltejs/comments/1mnn4zi/svelte_markdown_and_the_magic_of_web_components/

How-To Guide: Creating a Blog in 5 Mins with SvelteKit
https://www.codemotion.com/magazine/frontend/how-to-guide-creating-a-blog-in-5-mins-with-sveltekit/



Hugo themes
https://hugo-profile.netlify.app/
https://toha-preview.hugo-themes.com/#home

exemples of CVs :
https://www.reddit.com/r/Frontend/comments/1at0laf/show_me_your_personal_websites/
https://jasonfyw.com/

TODO :
- Home Page with CV
- Portfolio page
- Blog Page with "coming soon"