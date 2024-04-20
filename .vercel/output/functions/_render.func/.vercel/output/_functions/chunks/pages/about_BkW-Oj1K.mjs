/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>As an electronic engineering student with a fervent passion for programming, I am driven by a dual interest in innovation and problem-solving. My journey intertwines the complexities of electronic systems with the dynamic realm of software development. Currently, I am learning to use frameworks like ReactJS in frontend and Express.js in backend to design innovative and scalable solutions. Proficient in HTML, CSS, and JavaScript, I craft experiences on the frontend, leveraging these tools to bring creative ideas to life. With a strong foundation in digital electronics and a knack for algorithmic thinking, I thrive in creating holistic solutions that seamlessly integrate hardware and software. Beyond the screen, I am a dedicated sports enthusiast and an avid builder, finding inspiration at the intersection of physical and digital creation.</p>";

				const frontmatter = {"title":"about","name":"Juan D. Gonzalez","designation":"Student electronic engineering","location":"Villavicencio, Meta. Colombia","pronouns":"he/him/el","website":"http://tafutza.hn/kos"};
				const file = "D:/Documentos/desarrollo_web/animalplay.github.io/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nAs an electronic engineering student with a fervent passion for programming, I am driven by a dual interest in innovation and problem-solving. My journey intertwines the complexities of electronic systems with the dynamic realm of software development. Currently, I am learning to use frameworks like ReactJS in frontend and Express.js in backend to design innovative and scalable solutions. Proficient in HTML, CSS, and JavaScript, I craft experiences on the frontend, leveraging these tools to bring creative ideas to life. With a strong foundation in digital electronics and a knack for algorithmic thinking, I thrive in creating holistic solutions that seamlessly integrate hardware and software. Beyond the screen, I am a dedicated sports enthusiast and an avid builder, finding inspiration at the intersection of physical and digital creation.\n";
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
