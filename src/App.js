import './App.css';
import face from './assets/logo.png'
import { Mastodon, Discord } from "react-bootstrap-icons"
import pisimaka from './assets/projects/pisimaka.png';
import ledcontroller from './assets/projects/ledcontroller.png'
import darkoxygen from './assets/projects/dog.png';
import zemislocker from './assets/projects/zemislocker.png';
import shitcast from './assets/projects/shitcast.png';
import fourinarow from './assets/projects/fourinarow.png';
import thiswebsite from './assets/projects/thiswebsite.png';

function App() {
  return (
    <>
      <div className="w-full sticky top-0 h-24 p-6 z-50">
        <nav className="flex items-center justify-between gap-1 mb-16 bg-transparent backdrop-blur-lg rounded-xl h-12 w-full shadow-lg pl-3 md:pl-8 pr-2">
          <a href="#top" className="scroll"><img src={face} className="w-16" alt="Logo" /></a>
          <div>
            <a href="#top" className="bg-gray-50 scroll p-1 rounded-md border-2 font-[consolas] scroll border-amber-400">./home</a>
          </div>
        </nav>
      </div>
      <section className="py-4 md:py-5">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-start ml-5">
            <span className="text-gray-900 font-black block text-5xl md:text-7xl leading-none mb-8">Hi, im <span className="text-amber-400">Zemi.</span></span>
            <p className="font-normal text-gray-600 text-md md:text-xl max-w-screen-sm mb-8">I'm a teenager with a passion for software. I am mostly confident about making c# apps and working with javascript. i am currently learning react.</p>
            <a href="#cards" className="scroll"><button id="cards" className="btn-primary">Literally just scroll down</button></a>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="w-fit h-fit mb-8">
            <div className="text-4xl text-slate-800 md:text-5xl font-medium">Projects</div>
            <div className="h-2 w-full bg-amber-400"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="project-container">
              <div className="bg-gray-100 px-8 py-10 rounded-md grow shrink">
                <h4 className="font-medium text-gray-700 text-xl mb-1">This website <a href="https://github.com/Ucaninek/zemi-website-react" class="underline text-sm">Github</a></h4>
                <div className="tag-container">
                  <div class="px-3 rounded-full border text-cyan-700 border-cyan-500 bg-cyan-200">Tailwind CSS</div>
                  <div class="px-3 rounded-full border text-amber-700 border-amber-500 bg-amber-200">JavaScript</div>
                  <div class="px-3 rounded-full border text-indigo-700 border-indigo-500 bg-indigo-200">React.js</div>
                </div>
                <div className="max-w-md">
                  <img src={thiswebsite} alt="This website" className="mb-8" />
                </div>
                <p className="font-normal text-gray-500 text-md">The website you are viewing right now. yes.</p>
              </div>
            </div>
            <div className="project-container">
              <div className="bg-gray-100 px-8 py-10 rounded-md grow shrink">
                <h4 className="font-medium text-gray-700 text-xl mb-1">Pisimaka.exe</h4>
                <div className="tag-container">
                  <div class="px-3 rounded-full border text-green-700 border-green-500 bg-green-200">C#</div>
                  <div class="px-3 rounded-full border text-green-700 border-green-500 bg-green-200">Winforms</div>
                </div>
                <div className="max-w-md">
                  <img src={pisimaka} alt="pisimaka" className="mb-8" />
                </div>
                <p className="font-normal text-gray-500 text-md">A small c# winforms game-ish app that is contains my brothers pictures. has really cool graphical payloads. made this to piss him off.</p>
              </div>
            </div>
            <div className="project-container">
              <div className="bg-gray-100 px-8 py-10 rounded-md grow shrink">
                <h4 className="font-medium text-gray-700 text-xl mb-1">LedController</h4>
                <div className="tag-container">
                  <div class="px-3 rounded-full border text-green-700 border-green-500 bg-green-200">C#</div>
                  <div class="px-3 rounded-full border text-green-700 border-green-500 bg-green-200">Winforms</div>
                  <div class="px-3 rounded-full border text-indigo-700 border-indigo-500 bg-indigo-200">Arduino</div>
                </div>
                <div className="max-w-md">
                  <img src={ledcontroller} alt="pisimaka" className="mb-8" />
                </div>
                <p className="font-normal text-gray-500 text-md">i hooked up the leds in my pc case to an arduino because my dumb msi motherboard only could do 7 hardcoded colors, dumb. this the app that controls the arduino with a COM port.</p>
              </div>
            </div>
            <div className="project-container">
              <div className="bg-gray-100 px-8 py-10 rounded-md grow shrink">
                <h4 className="font-medium text-gray-700 text-xl mb-1">DarkOxyGen Website</h4>
                <div className="tag-container">
                  <div class="px-3 rounded-full border text-orange-600 border-orange-500 bg-orange-200">HTML</div>
                  <div class="px-3 rounded-full border text-cyan-700 border-cyan-500 bg-cyan-200">CSS</div>
                  <div class="px-3 rounded-full border text-amber-700 border-amber-500 bg-amber-200">JavaScript</div>
                  <div class="px-3 rounded-full border text-indigo-700 border-indigo-500 bg-indigo-200">JQuery</div>
                </div>
                <div className="max-w-md">
                  <img src={darkoxygen} alt="Led Controller" className="mb-8" />
                </div>
                <p className="font-normal text-gray-500 text-md">a small porfolio-ish site for a friend of mine. he is a streamer sheesh.</p>
              </div>
            </div>
            <div className="project-container">
              <div className="bg-gray-100 px-8 py-10 rounded-md grow shrink">
                <h4 className="font-medium text-gray-700 text-xl mb-1">ZemisLocker</h4>
                <div className="tag-container">
                  <div class="px-3 rounded-full border text-green-700 border-green-500 bg-green-200">C#</div>
                  <div class="px-3 rounded-full border text-green-700 border-green-500 bg-green-200">Winforms</div>
                </div>
                <div className="max-w-md">
                  <img src={zemislocker} alt="ZemisLocker" className="mb-8" />
                </div>
                <p className="font-normal text-gray-500 text-md">a file locker made with c#. works with a password and locks the file with sha256 then base64 converts the bytes for a string output.</p>
              </div>
            </div>
            <div className="project-container">
              <div className="bg-gray-100 px-8 py-10 rounded-md grow shrink">
                <h4 className="font-medium text-gray-700 text-xl mb-1">Shitcast <a href="https://github.com/Ucaninek/shitcast" class="underline text-sm">Github</a></h4>
                <div className="tag-container">
                  <div class="px-3 rounded-full border text-green-700 border-green-500 bg-green-200">C#</div>
                  <div class="px-3 rounded-full border text-green-700 border-green-500 bg-green-200">Winforms</div>
                  <div class="px-3 rounded-full border text-amber-600 border-amber-400 bg-amber-200">Node.js</div>
                </div>
                <div className="max-w-md">
                  <img src={shitcast} alt="Shitcast" className="mb-8" />
                </div>
                <p className="font-normal text-gray-500 text-md">as the name suggests, this is the shittiest messaging app for your local network. works with express.</p>
              </div>
            </div>
            <div className="project-container">
              <div className="bg-gray-100 px-8 py-10 rounded-md grow shrink">
                <h4 className="font-medium text-gray-700 text-xl mb-1">4Our in a row <a href="https://github.com/Ucaninek/four-in-a-row" class="underline text-sm">Github</a></h4>
                <div className="tag-container">
                  <div class="px-3 rounded-full border text-amber-600 border-amber-400 bg-amber-200">Node.js</div>
                  <div class="px-3 rounded-full border text-indigo-700 border-indigo-500 bg-indigo-200">Discord.js</div>
                </div>
                <div className="max-w-md">
                  <img src={fourinarow} alt="4our in a row" className="mb-8" />
                </div>
                <p className="font-normal text-gray-500 text-md">The classing four in a row game in discord! has language support and a changeable prefix.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

              <p className="font-normal text-gray-500 text-xs md:text-base">
                I have brought here my biggest and favorite works <br />
                as a professional.
              </p>
            </div>

            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">01</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Demo API Generator</h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A dummy data free and documented API generator to facilitate <br />
                    the process of testing the front-end portion of projects.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">02</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Demo API Generator</h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A dummy data free and documented API generator to facilitate <br />
                    the process of testing the front-end portion of projects.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">03</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Demo API Generator</h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A dummy data free and documented API generator to facilitate <br />
                    the process of testing the front-end portion of projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-20 md:mb-32 lg:mb-48">
              Please do not measure your skills in <br />
              percentages!
            </h1>

            <p className="font-medium text-gray-700 text-xs md:text-base">
              In my many years of experience, I use @laravel for backend projects and @vuejs for <br />
              front-end projects. I’m an avid programmer, so I create designs based on the <br />
              weekend @figmadesign.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">Company</h6>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>
            </div>

            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">Position</h6>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>
            </div>

            <div className="space-y-8 md:space-y-16">
              <h6 className="font-medium text-gray-400 text-base uppercase">Year</h6>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Brands</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of the places I studied</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <img src="assets/image/brand-1.png" alt="" />

            <img src="assets/image/brand-2.png" alt="" />

            <img src="assets/image/brand-3.png" alt="" />

            <img src="assets/image/brand-4.png" alt="" />

            <img src="assets/image/brand-5.png" alt="" />

            <img src="assets/image/brand-6.png" alt="" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Testimonial</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of the places I studied</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Testimonial</h1>

            <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
              I’m not currently taking on new client work but feel free to contact me for any <br />
              other inquiries.
            </p>

            <div className="flex items-center justify-center space-x-8">
              <a href="https://discord.gg/bk3S9qD8EB" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <Discord className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500" />
              </a>
              <a href="https://social.linux.pizza/@zemi" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <Mastodon className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      <script src="./assets/js/script.js"></script>

      <script>
        feather.replace();
      </script>
    </>
  );
}

export default App;
