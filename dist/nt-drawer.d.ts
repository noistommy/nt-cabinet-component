import { LitElement, TemplateResult } from 'lit';
export declare class NtDrawer extends LitElement {
    logo: string;
    name: string;
    link: string;
    current: boolean;
    render(): TemplateResult<1>;
    createRenderRoot(): this;
    static styles: import('lit').CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'nt-drawer': NtDrawer;
    }
}
