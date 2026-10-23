import { LitElement as e, css as t, html as n } from "lit";
import { customElement as r, property as i } from "lit/decorators.js";
// src/img/nt-profile.svg
var a = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='60'%20fill='%23F7B21D'/%3e%3cpath%20d='M52%208V52H44V51.6562L35%2042.6562V52H27V34.6562L16%2023.6562V52H8V8H52ZM35%2016V31.3428L44%2040.3428V16H35ZM27%2023.3428V16H19.6572L27%2023.3428Z'%20fill='%23333333'/%3e%3c/svg%3e", o = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012C8%209.79086%209.79086%208%2012%208H24.6667C26.5076%208%2028%209.49238%2028%2011.3333V11.3333C28%2020.5381%2020.5381%2028%2011.3333%2028V28C9.49238%2028%208%2026.5076%208%2024.6667V12Z'%20fill='%23333333'/%3e%3cpath%20d='M36%2028C33.7909%2028%2032%2026.2091%2032%2024L32%2011.3333C32%209.49238%2033.4924%208%2035.3333%208V8C44.5381%208%2052%2015.4619%2052%2024.6667V24.6667C52%2026.5076%2050.5076%2028%2048.6667%2028L36%2028Z'%20fill='%23333333'/%3e%3cpath%20d='M32%2036C32%2033.7909%2033.7909%2032%2036%2032H48C50.2091%2032%2052%2033.7909%2052%2036V48C52%2050.2091%2050.2091%2052%2048%2052H36C33.7909%2052%2032%2050.2091%2032%2048V36Z'%20fill='%23333333'/%3e%3c/svg%3e", s = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='60'%20rx='8'%20fill='%233FB480'/%3e%3cpath%20d='M8%2012C8%209.79086%209.79086%208%2012%208H24.6667C26.5076%208%2028%209.49238%2028%2011.3333V11.3333C28%2020.5381%2020.5381%2028%2011.3333%2028V28C9.49238%2028%208%2026.5076%208%2024.6667V12Z'%20fill='%23333333'/%3e%3cpath%20d='M32%2012C32%209.79086%2033.7909%208%2036%208H48C50.2091%208%2052%209.79086%2052%2012V24C52%2026.2091%2050.2091%2028%2048%2028H36C33.7909%2028%2032%2026.2091%2032%2024V12Z'%20fill='%23333333'/%3e%3cpath%20d='M8%2035.3333C8%2033.4924%209.49238%2032%2011.3333%2032V32C20.5381%2032%2028%2039.4619%2028%2048.6667V48.6667C28%2050.5076%2026.5076%2052%2024.6667%2052H12C9.79086%2052%208%2050.2091%208%2048V35.3333Z'%20fill='%23333333'/%3e%3cpath%20d='M32%2036C32%2033.7909%2033.7909%2032%2036%2032H48C50.2091%2032%2052%2033.7909%2052%2036V48C52%2050.2091%2050.2091%2052%2048%2052H36C33.7909%2052%2032%2050.2091%2032%2048V36Z'%20fill='%23333333'/%3e%3c/svg%3e", c = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='60'%20rx='8'%20fill='%2358C4DC'/%3e%3cpath%20d='M8%2012C8%209.79086%209.79086%208%2012%208H24.6667C26.5076%208%2028%209.49238%2028%2011.3333V11.3333C28%2020.5381%2020.5381%2028%2011.3333%2028V28C9.49238%2028%208%2026.5076%208%2024.6667V12Z'%20fill='%23333333'/%3e%3cpath%20d='M32%2012C32%209.79086%2033.7909%208%2036%208H48C50.2091%208%2052%209.79086%2052%2012V24C52%2026.2091%2050.2091%2028%2048%2028H36C33.7909%2028%2032%2026.2091%2032%2024V12Z'%20fill='%23333333'/%3e%3cpath%20d='M8%2035.3333C8%2033.4924%209.49238%2032%2011.3333%2032V32C20.5381%2032%2028%2039.4619%2028%2048.6667V48.6667C28%2050.5076%2026.5076%2052%2024.6667%2052H12C9.79086%2052%208%2050.2091%208%2048V35.3333Z'%20fill='%23333333'/%3e%3cpath%20d='M32%2036C32%2033.7909%2033.7909%2032%2036%2032H48C50.2091%2032%2052%2033.7909%2052%2036V48C52%2050.2091%2050.2091%2052%2048%2052H36C33.7909%2052%2032%2050.2091%2032%2048V36Z'%20fill='%23333333'/%3e%3c/svg%3e", l = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_640_164)'%3e%3crect%20width='60'%20height='60'%20rx='4'%20fill='white'/%3e%3cpath%20d='M0%2010C0%2010%2012.3913%2017.6923%2030%2017.6923C47.6087%2017.6923%2060%2010%2060%2010V50C60%2050%2045.6522%2043.0769%2030%2042.3077C14.3478%2041.5385%200%2050%200%2050V10Z'%20fill='%23F7B21D'/%3e%3cpath%20d='M23.0741%2037.3448C11.287%2037.3448%202.33385%2032.0677%20-1.26792%2029.5492C-1.96858%2029.0592%20-3%2029.5644%20-3%2030.4194V61.5C-3%2062.0523%20-2.55229%2062.5%20-2%2062.5H84C84.5523%2062.5%2085%2062.0523%2085%2061.5V37.7178C85%2037.4772%2084.915%2037.2469%2084.7474%2037.0744C83.1639%2035.4446%2074.0713%2027.0001%2055.6667%2027C35.2963%2026.9999%2038.5556%2037.3448%2023.0741%2037.3448Z'%20fill='white'%20fill-opacity='0.5'/%3e%3cpath%20d='M41.1503%2038.4828C54.4615%2038.4828%2064.5062%2033.4436%2068.3228%2031.197C69.031%2030.7801%2069.9769%2031.3037%2069.9606%2032.1253L69.3872%2061.0198C69.3764%2061.5643%2068.9319%2062%2068.3874%2062H-26.9728C-27.5356%2062%20-27.9875%2061.5357%20-27.9724%2060.9731L-27.3788%2038.8942C-27.3717%2038.6306%20-27.2652%2038.3849%20-27.0641%2038.2144C-25.2455%2036.6714%20-15.1841%2029.0001%205.08817%2029C27.627%2028.9999%2024.0208%2038.4828%2041.1503%2038.4828Z'%20fill='white'%20fill-opacity='0.5'/%3e%3cpath%20d='M69.1503%2039.4828C82.4615%2039.4828%2092.5062%2034.4436%2096.3228%2032.197C97.031%2031.7801%2097.9769%2032.3037%2097.9606%2033.1253L97.3872%2062.0198C97.3764%2062.5643%2096.9319%2063%2096.3874%2063H1.02724C0.464439%2063%200.0124817%2062.5357%200.0276108%2061.9731L0.621201%2039.8942C0.628281%2039.6306%200.734833%2039.3849%200.935883%2039.2144C2.75449%2037.6714%2012.8159%2030.0001%2033.0882%2030C55.627%2029.9999%2052.0208%2039.4828%2069.1503%2039.4828Z'%20fill='white'%20fill-opacity='0.5'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_640_164'%3e%3crect%20width='60'%20height='60'%20rx='4'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", u = {
	homepage: "https://nt-cabinet.vercel.app/",
	linkedin: "https://www.linkedin.com/in/minyoung-kim-noistommy",
	email: "mailto:noistommy@gmail.com"
}, d = {
	logo: o,
	name: "Frog UI",
	link: "https://frog-ui-css.vercel.app",
	current: !1
}, f = [{
	logo: s,
	name: "BEUI - Vue",
	link: "https://beui.vercel.app",
	current: !1
}, {
	logo: c,
	name: "BEUI - React",
	link: "https://react-be-ui.vercel.app",
	current: !1
}], p = [
	{
		logo: a,
		name: "NT Modal",
		link: "https://noistommy.github.io/react-nt-modal",
		current: !1
	},
	{
		logo: a,
		name: "NT Toast",
		link: "https://noistommy.github.io/react-nt-toast",
		current: !1
	},
	{
		logo: a,
		name: "NT Tooltip",
		link: "https://noistommy.github.io/nt-tooltip",
		current: !1
	},
	{
		logo: l,
		name: "Souple",
		link: "https://noistommy.github.io/souple",
		current: !1
	}
], m = [
	{
		logo: a,
		name: "NT Modal",
		link: "https://noistommy.github.io/vue-nt-modal",
		current: !0
	},
	{
		logo: a,
		name: "NT Toast",
		link: "https://noistommy.github.io/vue-nt-toast",
		current: !1
	},
	{
		logo: a,
		name: "NT Tooltip",
		link: "https://noistommy.github.io/vue-nt-tooltip",
		current: !1
	}
];
// \0@oxc-project+runtime@0.155.0/helpers/esm/decorate.js
function h(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
// src/nt-drawer.ts
var g = class extends e {
	constructor(...e) {
		super(...e), this.logo = "", this.name = "", this.link = "", this.current = !1;
	}
	render() {
		let e;
		return e = this.current ? "current" : n`<i class="xi-link"></i>`, n`
    <a href="${this.link}" target="_blank" noreferrer class="item p-2 ga be flex" style="pointer-events: ${this.current ? "none" : ""}">
     <img src="${this.logo}" alt="${this.name}" style="width: 20px;">
     <div class="item-title ml-4" style="flex-grow: 1;">${this.name}</div>
     <div class="btn-set">
      <button class="be-button ga-button icon compact ${this.current ? "round" : ""}">
        ${e} 
      </button>
     </div>
    </a>
    `;
	}
	createRenderRoot() {
		return this;
	}
	static {
		this.styles = [t`
    :host {}
  `];
	}
};
h([i({ type: String })], g.prototype, "logo", void 0), h([i({ type: String })], g.prototype, "name", void 0), h([i({ type: String })], g.prototype, "link", void 0), h([i({ type: Boolean })], g.prototype, "current", void 0), g = h([r("nt-drawer")], g);
// src/nt-cabinet.ts
var _ = class extends e {
	constructor(...e) {
		super(...e), this.module = "";
	}
	copylight() {
		return n`
      <div class="copylight mt-4 be-tags ga-tags attached">
        <span class="ga-tag be-tag label deepblue">Copyright</span>
        <span class="ga-tag be-tag label primary-light">© ${(/* @__PURE__ */ new Date()).getFullYear()} Kim Minyoung</span>
        <span class="ga-tag be-tag pointing left secondary">noistommy</span>
      </div>
    `;
	}
	render() {
		return n`
      <footer class="mt-auto p-10 text-right">
        <hr class="ga be  hr my-10"></hr>
        <div class="wrapper" style="max-width: 780px; margin: 0 auto;">
          <div class="header ga be flex between">
            <div class="logo">
              <div class="ga be flex gap-1">
                <img src="${a}" alt="logo" width="25px" />
                <div class="bolder large">NT Cabinet</div>
              </div>
            </div>
            <div class="contact">
              <div class="ga-buttons be-buttons">
                <div class="ga-button be-button compact icon">
                  <i class="xi-mail"></i>
                  <a class="link" href="${u.email}" target="_blank"></a>
                </div>
                <div class="ga-button be-button compact icon">
                  <i class="xi-linkedin"></i>
                  <a class="link" href="${u.linkedin}" target="_blank"></a>
                </div>
                <div class="ga-button be-button compact icon">
                  <i class="xi-home"></i>
                  <a class="link" href= "${u.homepage}" target="_blank"></a>
                </div>
              </div>
            </div>
          </div>
          <p>Hello! I'm noistommy!! <br /> Thanks for checking out my work. Please take a look at my other work as well. Thank you!</p>
          <div class="ga-grid be-grid">
            <div class="column span-4 span-xs-12 pr-10">
              <h5 class="header gray-txt-40">Design system</h5>
              <div class="ga-list be-list">
                <nt-drawer 
                  logo=${d.logo} name=${d.name} link=${d.link} .current=${d.name === this.module}
                ></nt-drawer>     
              </div>
              <h5 class="header" gray-txt-40">BEUI</h5>
              <div class="ga-list be-list">
              ${f.map((e) => n`
                <nt-drawer 
                  logo=${e.logo} name=${e.name} link=${e.link} .current=${e.name === this.module}
                ></nt-drawer>     
              `)}
              </div>
            </div>
            <div class="column span-4 span-xs-12 pr-10">
              <h5 class="header gray-txt-40">Modules by React</h5>
              <div class="ga-list be-list">
              ${p.map((e) => n`
                <nt-drawer 
                  logo=${e.logo} name=${e.name} link=${e.link} .current=${e.name === this.module}
                ></nt-drawer>     
              `)}
              </div>
            </div>
            <div class="column span-4 span-xs-12 pr-10">
              <h5 class="header gray-txt-40">Modules by Vue</h5>
              <div class="ga-list be-list">
              ${m.map((e) => n`
                <nt-drawer 
                  logo=${e.logo} name=${e.name} link=${e.link} .current=${e.name === this.module}
                ></nt-drawer>     
              `)}
              </div>
            </div>
          </div>
        </div>
        <hr className="ga be hr" />
        ${this.copylight()}
        </footer>
    `;
	}
	createRenderRoot() {
		return this;
	}
};
h([i({ type: String })], _.prototype, "module", void 0), _ = h([r("nt-cabinet")], _);
export { _ as t };
