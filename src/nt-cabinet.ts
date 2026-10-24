import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { DS, PROFILE, VUE_MODULES, REACT_MODULES, BEUI} from './moduleData.ts'
import NTLogo from './img/nt-profile.svg'
import './nt-drawer.ts'

interface ModuleItem {
  logo: string
  name: string
  link: string
  title: string
}

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('nt-cabinet')
export class NtCabinet extends LitElement {
  /**
   * The number of times the button has been clicked.
   */

  @property({
    type: String,
  })
  module: string = ''

  copylight() {
    return html`
      <div class="copylight mt-4 be-tags ga-tags attached">
        <span class="ga-tag be-tag label deepblue">Copyright</span>
        <span class="ga-tag be-tag pointing right deepblue-light">${new Date().getFullYear()}. Kim Minyoung</span>
        <span class="ga-tag be-tag label secondary">noistommy</span>
        <!-- <span class="ga-tag be-tag label">All rights reserved.</span> -->
      </div>
    `

  }

  render() {
    return html`
      <footer class="mt-auto text-right">
        <div class="wrapper" style="max-width: 780px; margin: 0 auto;">
          <hr class="ga be  hr my-10"></hr>
          <div class="header ga be flex between">
            <div class="logo">
              <div class="ga be flex gap-1">
                <img src="${NTLogo}" alt="logo" width="25px" />
                <div class="bolder large">NT Cabinet</div>
              </div>
            </div>
            <div class="contact">
              <div class="ga-buttons be-buttons">
                <div class="ga-button be-button compact icon">
                  <i class="xi-mail"></i>
                  <a class="link" href="${PROFILE.email}" target="_blank"></a>
                </div>
                <div class="ga-button be-button compact icon">
                  <i class="xi-linkedin"></i>
                  <a class="link" href="${PROFILE.linkedin}" target="_blank"></a>
                </div>
                <div class="ga-button be-button compact icon">
                  <i class="xi-home"></i>
                  <a class="link" href= "${PROFILE.homepage}" target="_blank"></a>
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
                  logo=${DS.logo} name=${DS.title} link=${DS.link} .current=${DS.name === this.module}
                ></nt-drawer>     
              </div>
              <h5 class="header" gray-txt-40">BEUI</h5>
              <div class="ga-list be-list">
              ${BEUI.map((item: ModuleItem) => html`
                <nt-drawer 
                  logo=${item.logo} name=${item.title} link=${item.link} .current=${item.name === this.module}
                ></nt-drawer>     
              `)}
              </div>
            </div>
            <div class="column span-4 span-xs-12 pr-10">
              <h5 class="header gray-txt-40">Modules by React</h5>
              <div class="ga-list be-list">
              ${REACT_MODULES.map((item: ModuleItem) => html`
                <nt-drawer 
                  logo=${item.logo} name=${item.title} link=${item.link} .current=${item.name === this.module}
                ></nt-drawer>     
              `)}
              </div>
            </div>
            <div class="column span-4 span-xs-12 pr-10">
              <h5 class="header gray-txt-40">Modules by Vue</h5>
              <div class="ga-list be-list">
              ${VUE_MODULES.map((item: ModuleItem) => html`
                <nt-drawer 
                  logo=${item.logo} name=${item.title} link=${item.link} .current=${item.name === this.module}
                ></nt-drawer>     
              `)}
              </div>
            </div>
          </div>
          <hr className="ga be hr" />
          ${this.copylight()}
        </div>
        </footer>
    `
  }

  createRenderRoot() {
      return this;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'nt-cabinet': NtCabinet
  }
}
