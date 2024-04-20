/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Electronic Engeneering.","location":"Villavicencio, Meta. Colombia.","url":"https://www.unillanos.edu.co/","institute":"Universidad de los Llanos.","date":"2020 - Present","tags":["Conflict Resolution","Digital Electronics","Embedded Systems","Microcontroller Programming","Circuit Design","Embedded Software Development","Real-Time Systems Programming","Electronic Systems Design","Mobile Application Development","Web Application Development","Object-Oriented Programming","Algorithm Development"]};
				const file = "D:/Documentos/desarrollo_web/animalplay.github.io/src/pages/studies/studie2.md";
				const url = "/studies/studie2";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
