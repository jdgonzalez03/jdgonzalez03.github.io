/* empty css                          */
import { f as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, i as renderComponent, u as unescapeHTML, j as Fragment, k as renderHead, l as renderSlot } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
/* empty css                          */
import { getIconData, iconToSVG } from '@iconify/utils';
import 'clsx';
import { compiledContent, frontmatter } from './about_BkW-Oj1K.mjs';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$8 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "D:/Documentos/desarrollo_web/animalplay.github.io/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$7 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="gl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>CV Template</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/Documentos/desarrollo_web/animalplay.github.io/src/layouts/BaseLayout.astro", void 0);

const $$Astro$6 = createAstro();
const $$AccordionLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$AccordionLayout;
  const { title, icon } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="collapse collapse-arrow ease-in-out duration-700"> <input${addAttribute(title, "aria-label")} type="checkbox"> <div class="collapse-title font-extrabold tracking-tight md:text-2xl"> <div class="flex"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-8 h-8 mr-4" })} ${title} </div> </div> <div class="collapse-content"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "D:/Documentos/desarrollo_web/animalplay.github.io/src/layouts/AccordionLayout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Card;
  const { timeframe, title, description, url, tags, url_name, location } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card card-compact card-bordered border border-[oklch(var(--s))] w-full md:w-112 lg:w-128 hover:shadow-lg transition-all my-4"> <div class="card-body"> <div class="grid grid-cols-3 gap-4 mb-2"> <div class="self-start col-span-2 justify-self-start text-left"> <h1 class="uppercase card-title font-extrabold tracking-tighter md:text-2xl">${title}</h1> ${location && renderTemplate`<div class="flex items-center mt-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "carbon:location", "class": "w-4 h-4 mr-1" })} <p class="text-sm  font-light text-secondary">${location}</p> </div>`} </div> <div class="self-center justify-self-end"> ${timeframe && renderTemplate`<div class="badge w-max h-max text-center badge-outline inline-block align-middle shadow-md font-mono"> ${timeframe} </div>`} </div> </div> <div class="grid grid-cols-3 gap-4 place-items-center"> <div class="self-start col-span-2 justify-self-start text-left"> <article class="prose text-secondary"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(description)}` })} </article> ${Array.isArray(tags) && renderTemplate`<div class="flex flex-wrap content-around gap-2 my-4"> ${tags.map((item) => renderTemplate`<span class="badge text-center inline-block align-middle w-max h-max text-sm  badge-outline shadow-md mb-1"${addAttribute(item, ":key")}>${item}</span>`)} </div>`} </div> <div class="self-center justify-self-end"> <a${addAttribute(url, "href")} target="_blank" class="link link-hover text-sm text-right flex justify-center items-center"> ${url_name} ${url !== "#" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "carbon:link", "class": "w-4 h-4 ml-2" })}`} </a> </div> </div> </div> </div>`;
}, "D:/Documentos/desarrollo_web/animalplay.github.io/src/components/Card.astro", void 0);

const $$Astro$4 = createAstro();
const $$ContactCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContactCard;
  const { icon, url, url_name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(url, "href")}> <button class="btn btn-outline btn-md mr-2">${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6" })}${url_name}</button> </a>`;
}, "D:/Documentos/desarrollo_web/animalplay.github.io/src/components/ContactCard.astro", void 0);

const $$Astro$3 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const works = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/works/work1.md": () => import('./work1_B6wdIYTV.mjs'),"../pages/works/work2.md": () => import('./work2_CVYiNx1u.mjs')}), () => "../pages/works/*.md");
  const projects = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/projects/spotfilm.md": () => import('./spotfilm_CA2Di2_L.mjs')}), () => "../pages/projects/*.md");
  const studies = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/studies/studie1.md": () => import('./studie1_BkFn_fl2.mjs'),"../pages/studies/studie2.md": () => import('./studie2_Beur_bxs.mjs')}), () => "../pages/studies/*.md");
  const certificates = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/certificates/backend2022.md": () => import('./backend2022_B0N4KgkA.mjs')}), () => "../pages/certificates/*.md");
  const blogs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/blogs/home-mmouzo.md": () => import('./home-mmouzo_DQBI4xpA.mjs')}), () => "../pages/blogs/*.md");
  const contact = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/contact/email.md": () => import('./email_lYohEabn.mjs'),"../pages/contact/github.md": () => import('./github_Ciiq5HrC.mjs'),"../pages/contact/linkedin.md": () => import('./linkedin_JoEgrQCG.mjs')}), () => "../pages/contact/*.md");
  const PDF = "/cv-20240219.pdf";
  return renderTemplate`${maybeRenderHead()}<div class="join join-vertical gap-1"> ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "About", "icon": "carbon:identification" }, { "default": ($$result2) => renderTemplate` <article class="text-justify"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(compiledContent())}` })} </article> ` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Work", "icon": "carbon:construction" }, { "default": ($$result2) => renderTemplate`${works.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "description": item.compiledContent(), "tags": item.frontmatter.tags, "url": item.frontmatter.url, "url_name": item.frontmatter.org, "location": item.frontmatter.location })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Studies", "icon": "carbon:education" }, { "default": ($$result2) => renderTemplate`${studies.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "location": item.frontmatter.location, "tags": item.frontmatter.tags, "url": item.url, "url_name": item.frontmatter.institute })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Projects", "icon": "carbon:tools" }, { "default": ($$result2) => renderTemplate`${projects.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "description": item.compiledContent(), "tags": item.frontmatter.tags, "url": item.frontmatter.url, "url_name": "View project" })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Certifications", "icon": "carbon:certificate" }, { "default": ($$result2) => renderTemplate`${certificates.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "description": item.compiledContent(), "tags": item.frontmatter.tags, "url": item.frontmatter.url, "url_name": "View Certificate" })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Blogs", "icon": "carbon:pen" }, { "default": ($$result2) => renderTemplate`${blogs.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "description": item.compiledContent(), "url": item.frontmatter.url, "url_name": item.frontmatter.url_name })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Files", "icon": "carbon:volume-file-storage" }, { "default": ($$result2) => renderTemplate` <div class="flex justify-center w-full"> <div class="card card-compact card-bordered border-[oklch(var(--s))] w-96 md:w-112 lg:w-128 hover:shadow-lg transition-all"> <figure> <object${addAttribute(PDF, "data")} type="application/pdf" width="100%"></object> </figure> <div class="card-body"> <h2 class="card-title">Resume</h2> <p>View and download my resume by clicking on the button below</p> <div class="card-actions justify-end"> <a target="_blank"${addAttribute(PDF, "href")}> <button class="btn btn-outline"> <p>Download resume</p> ${renderComponent($$result2, "Icon", $$Icon, { "name": "carbon:document-pdf", "class": "w-6 h-6 ml-1" })} </button> </a> </div> </div> </div> </div> ` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Contact", "icon": "carbon:location-person" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap content-around gap-4 justify-center"> ${contact.map((item) => {
    return renderTemplate`${renderComponent($$result2, "ContactCard", $$ContactCard, { "url": item.frontmatter.url, "url_name": item.frontmatter.title, "icon": item.frontmatter.icon })}`;
  })} </div> ` })} </div>`;
}, "D:/Documentos/desarrollo_web/animalplay.github.io/src/components/Container.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const getYear = () => (/* @__PURE__ */ new Date()).getFullYear().toString();
  return renderTemplate`${maybeRenderHead()}<footer class="flex justify-center items-center bg-transparent py-4"> <p class="flex items-center text-center font-light text-sm text-secondary">
&copy; ${getYear()} </p> </footer>`;
}, "D:/Documentos/desarrollo_web/animalplay.github.io/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="mx-auto pt-6 pb-2 relative" data-astro-cid-3ef6ksr2> <article class="flex flex-col md:flex-col items-center gap-4 w-full max-w-2xl" data-astro-cid-3ef6ksr2> <div class="flex-shrink-0 w-20 md:w-24 rounded-full shadow-sm overflow-hidden" data-astro-cid-3ef6ksr2> <img alt="avatar" src="/profile.webp" class="grayscale-[50] hover:grayscale-0" data-astro-cid-3ef6ksr2> </div> <div class="text-center" data-astro-cid-3ef6ksr2> <div class="flex justify-center md:justify-between items-center mb-2 relative" data-astro-cid-3ef6ksr2> <h1 class="text-3xl font-extrabold tracking-tight md:text-3xl relative" data-astro-cid-3ef6ksr2> ${frontmatter.name} <div class="absolute top-0 left-full ml-2 -mt-4" data-astro-cid-3ef6ksr2> <div class="badge w-max text-sm font-light badge-outline shadow-lg" data-astro-cid-3ef6ksr2> ${frontmatter.pronouns} </div> </div> </h1> </div> <h2 class="text-lg mb-2 text-secondary" data-astro-cid-3ef6ksr2> ${frontmatter.designation} </h2> <div class="flex items-center justify-center mt-1" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Icon", $$Icon, { "name": "carbon:location", "class": "w-4 h-4 mr-1", "data-astro-cid-3ef6ksr2": true })} <p class="text-sm text-secondary" data-astro-cid-3ef6ksr2>${frontmatter.location}</p> </div> </div> </article> </header> `;
}, "D:/Documentos/desarrollo_web/animalplay.github.io/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="gl"> <head><script>\n      if (localStorage.getItem("theme") === null) {\n        document.documentElement.setAttribute("data-theme", "lofi");\n      } else\n        document.documentElement.setAttribute(\n          "data-theme",\n          localStorage.getItem("theme")\n        );\n    <\/script><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.webp"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', "><title>Juan D. Gonzalez CV</title>", '</head> <body class="flex flex-col min-h-screen"> ', ' <div class="flex items-center absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 xl:top-10 xl:right-10 z-10"> ', ' <input type="checkbox" data-toggle-theme="black,lofi" data-act-class="ACTIVECLASS" class="toggle toggle-sm mx-1 bg-secondary" checked> ', ' </div> <div class="divider mx-auto h-fit max-w-3xl w-[95vw] flex flex-nowrap bg-secondary"></div> <main class="mx-auto flex-grow max-h-[90vh] md:max-h-[70vh] max-w-3xl overflow-y-scroll py-2 grid w-[95vw]"> <div class="container"> ', " </div> </main> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Icon", $$Icon, { "name": "carbon:moon", "class": "w-4 h-4" }), renderComponent($$result, "Icon", $$Icon, { "name": "carbon:light", "class": "w-4 h-4" }), renderComponent($$result, "Container", $$Container, {}), renderComponent($$result, "Footer", $$Footer, { "class": "flex justify-center items-center py-4" }));
}, "D:/Documentos/desarrollo_web/animalplay.github.io/src/pages/index.astro", void 0);

const $$file = "D:/Documentos/desarrollo_web/animalplay.github.io/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };