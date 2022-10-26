class TabNavigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector(".nav .nav-item .nav-link.active").id;
  }
  render() {
    this.innerHTML = `
    <nav class="bg-black text-white pt-7">
        <div class="flex justify-center items-center mx-auto container">
            <ul class="nav flex flex-wrap justify-center items-center bg-slate-600 w-max lg:py-4  px-4 w-max-[400px]:px-[2px] py-4 rounded-md">
                <li class="nav-item lg:mr-2 mr-1 w-max-[400px]:mr-1">
                    <a id="nowPlaying" class="nav-link active bg-slate-800 cursor-pointer w-full active:bg-slate-800 hover:bg-slate-800 lg:text-xl w-max-{400px]:text-sm text-lg font-semibold  sm:px-2 px-2 py-3 lg:px-3 lg:py-3 rounded-lg ease-in-out transition-all duration-100">Now Playing</a>
                </li>
                <li class="nav-item lg:mx-2 sm:mx-3 w-max-[400px]:mr-1"><a id="upcoming" class="nav-link cursor-pointer active:bg-slate-800 hover:bg-slate-800 lg:text-xl w-max-{400px]:text-sm text-lg font-semibold px-2 py-3 lg:px-5 lg:py-3 rounded-lg ease-in-out transition-all duration-100">Upcoming</a></li>
                <li class="nav-item lg:mx-2"><a id="popular" class="nav-link cursor-pointer active:bg-slate-800 hover:bg-slate-800 lg:text-xl w-max-{400px]:text-sm text-lg font-semibold px-3 py-3 lg:px-5 lg:py-3 rounded-lg ease-in-out transition-all duration-100">Popular</a></li>
                <li class="nav-item lg:mx-2 mx-0 mt-6 sm:mt-0"><a id="trending" class="nav-link cursor-pointer active:bg-slate-800 hover:bg-slate-800 lg:text-xlw-max-{400px]:text-sm text-lg font-semibold px-2 py-3  lg:px-5 lg:py-3 rounded-lg ease-in-out transition-all duration-100">Trending</a></li>
                <li class="nav-item lg:mx-2 mx-0 mt-6 sm:mt-0"><a id="toprated" class="nav-link cursor-pointer active:bg-slate-800 hover:bg-slate-800 lg:text-xlw-max-{400px]:text-sm text-lg font-semibold px-2 py-3  lg:px-5 lg:py-3 rounded-lg ease-in-out transition-all duration-100">Top Rated</a></li>
            </ul>
        </div>
    </nav>`;
    // <li class="nav-item lg:mx-2 sm:mx-2 w-max-[400px]:mr-1"><a id="trending" class="nav-link cursor-pointer active:bg-slate-800 hover:bg-slate-800 lg:text-xlw-max-{400px]:text-sm text-lg font-semibold px-2 py-3 lg:px-5 lg:py-3 rounded-lg ease-in-out transition-all duration-100">Trending</a></li>

    const navItems = this.querySelectorAll(".nav .nav-item .nav-link");

    navItems.forEach((navItem) => {
      navItem.addEventListener("click", (event) => {
        const selectedItems = this.querySelectorAll(".active");
        if (selectedItems.length > 0) {
          selectedItems[0].classList.remove("active", "bg-slate-800");
        }
        event.target.classList.add("active", "bg-slate-800");
        this.addEventListener("click", this._clickEvent);
      });
    });
  }
}
customElements.define("tab-navigation", TabNavigation);
