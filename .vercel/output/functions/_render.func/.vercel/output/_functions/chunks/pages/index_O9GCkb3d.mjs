/* empty css                          */
import { i as createAstro, d as createComponent, g as renderTemplate, m as maybeRenderHead, j as addAttribute, h as renderComponent } from '../astro_nH2mb720.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as getCollection, $ as $$Layout } from './404_TouetjDB.mjs';
/* empty css                          */
import { $ as $$Image } from './generic_C0XiRZ1o.mjs';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body, date = /* @__PURE__ */ new Date() } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} - ${date} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "/Users/khorshidhamza/Khorcode/astro/GH/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allProducts = (await getCollection("products")).filter((product) => product.data.pubDate <= /* @__PURE__ */ new Date()).sort((a, b) => a.data.pubDate < b.data.pubDate ? 1 : -1);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "go" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <h1>products</h1> <ul role="list" class="link-card-grid"> ${allProducts.map((product) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": `/products/${product.slug}`, "title": product.data.title, "body": product.data.author, "date": product.data.pubDate })}`)}</ul></div>` })}`;
}, "/Users/khorshidhamza/Khorcode/astro/GH/src/pages/products/index.astro", void 0);

const $$file$1 = "/Users/khorshidhamza/Khorcode/astro/GH/src/pages/products/index.astro";
const $$url$1 = "/products";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const Product1 = new Proxy({"src":"/_astro/product-2.jxtsYZdC.png","width":640,"height":480,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/khorshidhamza/Khorcode/astro/GH/src/images/product-2.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" clip-rule="evenodd" d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" data-astro-cid-j7pv25f6></path> <defs data-astro-cid-j7pv25f6> <linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6> <stop stop-opacity="0.9" data-astro-cid-j7pv25f6></stop> <stop offset="1" stop-opacity="0.2" data-astro-cid-j7pv25f6></stop> </linearGradient> </defs> </svg> <h1 data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>Astro</span></h1> <p class="instructions" data-astro-cid-j7pv25f6>
To get started, open the directory <code data-astro-cid-j7pv25f6>src/pages</code> in your project.<br data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
</p> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Product1, "alt": "Astro Logo", "width": "200", "height": "200", "data-astro-cid-j7pv25f6": true })} <button class=" bg-slate-400 border rounded-md m-2 p-2 hover:bg-slate-500 hover:shadow-lg hover:shadow-white" data-astro-cid-j7pv25f6>New Button</button> </div> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": `/blog/${post.slug}`, "title": post.data.title, "body": post.data.author, "date": post.data.pubDate, "data-astro-cid-j7pv25f6": true })}`)} ${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "date": /* @__PURE__ */ new Date(), "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "date": /* @__PURE__ */ new Date(), "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "/products", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "date": /* @__PURE__ */ new Date(), "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "date": /* @__PURE__ */ new Date(), "data-astro-cid-j7pv25f6": true })} </ul> </main> ` })} `;
}, "/Users/khorshidhamza/Khorcode/astro/GH/src/pages/index.astro", void 0);

const $$file = "/Users/khorshidhamza/Khorcode/astro/GH/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
