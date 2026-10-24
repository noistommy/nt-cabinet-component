import { LitElement, html, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('nt-drawer')
export class NtDrawer extends LitElement {
  @property({type: String}) logo: string = ''
  @property({type: String}) name: string = ''
  @property({type: String}) link: string = ''
  @property({ type: Boolean }) current: boolean = false



  render() {
    let icon: string | TemplateResult
    if (this.current) {
      icon = 'Current'
    } else {
      icon = html`<i class="xi-link"></i>`
    }
    return html`
    <a href="${this.link}" target="_blank" noreferrer class="item p-2 ga be flex" style="pointer-events: ${this.current ? 'none' : ''}">
     <img src="${this.logo}" alt="${this.name}" style="width: 20px;">
     <div class="item-title ml-4" style="flex-grow: 1;">${this.name}</div>
     <div class="btn-set small">
      <button class="be-button ga-button compact ${this.current ? 'round' : 'icon'}">
        ${icon} 
      </button>
     </div>
    </a>
    `
  }

  createRenderRoot() {
      return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nt-drawer': NtDrawer
  }
}
