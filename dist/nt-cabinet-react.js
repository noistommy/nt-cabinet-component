import { t as e } from "./nt-cabinet-DO1Z0lEo.js";
import t from "react";
// node_modules/@lit/react/create-component.js
var n = /* @__PURE__ */ new Set([
	"children",
	"localName",
	"ref",
	"style",
	"className"
]), r = /* @__PURE__ */ new WeakMap(), i = (e, t, n, i, a) => {
	let o = a?.[t];
	o === void 0 ? (e[t] = n, n == null && t in HTMLElement.prototype && e.removeAttribute(t)) : n !== i && ((e, t, n) => {
		let i = r.get(e);
		i === void 0 && r.set(e, i = /* @__PURE__ */ new Map());
		let a = i.get(t);
		n === void 0 ? a !== void 0 && (i.delete(t), e.removeEventListener(t, a)) : a === void 0 ? (i.set(t, a = { handleEvent: n }), e.addEventListener(t, a)) : a.handleEvent = n;
	})(e, o, n);
}, a = (({ react: e, tagName: t, elementClass: r, events: a, displayName: o }) => {
	let s = new Set(Object.keys(a ?? {})), c = e.forwardRef(((o, c) => {
		let l = e.useRef(/* @__PURE__ */ new Map()), u = e.useRef(null), d = {}, f = {};
		for (let [e, t] of Object.entries(o)) n.has(e) ? d[e === "className" ? "class" : e] = t : s.has(e) || e in r.prototype ? f[e] = t : d[e] = t;
		return e.useLayoutEffect((() => {
			if (u.current === null) return;
			let e = /* @__PURE__ */ new Map();
			for (let t in f) i(u.current, t, o[t], l.current.get(t), a), l.current.delete(t), e.set(t, o[t]);
			for (let [e, t] of l.current) i(u.current, e, void 0, t, a);
			l.current = e;
		})), e.useLayoutEffect((() => {
			u.current?.removeAttribute("defer-hydration");
		}), []), d.suppressHydrationWarning = !0, e.createElement(t, {
			...d,
			ref: e.useCallback(((e) => {
				u.current = e, typeof c == "function" ? c(e) : c !== null && (c.current = e);
			}), [c])
		});
	}));
	return c.displayName = o ?? r.name, c;
})({
	react: t,
	tagName: "nt-cabinet",
	elementClass: e,
	events: {}
});
export { a as NtCabinetReact };
