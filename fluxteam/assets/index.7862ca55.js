(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
      return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
      n(s);
  new MutationObserver(s=>{
      for (const i of s)
          if (i.type === "childList")
              for (const a of i.addedNodes)
                  a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function r(s) {
      const i = {};
      return s.integrity && (i.integrity = s.integrity),
      s.referrerpolicy && (i.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials" ? i.credentials = "include" : s.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
      i
  }
  function n(s) {
      if (s.ep)
          return;
      s.ep = !0;
      const i = r(s);
      fetch(s.href, i)
  }
}
)();
function P() {}
function Bt(t, e) {
  for (const r in e)
      t[r] = e[r];
  return t
}
function Jr(t) {
  return t()
}
function Ar() {
  return Object.create(null)
}
function Lt(t) {
  t.forEach(Jr)
}
function Kn(t) {
  return typeof t == "function"
}
function Ue(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let bn;
function Kt(t, e) {
  return bn || (bn = document.createElement("a")),
  bn.href = e,
  t === bn.href
}
function Cs(t) {
  return Object.keys(t).length === 0
}
function Qr(t, ...e) {
  if (t == null)
      return P;
  const r = t.subscribe(...e);
  return r.unsubscribe ? ()=>r.unsubscribe() : r
}
function Ht(t, e, r) {
  t.$$.on_destroy.push(Qr(e, r))
}
function Jn(t, e, r, n) {
  if (t) {
      const s = Xr(t, e, r, n);
      return t[0](s)
  }
}
function Xr(t, e, r, n) {
  return t[1] && n ? Bt(r.ctx.slice(), t[1](n(e))) : r.ctx
}
function Qn(t, e, r, n) {
  if (t[2] && n) {
      const s = t[2](n(r));
      if (e.dirty === void 0)
          return s;
      if (typeof s == "object") {
          const i = []
            , a = Math.max(e.dirty.length, s.length);
          for (let d = 0; d < a; d += 1)
              i[d] = e.dirty[d] | s[d];
          return i
      }
      return e.dirty | s
  }
  return e.dirty
}
function Xn(t, e, r, n, s, i) {
  if (s) {
      const a = Xr(e, r, n, i);
      t.p(a, s)
  }
}
function Zn(t) {
  if (t.ctx.length > 32) {
      const e = []
        , r = t.ctx.length / 32;
      for (let n = 0; n < r; n++)
          e[n] = -1;
      return e
  }
  return -1
}
function Bn(t) {
  const e = {};
  for (const r in t)
      r[0] !== "$" && (e[r] = t[r]);
  return e
}
function Tr(t, e) {
  const r = {};
  e = new Set(e);
  for (const n in t)
      !e.has(n) && n[0] !== "$" && (r[n] = t[n]);
  return r
}
function o(t, e) {
  t.appendChild(e)
}
function V(t, e, r) {
  t.insertBefore(e, r || null)
}
function z(t) {
  t.parentNode && t.parentNode.removeChild(t)
}
function c(t) {
  return document.createElement(t)
}
function vt(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t)
}
function ce(t) {
  return document.createTextNode(t)
}
function p() {
  return ce(" ")
}
function er() {
  return ce("")
}
function xt(t, e, r, n) {
  return t.addEventListener(e, r, n),
  ()=>t.removeEventListener(e, r, n)
}
function l(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r)
}
function Or(t, e) {
  const r = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
      e[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = e[n] : n === "__value" ? t.value = t[n] = e[n] : r[n] && r[n].set ? t[n] = e[n] : l(t, n, e[n])
}
function Is(t) {
  return Array.from(t.childNodes)
}
function H(t, e, r, n) {
  r === null ? t.style.removeProperty(e) : t.style.setProperty(e, r, n ? "important" : "")
}
function Fs(t, e, {bubbles: r=!1, cancelable: n=!1}={}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(t, r, n, e),
  s
}
function Rr(t, e) {
  return new t(e)
}
let un;
function cn(t) {
  un = t
}
function hn() {
  if (!un)
      throw new Error("Function called outside component initialization");
  return un
}
function Ls(t) {
  hn().$$.on_mount.push(t)
}
function Ds(t) {
  hn().$$.on_destroy.push(t)
}
function Ps() {
  const t = hn();
  return (e,r,{cancelable: n=!1}={})=>{
      const s = t.$$.callbacks[e];
      if (s) {
          const i = Fs(e, r, {
              cancelable: n
          });
          return s.slice().forEach(a=>{
              a.call(t, i)
          }
          ),
          !i.defaultPrevented
      }
      return !0
  }
}
function kr(t, e) {
  return hn().$$.context.set(t, e),
  e
}
function Jt(t) {
  return hn().$$.context.get(t)
}
const an = []
, Nr = []
, vn = []
, Cr = []
, Us = Promise.resolve();
let Wn = !1;
function Hs() {
  Wn || (Wn = !0,
  Us.then(Zr))
}
function qn(t) {
  vn.push(t)
}
const Ln = new Set;
let $n = 0;
function Zr() {
  const t = un;
  do {
      for (; $n < an.length; ) {
          const e = an[$n];
          $n++,
          cn(e),
          Ms(e.$$)
      }
      for (cn(null),
      an.length = 0,
      $n = 0; Nr.length; )
          Nr.pop()();
      for (let e = 0; e < vn.length; e += 1) {
          const r = vn[e];
          Ln.has(r) || (Ln.add(r),
          r())
      }
      vn.length = 0
  } while (an.length);
  for (; Cr.length; )
      Cr.pop()();
  Wn = !1,
  Ln.clear(),
  cn(t)
}
function Ms(t) {
  if (t.fragment !== null) {
      t.update(),
      Lt(t.before_update);
      const e = t.dirty;
      t.dirty = [-1],
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(qn)
  }
}
const wn = new Set;
let Ut;
function tr() {
  Ut = {
      r: 0,
      c: [],
      p: Ut
  }
}
function nr() {
  Ut.r || Lt(Ut.c),
  Ut = Ut.p
}
function E(t, e) {
  t && t.i && (wn.delete(t),
  t.i(e))
}
function S(t, e, r, n) {
  if (t && t.o) {
      if (wn.has(t))
          return;
      wn.add(t),
      Ut.c.push(()=>{
          wn.delete(t),
          n && (r && t.d(1),
          n())
      }
      ),
      t.o(e)
  } else
      n && n()
}
function es(t, e) {
  const r = {}
    , n = {}
    , s = {
      $$scope: 1
  };
  let i = t.length;
  for (; i--; ) {
      const a = t[i]
        , d = e[i];
      if (d) {
          for (const f in a)
              f in d || (n[f] = 1);
          for (const f in d)
              s[f] || (r[f] = d[f],
              s[f] = 1);
          t[i] = d
      } else
          for (const f in a)
              s[f] = 1
  }
  for (const a in n)
      a in r || (r[a] = void 0);
  return r
}
function Ir(t) {
  return typeof t == "object" && t !== null ? t : {}
}
function O(t) {
  t && t.c()
}
function A(t, e, r, n) {
  const {fragment: s, after_update: i} = t.$$;
  s && s.m(e, r),
  n || qn(()=>{
      const a = t.$$.on_mount.map(Jr).filter(Kn);
      t.$$.on_destroy ? t.$$.on_destroy.push(...a) : Lt(a),
      t.$$.on_mount = []
  }
  ),
  i.forEach(qn)
}
function T(t, e) {
  const r = t.$$;
  r.fragment !== null && (Lt(r.on_destroy),
  r.fragment && r.fragment.d(e),
  r.on_destroy = r.fragment = null,
  r.ctx = [])
}
function Bs(t, e) {
  t.$$.dirty[0] === -1 && (an.push(t),
  Hs(),
  t.$$.dirty.fill(0)),
  t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function je(t, e, r, n, s, i, a, d=[-1]) {
  const f = un;
  cn(t);
  const u = t.$$ = {
      fragment: null,
      ctx: [],
      props: i,
      update: P,
      not_equal: s,
      bound: Ar(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (f ? f.$$.context : [])),
      callbacks: Ar(),
      dirty: d,
      skip_bound: !1,
      root: e.target || f.$$.root
  };
  a && a(u.root);
  let h = !1;
  if (u.ctx = r ? r(t, e.props || {}, ($,m,...y)=>{
      const v = y.length ? y[0] : m;
      return u.ctx && s(u.ctx[$], u.ctx[$] = v) && (!u.skip_bound && u.bound[$] && u.bound[$](v),
      h && Bs(t, $)),
      m
  }
  ) : [],
  u.update(),
  h = !0,
  Lt(u.before_update),
  u.fragment = n ? n(u.ctx) : !1,
  e.target) {
      if (e.hydrate) {
          const $ = Is(e.target);
          u.fragment && u.fragment.l($),
          $.forEach(z)
      } else
          u.fragment && u.fragment.c();
      e.intro && E(t.$$.fragment),
      A(t, e.target, e.anchor, e.customElement),
      Zr()
  }
  cn(f)
}
class Ye {
  $destroy() {
      T(this, 1),
      this.$destroy = P
  }
  $on(e, r) {
      if (!Kn(r))
          return P;
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return n.push(r),
      ()=>{
          const s = n.indexOf(r);
          s !== -1 && n.splice(s, 1)
      }
  }
  $set(e) {
      this.$$set && !Cs(e) && (this.$$.skip_bound = !0,
      this.$$set(e),
      this.$$.skip_bound = !1)
  }
}
const Gt = [];
function Ws(t, e) {
  return {
      subscribe: ln(t, e).subscribe
  }
}
function ln(t, e=P) {
  let r;
  const n = new Set;
  function s(d) {
      if (Ue(t, d) && (t = d,
      r)) {
          const f = !Gt.length;
          for (const u of n)
              u[1](),
              Gt.push(u, t);
          if (f) {
              for (let u = 0; u < Gt.length; u += 2)
                  Gt[u][0](Gt[u + 1]);
              Gt.length = 0
          }
      }
  }
  function i(d) {
      s(d(t))
  }
  function a(d, f=P) {
      const u = [d, f];
      return n.add(u),
      n.size === 1 && (r = e(s) || P),
      d(t),
      ()=>{
          n.delete(u),
          n.size === 0 && (r(),
          r = null)
      }
  }
  return {
      set: s,
      update: i,
      subscribe: a
  }
}
function qs(t, e, r) {
  const n = !Array.isArray(t)
    , s = n ? [t] : t
    , i = e.length < 2;
  return Ws(r, a=>{
      let d = !1;
      const f = [];
      let u = 0
        , h = P;
      const $ = ()=>{
          if (u)
              return;
          h();
          const y = e(n ? f[0] : f, a);
          i ? a(y) : h = Kn(y) ? y : P
      }
        , m = s.map((y,v)=>Qr(y, w=>{
          f[v] = w,
          u &= ~(1 << v),
          d && $()
      }
      , ()=>{
          u |= 1 << v
      }
      ));
      return d = !0,
      $(),
      function() {
          Lt(m),
          h()
      }
  }
  )
}
const xn = {}
, An = {};
function Dn(t) {
  return {
      ...t.location,
      state: t.history.state,
      key: t.history.state && t.history.state.key || "initial"
  }
}
function js(t, e) {
  const r = [];
  let n = Dn(t);
  return {
      get location() {
          return n
      },
      listen(s) {
          r.push(s);
          const i = ()=>{
              n = Dn(t),
              s({
                  location: n,
                  action: "POP"
              })
          }
          ;
          return t.addEventListener("popstate", i),
          ()=>{
              t.removeEventListener("popstate", i);
              const a = r.indexOf(s);
              r.splice(a, 1)
          }
      },
      navigate(s, {state: i, replace: a=!1}={}) {
          i = {
              ...i,
              key: Date.now() + ""
          };
          try {
              a ? t.history.replaceState(i, null, s) : t.history.pushState(i, null, s)
          } catch {
              t.location[a ? "replace" : "assign"](s)
          }
          n = Dn(t),
          r.forEach(d=>d({
              location: n,
              action: "PUSH"
          }))
      }
  }
}
function Ys(t="/") {
  let e = 0;
  const r = [{
      pathname: t,
      search: ""
  }]
    , n = [];
  return {
      get location() {
          return r[e]
      },
      addEventListener(s, i) {},
      removeEventListener(s, i) {},
      history: {
          get entries() {
              return r
          },
          get index() {
              return e
          },
          get state() {
              return n[e]
          },
          pushState(s, i, a) {
              const [d,f=""] = a.split("?");
              e++,
              r.push({
                  pathname: d,
                  search: f
              }),
              n.push(s)
          },
          replaceState(s, i, a) {
              const [d,f=""] = a.split("?");
              r[e] = {
                  pathname: d,
                  search: f
              },
              n[e] = s
          }
      }
  }
}
const zs = Boolean(typeof window < "u" && window.document && window.document.createElement)
, jn = js(zs ? window : Ys())
, {navigate: Vs} = jn
, ts = /^:(.+)/
, Fr = 4
, Gs = 3
, Ks = 2
, Js = 1
, Qs = 1;
function Yn(t, e) {
  return t.substr(0, e.length) === e
}
function Xs(t) {
  return t === ""
}
function Zs(t) {
  return ts.test(t)
}
function ns(t) {
  return t[0] === "*"
}
function dn(t) {
  return t.replace(/(^\/+|\/+$)/g, "").split("/")
}
function Pn(t) {
  return t.replace(/(^\/+|\/+$)/g, "")
}
function eo(t, e) {
  const r = t.default ? 0 : dn(t.path).reduce((n,s)=>(n += Fr,
  Xs(s) ? n += Qs : Zs(s) ? n += Ks : ns(s) ? n -= Fr + Js : n += Gs,
  n), 0);
  return {
      route: t,
      score: r,
      index: e
  }
}
function to(t) {
  return t.map(eo).sort((e,r)=>e.score < r.score ? 1 : e.score > r.score ? -1 : e.index - r.index)
}
function rs(t, e) {
  let r, n;
  const [s] = e.split("?")
    , i = dn(s)
    , a = i[0] === ""
    , d = to(t);
  for (let f = 0, u = d.length; f < u; f++) {
      const h = d[f].route;
      let $ = !1;
      if (h.default) {
          n = {
              route: h,
              params: {},
              uri: e
          };
          continue
      }
      const m = dn(h.path)
        , y = {}
        , v = Math.max(i.length, m.length);
      let w = 0;
      for (; w < v; w++) {
          const R = m[w]
            , C = i[w];
          if (R !== void 0 && ns(R)) {
              const I = R === "*" ? "*" : R.slice(1);
              y[I] = i.slice(w).map(decodeURIComponent).join("/");
              break
          }
          if (C === void 0) {
              $ = !0;
              break
          }
          let L = ts.exec(R);
          if (L && !a) {
              const I = decodeURIComponent(C);
              y[L[1]] = I
          } else if (R !== C) {
              $ = !0;
              break
          }
      }
      if (!$) {
          r = {
              route: h,
              params: y,
              uri: "/" + i.slice(0, w).join("/")
          };
          break
      }
  }
  return r || n || null
}
function no(t, e) {
  return rs([t], e)
}
function Un(t, e) {
  return t + (e ? `?${e}` : "")
}
function ro(t, e) {
  if (Yn(t, "/"))
      return t;
  const [r,n] = t.split("?")
    , [s] = e.split("?")
    , i = dn(r)
    , a = dn(s);
  if (i[0] === "")
      return Un(s, n);
  if (!Yn(i[0], ".")) {
      const u = a.concat(i).join("/");
      return Un((s === "/" ? "" : "/") + u, n)
  }
  const d = a.concat(i)
    , f = [];
  return d.forEach(u=>{
      u === ".." ? f.pop() : u !== "." && f.push(u)
  }
  ),
  Un("/" + f.join("/"), n)
}
function Lr(t, e) {
  return `${Pn(e === "/" ? t : `${Pn(t)}/${Pn(e)}`)}/`
}
function so(t) {
  return !t.defaultPrevented && t.button === 0 && !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function oo(t) {
  let e;
  const r = t[9].default
    , n = Jn(r, t, t[8], null);
  return {
      c() {
          n && n.c()
      },
      m(s, i) {
          n && n.m(s, i),
          e = !0
      },
      p(s, [i]) {
          n && n.p && (!e || i & 256) && Xn(n, r, s, s[8], e ? Qn(r, s[8], i, null) : Zn(s[8]), null)
      },
      i(s) {
          e || (E(n, s),
          e = !0)
      },
      o(s) {
          S(n, s),
          e = !1
      },
      d(s) {
          n && n.d(s)
      }
  }
}
function io(t, e, r) {
  let n, s, i, {$$slots: a={}, $$scope: d} = e, {basepath: f="/"} = e, {url: u=null} = e;
  const h = Jt(xn)
    , $ = Jt(An)
    , m = ln([]);
  Ht(t, m, x=>r(6, s = x));
  const y = ln(null);
  let v = !1;
  const w = h || ln(u ? {
      pathname: u
  } : jn.location);
  Ht(t, w, x=>r(5, n = x));
  const R = $ ? $.routerBase : ln({
      path: f,
      uri: f
  });
  Ht(t, R, x=>r(7, i = x));
  const C = qs([R, y], ([x,F])=>{
      if (F === null)
          return x;
      const {path: N} = x
        , {route: q, uri: oe} = F;
      return {
          path: q.default ? N : q.path.replace(/\*.*$/, ""),
          uri: oe
      }
  }
  );
  function L(x) {
      const {path: F} = i;
      let {path: N} = x;
      if (x._path = N,
      x.path = Lr(F, N),
      typeof window > "u") {
          if (v)
              return;
          const q = no(x, n.pathname);
          q && (y.set(q),
          v = !0)
      } else
          m.update(q=>(q.push(x),
          q))
  }
  function I(x) {
      m.update(F=>{
          const N = F.indexOf(x);
          return F.splice(N, 1),
          F
      }
      )
  }
  return h || (Ls(()=>jn.listen(F=>{
      w.set(F.location)
  }
  )),
  kr(xn, w)),
  kr(An, {
      activeRoute: y,
      base: R,
      routerBase: C,
      registerRoute: L,
      unregisterRoute: I
  }),
  t.$$set = x=>{
      "basepath"in x && r(3, f = x.basepath),
      "url"in x && r(4, u = x.url),
      "$$scope"in x && r(8, d = x.$$scope)
  }
  ,
  t.$$.update = ()=>{
      if (t.$$.dirty & 128) {
          const {path: x} = i;
          m.update(F=>(F.forEach(N=>N.path = Lr(x, N._path)),
          F))
      }
      if (t.$$.dirty & 96) {
          const x = rs(s, n.pathname);
          y.set(x)
      }
  }
  ,
  [m, w, R, f, u, n, s, i, d, a]
}
class ao extends Ye {
  constructor(e) {
      super(),
      je(this, e, io, oo, Ue, {
          basepath: 3,
          url: 4
      })
  }
}
const lo = t=>({
  params: t & 4,
  location: t & 16
})
, Dr = t=>({
  params: t[2],
  location: t[4]
});
function Pr(t) {
  let e, r, n, s;
  const i = [uo, co]
    , a = [];
  function d(f, u) {
      return f[0] !== null ? 0 : 1
  }
  return e = d(t),
  r = a[e] = i[e](t),
  {
      c() {
          r.c(),
          n = er()
      },
      m(f, u) {
          a[e].m(f, u),
          V(f, n, u),
          s = !0
      },
      p(f, u) {
          let h = e;
          e = d(f),
          e === h ? a[e].p(f, u) : (tr(),
          S(a[h], 1, 1, ()=>{
              a[h] = null
          }
          ),
          nr(),
          r = a[e],
          r ? r.p(f, u) : (r = a[e] = i[e](f),
          r.c()),
          E(r, 1),
          r.m(n.parentNode, n))
      },
      i(f) {
          s || (E(r),
          s = !0)
      },
      o(f) {
          S(r),
          s = !1
      },
      d(f) {
          a[e].d(f),
          f && z(n)
      }
  }
}
function co(t) {
  let e;
  const r = t[10].default
    , n = Jn(r, t, t[9], Dr);
  return {
      c() {
          n && n.c()
      },
      m(s, i) {
          n && n.m(s, i),
          e = !0
      },
      p(s, i) {
          n && n.p && (!e || i & 532) && Xn(n, r, s, s[9], e ? Qn(r, s[9], i, lo) : Zn(s[9]), Dr)
      },
      i(s) {
          e || (E(n, s),
          e = !0)
      },
      o(s) {
          S(n, s),
          e = !1
      },
      d(s) {
          n && n.d(s)
      }
  }
}
function uo(t) {
  let e, r, n;
  const s = [{
      location: t[4]
  }, t[2], t[3]];
  var i = t[0];
  function a(d) {
      let f = {};
      for (let u = 0; u < s.length; u += 1)
          f = Bt(f, s[u]);
      return {
          props: f
      }
  }
  return i && (e = Rr(i, a())),
  {
      c() {
          e && O(e.$$.fragment),
          r = er()
      },
      m(d, f) {
          e && A(e, d, f),
          V(d, r, f),
          n = !0
      },
      p(d, f) {
          const u = f & 28 ? es(s, [f & 16 && {
              location: d[4]
          }, f & 4 && Ir(d[2]), f & 8 && Ir(d[3])]) : {};
          if (i !== (i = d[0])) {
              if (e) {
                  tr();
                  const h = e;
                  S(h.$$.fragment, 1, 0, ()=>{
                      T(h, 1)
                  }
                  ),
                  nr()
              }
              i ? (e = Rr(i, a()),
              O(e.$$.fragment),
              E(e.$$.fragment, 1),
              A(e, r.parentNode, r)) : e = null
          } else
              i && e.$set(u)
      },
      i(d) {
          n || (e && E(e.$$.fragment, d),
          n = !0)
      },
      o(d) {
          e && S(e.$$.fragment, d),
          n = !1
      },
      d(d) {
          d && z(r),
          e && T(e, d)
      }
  }
}
function fo(t) {
  let e, r, n = t[1] !== null && t[1].route === t[7] && Pr(t);
  return {
      c() {
          n && n.c(),
          e = er()
      },
      m(s, i) {
          n && n.m(s, i),
          V(s, e, i),
          r = !0
      },
      p(s, [i]) {
          s[1] !== null && s[1].route === s[7] ? n ? (n.p(s, i),
          i & 2 && E(n, 1)) : (n = Pr(s),
          n.c(),
          E(n, 1),
          n.m(e.parentNode, e)) : n && (tr(),
          S(n, 1, 1, ()=>{
              n = null
          }
          ),
          nr())
      },
      i(s) {
          r || (E(n),
          r = !0)
      },
      o(s) {
          S(n),
          r = !1
      },
      d(s) {
          n && n.d(s),
          s && z(e)
      }
  }
}
function ho(t, e, r) {
  let n, s, {$$slots: i={}, $$scope: a} = e, {path: d=""} = e, {component: f=null} = e;
  const {registerRoute: u, unregisterRoute: h, activeRoute: $} = Jt(An);
  Ht(t, $, R=>r(1, n = R));
  const m = Jt(xn);
  Ht(t, m, R=>r(4, s = R));
  const y = {
      path: d,
      default: d === ""
  };
  let v = {}
    , w = {};
  return u(y),
  typeof window < "u" && Ds(()=>{
      h(y)
  }
  ),
  t.$$set = R=>{
      r(13, e = Bt(Bt({}, e), Bn(R))),
      "path"in R && r(8, d = R.path),
      "component"in R && r(0, f = R.component),
      "$$scope"in R && r(9, a = R.$$scope)
  }
  ,
  t.$$.update = ()=>{
      t.$$.dirty & 2 && n && n.route === y && r(2, v = n.params);
      {
          const {path: R, component: C, ...L} = e;
          r(3, w = L)
      }
  }
  ,
  e = Bn(e),
  [f, n, v, w, s, $, m, y, d, a, i]
}
class W extends Ye {
  constructor(e) {
      super(),
      je(this, e, ho, fo, Ue, {
          path: 8,
          component: 0
      })
  }
}
function po(t) {
  let e, r, n, s;
  const i = t[16].default
    , a = Jn(i, t, t[15], null);
  let d = [{
      href: t[0]
  }, {
      "aria-current": t[2]
  }, t[1], t[6]]
    , f = {};
  for (let u = 0; u < d.length; u += 1)
      f = Bt(f, d[u]);
  return {
      c() {
          e = c("a"),
          a && a.c(),
          Or(e, f)
      },
      m(u, h) {
          V(u, e, h),
          a && a.m(e, null),
          r = !0,
          n || (s = xt(e, "click", t[5]),
          n = !0)
      },
      p(u, [h]) {
          a && a.p && (!r || h & 32768) && Xn(a, i, u, u[15], r ? Qn(i, u[15], h, null) : Zn(u[15]), null),
          Or(e, f = es(d, [(!r || h & 1) && {
              href: u[0]
          }, (!r || h & 4) && {
              "aria-current": u[2]
          }, h & 2 && u[1], h & 64 && u[6]]))
      },
      i(u) {
          r || (E(a, u),
          r = !0)
      },
      o(u) {
          S(a, u),
          r = !1
      },
      d(u) {
          u && z(e),
          a && a.d(u),
          n = !1,
          s()
      }
  }
}
function mo(t, e, r) {
  let n;
  const s = ["to", "replace", "state", "getProps"];
  let i = Tr(e, s), a, d, {$$slots: f={}, $$scope: u} = e, {to: h="#"} = e, {replace: $=!1} = e, {state: m={}} = e, {getProps: y=()=>({})} = e;
  const {base: v} = Jt(An);
  Ht(t, v, N=>r(14, d = N));
  const w = Jt(xn);
  Ht(t, w, N=>r(13, a = N));
  const R = Ps();
  let C, L, I, x;
  function F(N) {
      if (R("click", N),
      so(N)) {
          N.preventDefault();
          const q = a.pathname === C || $;
          Vs(C, {
              state: m,
              replace: q
          })
      }
  }
  return t.$$set = N=>{
      e = Bt(Bt({}, e), Bn(N)),
      r(6, i = Tr(e, s)),
      "to"in N && r(7, h = N.to),
      "replace"in N && r(8, $ = N.replace),
      "state"in N && r(9, m = N.state),
      "getProps"in N && r(10, y = N.getProps),
      "$$scope"in N && r(15, u = N.$$scope)
  }
  ,
  t.$$.update = ()=>{
      t.$$.dirty & 16512 && r(0, C = h === "/" ? d.uri : ro(h, d.uri)),
      t.$$.dirty & 8193 && r(11, L = Yn(a.pathname, C)),
      t.$$.dirty & 8193 && r(12, I = C === a.pathname),
      t.$$.dirty & 4096 && r(2, n = I ? "page" : void 0),
      t.$$.dirty & 15361 && r(1, x = y({
          location: a,
          href: C,
          isPartiallyCurrent: L,
          isCurrent: I
      }))
  }
  ,
  [C, x, n, v, w, F, i, h, $, m, y, L, I, a, d, u, f]
}
class Mt extends Ye {
  constructor(e) {
      super(),
      je(this, e, mo, po, Ue, {
          to: 7,
          replace: 8,
          state: 9,
          getProps: 10
      })
  }
}
const go = "/assets/Fluxus_N8qYfLrYAx.940087af.png"
, bo = "/assets/aui.e7fed0d6.png"
, $o = "/assets/faviconbutpng.e3767602.png"
, X = "";
let At = (localStorage.getItem("lang") || navigator.language || navigator.userLanguage || "en-US").toLowerCase();
const Qt = {
  de: {
      "A Fresh": "Ein Besseres",
      "IDE Experience.": "IDE Erlebnis.",
      "A powerful IDE": "Un\xFCbertroffene Leistung, Unschlagbarer Preis",
      "Download now": "Jezt Herunterladen",
      "Scroll down for more": "Nach unten gibt's mehr",
      "A Minimalistic UI": "Ein Minimalistisches UI",
      "Useless features shouldn't take up your entire screen.": "Nutzlose features sollen nicht extrem viel platz verbrauchen.",
      "Only the most essential features are on the main UI - anything extra is just one more click away.": "Nur die essentials sind auf dem main UI - alles anderes ist nur ein weiteren click weg.",
      Fast: "Schnell",
      "Advanced IDE": "Fortschrittliche IDE",
      "Secure & Undetectable": "Sicher & Undetektiert",
      Reliable: "Zuverl\xE4ssig",
      Reputable: "Anerkannt",
      "Fast Updates": "Schnelle Updates",
      "On all supported platforms, Fluxus performs significantly better than the competition.": "Auf allen unterst\xFCtzten Plattformen liefert Fluxus eine deutlich bessere Leistung als andere IDE.",
      "The Fluxus IDE is amongst one of the most advanced on the market.": "Die Fluxus-IDE ist eine der am weitesten fortgeschrittenen auf dem Markt.",
      "We have a great track record of patching all known vulnerabilities quickly.": "Wir haben eine gro\xDFartige Erfolgsquote bei der schnellen Behebung aller bekannten Schwachstellen und Detektionen.",
      "Our Advanced Execution Core is extremely reliable.": "Unser komplexer Ausf\xFChrungskern ist \xE4u\xDFerst zuverl\xE4ssig und erm\xF6glicht die einwandfreie Ausf\xFChrung der meisten Scripts.",
      "During the past YEARCOUNT years, we've established a reputation as industry leaders.": "Innerhalb den Letzten YEARCOUNT Jahren haben wir eine Reputation als Industry Leaders erarbeitet",
      "No more waiting for updates: Most of the time, Fluxus updates within under an hour.": "Nie mehr f\xFCr Updates warten: Fluxus updatet fast immer innerhalb unter einer Stunde!",
      "\u200B\u200B\u200B\u200B\u200B\u200B": "Das",
      "\u200B\u200B\u200B\u200B\u200BT\u200Bh\u200Be": "Beste",
      "IDE for mobile.": "IDE f\xFCr Android.",
      "Fluxus Android brings the Premium IDE": "Fluxus Android liefert das Premium IDE-Erlebnis",
      "Experience to your pocket. For free.": "direkt in deine Tasche. 100% Gratis.",
      "Get Fluxus Android": "Sofort Probieren",
      "Download Fluxus Windows/Linux": "Fluxus f\xFCr Windows Herunterladen",
      "Note: The above contain advertisements. Please be aware of these before you continue.": "Hinweis: Die folgenden Seiten enthalten Werbung. Bitte beachten Sie diese, bevor Sie fortfahren.",
      "Need Help?": "Brauchen Sie Hilfe?",
      "https://www.youtube.com/embed/MqBjGEo289Q": "https://www.youtube.com/embed/MqBjGEo289Q",
      "A Unique Mobile Experience.": "Ein Einzigartiges Mobile Erlebnis.",
      "Crafted by industry leaders, Fluxus Android is the ultimate IDE experience for your pocket.": "Von Industrief\xFChrern entwickelt, Fluxus Android ist das ultimative Client IDE-Erlebnis f\xFCr die Hosentasche.",
      Features: "Besonderheiten",
      "Why pick Fluxus Android?": "Warum Fluxus Android?",
      Performant: "Leistungsf\xE4hig",
      "Fluxus Android is FAST!": "Fluxus Android ist SCHNELL!",
      "Extensive APIs": "Umfangsreiche APIs",
      "Fluxus has many custom APIs, allowing you to do things like integrate into the main UI. You can click here for documentation.": "Fluxus enth\xE4lt viele einzelartige APIs, die es Ihnen erleichtern, bessere Scripts zu entwickeln.",
      "Short Key System": "Kurzes Key-System",
      "Our Key System is very short and long lasting!": "Unser Schl\xFCsselsystem ist sehr kurz und langlebig!",
      "UNC-Support": "UNC-Support",
      "We support a significant portion of UNC!": "Wir unterst\xFCtzen einen erheblichen Teil von UNC!",
      "Fluxus Quality": "Fluxus Qualit\xE4t",
      "We make sure every product of ours is extremely high-quality, giving you the ultimate experience.": "Wir stellen sicher, dass jedes unserer Produkte von h\xF6chster Qualit\xE4t ist, um Ihnen das ultimative Erlebnis zu erm\xF6glichen.",
      "No more waiting for updates; Most of the time, Fluxus Android updates within under an hour.": "Nie wieder auf Updates warten: Fluxus Android aktualisiert sich normalerweise innerhalb von unter einer Stunde.",
      Installation: "Installation",
      Instructions: "Anleitungen",
      Help: "Hilfe",
      "Having issues with Fluxus Android? Try the": "Probleme mit der Fluxus Android Installation? Probieren Sie die",
      "Legacy Installation": "Legacy Installation",
      "in our discord": "in unserem Discord",
      "to skip the key system.": "kaufen, um das Key System zu \xFCberspringen.",
      Download: "Herunterladen",
      Android: "Android",
      Discord: "Discord",
      "Is Fluxus Android not working?": "Funktioniert die Fluxus Legacy Installation nicht?",
      "Try this legacy installation method instead.": 'Versuchen Sie diese "Legacy"-Installationsmethode',
      "Installation Instructions": "Anleitungen",
      Resources: "Ressourcen",
      "Make sure you delete the arm64-v8a folder and install libFluxusAndroid.so into armeabi-v7a! If you forget this, your application will crash.": "Stellen Sie sicher, dass Sie den Ordner arm64-v8a l\xF6schen und libFluxusAndroid.so in armeabi-v7a installieren! Wenn Sie dies vergessen, wird Ihr Client abst\xFCrzen.",
      "P.S. If you need help": "P.S. Falls Sie Hilfe brauchen, k\xF6nnen sie ein Ticket \xF6ffnen in unserem",
      "join our discord server": "Discord Server"
  },
  nl: {},
  en: {
      "\u200B\u200B\u200B\u200B\u200BT\u200Bh\u200Be": "The"
  }
};
!Qt[At] && Qt[At.split("-").shift()] && (At = At.split("-").shift());
const vo = !!Qt[At];
var Kr;
Qt[At] = (Kr = Qt[At]) != null ? Kr : {};
const k = t=>{
  const e = Qt[At][t];
  return !e && vo && At !== "en" && console.warn(`No translation for '${t}'`),
  e != null ? e : t
}
;
function wo(t) {
  let e, r;
  return {
      c() {
          e = c("span"),
          e.textContent = `${k("Download now")}`,
          r = c("span"),
          r.textContent = "arrow_forward_ios",
          l(e, "class", "text"),
          l(r, "class", "material-symbols-outlined icon")
      },
      m(n, s) {
          V(n, e, s),
          V(n, r, s)
      },
      p: P,
      d(n) {
          n && z(e),
          n && z(r)
      }
  }
}
function yo(t) {
  let e, r, n, s;
  return {
      c() {
          e = c("span"),
          r = c("span"),
          r.textContent = `${k("Get Fluxus Android")}`,
          n = p(),
          s = c("span"),
          s.textContent = "arrow_forward_ios",
          l(r, "class", "text"),
          l(e, "class", "nomobile"),
          l(s, "class", "material-symbols-outlined icon")
      },
      m(i, a) {
          V(i, e, a),
          o(e, r),
          o(e, n),
          V(i, s, a)
      },
      p: P,
      d(i) {
          i && z(e),
          i && z(s)
      }
  }
}
function _o(t) {
  let e, r, n, s, i, a, d, f, u, h = k("A Fresh") + "", $, m, y = k("IDE Experience.") + "", v, w, R, C = k("A powerful IDE") + "", L, I, x, F, N, q, oe, Z, $e, K, pe, ve, He, M, ee, B, ze, me, ie, te, j, J, ot = k("Useless features shouldn't take up your entire screen.") + "", ne, Te, Y, Ve = k("Only the most essential features are on the main UI - anything extra is just one more click away.") + "", _e, Me, ae, U, ue, xe, de, Ee, Q, G, re, Ge, ge, Ae, le, Oe, se, Re, fe, we, he, ke, Ne, Be, b, _, it, Ke, at, Rt, We, Ce, Ie, yt, ft, Je, Qe, lt, Xe, ct, kt, Fe, qe, Ze, Le, _t, ht, ut, Se, De, pt, mt, gt, bt, ye, Pe, Nt, et, tn, dt, Ct, Dt, nn, tt, Et, $t, qt, nt, St, rn, jt, Yt, ur, dr, rt, Pt, Os = k("\u200B\u200B\u200B\u200B\u200B\u200B") + "", fr, hr, sn, pr, Rs = k("IDE for mobile.") + "", mr, gr, zt, ks = k("Fluxus Android brings the Premium IDE") + "", br, $r, vr, Ns = k("Experience to your pocket. For free.") + "", wr, yr, _r, Er, It, gn;
  return N = new Mt({
      props: {
          to: X + "/" + (navigator.userAgent.includes("Android") ? "android" : "dl"),
          class: "active",
          $$slots: {
              default: [wo]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  It = new Mt({
      props: {
          to: X + "/android",
          class: "active",
          $$slots: {
              default: [yo]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  It.$on("click", t[1]),
  {
      c() {
          e = c("main"),
          r = c("div"),
          n = c("div"),
          s = c("img"),
          a = p(),
          d = c("div"),
          f = c("h1"),
          u = c("span"),
          $ = ce(h),
          m = c("br"),
          v = ce(y),
          w = p(),
          R = c("p"),
          L = ce(C),
          I = c("br"),
          x = ce("\u200B"),
          F = p(),
          O(N.$$.fragment),
          q = p(),
          oe = c("div"),
          Z = c("p"),
          Z.textContent = `${k("Scroll down for more")}`,
          $e = p(),
          K = vt("svg"),
          pe = vt("path"),
          ve = p(),
          He = c("div"),
          M = c("div"),
          ee = c("div"),
          B = c("img"),
          me = p(),
          ie = c("div"),
          te = c("h1"),
          te.textContent = `${k("A Minimalistic UI")}`,
          j = p(),
          J = c("p"),
          ne = ce(ot),
          Te = c("br"),
          Y = p(),
          _e = ce(Ve),
          Me = p(),
          ae = c("div"),
          U = c("div"),
          ue = c("div"),
          xe = c("div"),
          de = c("div"),
          de.innerHTML = '<i class="fa-solid fa-bolt"></i>',
          Ee = p(),
          Q = c("div"),
          G = c("div"),
          re = c("div"),
          Ge = c("h3"),
          Ge.textContent = `${k("Fast")}`,
          ge = p(),
          Ae = c("h4"),
          Ae.textContent = `${k("On all supported platforms, Fluxus performs significantly better than the competition.")}`,
          le = p(),
          Oe = c("div"),
          se = c("div"),
          Re = c("div"),
          Re.innerHTML = '<i class="fa-solid fa-code"></i>',
          fe = p(),
          we = c("div"),
          he = c("div"),
          ke = c("div"),
          Ne = c("h3"),
          Ne.textContent = `${k("Advanced IDE")}`,
          Be = p(),
          b = c("h4"),
          b.textContent = `${k("The Fluxus IDE is amongst one of the most advanced on the market.")}`,
          _ = p(),
          it = c("div"),
          Ke = c("div"),
          at = c("div"),
          at.innerHTML = '<i class="fa-solid fa-lock"></i>',
          Rt = p(),
          We = c("div"),
          Ce = c("div"),
          Ie = c("div"),
          yt = c("h3"),
          yt.textContent = `${k("Secure & Undetectable")}`,
          ft = p(),
          Je = c("h4"),
          Je.textContent = `${k("We have a great track record of patching all known vulnerabilities quickly.")}`,
          Qe = p(),
          lt = c("div"),
          Xe = c("div"),
          ct = c("div"),
          ct.innerHTML = '<i class="fa-solid fa-plus"></i>',
          kt = p(),
          Fe = c("div"),
          qe = c("div"),
          Ze = c("div"),
          Le = c("h3"),
          Le.textContent = `${k("Reliable")}`,
          _t = p(),
          ht = c("h4"),
          ht.textContent = `${k("Our Advanced Execution Core is extremely reliable.")}`,
          ut = p(),
          Se = c("div"),
          De = c("div"),
          pt = c("div"),
          pt.innerHTML = '<i class="fa-solid fa-handshake"></i>',
          mt = p(),
          gt = c("div"),
          bt = c("div"),
          ye = c("div"),
          Pe = c("h3"),
          Pe.textContent = `${k("Reputable")}`,
          Nt = p(),
          et = c("h4"),
          et.textContent = `${k("During the past YEARCOUNT years, we've established a reputation as industry leaders.").replace("YEARCOUNT", (new Date().getUTCFullYear() - 2019).toString())}`,
          tn = p(),
          dt = c("div"),
          Ct = c("div"),
          Dt = c("div"),
          Dt.innerHTML = '<i class="fa-solid fa-circle-up"></i>',
          nn = p(),
          tt = c("div"),
          Et = c("div"),
          $t = c("div"),
          qt = c("h3"),
          qt.textContent = `${k("Fast Updates")}`,
          nt = p(),
          St = c("h4"),
          St.textContent = `${k("No more waiting for updates: Most of the time, Fluxus updates within under an hour.")}`,
          rn = p(),
          jt = c("div"),
          Yt = c("img"),
          dr = p(),
          rt = c("div"),
          Pt = c("h1"),
          fr = ce(Os),
          hr = p(),
          sn = c("underline"),
          sn.textContent = `${k("\u200B\u200B\u200B\u200B\u200BT\u200Bh\u200Be")}`,
          pr = p(),
          mr = ce(Rs),
          gr = p(),
          zt = c("p"),
          br = ce(ks),
          $r = c("br"),
          vr = p(),
          wr = ce(Ns),
          yr = p(),
          _r = c("br"),
          Er = p(),
          O(It.$$.fragment),
          Kt(s.src, i = $o) || l(s, "src", i),
          l(s, "alt", "Icon"),
          l(u, "class", "c"),
          l(f, "class", "rev"),
          l(R, "class", "\u{1F44C}\u{1F44C}\u{1F44C} \u{1F44C}"),
          l(d, "class", "content"),
          l(n, "class", "container"),
          H(Z, "margin-bottom", "-0.4em"),
          l(pe, "d", "m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"),
          l(K, "xmlns", "http://www.w3.org/2000/svg"),
          l(K, "height", "48"),
          l(K, "width", "48"),
          l(K, "fill", "#ddddddaa"),
          l(oe, "class", "putmeonthebottom this is why September11th2001 happened svelte-1aa1trm"),
          l(oe, "style", t[0] ? "display:none" : ""),
          l(r, "class", "page1"),
          Kt(B.src, ze = go) || l(B, "src", ze),
          l(B, "alt", "Fuuuuuuuuuuuuuuuuuuux \u{1F92F} UI"),
          l(B, "style", t[0] ? "display:none" : ""),
          l(ee, "class", "ui"),
          l(ie, "class", "centerme"),
          l(M, "class", "inner"),
          l(He, "class", "page2"),
          l(de, "class", "card-image"),
          l(Ae, "class", "svelte-1aa1trm"),
          l(re, "class", "card-info-title"),
          l(G, "class", "card-info"),
          l(Q, "class", "card-info-wrapper"),
          l(xe, "class", "card-content"),
          l(ue, "class", "card"),
          l(Re, "class", "card-image"),
          l(b, "class", "svelte-1aa1trm"),
          l(ke, "class", "card-info-title"),
          l(he, "class", "card-info"),
          l(we, "class", "card-info-wrapper"),
          l(se, "class", "card-content"),
          l(Oe, "class", "card"),
          l(at, "class", "card-image"),
          l(Je, "class", "svelte-1aa1trm"),
          l(Ie, "class", "card-info-title"),
          l(Ce, "class", "card-info"),
          l(We, "class", "card-info-wrapper"),
          l(Ke, "class", "card-content"),
          l(it, "class", "card"),
          l(ct, "class", "card-image"),
          l(ht, "class", "svelte-1aa1trm"),
          l(Ze, "class", "card-info-title"),
          l(qe, "class", "card-info"),
          l(Fe, "class", "card-info-wrapper"),
          l(Xe, "class", "card-content"),
          l(lt, "class", "card"),
          l(pt, "class", "card-image"),
          l(et, "class", "svelte-1aa1trm"),
          l(ye, "class", "card-info-title"),
          l(bt, "class", "card-info"),
          l(gt, "class", "card-info-wrapper"),
          l(De, "class", "card-content"),
          l(Se, "class", "card"),
          l(Dt, "class", "card-image"),
          l(St, "class", "svelte-1aa1trm"),
          l($t, "class", "card-info-title"),
          l(Et, "class", "card-info"),
          l(tt, "class", "card-info-wrapper"),
          l(Ct, "class", "card-content"),
          l(dt, "class", "card"),
          l(U, "class", "cards"),
          l(ae, "class", "page3 svelte-1aa1trm"),
          Kt(Yt.src, ur = bo) || l(Yt, "src", ur),
          l(Yt, "alt", ""),
          l(Yt, "class", "this is where you can find the two trillion dollars lost on September10th2001 svelte-1aa1trm"),
          H(sn, "text-decoration", "underline"),
          H(sn, "text-decoration-color", "#705d8f"),
          l(rt, "class", "ok svelte-1aa1trm"),
          H(rt, "position", "relative"),
          H(rt, "z-index", "50"),
          l(jt, "class", "page4"),
          l(e, "class", "index")
      },
      m(st, Vt) {
          V(st, e, Vt),
          o(e, r),
          o(r, n),
          o(n, s),
          o(n, a),
          o(n, d),
          o(d, f),
          o(f, u),
          o(u, $),
          o(u, m),
          o(u, v),
          o(d, w),
          o(d, R),
          o(R, L),
          o(R, I),
          o(R, x),
          o(d, F),
          A(N, d, null),
          o(r, q),
          o(r, oe),
          o(oe, Z),
          o(oe, $e),
          o(oe, K),
          o(K, pe),
          o(e, ve),
          o(e, He),
          o(He, M),
          o(M, ee),
          o(ee, B),
          o(M, me),
          o(M, ie),
          o(ie, te),
          o(ie, j),
          o(ie, J),
          o(J, ne),
          o(J, Te),
          o(J, Y),
          o(J, _e),
          o(e, Me),
          o(e, ae),
          o(ae, U),
          o(U, ue),
          o(ue, xe),
          o(xe, de),
          o(xe, Ee),
          o(xe, Q),
          o(Q, G),
          o(G, re),
          o(re, Ge),
          o(re, ge),
          o(re, Ae),
          o(U, le),
          o(U, Oe),
          o(Oe, se),
          o(se, Re),
          o(se, fe),
          o(se, we),
          o(we, he),
          o(he, ke),
          o(ke, Ne),
          o(ke, Be),
          o(ke, b),
          o(U, _),
          o(U, it),
          o(it, Ke),
          o(Ke, at),
          o(Ke, Rt),
          o(Ke, We),
          o(We, Ce),
          o(Ce, Ie),
          o(Ie, yt),
          o(Ie, ft),
          o(Ie, Je),
          o(U, Qe),
          o(U, lt),
          o(lt, Xe),
          o(Xe, ct),
          o(Xe, kt),
          o(Xe, Fe),
          o(Fe, qe),
          o(qe, Ze),
          o(Ze, Le),
          o(Ze, _t),
          o(Ze, ht),
          o(U, ut),
          o(U, Se),
          o(Se, De),
          o(De, pt),
          o(De, mt),
          o(De, gt),
          o(gt, bt),
          o(bt, ye),
          o(ye, Pe),
          o(ye, Nt),
          o(ye, et),
          o(U, tn),
          o(U, dt),
          o(dt, Ct),
          o(Ct, Dt),
          o(Ct, nn),
          o(Ct, tt),
          o(tt, Et),
          o(Et, $t),
          o($t, qt),
          o($t, nt),
          o($t, St),
          o(e, rn),
          o(e, jt),
          o(jt, Yt),
          o(jt, dr),
          o(jt, rt),
          o(rt, Pt),
          o(Pt, fr),
          o(Pt, hr),
          o(Pt, sn),
          o(Pt, pr),
          o(Pt, mr),
          o(rt, gr),
          o(rt, zt),
          o(zt, br),
          o(zt, $r),
          o(zt, vr),
          o(zt, wr),
          o(rt, yr),
          o(rt, _r),
          o(rt, Er),
          A(It, rt, null),
          gn = !0
      },
      p(st, [Vt]) {
          const Sr = {};
          Vt & 4 && (Sr.$$scope = {
              dirty: Vt,
              ctx: st
          }),
          N.$set(Sr);
          const xr = {};
          Vt & 4 && (xr.$$scope = {
              dirty: Vt,
              ctx: st
          }),
          It.$set(xr)
      },
      i(st) {
          gn || (E(N.$$.fragment, st),
          E(It.$$.fragment, st),
          gn = !0)
      },
      o(st) {
          S(N.$$.fragment, st),
          S(It.$$.fragment, st),
          gn = !1
      },
      d(st) {
          st && z(e),
          T(N),
          T(It)
      }
  }
}
function Eo(t) {
  return [navigator.userAgent.includes("iPhone"), ()=>{
      window.scrollTo(0, 0)
  }
  ]
}
class ss extends Ye {
  constructor(e) {
      super(),
      je(this, e, Eo, _o, Ue, {})
  }
}
const So = "/assets/logo.7f3bfbd3.png";
function xo(t) {
  let e = k("Legacy Installation") + "", r;
  return {
      c() {
          r = ce(e)
      },
      m(n, s) {
          V(n, r, s)
      },
      p: P,
      d(n) {
          n && z(r)
      }
  }
}
function Ao(t) {
  let e, r, n, s, i, a, d, f, u, h, $, m, y, v, w, R, C, L, I, x, F, N, q, oe, Z, $e, K, pe, ve, He, M, ee, B, ze, me, ie, te, j, J, ot, ne, Te, Y, Ve, _e, Me, ae, U, ue, xe, de, Ee, Q, G, re, Ge, ge, Ae, le, Oe, se, Re, fe, we, he, ke, Ne, Be, b, _, it, Ke, at, Rt, We, Ce, Ie, yt, ft, Je, Qe, lt, Xe, ct, kt, Fe, qe, Ze, Le, _t, ht, ut, Se, De, pt, mt, gt, bt, ye, Pe, Nt, et, tn, dt, Ct = k("Having issues with Fluxus Android? Try the") + "", Dt, nn, tt, Et, $t, qt;
  return tt = new Mt({
      props: {
          to: X + "/android/legacy",
          $$slots: {
              default: [xo]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  {
      c() {
          e = c("main"),
          r = c("div"),
          n = c("div"),
          s = c("h1"),
          s.textContent = `${k("A Unique Mobile Experience.")}`,
          i = p(),
          a = c("p"),
          a.textContent = `${k("Crafted by industry leaders, Fluxus Android is the ultimate IDE experience for your pocket.")}`,
          d = p(),
          f = c("div"),
          u = c("p"),
          u.textContent = `${k("Features")}`,
          h = p(),
          $ = vt("svg"),
          m = vt("path"),
          y = p(),
          v = c("div"),
          w = c("div"),
          R = c("h1"),
          R.textContent = `${k("Why pick Fluxus Android?")}`,
          C = p(),
          L = c("div"),
          I = c("div"),
          x = c("div"),
          F = c("div"),
          N = c("div"),
          N.innerHTML = '<i class="fa-solid fa-bolt"></i>',
          q = p(),
          oe = c("div"),
          Z = c("div"),
          $e = c("div"),
          K = c("h3"),
          K.textContent = `${k("Performant")}`,
          pe = p(),
          ve = c("h4"),
          ve.textContent = `${k("Fluxus Android is FAST!")}`,
          He = p(),
          M = c("div"),
          ee = c("div"),
          B = c("div"),
          B.innerHTML = '<i class="fa-solid fa-code"></i>',
          ze = p(),
          me = c("div"),
          ie = c("div"),
          te = c("div"),
          j = c("h3"),
          j.textContent = `${k("Extensive APIs")}`,
          J = p(),
          ot = c("h4"),
          ot.textContent = `${k("Fluxus has many custom APIs, allowing you to do things like integrate into the main UI. You can click here for documentation.")}`,
          ne = p(),
          Te = c("div"),
          Y = c("div"),
          Ve = c("div"),
          Ve.innerHTML = '<i class="fa-solid fa-key"></i>',
          _e = p(),
          Me = c("div"),
          ae = c("div"),
          U = c("div"),
          ue = c("h3"),
          ue.textContent = `${k("Short Key System")}`,
          xe = p(),
          de = c("h4"),
          de.textContent = `${k("Our Key System consists of only three linkvertises, and keys last 24 hours! You can also buy Premium to remove the key system!")}`,
          Ee = p(),
          Q = c("div"),
          G = c("div"),
          re = c("div"),
          re.innerHTML = '<i class="fa-solid fa-check"></i>',
          Ge = p(),
          ge = c("div"),
          Ae = c("div"),
          le = c("div"),
          Oe = c("h3"),
          Oe.textContent = `${k("UNC-Support")}`,
          se = p(),
          Re = c("h4"),
          Re.textContent = `${k("We support a significant portion of UNC!")}`,
          fe = p(),
          we = c("div"),
          he = c("div"),
          ke = c("div"),
          ke.innerHTML = '<i class="fa-solid fa-handshake"></i>',
          Ne = p(),
          Be = c("div"),
          b = c("div"),
          _ = c("div"),
          it = c("h3"),
          it.textContent = `${k("Fluxus Quality")}`,
          Ke = p(),
          at = c("h4"),
          at.textContent = `${k("We make sure every product of ours is extremely high-quality, giving you the ultimate experience.")}`,
          Rt = p(),
          We = c("div"),
          Ce = c("div"),
          Ie = c("div"),
          Ie.innerHTML = '<i class="fa-solid fa-circle-up"></i>',
          yt = p(),
          ft = c("div"),
          Je = c("div"),
          Qe = c("div"),
          lt = c("h3"),
          lt.textContent = `${k("Fast Updates")}`,
          Xe = p(),
          ct = c("h4"),
          ct.textContent = `${k("No more waiting for updates; Most of the time, Fluxus Android updates within under an hour.")}`,
          kt = p(),
          Fe = c("div"),
          qe = c("p"),
          qe.textContent = `${k("Installation")}`,
          Ze = p(),
          Le = vt("svg"),
          _t = vt("path"),
          ht = p(),
          ut = c("div"),
          Se = c("div"),
          De = c("h1"),
          De.textContent = `${k("Installation")}`,
          pt = p(),
          mt = c("p"),
          mt.innerHTML = `WARNING:<br/>
    Using Fluxus to violate any software terms of service is strictly against our terms. Fluxus should only be used as an IDE and debugger. Using Fluxus for anything else can and will result in a blacklist.
    `,
          gt = c("br"),
          bt = p(),
          ye = c("div"),
          Pe = c("a"),
          Pe.textContent = "Fluxus APK",
          Nt = p(),
          et = c("a"),
          et.textContent = `${k("Help")}`,
          tn = p(),
          dt = c("p"),
          Dt = ce(Ct),
          nn = p(),
          O(tt.$$.fragment),
          l(s, "class", "svelte-1sreneh"),
          l(a, "class", "svelte-1sreneh"),
          l(n, "class", "svelte-1sreneh"),
          H(u, "margin-bottom", "-0.4em"),
          l(u, "class", "svelte-1sreneh"),
          l(m, "d", "m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"),
          l($, "xmlns", "http://www.w3.org/2000/svg"),
          l($, "height", "48"),
          l($, "width", "48"),
          l($, "fill", "#ddddddaa"),
          l(f, "class", "putmeonthebottom svelte-1sreneh"),
          l(r, "class", "p1 svelte-1sreneh"),
          l(r, "id", "android-normal-top"),
          l(R, "class", "svelte-1sreneh"),
          l(N, "class", "card-image"),
          l($e, "class", "card-info-title"),
          l(Z, "class", "card-info"),
          l(oe, "class", "card-info-wrapper"),
          l(F, "class", "card-content"),
          l(x, "class", "card"),
          H(x, "cursor", "auto"),
          l(B, "class", "card-image"),
          l(te, "class", "card-info-title"),
          l(ie, "class", "card-info"),
          l(me, "class", "card-info-wrapper"),
          l(ee, "class", "card-content"),
          l(M, "class", "card"),
          l(Ve, "class", "card-image"),
          l(U, "class", "card-info-title"),
          l(ae, "class", "card-info"),
          l(Me, "class", "card-info-wrapper"),
          l(Y, "class", "card-content"),
          l(Te, "class", "card"),
          H(Te, "cursor", "auto"),
          l(re, "class", "card-image"),
          l(le, "class", "card-info-title"),
          l(Ae, "class", "card-info"),
          l(ge, "class", "card-info-wrapper"),
          l(G, "class", "card-content"),
          l(Q, "class", "card"),
          l(ke, "class", "card-image"),
          l(_, "class", "card-info-title"),
          l(b, "class", "card-info"),
          l(Be, "class", "card-info-wrapper"),
          l(he, "class", "card-content"),
          l(we, "class", "card"),
          H(we, "cursor", "auto"),
          l(Ie, "class", "card-image"),
          l(Qe, "class", "card-info-title"),
          l(Je, "class", "card-info"),
          l(ft, "class", "card-info-wrapper"),
          l(Ce, "class", "card-content"),
          l(We, "class", "card"),
          H(We, "cursor", "auto"),
          l(I, "class", "cards svelte-1sreneh"),
          H(L, "display", "flex"),
          H(L, "margin-bottom", "40px"),
          l(L, "class", "cardcont"),
          H(qe, "margin-bottom", "-0.4em"),
          l(qe, "class", "svelte-1sreneh"),
          l(_t, "d", "m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"),
          l(Le, "xmlns", "http://www.w3.org/2000/svg"),
          l(Le, "height", "48"),
          l(Le, "width", "48"),
          l(Le, "fill", "#ddddddaa"),
          l(Fe, "class", "putmeonthebottom svelte-1sreneh"),
          l(v, "class", "p2 svelte-1sreneh"),
          l(v, "id", "android-normal-feature-list"),
          l(De, "class", "svelte-1sreneh"),
          l(mt, "class", "svelte-1sreneh"),
          l(Pe, "href", "https://linkvertise.com/530799/fluxus-android-download/1"),
          l(Pe, "target", "_blank"),
          l(Pe, "rel", "noopener noreferrer"),
          l(Pe, "class", "yesbtn svelte-1sreneh"),
          l(et, "href", "https://flux.li/discord.php"),
          l(et, "target", "_blank"),
          l(et, "rel", "noopener noreferrer"),
          l(et, "class", "yesbtn svelte-1sreneh"),
          l(dt, "class", "svelte-1sreneh"),
          l(ut, "class", "p3 svelte-1sreneh"),
          l(ut, "id", "android-normal-installation-resources"),
          l(e, "class", "svelte-1sreneh")
      },
      m(nt, St) {
          V(nt, e, St),
          o(e, r),
          o(r, n),
          o(n, s),
          o(n, i),
          o(n, a),
          o(r, d),
          o(r, f),
          o(f, u),
          o(f, h),
          o(f, $),
          o($, m),
          o(e, y),
          o(e, v),
          o(v, w),
          o(w, R),
          o(w, C),
          o(w, L),
          o(L, I),
          o(I, x),
          o(x, F),
          o(F, N),
          o(F, q),
          o(F, oe),
          o(oe, Z),
          o(Z, $e),
          o($e, K),
          o($e, pe),
          o($e, ve),
          o(I, He),
          o(I, M),
          o(M, ee),
          o(ee, B),
          o(ee, ze),
          o(ee, me),
          o(me, ie),
          o(ie, te),
          o(te, j),
          o(te, J),
          o(te, ot),
          o(I, ne),
          o(I, Te),
          o(Te, Y),
          o(Y, Ve),
          o(Y, _e),
          o(Y, Me),
          o(Me, ae),
          o(ae, U),
          o(U, ue),
          o(U, xe),
          o(U, de),
          o(I, Ee),
          o(I, Q),
          o(Q, G),
          o(G, re),
          o(G, Ge),
          o(G, ge),
          o(ge, Ae),
          o(Ae, le),
          o(le, Oe),
          o(le, se),
          o(le, Re),
          o(I, fe),
          o(I, we),
          o(we, he),
          o(he, ke),
          o(he, Ne),
          o(he, Be),
          o(Be, b),
          o(b, _),
          o(_, it),
          o(_, Ke),
          o(_, at),
          o(I, Rt),
          o(I, We),
          o(We, Ce),
          o(Ce, Ie),
          o(Ce, yt),
          o(Ce, ft),
          o(ft, Je),
          o(Je, Qe),
          o(Qe, lt),
          o(Qe, Xe),
          o(Qe, ct),
          o(v, kt),
          o(v, Fe),
          o(Fe, qe),
          o(Fe, Ze),
          o(Fe, Le),
          o(Le, _t),
          o(e, ht),
          o(e, ut),
          o(ut, Se),
          o(Se, De),
          o(Se, pt),
          o(Se, mt),
          o(Se, gt),
          o(Se, bt),
          o(Se, ye),
          o(ye, Pe),
          o(ye, Nt),
          o(ye, et),
          o(ye, tn),
          o(ye, dt),
          o(dt, Dt),
          o(dt, nn),
          A(tt, dt, null),
          Et = !0,
          $t || (qt = [xt(x, "click", t[0]), xt(x, "keypress", t[0]), xt(M, "click", t[1]), xt(M, "keypress", t[1]), xt(Q, "click", t[2]), xt(Q, "keypress", t[2])],
          $t = !0)
      },
      p(nt, [St]) {
          const rn = {};
          St & 8 && (rn.$$scope = {
              dirty: St,
              ctx: nt
          }),
          tt.$set(rn)
      },
      i(nt) {
          Et || (E(tt.$$.fragment, nt),
          Et = !0)
      },
      o(nt) {
          S(tt.$$.fragment, nt),
          Et = !1
      },
      d(nt) {
          nt && z(e),
          T(tt),
          $t = !1,
          Lt(qt)
      }
  }
}
function To(t) {
  return [()=>{}
  , ()=>window.open("https://github.com/YieldingFluxus/android-documentation/tree/main/Developers"), ()=>window.open("https://scriptunc.org")]
}
class Zt extends Ye {
  constructor(e) {
      super(),
      je(this, e, To, Ao, Ue, {})
  }
}
function os(t, e) {
  return function() {
      return t.apply(e, arguments)
  }
}
const {toString: is} = Object.prototype
, {getPrototypeOf: rr} = Object
, sr = (t=>e=>{
  const r = is.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
}
)(Object.create(null))
, Ot = t=>(t = t.toLowerCase(),
e=>sr(e) === t)
, On = t=>e=>typeof e === t
, {isArray: en} = Array
, fn = On("undefined");
function Oo(t) {
  return t !== null && !fn(t) && t.constructor !== null && !fn(t.constructor) && Wt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const as = Ot("ArrayBuffer");
function Ro(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && as(t.buffer),
  e
}
const ko = On("string")
, Wt = On("function")
, ls = On("number")
, or = t=>t !== null && typeof t == "object"
, No = t=>t === !0 || t === !1
, yn = t=>{
  if (sr(t) !== "object")
      return !1;
  const e = rr(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
}
, Co = Ot("Date")
, Io = Ot("File")
, Fo = Ot("Blob")
, Lo = Ot("FileList")
, Do = t=>or(t) && Wt(t.pipe)
, Po = t=>{
  const e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || is.call(t) === e || Wt(t.toString) && t.toString() === e)
}
, Uo = Ot("URLSearchParams")
, Ho = t=>t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function pn(t, e, {allOwnKeys: r=!1}={}) {
  if (t === null || typeof t > "u")
      return;
  let n, s;
  if (typeof t != "object" && (t = [t]),
  en(t))
      for (n = 0,
      s = t.length; n < s; n++)
          e.call(null, t[n], n, t);
  else {
      const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t)
        , a = i.length;
      let d;
      for (n = 0; n < a; n++)
          d = i[n],
          e.call(null, t[d], d, t)
  }
}
function cs(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, s;
  for (; n-- > 0; )
      if (s = r[n],
      e === s.toLowerCase())
          return s;
  return null
}
const us = typeof self > "u" ? typeof global > "u" ? globalThis : global : self
, ds = t=>!fn(t) && t !== us;
function zn() {
  const {caseless: t} = ds(this) && this || {}
    , e = {}
    , r = (n,s)=>{
      const i = t && cs(e, s) || s;
      yn(e[i]) && yn(n) ? e[i] = zn(e[i], n) : yn(n) ? e[i] = zn({}, n) : en(n) ? e[i] = n.slice() : e[i] = n
  }
  ;
  for (let n = 0, s = arguments.length; n < s; n++)
      arguments[n] && pn(arguments[n], r);
  return e
}
const Mo = (t,e,r,{allOwnKeys: n}={})=>(pn(e, (s,i)=>{
  r && Wt(s) ? t[i] = os(s, r) : t[i] = s
}
, {
  allOwnKeys: n
}),
t)
, Bo = t=>(t.charCodeAt(0) === 65279 && (t = t.slice(1)),
t)
, Wo = (t,e,r,n)=>{
  t.prototype = Object.create(e.prototype, n),
  t.prototype.constructor = t,
  Object.defineProperty(t, "super", {
      value: e.prototype
  }),
  r && Object.assign(t.prototype, r)
}
, qo = (t,e,r,n)=>{
  let s, i, a;
  const d = {};
  if (e = e || {},
  t == null)
      return e;
  do {
      for (s = Object.getOwnPropertyNames(t),
      i = s.length; i-- > 0; )
          a = s[i],
          (!n || n(a, t, e)) && !d[a] && (e[a] = t[a],
          d[a] = !0);
      t = r !== !1 && rr(t)
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e
}
, jo = (t,e,r)=>{
  t = String(t),
  (r === void 0 || r > t.length) && (r = t.length),
  r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r
}
, Yo = t=>{
  if (!t)
      return null;
  if (en(t))
      return t;
  let e = t.length;
  if (!ls(e))
      return null;
  const r = new Array(e);
  for (; e-- > 0; )
      r[e] = t[e];
  return r
}
, zo = (t=>e=>t && e instanceof t)(typeof Uint8Array < "u" && rr(Uint8Array))
, Vo = (t,e)=>{
  const n = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = n.next()) && !s.done; ) {
      const i = s.value;
      e.call(t, i[0], i[1])
  }
}
, Go = (t,e)=>{
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
      n.push(r);
  return n
}
, Ko = Ot("HTMLFormElement")
, Jo = t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function(r, n, s) {
  return n.toUpperCase() + s
})
, Ur = (({hasOwnProperty: t})=>(e,r)=>t.call(e, r))(Object.prototype)
, Qo = Ot("RegExp")
, fs = (t,e)=>{
  const r = Object.getOwnPropertyDescriptors(t)
    , n = {};
  pn(r, (s,i)=>{
      e(s, i, t) !== !1 && (n[i] = s)
  }
  ),
  Object.defineProperties(t, n)
}
, Xo = t=>{
  fs(t, (e,r)=>{
      if (Wt(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
          return !1;
      const n = t[r];
      if (!!Wt(n)) {
          if (e.enumerable = !1,
          "writable"in e) {
              e.writable = !1;
              return
          }
          e.set || (e.set = ()=>{
              throw Error("Can not rewrite read-only method '" + r + "'")
          }
          )
      }
  }
  )
}
, Zo = (t,e)=>{
  const r = {}
    , n = s=>{
      s.forEach(i=>{
          r[i] = !0
      }
      )
  }
  ;
  return en(t) ? n(t) : n(String(t).split(e)),
  r
}
, ei = ()=>{}
, ti = (t,e)=>(t = +t,
Number.isFinite(t) ? t : e)
, ni = t=>{
  const e = new Array(10)
    , r = (n,s)=>{
      if (or(n)) {
          if (e.indexOf(n) >= 0)
              return;
          if (!("toJSON"in n)) {
              e[s] = n;
              const i = en(n) ? [] : {};
              return pn(n, (a,d)=>{
                  const f = r(a, s + 1);
                  !fn(f) && (i[d] = f)
              }
              ),
              e[s] = void 0,
              i
          }
      }
      return n
  }
  ;
  return r(t, 0)
}
, g = {
  isArray: en,
  isArrayBuffer: as,
  isBuffer: Oo,
  isFormData: Po,
  isArrayBufferView: Ro,
  isString: ko,
  isNumber: ls,
  isBoolean: No,
  isObject: or,
  isPlainObject: yn,
  isUndefined: fn,
  isDate: Co,
  isFile: Io,
  isBlob: Fo,
  isRegExp: Qo,
  isFunction: Wt,
  isStream: Do,
  isURLSearchParams: Uo,
  isTypedArray: zo,
  isFileList: Lo,
  forEach: pn,
  merge: zn,
  extend: Mo,
  trim: Ho,
  stripBOM: Bo,
  inherits: Wo,
  toFlatObject: qo,
  kindOf: sr,
  kindOfTest: Ot,
  endsWith: jo,
  toArray: Yo,
  forEachEntry: Vo,
  matchAll: Go,
  isHTMLForm: Ko,
  hasOwnProperty: Ur,
  hasOwnProp: Ur,
  reduceDescriptors: fs,
  freezeMethods: Xo,
  toObjectSet: Zo,
  toCamelCase: Jo,
  noop: ei,
  toFiniteNumber: ti,
  findKey: cs,
  global: us,
  isContextDefined: ds,
  toJSONObject: ni
};
function D(t, e, r, n, s) {
  Error.call(this),
  Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
  this.message = t,
  this.name = "AxiosError",
  e && (this.code = e),
  r && (this.config = r),
  n && (this.request = n),
  s && (this.response = s)
}
g.inherits(D, Error, {
  toJSON: function() {
      return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: g.toJSONObject(this.config),
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
      }
  }
});
const hs = D.prototype
, ps = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t=>{
  ps[t] = {
      value: t
  }
}
);
Object.defineProperties(D, ps);
Object.defineProperty(hs, "isAxiosError", {
  value: !0
});
D.from = (t,e,r,n,s,i)=>{
  const a = Object.create(hs);
  return g.toFlatObject(t, a, function(f) {
      return f !== Error.prototype
  }, d=>d !== "isAxiosError"),
  D.call(a, t.message, e, r, n, s),
  a.cause = t,
  a.name = t.name,
  i && Object.assign(a, i),
  a
}
;
var ri = typeof self == "object" ? self.FormData : window.FormData;
const si = ri;
function Vn(t) {
  return g.isPlainObject(t) || g.isArray(t)
}
function ms(t) {
  return g.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function Hr(t, e, r) {
  return t ? t.concat(e).map(function(s, i) {
      return s = ms(s),
      !r && i ? "[" + s + "]" : s
  }).join(r ? "." : "") : e
}
function oi(t) {
  return g.isArray(t) && !t.some(Vn)
}
const ii = g.toFlatObject(g, {}, null, function(e) {
  return /^is[A-Z]/.test(e)
});
function ai(t) {
  return t && g.isFunction(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]
}
function Rn(t, e, r) {
  if (!g.isObject(t))
      throw new TypeError("target must be an object");
  e = e || new (si || FormData),
  r = g.toFlatObject(r, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
  }, !1, function(w, R) {
      return !g.isUndefined(R[w])
  });
  const n = r.metaTokens
    , s = r.visitor || h
    , i = r.dots
    , a = r.indexes
    , f = (r.Blob || typeof Blob < "u" && Blob) && ai(e);
  if (!g.isFunction(s))
      throw new TypeError("visitor must be a function");
  function u(v) {
      if (v === null)
          return "";
      if (g.isDate(v))
          return v.toISOString();
      if (!f && g.isBlob(v))
          throw new D("Blob is not supported. Use a Buffer instead.");
      return g.isArrayBuffer(v) || g.isTypedArray(v) ? f && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v
  }
  function h(v, w, R) {
      let C = v;
      if (v && !R && typeof v == "object") {
          if (g.endsWith(w, "{}"))
              w = n ? w : w.slice(0, -2),
              v = JSON.stringify(v);
          else if (g.isArray(v) && oi(v) || g.isFileList(v) || g.endsWith(w, "[]") && (C = g.toArray(v)))
              return w = ms(w),
              C.forEach(function(I, x) {
                  !(g.isUndefined(I) || I === null) && e.append(a === !0 ? Hr([w], x, i) : a === null ? w : w + "[]", u(I))
              }),
              !1
      }
      return Vn(v) ? !0 : (e.append(Hr(R, w, i), u(v)),
      !1)
  }
  const $ = []
    , m = Object.assign(ii, {
      defaultVisitor: h,
      convertValue: u,
      isVisitable: Vn
  });
  function y(v, w) {
      if (!g.isUndefined(v)) {
          if ($.indexOf(v) !== -1)
              throw Error("Circular reference detected in " + w.join("."));
          $.push(v),
          g.forEach(v, function(C, L) {
              (!(g.isUndefined(C) || C === null) && s.call(e, C, g.isString(L) ? L.trim() : L, w, m)) === !0 && y(C, w ? w.concat(L) : [L])
          }),
          $.pop()
      }
  }
  if (!g.isObject(t))
      throw new TypeError("data must be an object");
  return y(t),
  e
}
function Mr(t) {
  const e = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
      return e[n]
  })
}
function ir(t, e) {
  this._pairs = [],
  t && Rn(t, this, e)
}
const gs = ir.prototype;
gs.append = function(e, r) {
  this._pairs.push([e, r])
}
;
gs.toString = function(e) {
  const r = e ? function(n) {
      return e.call(this, n, Mr)
  }
  : Mr;
  return this._pairs.map(function(s) {
      return r(s[0]) + "=" + r(s[1])
  }, "").join("&")
}
;
function li(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function bs(t, e, r) {
  if (!e)
      return t;
  const n = r && r.encode || li
    , s = r && r.serialize;
  let i;
  if (s ? i = s(e, r) : i = g.isURLSearchParams(e) ? e.toString() : new ir(e,r).toString(n),
  i) {
      const a = t.indexOf("#");
      a !== -1 && (t = t.slice(0, a)),
      t += (t.indexOf("?") === -1 ? "?" : "&") + i
  }
  return t
}
class ci {
  constructor() {
      this.handlers = []
  }
  use(e, r, n) {
      return this.handlers.push({
          fulfilled: e,
          rejected: r,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null
      }),
      this.handlers.length - 1
  }
  eject(e) {
      this.handlers[e] && (this.handlers[e] = null)
  }
  clear() {
      this.handlers && (this.handlers = [])
  }
  forEach(e) {
      g.forEach(this.handlers, function(n) {
          n !== null && e(n)
      })
  }
}
const Br = ci
, $s = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}
, ui = typeof URLSearchParams < "u" ? URLSearchParams : ir
, di = FormData
, fi = (()=>{
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}
)()
, hi = (()=>typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
, wt = {
  isBrowser: !0,
  classes: {
      URLSearchParams: ui,
      FormData: di,
      Blob
  },
  isStandardBrowserEnv: fi,
  isStandardBrowserWebWorkerEnv: hi,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function pi(t, e) {
  return Rn(t, new wt.classes.URLSearchParams, Object.assign({
      visitor: function(r, n, s, i) {
          return wt.isNode && g.isBuffer(r) ? (this.append(n, r.toString("base64")),
          !1) : i.defaultVisitor.apply(this, arguments)
      }
  }, e))
}
function mi(t) {
  return g.matchAll(/\w+|\[(\w*)]/g, t).map(e=>e[0] === "[]" ? "" : e[1] || e[0])
}
function gi(t) {
  const e = {}
    , r = Object.keys(t);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
      i = r[n],
      e[i] = t[i];
  return e
}
function vs(t) {
  function e(r, n, s, i) {
      let a = r[i++];
      const d = Number.isFinite(+a)
        , f = i >= r.length;
      return a = !a && g.isArray(s) ? s.length : a,
      f ? (g.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n,
      !d) : ((!s[a] || !g.isObject(s[a])) && (s[a] = []),
      e(r, n, s[a], i) && g.isArray(s[a]) && (s[a] = gi(s[a])),
      !d)
  }
  if (g.isFormData(t) && g.isFunction(t.entries)) {
      const r = {};
      return g.forEachEntry(t, (n,s)=>{
          e(mi(n), s, r, 0)
      }
      ),
      r
  }
  return null
}
const bi = {
  "Content-Type": void 0
};
function $i(t, e, r) {
  if (g.isString(t))
      try {
          return (e || JSON.parse)(t),
          g.trim(t)
      } catch (n) {
          if (n.name !== "SyntaxError")
              throw n
      }
  return (r || JSON.stringify)(t)
}
const kn = {
  transitional: $s,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
      const n = r.getContentType() || ""
        , s = n.indexOf("application/json") > -1
        , i = g.isObject(e);
      if (i && g.isHTMLForm(e) && (e = new FormData(e)),
      g.isFormData(e))
          return s && s ? JSON.stringify(vs(e)) : e;
      if (g.isArrayBuffer(e) || g.isBuffer(e) || g.isStream(e) || g.isFile(e) || g.isBlob(e))
          return e;
      if (g.isArrayBufferView(e))
          return e.buffer;
      if (g.isURLSearchParams(e))
          return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
          e.toString();
      let d;
      if (i) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
              return pi(e, this.formSerializer).toString();
          if ((d = g.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
              const f = this.env && this.env.FormData;
              return Rn(d ? {
                  "files[]": e
              } : e, f && new f, this.formSerializer)
          }
      }
      return i || s ? (r.setContentType("application/json", !1),
      $i(e)) : e
  }
  ],
  transformResponse: [function(e) {
      const r = this.transitional || kn.transitional
        , n = r && r.forcedJSONParsing
        , s = this.responseType === "json";
      if (e && g.isString(e) && (n && !this.responseType || s)) {
          const a = !(r && r.silentJSONParsing) && s;
          try {
              return JSON.parse(e)
          } catch (d) {
              if (a)
                  throw d.name === "SyntaxError" ? D.from(d, D.ERR_BAD_RESPONSE, this, null, this.response) : d
          }
      }
      return e
  }
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
      FormData: wt.classes.FormData,
      Blob: wt.classes.Blob
  },
  validateStatus: function(e) {
      return e >= 200 && e < 300
  },
  headers: {
      common: {
          Accept: "application/json, text/plain, */*"
      }
  }
};
g.forEach(["delete", "get", "head"], function(e) {
  kn.headers[e] = {}
});
g.forEach(["post", "put", "patch"], function(e) {
  kn.headers[e] = g.merge(bi)
});
const ar = kn
, vi = g.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
, wi = t=>{
  const e = {};
  let r, n, s;
  return t && t.split(`
`).forEach(function(a) {
      s = a.indexOf(":"),
      r = a.substring(0, s).trim().toLowerCase(),
      n = a.substring(s + 1).trim(),
      !(!r || e[r] && vi[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n)
  }),
  e
}
, Wr = Symbol("internals");
function on(t) {
  return t && String(t).trim().toLowerCase()
}
function _n(t) {
  return t === !1 || t == null ? t : g.isArray(t) ? t.map(_n) : String(t)
}
function yi(t) {
  const e = Object.create(null)
    , r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
      e[n[1]] = n[2];
  return e
}
function _i(t) {
  return /^[-_a-zA-Z]+$/.test(t.trim())
}
function qr(t, e, r, n) {
  if (g.isFunction(n))
      return n.call(this, e, r);
  if (!!g.isString(e)) {
      if (g.isString(n))
          return e.indexOf(n) !== -1;
      if (g.isRegExp(n))
          return n.test(e)
  }
}
function Ei(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e,r,n)=>r.toUpperCase() + n)
}
function Si(t, e) {
  const r = g.toCamelCase(" " + e);
  ["get", "set", "has"].forEach(n=>{
      Object.defineProperty(t, n + r, {
          value: function(s, i, a) {
              return this[n].call(this, e, s, i, a)
          },
          configurable: !0
      })
  }
  )
}
class Nn {
  constructor(e) {
      e && this.set(e)
  }
  set(e, r, n) {
      const s = this;
      function i(d, f, u) {
          const h = on(f);
          if (!h)
              throw new Error("header name must be a non-empty string");
          const $ = g.findKey(s, h);
          (!$ || s[$] === void 0 || u === !0 || u === void 0 && s[$] !== !1) && (s[$ || f] = _n(d))
      }
      const a = (d,f)=>g.forEach(d, (u,h)=>i(u, h, f));
      return g.isPlainObject(e) || e instanceof this.constructor ? a(e, r) : g.isString(e) && (e = e.trim()) && !_i(e) ? a(wi(e), r) : e != null && i(r, e, n),
      this
  }
  get(e, r) {
      if (e = on(e),
      e) {
          const n = g.findKey(this, e);
          if (n) {
              const s = this[n];
              if (!r)
                  return s;
              if (r === !0)
                  return yi(s);
              if (g.isFunction(r))
                  return r.call(this, s, n);
              if (g.isRegExp(r))
                  return r.exec(s);
              throw new TypeError("parser must be boolean|regexp|function")
          }
      }
  }
  has(e, r) {
      if (e = on(e),
      e) {
          const n = g.findKey(this, e);
          return !!(n && (!r || qr(this, this[n], n, r)))
      }
      return !1
  }
  delete(e, r) {
      const n = this;
      let s = !1;
      function i(a) {
          if (a = on(a),
          a) {
              const d = g.findKey(n, a);
              d && (!r || qr(n, n[d], d, r)) && (delete n[d],
              s = !0)
          }
      }
      return g.isArray(e) ? e.forEach(i) : i(e),
      s
  }
  clear() {
      return Object.keys(this).forEach(this.delete.bind(this))
  }
  normalize(e) {
      const r = this
        , n = {};
      return g.forEach(this, (s,i)=>{
          const a = g.findKey(n, i);
          if (a) {
              r[a] = _n(s),
              delete r[i];
              return
          }
          const d = e ? Ei(i) : String(i).trim();
          d !== i && delete r[i],
          r[d] = _n(s),
          n[d] = !0
      }
      ),
      this
  }
  concat(...e) {
      return this.constructor.concat(this, ...e)
  }
  toJSON(e) {
      const r = Object.create(null);
      return g.forEach(this, (n,s)=>{
          n != null && n !== !1 && (r[s] = e && g.isArray(n) ? n.join(", ") : n)
      }
      ),
      r
  }
  [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
      return Object.entries(this.toJSON()).map(([e,r])=>e + ": " + r).join(`
`)
  }
  get[Symbol.toStringTag]() {
      return "AxiosHeaders"
  }
  static from(e) {
      return e instanceof this ? e : new this(e)
  }
  static concat(e, ...r) {
      const n = new this(e);
      return r.forEach(s=>n.set(s)),
      n
  }
  static accessor(e) {
      const n = (this[Wr] = this[Wr] = {
          accessors: {}
      }).accessors
        , s = this.prototype;
      function i(a) {
          const d = on(a);
          n[d] || (Si(s, a),
          n[d] = !0)
      }
      return g.isArray(e) ? e.forEach(i) : i(e),
      this
  }
}
Nn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
g.freezeMethods(Nn.prototype);
g.freezeMethods(Nn);
const Tt = Nn;
function Hn(t, e) {
  const r = this || ar
    , n = e || r
    , s = Tt.from(n.headers);
  let i = n.data;
  return g.forEach(t, function(d) {
      i = d.call(r, i, s.normalize(), e ? e.status : void 0)
  }),
  s.normalize(),
  i
}
function ws(t) {
  return !!(t && t.__CANCEL__)
}
function mn(t, e, r) {
  D.call(this, t == null ? "canceled" : t, D.ERR_CANCELED, e, r),
  this.name = "CanceledError"
}
g.inherits(mn, D, {
  __CANCEL__: !0
});
const xi = null;
function Ai(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new D("Request failed with status code " + r.status,[D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],r.config,r.request,r))
}
const Ti = wt.isStandardBrowserEnv ? function() {
  return {
      write: function(r, n, s, i, a, d) {
          const f = [];
          f.push(r + "=" + encodeURIComponent(n)),
          g.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()),
          g.isString(i) && f.push("path=" + i),
          g.isString(a) && f.push("domain=" + a),
          d === !0 && f.push("secure"),
          document.cookie = f.join("; ")
      },
      read: function(r) {
          const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
          return n ? decodeURIComponent(n[3]) : null
      },
      remove: function(r) {
          this.write(r, "", Date.now() - 864e5)
      }
  }
}() : function() {
  return {
      write: function() {},
      read: function() {
          return null
      },
      remove: function() {}
  }
}();
function Oi(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function Ri(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
}
function ys(t, e) {
  return t && !Oi(e) ? Ri(t, e) : e
}
const ki = wt.isStandardBrowserEnv ? function() {
  const e = /(msie|trident)/i.test(navigator.userAgent)
    , r = document.createElement("a");
  let n;
  function s(i) {
      let a = i;
      return e && (r.setAttribute("href", a),
      a = r.href),
      r.setAttribute("href", a),
      {
          href: r.href,
          protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
          host: r.host,
          search: r.search ? r.search.replace(/^\?/, "") : "",
          hash: r.hash ? r.hash.replace(/^#/, "") : "",
          hostname: r.hostname,
          port: r.port,
          pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      }
  }
  return n = s(window.location.href),
  function(a) {
      const d = g.isString(a) ? s(a) : a;
      return d.protocol === n.protocol && d.host === n.host
  }
}() : function() {
  return function() {
      return !0
  }
}();
function Ni(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || ""
}
function Ci(t, e) {
  t = t || 10;
  const r = new Array(t)
    , n = new Array(t);
  let s = 0, i = 0, a;
  return e = e !== void 0 ? e : 1e3,
  function(f) {
      const u = Date.now()
        , h = n[i];
      a || (a = u),
      r[s] = f,
      n[s] = u;
      let $ = i
        , m = 0;
      for (; $ !== s; )
          m += r[$++],
          $ = $ % t;
      if (s = (s + 1) % t,
      s === i && (i = (i + 1) % t),
      u - a < e)
          return;
      const y = h && u - h;
      return y ? Math.round(m * 1e3 / y) : void 0
  }
}
function jr(t, e) {
  let r = 0;
  const n = Ci(50, 250);
  return s=>{
      const i = s.loaded
        , a = s.lengthComputable ? s.total : void 0
        , d = i - r
        , f = n(d)
        , u = i <= a;
      r = i;
      const h = {
          loaded: i,
          total: a,
          progress: a ? i / a : void 0,
          bytes: d,
          rate: f || void 0,
          estimated: f && a && u ? (a - i) / f : void 0,
          event: s
      };
      h[e ? "download" : "upload"] = !0,
      t(h)
  }
}
const Ii = typeof XMLHttpRequest < "u"
, Fi = Ii && function(t) {
  return new Promise(function(r, n) {
      let s = t.data;
      const i = Tt.from(t.headers).normalize()
        , a = t.responseType;
      let d;
      function f() {
          t.cancelToken && t.cancelToken.unsubscribe(d),
          t.signal && t.signal.removeEventListener("abort", d)
      }
      g.isFormData(s) && (wt.isStandardBrowserEnv || wt.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
      let u = new XMLHttpRequest;
      if (t.auth) {
          const y = t.auth.username || ""
            , v = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
          i.set("Authorization", "Basic " + btoa(y + ":" + v))
      }
      const h = ys(t.baseURL, t.url);
      u.open(t.method.toUpperCase(), bs(h, t.params, t.paramsSerializer), !0),
      u.timeout = t.timeout;
      function $() {
          if (!u)
              return;
          const y = Tt.from("getAllResponseHeaders"in u && u.getAllResponseHeaders())
            , w = {
              data: !a || a === "text" || a === "json" ? u.responseText : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: y,
              config: t,
              request: u
          };
          Ai(function(C) {
              r(C),
              f()
          }, function(C) {
              n(C),
              f()
          }, w),
          u = null
      }
      if ("onloadend"in u ? u.onloadend = $ : u.onreadystatechange = function() {
          !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout($)
      }
      ,
      u.onabort = function() {
          !u || (n(new D("Request aborted",D.ECONNABORTED,t,u)),
          u = null)
      }
      ,
      u.onerror = function() {
          n(new D("Network Error",D.ERR_NETWORK,t,u)),
          u = null
      }
      ,
      u.ontimeout = function() {
          let v = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
          const w = t.transitional || $s;
          t.timeoutErrorMessage && (v = t.timeoutErrorMessage),
          n(new D(v,w.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,t,u)),
          u = null
      }
      ,
      wt.isStandardBrowserEnv) {
          const y = (t.withCredentials || ki(h)) && t.xsrfCookieName && Ti.read(t.xsrfCookieName);
          y && i.set(t.xsrfHeaderName, y)
      }
      s === void 0 && i.setContentType(null),
      "setRequestHeader"in u && g.forEach(i.toJSON(), function(v, w) {
          u.setRequestHeader(w, v)
      }),
      g.isUndefined(t.withCredentials) || (u.withCredentials = !!t.withCredentials),
      a && a !== "json" && (u.responseType = t.responseType),
      typeof t.onDownloadProgress == "function" && u.addEventListener("progress", jr(t.onDownloadProgress, !0)),
      typeof t.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", jr(t.onUploadProgress)),
      (t.cancelToken || t.signal) && (d = y=>{
          !u || (n(!y || y.type ? new mn(null,t,u) : y),
          u.abort(),
          u = null)
      }
      ,
      t.cancelToken && t.cancelToken.subscribe(d),
      t.signal && (t.signal.aborted ? d() : t.signal.addEventListener("abort", d)));
      const m = Ni(h);
      if (m && wt.protocols.indexOf(m) === -1) {
          n(new D("Unsupported protocol " + m + ":",D.ERR_BAD_REQUEST,t));
          return
      }
      u.send(s || null)
  }
  )
}
, En = {
  http: xi,
  xhr: Fi
};
g.forEach(En, (t,e)=>{
  if (t) {
      try {
          Object.defineProperty(t, "name", {
              value: e
          })
      } catch {}
      Object.defineProperty(t, "adapterName", {
          value: e
      })
  }
}
);
const Li = {
  getAdapter: t=>{
      t = g.isArray(t) ? t : [t];
      const {length: e} = t;
      let r, n;
      for (let s = 0; s < e && (r = t[s],
      !(n = g.isString(r) ? En[r.toLowerCase()] : r)); s++)
          ;
      if (!n)
          throw n === !1 ? new D(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(g.hasOwnProp(En, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`);
      if (!g.isFunction(n))
          throw new TypeError("adapter is not a function");
      return n
  }
  ,
  adapters: En
};
function Mn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(),
  t.signal && t.signal.aborted)
      throw new mn(null,t)
}
function Yr(t) {
  return Mn(t),
  t.headers = Tt.from(t.headers),
  t.data = Hn.call(t, t.transformRequest),
  ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
  Li.getAdapter(t.adapter || ar.adapter)(t).then(function(n) {
      return Mn(t),
      n.data = Hn.call(t, t.transformResponse, n),
      n.headers = Tt.from(n.headers),
      n
  }, function(n) {
      return ws(n) || (Mn(t),
      n && n.response && (n.response.data = Hn.call(t, t.transformResponse, n.response),
      n.response.headers = Tt.from(n.response.headers))),
      Promise.reject(n)
  })
}
const zr = t=>t instanceof Tt ? t.toJSON() : t;
function Xt(t, e) {
  e = e || {};
  const r = {};
  function n(u, h, $) {
      return g.isPlainObject(u) && g.isPlainObject(h) ? g.merge.call({
          caseless: $
      }, u, h) : g.isPlainObject(h) ? g.merge({}, h) : g.isArray(h) ? h.slice() : h
  }
  function s(u, h, $) {
      if (g.isUndefined(h)) {
          if (!g.isUndefined(u))
              return n(void 0, u, $)
      } else
          return n(u, h, $)
  }
  function i(u, h) {
      if (!g.isUndefined(h))
          return n(void 0, h)
  }
  function a(u, h) {
      if (g.isUndefined(h)) {
          if (!g.isUndefined(u))
              return n(void 0, u)
      } else
          return n(void 0, h)
  }
  function d(u, h, $) {
      if ($ in e)
          return n(u, h);
      if ($ in t)
          return n(void 0, u)
  }
  const f = {
      url: i,
      method: i,
      data: i,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: d,
      headers: (u,h)=>s(zr(u), zr(h), !0)
  };
  return g.forEach(Object.keys(t).concat(Object.keys(e)), function(h) {
      const $ = f[h] || s
        , m = $(t[h], e[h], h);
      g.isUndefined(m) && $ !== d || (r[h] = m)
  }),
  r
}
const _s = "1.2.1"
, lr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t,e)=>{
  lr[t] = function(n) {
      return typeof n === t || "a" + (e < 1 ? "n " : " ") + t
  }
}
);
const Vr = {};
lr.transitional = function(e, r, n) {
  function s(i, a) {
      return "[Axios v" + _s + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "")
  }
  return (i,a,d)=>{
      if (e === !1)
          throw new D(s(a, " has been removed" + (r ? " in " + r : "")),D.ERR_DEPRECATED);
      return r && !Vr[a] && (Vr[a] = !0,
      console.warn(s(a, " has been deprecated since v" + r + " and will be removed in the near future"))),
      e ? e(i, a, d) : !0
  }
}
;
function Di(t, e, r) {
  if (typeof t != "object")
      throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let s = n.length;
  for (; s-- > 0; ) {
      const i = n[s]
        , a = e[i];
      if (a) {
          const d = t[i]
            , f = d === void 0 || a(d, i, t);
          if (f !== !0)
              throw new D("option " + i + " must be " + f,D.ERR_BAD_OPTION_VALUE);
          continue
      }
      if (r !== !0)
          throw new D("Unknown option " + i,D.ERR_BAD_OPTION)
  }
}
const Gn = {
  assertOptions: Di,
  validators: lr
}
, Ft = Gn.validators;
class Tn {
  constructor(e) {
      this.defaults = e,
      this.interceptors = {
          request: new Br,
          response: new Br
      }
  }
  request(e, r) {
      typeof e == "string" ? (r = r || {},
      r.url = e) : r = e || {},
      r = Xt(this.defaults, r);
      const {transitional: n, paramsSerializer: s, headers: i} = r;
      n !== void 0 && Gn.assertOptions(n, {
          silentJSONParsing: Ft.transitional(Ft.boolean),
          forcedJSONParsing: Ft.transitional(Ft.boolean),
          clarifyTimeoutError: Ft.transitional(Ft.boolean)
      }, !1),
      s !== void 0 && Gn.assertOptions(s, {
          encode: Ft.function,
          serialize: Ft.function
      }, !0),
      r.method = (r.method || this.defaults.method || "get").toLowerCase();
      let a;
      a = i && g.merge(i.common, i[r.method]),
      a && g.forEach(["delete", "get", "head", "post", "put", "patch", "common"], v=>{
          delete i[v]
      }
      ),
      r.headers = Tt.concat(a, i);
      const d = [];
      let f = !0;
      this.interceptors.request.forEach(function(w) {
          typeof w.runWhen == "function" && w.runWhen(r) === !1 || (f = f && w.synchronous,
          d.unshift(w.fulfilled, w.rejected))
      });
      const u = [];
      this.interceptors.response.forEach(function(w) {
          u.push(w.fulfilled, w.rejected)
      });
      let h, $ = 0, m;
      if (!f) {
          const v = [Yr.bind(this), void 0];
          for (v.unshift.apply(v, d),
          v.push.apply(v, u),
          m = v.length,
          h = Promise.resolve(r); $ < m; )
              h = h.then(v[$++], v[$++]);
          return h
      }
      m = d.length;
      let y = r;
      for ($ = 0; $ < m; ) {
          const v = d[$++]
            , w = d[$++];
          try {
              y = v(y)
          } catch (R) {
              w.call(this, R);
              break
          }
      }
      try {
          h = Yr.call(this, y)
      } catch (v) {
          return Promise.reject(v)
      }
      for ($ = 0,
      m = u.length; $ < m; )
          h = h.then(u[$++], u[$++]);
      return h
  }
  getUri(e) {
      e = Xt(this.defaults, e);
      const r = ys(e.baseURL, e.url);
      return bs(r, e.params, e.paramsSerializer)
  }
}
g.forEach(["delete", "get", "head", "options"], function(e) {
  Tn.prototype[e] = function(r, n) {
      return this.request(Xt(n || {}, {
          method: e,
          url: r,
          data: (n || {}).data
      }))
  }
});
g.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
      return function(i, a, d) {
          return this.request(Xt(d || {}, {
              method: e,
              headers: n ? {
                  "Content-Type": "multipart/form-data"
              } : {},
              url: i,
              data: a
          }))
      }
  }
  Tn.prototype[e] = r(),
  Tn.prototype[e + "Form"] = r(!0)
});
const Sn = Tn;
class cr {
  constructor(e) {
      if (typeof e != "function")
          throw new TypeError("executor must be a function.");
      let r;
      this.promise = new Promise(function(i) {
          r = i
      }
      );
      const n = this;
      this.promise.then(s=>{
          if (!n._listeners)
              return;
          let i = n._listeners.length;
          for (; i-- > 0; )
              n._listeners[i](s);
          n._listeners = null
      }
      ),
      this.promise.then = s=>{
          let i;
          const a = new Promise(d=>{
              n.subscribe(d),
              i = d
          }
          ).then(s);
          return a.cancel = function() {
              n.unsubscribe(i)
          }
          ,
          a
      }
      ,
      e(function(i, a, d) {
          n.reason || (n.reason = new mn(i,a,d),
          r(n.reason))
      })
  }
  throwIfRequested() {
      if (this.reason)
          throw this.reason
  }
  subscribe(e) {
      if (this.reason) {
          e(this.reason);
          return
      }
      this._listeners ? this._listeners.push(e) : this._listeners = [e]
  }
  unsubscribe(e) {
      if (!this._listeners)
          return;
      const r = this._listeners.indexOf(e);
      r !== -1 && this._listeners.splice(r, 1)
  }
  static source() {
      let e;
      return {
          token: new cr(function(s) {
              e = s
          }
          ),
          cancel: e
      }
  }
}
const Pi = cr;
function Ui(t) {
  return function(r) {
      return t.apply(null, r)
  }
}
function Hi(t) {
  return g.isObject(t) && t.isAxiosError === !0
}
function Es(t) {
  const e = new Sn(t)
    , r = os(Sn.prototype.request, e);
  return g.extend(r, Sn.prototype, e, {
      allOwnKeys: !0
  }),
  g.extend(r, e, null, {
      allOwnKeys: !0
  }),
  r.create = function(s) {
      return Es(Xt(t, s))
  }
  ,
  r
}
const be = Es(ar);
be.Axios = Sn;
be.CanceledError = mn;
be.CancelToken = Pi;
be.isCancel = ws;
be.VERSION = _s;
be.toFormData = Rn;
be.AxiosError = D;
be.Cancel = be.CanceledError;
be.all = function(e) {
  return Promise.all(e)
}
;
be.spread = Ui;
be.isAxiosError = Hi;
be.mergeConfig = Xt;
be.AxiosHeaders = Tt;
be.formToJSON = t=>vs(g.isHTMLForm(t) ? new FormData(t) : t);
be.default = be;
const Gr = be;
function Mi(t) {
  let e, r, n, s, i, a, d = k("Is Fluxus Android not working?") + "", f, u, h, $ = k("Try this legacy installation method instead.") + "", m, y, v, w, R, C, L, I, x, F, N, q, oe, Z, $e, K, pe, ve, He, M, ee, B, ze, me, ie, te, j, J, ot, ne, Te, Y, Ve, _e, Me, ae, U, ue, xe, de, Ee, Q, G, re = k("Make sure you delete the arm64-v8a folder and install libFluxusAndroid.so into armeabi-v7a! If you forget this, your application will crash.") + "", Ge, ge, Ae, le, Oe, se, Re;
  return {
      c() {
          e = c("main"),
          r = c("div"),
          n = c("div"),
          s = c("h1"),
          s.textContent = `${k("Legacy Installation")}`,
          i = p(),
          a = c("p"),
          f = ce(d),
          u = c("br"),
          h = p(),
          m = ce($),
          y = p(),
          v = c("div"),
          w = c("p"),
          w.textContent = `${k("Installation")}`,
          R = p(),
          C = vt("svg"),
          L = vt("path"),
          I = p(),
          x = c("div"),
          F = c("div"),
          N = c("h1"),
          N.textContent = "Warning & Info",
          q = p(),
          oe = c("br"),
          Z = p(),
          $e = c("p"),
          $e.innerHTML = `Using Fluxus to violate any software terms of service is strictly against our terms. Fluxus should only be used as an IDE and debugger. Using Fluxus for anything else can and will result in a blacklist.
  
      <a href="https://fluxteam.net/LICENSE.txt" target="_blank" rel="noopener noreferrer" class="nobtn">Open Source Licenses</a>`,
          K = p(),
          pe = c("iframe"),
          He = p(),
          M = c("div"),
          ee = c("div"),
          B = vt("svg"),
          ze = vt("path"),
          me = p(),
          ie = c("p"),
          ie.textContent = `${k("Installation Instructions")}`,
          te = p(),
          j = c("div"),
          J = c("h1"),
          J.textContent = `${k("Resources")}`,
          ot = p(),
          ne = c("a"),
          ne.textContent = "MT Manager",
          Te = p(),
          Y = c("a"),
          Ve = ce("libFluxusAndroid.so"),
          _e = c("br"),
          Me = c("br"),
          ae = p(),
          U = c("p"),
          U.textContent = "Smali Code:",
          ue = p(),
          xe = c("br"),
          de = p(),
          Ee = c("a"),
          Ee.textContent = "Copy Smali Code",
          Q = p(),
          G = c("p"),
          Ge = ce(re),
          ge = p(),
          Ae = c("br"),
          le = p(),
          Oe = c("br"),
          l(s, "class", "svelte-2ivaoe"),
          l(a, "class", "svelte-2ivaoe"),
          H(w, "margin-bottom", "-0.4em"),
          l(w, "class", "svelte-2ivaoe"),
          l(L, "d", "m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"),
          l(C, "xmlns", "http://www.w3.org/2000/svg"),
          l(C, "height", "48"),
          l(C, "width", "48"),
          l(C, "fill", "#ddddddaa"),
          l(v, "class", "putmeonthebottom svelte-2ivaoe"),
          l(r, "class", "p1 svelte-2ivaoe"),
          l(N, "class", "svelte-2ivaoe"),
          l($e, "class", "svelte-2ivaoe"),
          Kt(pe.src, ve = k("https://www.youtube.com/embed/l6P-QL_4U5w")) || l(pe, "src", ve),
          l(pe, "title", "YouTube video player"),
          l(pe, "frameborder", "0"),
          pe.allowFullscreen = !0,
          l(pe, "class", "svelte-2ivaoe"),
          l(x, "class", "p2 svelte-2ivaoe"),
          l(ze, "d", "m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"),
          l(B, "xmlns", "http://www.w3.org/2000/svg"),
          l(B, "height", "48"),
          l(B, "width", "48"),
          l(B, "fill", "#ddddddaa"),
          H(B, "transform", "rotate(180deg)"),
          H(ie, "margin-top", "-12px"),
          l(ie, "class", "svelte-2ivaoe"),
          l(ee, "class", "putmeonthetop svelte-2ivaoe"),
          l(J, "class", "svelte-2ivaoe"),
          l(ne, "href", "https://cdn.discordapp.com/attachments/1026462567792652330/1052157945409982494/bin.mt.plus_2.12.2.apk"),
          l(ne, "target", "_blank"),
          l(ne, "rel", "noopener noreferrer"),
          l(ne, "class", "svelte-2ivaoe"),
          l(Y, "href", t[0]),
          l(Y, "target", "_blank"),
          l(Y, "rel", "noopener noreferrer"),
          l(Y, "class", "svelte-2ivaoe"),
          l(U, "class", "svelte-2ivaoe"),
          l(Ee, "href", "javascript:void 0"),
          l(Ee, "class", "svelte-2ivaoe"),
          l(G, "class", "september eleventh was an amazing day for every american svelte-2ivaoe"),
          l(M, "class", "p3 svelte-2ivaoe")
      },
      m(fe, we) {
          V(fe, e, we),
          o(e, r),
          o(r, n),
          o(n, s),
          o(n, i),
          o(n, a),
          o(a, f),
          o(a, u),
          o(a, h),
          o(a, m),
          o(r, y),
          o(r, v),
          o(v, w),
          o(v, R),
          o(v, C),
          o(C, L),
          o(e, I),
          o(e, x),
          o(x, F),
          o(F, N),
          o(F, q),
          o(F, oe),
          o(F, Z),
          o(F, $e),
          o(F, K),
          o(F, pe),
          o(e, He),
          o(e, M),
          o(M, ee),
          o(ee, B),
          o(B, ze),
          o(ee, me),
          o(ee, ie),
          o(M, te),
          o(M, j),
          o(j, J),
          o(j, ot),
          o(j, ne),
          o(j, Te),
          o(j, Y),
          o(Y, Ve),
          o(j, _e),
          o(j, Me),
          o(j, ae),
          o(j, U),
          o(j, ue),
          o(j, xe),
          o(j, de),
          o(j, Ee),
          o(j, Q),
          o(j, G),
          o(G, Ge),
          o(G, ge),
          o(G, Ae),
          o(G, le),
          o(G, Oe),
          se || (Re = [xt(Ee, "click", t[1]), xt(Ee, "keypress", t[1])],
          se = !0)
      },
      p(fe, [we]) {
          we & 1 && l(Y, "href", fe[0])
      },
      i: P,
      o: P,
      d(fe) {
          fe && z(e),
          se = !1,
          Lt(Re)
      }
  }
}
function Bi(t, e, r) {
  let n = "https://yieldingfluxus.github.io/so-mirror/";
  return Gr({
      url: "https://flux.li/android/external/so.txt",
      withCredentials: !1
  }).then(i=>{
      console.log("got so via flux.li:", i.data),
      r(0, n = i.data || n)
  }
  ).catch(i=>{
      Gr({
          url: "https://so-mirror.astolfo.gay/so.txt",
          withCredentials: !1
      }).then(a=>{
          console.log("got so via backup:", a.data),
          r(0, n = a.data || n)
      }
      ).catch(a=>console.error(`Failed to get so.txt
Error on flux.li:`, i, `
Error on so-mirror:`, a, `
Falling back to backup download page (` + n + ")."))
  }
  ),
  [n, ()=>navigator.clipboard.writeText(`const-string v0, "FluxusAndroid"
invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V`)]
}
class Cn extends Ye {
  constructor(e) {
      super(),
      je(this, e, Bi, Mi, Ue, {})
  }
}
function Wi(t) {
  let e;
  return {
      c() {
          e = c("main"),
          e.innerHTML = `<div class="p1 svelte-48r5c7"><div><h1 class="svelte-48r5c7">Download the game</h1> 

    <p class="svelte-48r5c7">Please install the game from the play store!</p> 
    <a href="https://play.google.com/store/apps/details?id=com.roblox.client" target="_blank" rel="noreferrer" class="svelte-48r5c7">Play Store</a></div></div>`
      },
      m(r, n) {
          V(r, e, n)
      },
      p: P,
      i: P,
      o: P,
      d(r) {
          r && z(e)
      }
  }
}
class Ss extends Ye {
  constructor(e) {
      super(),
      je(this, e, null, Wi, Ue, {})
  }
}
function qi(t) {
  let e, r, n, s, i, a, d, f, u, h, $, m;
  return {
      c() {
          e = c("main"),
          r = c("div"),
          n = c("div"),
          s = c("div"),
          i = c("h1"),
          i.textContent = "Fluxus Android Sign Issue",
          a = p(),
          d = c("p"),
          d.textContent = "Simply follow these steps:",
          f = p(),
          u = c("ol"),
          u.innerHTML = `<li>Run the Fluxus Installer, wait for it to show an error.</li> 
        <li>Install <a href="https://cdn.discordapp.com/attachments/1036294505646796891/1037543606967345162/MT_Manager.apk" class="normal svelte-15oqtnk" target="_blank" rel="noopener noreferrer">MT Manager</a></li> 
        <li>Follow the instructions in the video below.</li>`,
          h = p(),
          $ = c("video"),
          l(i, "class", "svelte-15oqtnk"),
          l(d, "class", "svelte-15oqtnk"),
          H(u, "max-width", "70vw"),
          l(u, "class", "svelte-15oqtnk"),
          Kt($.src, m = X + "/parse.mp4") || l($, "src", m),
          $.controls = !0,
          H($, "max-height", "75vh"),
          H($, "max-width", "100%"),
          H($, "display", "block"),
          H($, "margin-bottom", "8px"),
          H(s, "max-width", "90vw"),
          H(n, "display", "flex"),
          H(n, "align-items", "center"),
          H(n, "justify-content", "center"),
          H(n, "max-width", "100vw"),
          l(r, "class", "p1 svelte-15oqtnk")
      },
      m(y, v) {
          V(y, e, v),
          o(e, r),
          o(r, n),
          o(n, s),
          o(s, i),
          o(s, a),
          o(s, d),
          o(s, f),
          o(s, u),
          o(s, h),
          o(s, $)
      },
      p: P,
      i: P,
      o: P,
      d(y) {
          y && z(e)
      }
  }
}
class In extends Ye {
  constructor(e) {
      super(),
      je(this, e, null, qi, Ue, {})
  }
}
function ji(t) {
  let e, r, n, s, i, a, d, f, u, h, $, m, y = k("Note: The above contain advertisements. Please be aware of these before you continue.") + "", v, w, R, C, L, I, x;
  return {
      c() {
          e = c("main"),
          r = c("div"),
          n = c("div"),
          s = c("h1"),
          s.textContent = `${k("Download Fluxus Windows")}`,
          i = p(),
          a = c("a"),
          a.textContent = "LV Installer",
          d = p(),
          f = c("a"),
          f.textContent = "LV",
          u = p(),
          h = c("a"),
          h.textContent = "Open Source Licenses",
          $ = p(),
          m = c("p"),
          v = ce(y),
          w = p(),
          R = c("br"),
          C = p(),
          L = c("hr"),
          I = p(),
          x = c("p"),
          x.innerHTML = `WARNING:<br/>
    Using Fluxus to violate any software terms of service is strictly against our terms. Fluxus should only be used as an IDE and debugger. Using Fluxus for anything else can and will result in a blacklist.`,
          l(s, "class", "svelte-1l1h2x4"),
          l(a, "href", "https://linkvertise.com/152666/FluxusV7Installer/1"),
          l(a, "target", "_blank"),
          l(a, "rel", "noreferrer"),
          l(a, "class", "svelte-1l1h2x4"),
          l(f, "href", "https://linkvertise.com/152666/FluxusD/1"),
          l(f, "target", "_blank"),
          l(f, "rel", "noreferrer"),
          l(f, "class", "svelte-1l1h2x4"),
          l(h, "href", "https://fluxteam.net/LICENSE.txt"),
          l(h, "target", "_blank"),
          l(h, "rel", "noopener noreferrer"),
          l(h, "class", "nobtn svelte-1l1h2x4"),
          l(m, "class", "svelte-1l1h2x4"),
          l(x, "class", "svelte-1l1h2x4"),
          l(r, "class", "p1 svelte-1l1h2x4")
      },
      m(F, N) {
          V(F, e, N),
          o(e, r),
          o(r, n),
          o(n, s),
          o(n, i),
          o(n, a),
          o(n, d),
          o(n, f),
          o(n, u),
          o(n, h),
          o(n, $),
          o(n, m),
          o(m, v),
          o(m, w),
          o(m, R),
          o(n, C),
          o(n, L),
          o(n, I),
          o(n, x)
      },
      p: P,
      i: P,
      o: P,
      d(F) {
          F && z(e)
      }
  }
}
function Yi(t) {
  return navigator.userAgent.includes("Android") && window.location.replace(X + "/android"),
  []
}
class xs extends Ye {
  constructor(e) {
      super(),
      je(this, e, Yi, ji, Ue, {})
  }
}
function zi(t) {
  let e;
  return {
      c() {
          e = c("main"),
          e.innerHTML = `<div class="p1 svelte-15oqtnk"><div><h1 class="svelte-15oqtnk">Fluxus Outdated</h1> 
    <p class="svelte-15oqtnk">Fluxus Android is down! Please try again in a few hours when we have a new update!</p></div></div>`
      },
      m(r, n) {
          V(r, e, n)
      },
      p: P,
      i: P,
      o: P,
      d(r) {
          r && z(e)
      }
  }
}
class As extends Ye {
  constructor(e) {
      super(),
      je(this, e, null, zi, Ue, {})
  }
}
function Vi(t) {
  let e;
  return {
      c() {
          e = c("main"),
          e.innerHTML = `<div class="p1 svelte-d9csao"><div><h1 class="svelte-d9csao">Fluxus Outdated</h1> 
    <p class="svelte-d9csao">Fluxus Android is down! Please try again in a few hours when we have a new update!</p></div></div>`
      },
      m(r, n) {
          V(r, e, n)
      },
      p: P,
      i: P,
      o: P,
      d(r) {
          r && z(e)
      }
  }
}
class Fn extends Ye {
  constructor(e) {
      super(),
      je(this, e, null, Vi, Ue, {})
  }
}
function Gi(t) {
  let e;
  return {
      c() {
          e = ce("Fluxus Website")
      },
      m(r, n) {
          V(r, e, n)
      },
      d(r) {
          r && z(e)
      }
  }
}
function Ki(t) {
  let e, r, n, s, i, a, d, f, u, h, $, m, y, v, w, R, C, L, I;
  return f = new Mt({
      props: {
          to: X + "/",
          $$slots: {
              default: [Gi]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  {
      c() {
          e = c("main"),
          r = c("div"),
          r.innerHTML = `<div><h1 class="svelte-1wglut6">Acknowledgements</h1> 
    <p class="svelte-1wglut6">The Fluxus Website (<a href="https://github.com/YieldingFluxus/fluxuswebsite">Source</a>) was made with the help of the following open-source projects:</p></div> 
  <div class="putmeonthebottom svelte-1wglut6"><p style="margin-bottom: -0.4em" class="svelte-1wglut6">Acknowledgements</p> 
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#ddddddaa"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"></path></svg></div>`,
          n = p(),
          s = c("div"),
          i = c("div"),
          a = c("div"),
          d = c("h2"),
          O(f.$$.fragment),
          u = p(),
          h = c("p"),
          h.innerHTML = `Copyright (c) 2022 YieldingExploiter<br/> 
        <br/>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy<br/>
        of this software and associated documentation files (the &quot;Software&quot;), to
        deal<br/>
        in the Software without restriction, including without limitation the rights<br/>
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br/>
        copies of the Software, and to permit persons to whom the Software is<br/>
        furnished to do so, subject to the following conditions:<br/> 
        <br/>
        The above copyright notice and this permission notice shall be included
        in all<br/>
        copies or substantial portions of the Software.<br/> 
        <br/>
        THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR<br/>
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br/>
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
        THE<br/>
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br/>
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        FROM,<br/>
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        IN THE<br/>
        SOFTWARE.`,
          $ = p(),
          m = c("div"),
          m.innerHTML = `<h2 class="svelte-1wglut6"><a href="https://github.com/YieldingExploiter/no-more-dark-reader" class="svelte-1wglut6">No More Dark Reader</a></h2> 
      <p class="svelte-1wglut6">&quot;THE BEER-WARE LICENSE&quot; (Revision 42):<br/>
        &lt;pleasego@nuke.africa&gt; wrote this file. As long as you retain this
        notice you<br/>
        can do whatever you want with this stuff. If we meet some day, and you
        think<br/>
        this stuff is worth it, you can buy me a beer in return | YieldingExploiter<br/></p>`,
          y = p(),
          v = c("div"),
          v.innerHTML = `<h2 class="svelte-1wglut6"><a href="https://github.com/sveltejs/svelte" class="svelte-1wglut6">Svelte</a></h2> 
      <p class="svelte-1wglut6">Copyright (c) 2016-22 <a href="https://github.com/sveltejs/svelte/graphs/contributors">these people</a><br/> 
        <br/>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy<br/>
        of this software and associated documentation files (the &quot;Software&quot;), to
        deal<br/>
        in the Software without restriction, including without limitation the rights<br/>
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br/>
        copies of the Software, and to permit persons to whom the Software is<br/>
        furnished to do so, subject to the following conditions:<br/> 
        <br/>
        The above copyright notice and this permission notice shall be included
        in all<br/>
        copies or substantial portions of the Software.<br/> 
        <br/>
        THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR<br/>
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br/>
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
        THE<br/>
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br/>
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        FROM,<br/>
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        IN THE<br/>
        SOFTWARE.</p>`,
          w = p(),
          R = c("div"),
          R.innerHTML = `<h2 class="svelte-1wglut6"><a href="https://github.com/microsoft/typescript" class="svelte-1wglut6">Typescript</a></h2> 
      <p class="svelte-1wglut6">Apache License
        <br/>
        Version 2.0, January 2004<br/> 
        <br/>
        http://www.apache.org/licenses/ <br/> 
        <br/>
        TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION<br/> 
        <br/>
        1. Definitions.<br/> 
        <br/>
        &quot;License&quot; shall mean the terms and conditions for use, reproduction, and
        distribution as defined by Sections 1 through 9 of this document.<br/> 
        <br/>
        &quot;Licensor&quot; shall mean the copyright owner or entity authorized by the copyright
        owner that is granting the License.<br/> 
        <br/>
        &quot;Legal Entity&quot; shall mean the union of the acting entity and all other
        entities that control, are controlled by, or are under common control with
        that entity. For the purposes of this definition, &quot;control&quot; means (i) the
        power, direct or indirect, to cause the direction or management of such
        entity, whether by contract or otherwise, or (ii) ownership of fifty percent
        (50%) or more of the outstanding shares, or (iii) beneficial ownership
        of such entity.<br/> 
        <br/>
        &quot;You&quot; (or &quot;Your&quot;) shall mean an individual or Legal Entity exercising permissions
        granted by this License.<br/> 
        <br/>
        &quot;Source&quot; form shall mean the preferred form for making modifications, including
        but not limited to software source code, documentation source, and configuration
        files.<br/> 
        <br/>
        &quot;Object&quot; form shall mean any form resulting from mechanical transformation
        or translation of a Source form, including but not limited to compiled
        object code, generated documentation, and conversions to other media types.<br/> 
        <br/>
        &quot;Work&quot; shall mean the work of authorship, whether in Source or Object form,
        made available under the License, as indicated by a copyright notice that
        is included in or attached to the work (an example is provided in the Appendix
        below).<br/> 
        <br/>
        &quot;Derivative Works&quot; shall mean any work, whether in Source or Object form,
        that is based on (or derived from) the Work and for which the editorial
        revisions, annotations, elaborations, or other modifications represent,
        as a whole, an original work of authorship. For the purposes of this License,
        Derivative Works shall not include works that remain separable from, or
        merely link (or bind by name) to the interfaces of, the Work and Derivative
        Works thereof.<br/> 
        <br/>
        &quot;Contribution&quot; shall mean any work of authorship, including the original
        version of the Work and any modifications or additions to that Work or
        Derivative Works thereof, that is intentionally submitted to Licensor for
        inclusion in the Work by the copyright owner or by an individual or Legal
        Entity authorized to submit on behalf of the copyright owner. For the purposes
        of this definition, &quot;submitted&quot; means any form of electronic, verbal, or
        written communication sent to the Licensor or its representatives, including
        but not limited to communication on electronic mailing lists, source code
        control systems, and issue tracking systems that are managed by, or on
        behalf of, the Licensor for the purpose of discussing and improving the
        Work, but excluding communication that is conspicuously marked or otherwise
        designated in writing by the copyright owner as &quot;Not a Contribution.&quot;<br/><br/> 
        <br/>
        &quot;Contributor&quot; shall mean Licensor and any individual or Legal Entity on
        behalf of whom a Contribution has been received by Licensor and subsequently
        incorporated within the Work.<br/> 
        <br/>
        2. Grant of Copyright License. Subject to the terms and conditions of this
        License, each Contributor hereby grants to You a perpetual, worldwide,
        non-exclusive, no-charge, royalty-free, irrevocable copyright license to
        reproduce, prepare Derivative Works of, publicly display, publicly perform,
        sublicense, and distribute the Work and such Derivative Works in Source
        or Object form.<br/> 
        <br/>
        3. Grant of Patent License. Subject to the terms and conditions of this
        License, each Contributor hereby grants to You a perpetual, worldwide,
        non-exclusive, no-charge, royalty-free, irrevocable (except as stated in
        this section) patent license to make, have made, use, offer to sell, sell,
        import, and otherwise transfer the Work, where such license applies only
        to those patent claims licensable by such Contributor that are necessarily
        infringed by their Contribution(s) alone or by combination of their Contribution(s)
        with the Work to which such Contribution(s) was submitted. If You institute
        patent litigation against any entity (including a cross-claim or counterclaim
        in a lawsuit) alleging that the Work or a Contribution incorporated within
        the Work constitutes direct or contributory patent infringement, then any
        patent licenses granted to You under this License for that Work shall terminate
        as of the date such litigation is filed.<br/><br/> 
        <br/>
        4. Redistribution. You may reproduce and distribute copies of the Work
        or Derivative Works thereof in any medium, with or without modifications,
        and in Source or Object form, provided that You meet the following conditions:<br/> 
        <br/>
        You must give any other recipients of the Work or Derivative Works a copy
        of this License; and<br/> 
        <br/>
        You must cause any modified files to carry prominent notices stating that
        You changed the files; and<br/> 
        <br/>
        You must retain, in the Source form of any Derivative Works that You distribute,
        all copyright, patent, trademark, and attribution notices from the Source
        form of the Work, excluding those notices that do not pertain to any part
        of the Derivative Works; and<br/> 
        <br/>
        If the Work includes a &quot;NOTICE&quot; text file as part of its distribution,
        then any Derivative Works that You distribute must include a readable copy
        of the attribution notices contained within such NOTICE file, excluding
        those notices that do not pertain to any part of the Derivative Works,
        in at least one of the following places: within a NOTICE text file distributed
        as part of the Derivative Works; within the Source form or documentation,
        if provided along with the Derivative Works; or, within a display generated
        by the Derivative Works, if and wherever such third-party notices normally
        appear. The contents of the NOTICE file are for informational purposes
        only and do not modify the License. You may add Your own attribution notices
        within Derivative Works that You distribute, alongside or as an addendum
        to the NOTICE text from the Work, provided that such additional attribution
        notices cannot be construed as modifying the License. You may add Your
        own copyright statement to Your modifications and may provide additional
        or different license terms and conditions for use, reproduction, or distribution
        of Your modifications, or for any such Derivative Works as a whole, provided
        Your use, reproduction, and distribution of the Work otherwise complies
        with the conditions stated in this License.<br/><br/> 
        <br/>
        5. Submission of Contributions. Unless You explicitly state otherwise,
        any Contribution intentionally submitted for inclusion in the Work by You
        to the Licensor shall be under the terms and conditions of this License,
        without any additional terms or conditions. Notwithstanding the above,
        nothing herein shall supersede or modify the terms of any separate license
        agreement you may have executed with Licensor regarding such Contributions.<br/> 
        <br/>
        6. Trademarks. This License does not grant permission to use the trade
        names, trademarks, service marks, or product names of the Licensor, except
        as required for reasonable and customary use in describing the origin of
        the Work and reproducing the content of the NOTICE file.<br/> 
        <br/>
        7. Disclaimer of Warranty. Unless required by applicable law or agreed
        to in writing, Licensor provides the Work (and each Contributor provides
        its Contributions) on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS
        OF ANY KIND, either express or implied, including, without limitation,
        any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY,
        or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining
        the appropriateness of using or redistributing the Work and assume any
        risks associated with Your exercise of permissions under this License.<br/> 
        <br/>
        8. Limitation of Liability. In no event and under no legal theory, whether
        in tort (including negligence), contract, or otherwise, unless required
        by applicable law (such as deliberate and grossly negligent acts) or agreed
        to in writing, shall any Contributor be liable to You for damages, including
        any direct, indirect, special, incidental, or consequential damages of
        any character arising as a result of this License or out of the use or
        inability to use the Work (including but not limited to damages for loss
        of goodwill, work stoppage, computer failure or malfunction, or any and
        all other commercial damages or losses), even if such Contributor has been
        advised of the possibility of such damages.<br/> 
        <br/>
        9. Accepting Warranty or Additional Liability. While redistributing the
        Work or Derivative Works thereof, You may choose to offer, and charge a
        fee for, acceptance of support, warranty, indemnity, or other liability
        obligations and/or rights consistent with this License. However, in accepting
        such obligations, You may act only on Your own behalf and on Your sole
        responsibility, not on behalf of any other Contributor, and only if You
        agree to indemnify, defend, and hold each Contributor harmless for any
        liability incurred by, or claims asserted against, such Contributor by
        reason of your accepting any such warranty or additional liability.<br/> 
        <br/>
        END OF TERMS AND CONDITIONS</p>`,
          C = p(),
          L = c("div"),
          L.innerHTML = `<h2 class="svelte-1wglut6"><a href="https://github.com/vitejs/vite" class="svelte-1wglut6">Vite</a></h2> 
      <p class="svelte-1wglut6">MIT License<br/> 
        <br/>
        Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors<br/> 
        <br/>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy<br/>
        of this software and associated documentation files (the &quot;Software&quot;), to
        deal<br/>
        in the Software without restriction, including without limitation the rights<br/>
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br/>
        copies of the Software, and to permit persons to whom the Software is<br/>
        furnished to do so, subject to the following conditions:<br/> 
        <br/>
        The above copyright notice and this permission notice shall be included
        in all<br/>
        copies or substantial portions of the Software.<br/> 
        <br/>
        THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR<br/>
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br/>
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
        THE<br/>
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br/>
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        FROM,<br/>
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        IN THE<br/>
        SOFTWARE.</p>`,
          l(r, "class", "p1 svelte-1wglut6"),
          l(d, "class", "svelte-1wglut6"),
          l(h, "class", "svelte-1wglut6"),
          l(a, "class", "license"),
          l(m, "class", "license"),
          l(v, "class", "license"),
          l(R, "class", "license"),
          l(L, "class", "license"),
          l(i, "class", "licenses svelte-1wglut6"),
          l(s, "class", "p2 svelte-1wglut6")
      },
      m(x, F) {
          V(x, e, F),
          o(e, r),
          o(e, n),
          o(e, s),
          o(s, i),
          o(i, a),
          o(a, d),
          A(f, d, null),
          o(a, u),
          o(a, h),
          o(i, $),
          o(i, m),
          o(i, y),
          o(i, v),
          o(i, w),
          o(i, R),
          o(i, C),
          o(i, L),
          I = !0
      },
      p(x, [F]) {
          const N = {};
          F & 1 && (N.$$scope = {
              dirty: F,
              ctx: x
          }),
          f.$set(N)
      },
      i(x) {
          I || (E(f.$$.fragment, x),
          I = !0)
      },
      o(x) {
          S(f.$$.fragment, x),
          I = !1
      },
      d(x) {
          x && z(e),
          T(f)
      }
  }
}
class Ts extends Ye {
  constructor(e) {
      super(),
      je(this, e, null, Ki, Ue, {})
  }
}
function Ji(t) {
  let e, r, n;
  return {
      c() {
          e = c("span"),
          r = c("img"),
          Kt(r.src, n = So) || l(r, "src", n),
          l(r, "alt", "Fluxus"),
          H(r, "height", "1.4em"),
          H(r, "transform", "scale(1.5)"),
          H(r, "padding-top", "1px"),
          l(e, "class", "cont")
      },
      m(s, i) {
          V(s, e, i),
          o(e, r)
      },
      p: P,
      d(s) {
          s && z(e)
      }
  }
}
function Qi(t) {
  let e;
  return {
      c() {
          e = c("span"),
          e.textContent = `${k("Download")}`,
          l(e, "class", "cont")
      },
      m(r, n) {
          V(r, e, n)
      },
      p: P,
      d(r) {
          r && z(e)
      }
  }
}
function Xi(t) {
  let e;
  return {
      c() {
          e = c("span"),
          e.textContent = `${k("Android")}`,
          l(e, "class", "cont")
      },
      m(r, n) {
          V(r, e, n)
      },
      p: P,
      d(r) {
          r && z(e)
      }
  }
}
function Zi(t) {
  let e, r;
  return e = new ss({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ea(t) {
  let e, r;
  return e = new xs({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ta(t) {
  let e, r;
  return e = new Zt({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function na(t) {
  let e, r;
  return e = new Zt({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ra(t) {
  let e, r;
  return e = new Zt({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function sa(t) {
  let e, r;
  return e = new Cn({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function oa(t) {
  let e, r;
  return e = new Ss({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ia(t) {
  let e, r;
  return e = new Cn({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function aa(t) {
  let e, r;
  return e = new In({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function la(t) {
  let e, r;
  return e = new In({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ca(t) {
  let e, r;
  return e = new Ts({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ua(t) {
  let e, r;
  return e = new As({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function da(t) {
  let e, r;
  return e = new As({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function fa(t) {
  let e, r;
  return e = new Fn({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ha(t) {
  let e, r;
  return e = new Fn({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function pa(t) {
  let e, r;
  return e = new ss({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ma(t) {
  let e, r;
  return e = new xs({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ga(t) {
  let e, r;
  return e = new Zt({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ba(t) {
  let e, r;
  return e = new Zt({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function $a(t) {
  let e, r;
  return e = new Zt({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function va(t) {
  let e, r;
  return e = new Cn({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function wa(t) {
  let e, r;
  return e = new Cn({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function ya(t) {
  let e, r;
  return e = new Ss({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function _a(t) {
  let e, r;
  return e = new In({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function Ea(t) {
  let e, r;
  return e = new In({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function Sa(t) {
  let e, r;
  return e = new Ts({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function xa(t) {
  let e, r;
  return e = new Fn({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function Aa(t) {
  let e, r;
  return e = new Fn({}),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function Ta(t) {
  let e, r, n, s, i, a, d, f, u, h, $, m, y, v, w, R, C, L, I, x, F, N, q, oe, Z, $e, K, pe, ve, He, M, ee, B, ze, me, ie, te, j, J, ot, ne, Te, Y, Ve, _e, Me, ae, U, ue, xe, de, Ee, Q, G, re, Ge, ge, Ae, le, Oe, se, Re, fe, we, he, ke, Ne, Be;
  return n = new Mt({
      props: {
          to: X + "/",
          $$slots: {
              default: [Ji]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  i = new Mt({
      props: {
          to: X + "/dl",
          class: "nomobile",
          $$slots: {
              default: [Qi]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  d = new Mt({
      props: {
          to: X + "/android",
          $$slots: {
              default: [Xi]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  y = new W({
      props: {
          path: "/",
          $$slots: {
              default: [Zi]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  w = new W({
      props: {
          path: "/dl",
          $$slots: {
              default: [ea]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  C = new W({
      props: {
          path: "/android",
          $$slots: {
              default: [ta]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  I = new W({
      props: {
          path: "/android/install",
          $$slots: {
              default: [na]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  F = new W({
      props: {
          path: "/android/install.html",
          $$slots: {
              default: [ra]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  q = new W({
      props: {
          path: "/android/legacy",
          $$slots: {
              default: [sa]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  Z = new W({
      props: {
          path: "/android/client-mirrors",
          $$slots: {
              default: [oa]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  K = new W({
      props: {
          path: "/android/legacy.html",
          $$slots: {
              default: [ia]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  ve = new W({
      props: {
          path: "/android/sign",
          $$slots: {
              default: [aa]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  M = new W({
      props: {
          path: "/as",
          $$slots: {
              default: [la]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  B = new W({
      props: {
          path: "/acknowledgements",
          $$slots: {
              default: [ca]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  me = new W({
      props: {
          path: "/android/errors/wrong",
          $$slots: {
              default: [ua]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  te = new W({
      props: {
          path: "/android/errors/wrong.html",
          $$slots: {
              default: [da]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  J = new W({
      props: {
          path: "/android/errors/wrong_two",
          $$slots: {
              default: [fa]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  ne = new W({
      props: {
          path: "/android/errors/wrong_two.html",
          $$slots: {
              default: [ha]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  Y = new W({
      props: {
          path: X + "/",
          $$slots: {
              default: [pa]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  _e = new W({
      props: {
          path: X + "/dl",
          $$slots: {
              default: [ma]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  ae = new W({
      props: {
          path: X + "/android",
          $$slots: {
              default: [ga]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  ue = new W({
      props: {
          path: X + "/android/install",
          $$slots: {
              default: [ba]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  de = new W({
      props: {
          path: X + "/android/install.html",
          $$slots: {
              default: [$a]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  Q = new W({
      props: {
          path: X + "/android/legacy",
          $$slots: {
              default: [va]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  re = new W({
      props: {
          path: X + "/android/legacy.html",
          $$slots: {
              default: [wa]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  ge = new W({
      props: {
          path: X + "/android/client-mirrors",
          $$slots: {
              default: [ya]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  le = new W({
      props: {
          path: X + "/android/sign",
          $$slots: {
              default: [_a]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  se = new W({
      props: {
          path: X + "/as",
          $$slots: {
              default: [Ea]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  fe = new W({
      props: {
          path: X + "/acknowledgements",
          $$slots: {
              default: [Sa]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  he = new W({
      props: {
          path: X + "/android/errors/wrong_two",
          $$slots: {
              default: [xa]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  Ne = new W({
      props: {
          path: X + "/android/errors/wrong_two.html",
          $$slots: {
              default: [Aa]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  {
      c() {
          e = c("div"),
          r = c("nav"),
          O(n.$$.fragment),
          s = p(),
          O(i.$$.fragment),
          a = p(),
          O(d.$$.fragment),
          f = p(),
          u = c("a"),
          h = c("span"),
          h.textContent = `${k("Discord")}`,
          $ = p(),
          m = c("div"),
          O(y.$$.fragment),
          v = p(),
          O(w.$$.fragment),
          R = p(),
          O(C.$$.fragment),
          L = p(),
          O(I.$$.fragment),
          x = p(),
          O(F.$$.fragment),
          N = p(),
          O(q.$$.fragment),
          oe = p(),
          O(Z.$$.fragment),
          $e = p(),
          O(K.$$.fragment),
          pe = p(),
          O(ve.$$.fragment),
          He = p(),
          O(M.$$.fragment),
          ee = p(),
          O(B.$$.fragment),
          ze = p(),
          O(me.$$.fragment),
          ie = p(),
          O(te.$$.fragment),
          j = p(),
          O(J.$$.fragment),
          ot = p(),
          O(ne.$$.fragment),
          Te = p(),
          O(Y.$$.fragment),
          Ve = p(),
          O(_e.$$.fragment),
          Me = p(),
          O(ae.$$.fragment),
          U = p(),
          O(ue.$$.fragment),
          xe = p(),
          O(de.$$.fragment),
          Ee = p(),
          O(Q.$$.fragment),
          G = p(),
          O(re.$$.fragment),
          Ge = p(),
          O(ge.$$.fragment),
          Ae = p(),
          O(le.$$.fragment),
          Oe = p(),
          O(se.$$.fragment),
          Re = p(),
          O(fe.$$.fragment),
          we = p(),
          O(he.$$.fragment),
          ke = p(),
          O(Ne.$$.fragment),
          l(h, "class", "cont"),
          l(u, "href", t[1]),
          l(e, "class", "navContainer svelte-135yck0"),
          l(m, "class", "page")
      },
      m(b, _) {
          V(b, e, _),
          o(e, r),
          A(n, r, null),
          o(r, s),
          A(i, r, null),
          o(r, a),
          A(d, r, null),
          o(r, f),
          o(r, u),
          o(u, h),
          V(b, $, _),
          V(b, m, _),
          A(y, m, null),
          o(m, v),
          A(w, m, null),
          o(m, R),
          A(C, m, null),
          o(m, L),
          A(I, m, null),
          o(m, x),
          A(F, m, null),
          o(m, N),
          A(q, m, null),
          o(m, oe),
          A(Z, m, null),
          o(m, $e),
          A(K, m, null),
          o(m, pe),
          A(ve, m, null),
          o(m, He),
          A(M, m, null),
          o(m, ee),
          A(B, m, null),
          o(m, ze),
          A(me, m, null),
          o(m, ie),
          A(te, m, null),
          o(m, j),
          A(J, m, null),
          o(m, ot),
          A(ne, m, null),
          o(m, Te),
          A(Y, m, null),
          o(m, Ve),
          A(_e, m, null),
          o(m, Me),
          A(ae, m, null),
          o(m, U),
          A(ue, m, null),
          o(m, xe),
          A(de, m, null),
          o(m, Ee),
          A(Q, m, null),
          o(m, G),
          A(re, m, null),
          o(m, Ge),
          A(ge, m, null),
          o(m, Ae),
          A(le, m, null),
          o(m, Oe),
          A(se, m, null),
          o(m, Re),
          A(fe, m, null),
          o(m, we),
          A(he, m, null),
          o(m, ke),
          A(Ne, m, null),
          Be = !0
      },
      p(b, _) {
          const it = {};
          _ & 128 && (it.$$scope = {
              dirty: _,
              ctx: b
          }),
          n.$set(it);
          const Ke = {};
          _ & 128 && (Ke.$$scope = {
              dirty: _,
              ctx: b
          }),
          i.$set(Ke);
          const at = {};
          _ & 128 && (at.$$scope = {
              dirty: _,
              ctx: b
          }),
          d.$set(at),
          (!Be || _ & 2) && l(u, "href", b[1]);
          const Rt = {};
          _ & 128 && (Rt.$$scope = {
              dirty: _,
              ctx: b
          }),
          y.$set(Rt);
          const We = {};
          _ & 128 && (We.$$scope = {
              dirty: _,
              ctx: b
          }),
          w.$set(We);
          const Ce = {};
          _ & 128 && (Ce.$$scope = {
              dirty: _,
              ctx: b
          }),
          C.$set(Ce);
          const Ie = {};
          _ & 128 && (Ie.$$scope = {
              dirty: _,
              ctx: b
          }),
          I.$set(Ie);
          const yt = {};
          _ & 128 && (yt.$$scope = {
              dirty: _,
              ctx: b
          }),
          F.$set(yt);
          const ft = {};
          _ & 128 && (ft.$$scope = {
              dirty: _,
              ctx: b
          }),
          q.$set(ft);
          const Je = {};
          _ & 128 && (Je.$$scope = {
              dirty: _,
              ctx: b
          }),
          Z.$set(Je);
          const Qe = {};
          _ & 128 && (Qe.$$scope = {
              dirty: _,
              ctx: b
          }),
          K.$set(Qe);
          const lt = {};
          _ & 128 && (lt.$$scope = {
              dirty: _,
              ctx: b
          }),
          ve.$set(lt);
          const Xe = {};
          _ & 128 && (Xe.$$scope = {
              dirty: _,
              ctx: b
          }),
          M.$set(Xe);
          const ct = {};
          _ & 128 && (ct.$$scope = {
              dirty: _,
              ctx: b
          }),
          B.$set(ct);
          const kt = {};
          _ & 128 && (kt.$$scope = {
              dirty: _,
              ctx: b
          }),
          me.$set(kt);
          const Fe = {};
          _ & 128 && (Fe.$$scope = {
              dirty: _,
              ctx: b
          }),
          te.$set(Fe);
          const qe = {};
          _ & 128 && (qe.$$scope = {
              dirty: _,
              ctx: b
          }),
          J.$set(qe);
          const Ze = {};
          _ & 128 && (Ze.$$scope = {
              dirty: _,
              ctx: b
          }),
          ne.$set(Ze);
          const Le = {};
          _ & 128 && (Le.$$scope = {
              dirty: _,
              ctx: b
          }),
          Y.$set(Le);
          const _t = {};
          _ & 128 && (_t.$$scope = {
              dirty: _,
              ctx: b
          }),
          _e.$set(_t);
          const ht = {};
          _ & 128 && (ht.$$scope = {
              dirty: _,
              ctx: b
          }),
          ae.$set(ht);
          const ut = {};
          _ & 128 && (ut.$$scope = {
              dirty: _,
              ctx: b
          }),
          ue.$set(ut);
          const Se = {};
          _ & 128 && (Se.$$scope = {
              dirty: _,
              ctx: b
          }),
          de.$set(Se);
          const De = {};
          _ & 128 && (De.$$scope = {
              dirty: _,
              ctx: b
          }),
          Q.$set(De);
          const pt = {};
          _ & 128 && (pt.$$scope = {
              dirty: _,
              ctx: b
          }),
          re.$set(pt);
          const mt = {};
          _ & 128 && (mt.$$scope = {
              dirty: _,
              ctx: b
          }),
          ge.$set(mt);
          const gt = {};
          _ & 128 && (gt.$$scope = {
              dirty: _,
              ctx: b
          }),
          le.$set(gt);
          const bt = {};
          _ & 128 && (bt.$$scope = {
              dirty: _,
              ctx: b
          }),
          se.$set(bt);
          const ye = {};
          _ & 128 && (ye.$$scope = {
              dirty: _,
              ctx: b
          }),
          fe.$set(ye);
          const Pe = {};
          _ & 128 && (Pe.$$scope = {
              dirty: _,
              ctx: b
          }),
          he.$set(Pe);
          const Nt = {};
          _ & 128 && (Nt.$$scope = {
              dirty: _,
              ctx: b
          }),
          Ne.$set(Nt)
      },
      i(b) {
          Be || (E(n.$$.fragment, b),
          E(i.$$.fragment, b),
          E(d.$$.fragment, b),
          E(y.$$.fragment, b),
          E(w.$$.fragment, b),
          E(C.$$.fragment, b),
          E(I.$$.fragment, b),
          E(F.$$.fragment, b),
          E(q.$$.fragment, b),
          E(Z.$$.fragment, b),
          E(K.$$.fragment, b),
          E(ve.$$.fragment, b),
          E(M.$$.fragment, b),
          E(B.$$.fragment, b),
          E(me.$$.fragment, b),
          E(te.$$.fragment, b),
          E(J.$$.fragment, b),
          E(ne.$$.fragment, b),
          E(Y.$$.fragment, b),
          E(_e.$$.fragment, b),
          E(ae.$$.fragment, b),
          E(ue.$$.fragment, b),
          E(de.$$.fragment, b),
          E(Q.$$.fragment, b),
          E(re.$$.fragment, b),
          E(ge.$$.fragment, b),
          E(le.$$.fragment, b),
          E(se.$$.fragment, b),
          E(fe.$$.fragment, b),
          E(he.$$.fragment, b),
          E(Ne.$$.fragment, b),
          Be = !0)
      },
      o(b) {
          S(n.$$.fragment, b),
          S(i.$$.fragment, b),
          S(d.$$.fragment, b),
          S(y.$$.fragment, b),
          S(w.$$.fragment, b),
          S(C.$$.fragment, b),
          S(I.$$.fragment, b),
          S(F.$$.fragment, b),
          S(q.$$.fragment, b),
          S(Z.$$.fragment, b),
          S(K.$$.fragment, b),
          S(ve.$$.fragment, b),
          S(M.$$.fragment, b),
          S(B.$$.fragment, b),
          S(me.$$.fragment, b),
          S(te.$$.fragment, b),
          S(J.$$.fragment, b),
          S(ne.$$.fragment, b),
          S(Y.$$.fragment, b),
          S(_e.$$.fragment, b),
          S(ae.$$.fragment, b),
          S(ue.$$.fragment, b),
          S(de.$$.fragment, b),
          S(Q.$$.fragment, b),
          S(re.$$.fragment, b),
          S(ge.$$.fragment, b),
          S(le.$$.fragment, b),
          S(se.$$.fragment, b),
          S(fe.$$.fragment, b),
          S(he.$$.fragment, b),
          S(Ne.$$.fragment, b),
          Be = !1
      },
      d(b) {
          b && z(e),
          T(n),
          T(i),
          T(d),
          b && z($),
          b && z(m),
          T(y),
          T(w),
          T(C),
          T(I),
          T(F),
          T(q),
          T(Z),
          T(K),
          T(ve),
          T(M),
          T(B),
          T(me),
          T(te),
          T(J),
          T(ne),
          T(Y),
          T(_e),
          T(ae),
          T(ue),
          T(de),
          T(Q),
          T(re),
          T(ge),
          T(le),
          T(se),
          T(fe),
          T(he),
          T(Ne)
      }
  }
}
function Oa(t) {
  let e, r;
  return e = new ao({
      props: {
          url: t[0],
          $$slots: {
              default: [Ta]
          },
          $$scope: {
              ctx: t
          }
      }
  }),
  {
      c() {
          O(e.$$.fragment)
      },
      m(n, s) {
          A(e, n, s),
          r = !0
      },
      p(n, [s]) {
          const i = {};
          s & 1 && (i.url = n[0]),
          s & 130 && (i.$$scope = {
              dirty: s,
              ctx: n
          }),
          e.$set(i)
      },
      i(n) {
          r || (E(e.$$.fragment, n),
          r = !0)
      },
      o(n) {
          S(e.$$.fragment, n),
          r = !1
      },
      d(n) {
          T(e, n)
      }
  }
}
function Ra(t, e, r) {
  (localStorage.getItem("og-vibes") || document.location.href.includes("use-og-vibes=true")) && document.location.href.includes("/dl") && (confirm("The old layout breaks things - Are you sure?") ? document.body.style.background = "url(https://cdn.discordapp.com/attachments/922892706638872617/928031837446635600/New_Project_37_FFCA699.png) no-repeat 50%" : localStorage.removeItem("og-vibes"));
  let n;
  setInterval(()=>{
      n = Math.min(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
  }
  , 500);
  const s = {}
    , i = (h,$)=>{
      s[h] !== $ && (document.body.setAttribute(h, $),
      s[h] = $)
  }
    , a = ()=>{
      (!n || Math.floor(n) === 0) && (n = window.screenY),
      i("data-did-911-happen-yet", window.scrollY === 0 ? "true" : "false"),
      i("data-pn", Math.floor((window.scrollY + 256) / n).toString()),
      i("data-n", Math.floor((window.scrollY + 64) / n).toString()),
      i("data-nb", Math.floor((window.scrollY + n) / n).toString())
  }
  ;
  if (window.addEventListener("scroll", a),
  a(),
  navigator.userAgent.includes("Chrome/")) {
      const h = document.createElement("style");
      h.innerHTML = ".cont img{padding-left:4px}",
      document.head.appendChild(h)
  }
  if (!navigator.userAgent.includes("Firefox/")) {
      const h = document.createElement("style");
      h.innerHTML = ".page1 {backdrop-filter:none !important;background:linear-gradient(135deg,#181926,#1e2030);}",
      document.head.appendChild(h)
  }
  let {url: d=""} = e
    , f = "https://discord.gg/GNHbGPbah2";
  fetch("https://fluxteam.net/external-files/discord.php").then(h=>h.text()).then(h=>r(1, f = `https://discord.gg/${h}`));
  let u = [];
  return setInterval(()=>{
      document.querySelectorAll(".cards").forEach(h=>{
          u.includes(h) || (u.push(h),
          h.onmousemove = $=>{
              for (const m of document.getElementsByClassName("card")) {
                  const y = m.getBoundingClientRect()
                    , v = $.clientX - y.left
                    , w = $.clientY - y.top
                    , R = m;
                  R.style.setProperty("--mouse-x", `${v}px`),
                  R.style.setProperty("--mouse-y", `${w}px`)
              }
          }
          )
      }
      )
  }
  , 500),
  t.$$set = h=>{
      "url"in h && r(0, d = h.url)
  }
  ,
  [d, f]
}
class ka extends Ye {
  constructor(e) {
      super(),
      je(this, e, Ra, Oa, Ue, {
          url: 0
      })
  }
}
new ka({
  target: document.getElementById("app")
});
