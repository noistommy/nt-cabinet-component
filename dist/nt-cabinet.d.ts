import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class NtCabinet extends LitElement {
    /**
     * The number of times the button has been clicked.
     */
    module: string;
    copylight(): import('lit-html').TemplateResult<1>;
    render(): import('lit-html').TemplateResult<1>;
    createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        'nt-cabinet': NtCabinet;
    }
}
