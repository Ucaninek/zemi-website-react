import './App.css';
import pisimaka from './assets/projects/pisimaka.png';
import ledcontroller from './assets/projects/ledcontroller.png'
import darkoxygen from './assets/projects/dog.png';
import zemislocker from './assets/projects/zemislocker.png';
import shitcast from './assets/projects/shitcast.png';
import fourinarow from './assets/projects/fourinarow.png';
import thiswebsite from './assets/projects/thiswebsite.png';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import ProjectCard from './components/project-card.js';
import TechCard from './components/tech-card.js';

import tech_react from './assets/tech/react.webp';
import tech_html from './assets/tech/html.webp';
import tech_css from './assets/tech/css.webp';
import tech_js from './assets/tech/javascript.webp';
import tech_node from './assets/tech/nodejs.png';
import tech_jquery from './assets/tech/jquery.png';
import tech_anime from './assets/tech/animejs.png';
import tech_twcss from './assets/tech/tailwindcss.webp';
import tech_github from './assets/tech/github.webp';
import tech_python from './assets/tech/python.webp';
import tech_djs from './assets/tech/discord.webp';
import tech_cs from './assets/tech/cs.png';

function App() {

  console.log('(　o=^•ェ•)o　hello hooman');
  return (
    <>
      <Navbar />
      <section className="py-4 md:py-5">
        <svg className="absolute opacity-10 right-0 md:right-8 md:opacity-30 lg:opacity-70 xl:right-32 -z-10" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-amber-400" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"></rect></svg>
        <div className="container max-w-screen-2xl mx-auto">
          <div className="text-start ml-5">
            <span className="text-gray-900 dark:text-gray-50 font-black block text-5xl md:text-7xl leading-none mb-8">Hi, im <span className="text-amber-400">Zemi.</span></span>
            <p className="font-normal text-gray-600 dark:text-gray-300 text-md md:text-xl max-w-sm md:max-w-screen-sm">I'm a teenager with a passion for software. I am mostly confident about making c# apps and working with javascript. i am currently learning react.</p>
          </div>
        </div>
      </section>

      <div id="projects" className="mb-10"></div>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-2xl mx-auto px-4">
          <div className="w-fit h-fit mb-8 relative">
            <div className="text-4xl text-slate-800 dark:text-gray-50 md:text-5xl font-medium">Projects</div>
            <span className="h-2 w-full bottom-1 left-0 z-10 absolute bg-amber-400 opacity-80"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard image={thiswebsite} title="This website" github="https://github.com/Ucaninek/zemi-website-react/" desc="yes. you are viewing this project right now. how epic!"
              tags={[
                { text: 'Javascript', classes: 'text-amber-600 border-amber-400 bg-amber-50' },
                { text: 'Tailwind CSS', classes: 'text-cyan-700 border-cyan-500 bg-cyan-50' },
                { text: 'React.js', classes: 'text-indigo-700 border-indigo-500 bg-indigo-50' }]} />
            <ProjectCard image={pisimaka} title="Pisimaka.exe" desc="A small c# winforms game-ish app that contains my brothers pictures. has really cool graphical payloads. made this to piss him off."
              tags={[
                { text: 'C#', classes: 'text-green-700 border-green-500 bg-green-50' },
                { text: 'Winforms', classes: 'text-green-700 border-green-500 bg-green-50' }]} />
            <ProjectCard image={ledcontroller} title="LedController" desc="i hooked up the leds in my pc case to an arduino because my dumb msi motherboard only could do 7 hardcoded colors, dumb. this the app that controls the arduino with a COM port."
              tags={[
                { text: 'C#', classes: 'text-green-700 border-green-500 bg-green-50' },
                { text: 'Winforms', classes: 'text-green-700 border-green-500 bg-green-50' },
                { text: 'Arduino', classes: 'text-indigo-700 border-indigo-500 bg-indigo-50' }]} />
            <ProjectCard image={darkoxygen} title="DarkOxyGen Website" desc="a small porfolio-ish site for a friend of mine. he is a streamer sheesh."
              tags={[
                { text: 'HTML', classes: 'text-orange-600 border-orange-500 bg-orange-50' },
                { text: 'CSS', classes: 'text-cyan-700 border-cyan-500 bg-cyan-50' },
                { text: 'Javascript', classes: 'text-amber-600 border-amber-400 bg-amber-50' },
                { text: 'JQuery', classes: 'text-indigo-700 border-indigo-500 bg-indigo-50' }]} />
            <ProjectCard image={zemislocker} title="ZemisLocker" desc="a file locker made with c#. works with a password and locks the file with sha256 then base64 converts the bytes for a string output."
              tags={[
                { text: 'C#', classes: 'text-green-700 border-green-500 bg-green-50' },
                { text: 'Winforms', classes: 'text-green-700 border-green-500 bg-green-50' }]} />
            <ProjectCard image={shitcast} title="Shitcast" github="https://github.com/Ucaninek/shitcast" desc="as the name suggests, this is the shittiest messaging app for your local network. works with express."
              tags={[
                { text: 'C#', classes: 'text-green-700 border-green-500 bg-green-50' },
                { text: 'Winforms', classes: 'text-green-700 border-green-500 bg-green-50' },
                { text: 'Node.js', classes: 'text-amber-600 border-amber-400 bg-amber-50' }]} />
            <ProjectCard image={fourinarow} title="4our in a row" github="https://github.com/Ucaninek/four-in-a-row" desc="The classic four in a row game in discord! has language support and a changeable prefix."
              tags={[
                { text: 'Node.js', classes: 'text-amber-600 border-amber-400 bg-amber-50' },
                { text: 'Discord.js', classes: 'text-indigo-700 border-indigo-500 bg-indigo-50' }]} />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div id="tech" className="mb-24"></div>
        <div className="container max-w-screen-2xl mx-auto px-4">
          <div className="w-fit h-fit mb-8 relative">
            <div className="text-4xl text-slate-800 dark:text-gray-50 md:text-5xl font-medium grow shrink">Tech I Use</div>
            <span className="h-2 w-full bottom-1 left-0 z-10 absolute bg-amber-400 opacity-80"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            <TechCard name="C#" image={tech_cs} desc="C# is an object-oriented programming language created by Microsoft that runs on the .NET Framework. C# has roots from the C family, and the language is close to other popular languages like C++ and Java." usingFor="Five years" tags={[{ text: 'Language', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="JavaScript" image={tech_js} desc="JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is often abbreviated as JS, and is often called ECMAScript. It has been standardized in the ECMAScript specification." usingFor="Four years" tags={[{ text: 'Language', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="HTML" image={tech_html} desc="HTML is the standard markup language for creating Web pages. HTML elements are the building blocks of HTML pages. HTML pages can be created by combining HTML elements to create visually rich, formatted pages." usingFor="Four years" tags={[{ text: 'Language', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="CSS" image={tech_css} desc="CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web." usingFor="Four years" tags={[{ text: 'Language', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="Python" image={tech_python} desc="Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace." usingFor="Four years" tags={[{ text: 'Language', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="JQuery" image={tech_jquery} desc="JQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy to use API that works across a multitude of browsers." usingFor="Three years" tags={[{ text: 'Library', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="Node.js" image={tech_node} desc="Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code server-side. Node.js lets developers use JavaScript to write command line tools and for server-side scripting." usingFor="Two years" tags={[{ text: 'Runtime', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="Discord.js" image={tech_djs} desc="Discord.js is a powerful Node.js module that allows create chat applications very easily. It is based on the Discord API and uses websockets to communicate with the Discord servers." usingFor="Two years" tags={[{ text: 'Library', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="Anime.js" image={tech_anime} desc="Anime.js (/ˈæn.ə.meɪ/) is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects." usingFor="One year" tags={[{ text: 'Library', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="TailwindCSS" image={tech_twcss} desc="Tailwind CSS is a utility-first CSS framework for rapid UI development. It is designed for use with React and React Native." usingFor="Recent" tags={[{ text: 'Framework', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="Github" image={tech_github} desc="GitHub, Inc., is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project." usingFor="Recent" tags={[{ text: 'Tool', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
            <TechCard name="React.js" image={tech_react} desc="React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies." usingFor="Recent" tags={[{ text: 'Framework', classes: 'text-indigo-700 border-indigo-500 bg-indigo-200' }]} ></TechCard>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
