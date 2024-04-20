/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Lead investigations into organized crime, drug trafficking, and high-profile criminal activities.</li>\n<li>Conducted extensive surveillance operations utilizing advanced equipment and techniques to gather critical intelligence.</li>\n<li>Collaborated with federal agencies such as the FBI and DEA on joint task forces to dismantle criminal syndicates.</li>\n<li>Played a pivotal role in numerous undercover operations, successfully infiltrating criminal organizations and gathering actionable evidence for prosecution.</li>\n<li>Trained and mentored junior officers in surveillance tactics, undercover operations, and tactical maneuvers.</li>\n</ul>";

				const frontmatter = {"title":"Senior Detective","date":"1990 - Present","url":"http://ropibbe.nf/savadru","location":"Los Angeles, California","org":"Los Angeles Police Department (LAPD)","tags":["Law Enforcement","Police Work","Tactical Operations","Case Management"]};
				const file = "D:/Documentos/desarrollo_web/animalplay.github.io/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\n- Lead investigations into organized crime, drug trafficking, and high-profile criminal activities.\n- Conducted extensive surveillance operations utilizing advanced equipment and techniques to gather critical intelligence.\n- Collaborated with federal agencies such as the FBI and DEA on joint task forces to dismantle criminal syndicates.\n- Played a pivotal role in numerous undercover operations, successfully infiltrating criminal organizations and gathering actionable evidence for prosecution.\n- Trained and mentored junior officers in surveillance tactics, undercover operations, and tactical maneuvers.\n";
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
