/* empty css                          */
import { i as createAstro, d as createComponent, g as renderTemplate, h as renderComponent, m as maybeRenderHead, j as addAttribute } from '../astro_nH2mb720.mjs';
import 'kleur/colors';
import 'cssesc';
import { g as getEntry, $ as $$Layout } from './404_TouetjDB.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("products", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "title" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/products" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To Articles</a> <article> <h1 class="text-4xl font-bold mb-2"> ${entry.data.title}</h1> <h3 class="text-lg mb-2">Written by ${entry.data.author} on ${entry.data.pubDate}</h3> <img${addAttribute("/images/" + entry.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-xl my-6"> ${renderComponent($$result2, "Content", Content, {})} </article> ` })} `;
}, "/Users/khorshidhamza/Khorcode/astro/GH/src/pages/products/[...slug].astro", void 0);

const $$file = "/Users/khorshidhamza/Khorcode/astro/GH/src/pages/products/[...slug].astro";
const $$url = "/products/[...slug]";

export { $$ as default, $$file as file, $$url as url };
