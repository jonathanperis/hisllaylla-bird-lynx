(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("background.js", function(require, module, exports, Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,ReactLynx,nativeAppId,Behavior,LynxJSBI,lynx) {
lynx = lynx || {};
lynx.targetSdkVersion=lynx.targetSdkVersion||"3.2";
var Promise = lynx.Promise;
var fetch = lynx.fetch;
// lynx chunks entries
if (!lynx.__chunk_entries__) {
  // Initialize once
  lynx.__chunk_entries__ = {};
}
if (!lynx.__chunk_entries__["main"]) {
  lynx.__chunk_entries__["main"] = globDynamicComponentEntry;
} else {
  globDynamicComponentEntry = lynx.__chunk_entries__["main"];
}

"use strict";
var __webpack_modules__ = ({
"(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs": (function (module, __unused_webpack_exports, __webpack_require__) {
/**
 * @param {Function} fn
 * @param {number} time
 * @returns {function(): void}
 */ function debounce(fn, time) {
    let timeout = 0;
    return function debounced(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn.apply(this, args), time);
    };
}
function updateStyle(cssId = 0) {
    const cssHotUpdateList = __webpack_require__.cssHotUpdateList;
    if (!cssHotUpdateList) throw new Error('cssHotUpdateList is not found');
    for (const [chunkName, cssHotUpdatePath] of cssHotUpdateList)lynx.requireModuleAsync(// the LynxGroup level cache here.
    // Temporarily using `Date.now` to avoid being cached.
    __webpack_require__.p + cssHotUpdatePath, (err, ret)=>{
        if (err) throw new Error(`Failed to load CSS update file: ${cssHotUpdatePath}`);
        if (ret.content) lynx.getCoreContext().dispatchEvent({
            type: 'lynx.hmr.css',
            data: {
                cssId,
                content: ret.content,
                deps: ret.deps,
                entry: lynx.__chunk_entries__[chunkName]
            }
        });
    });
}
/**
 * @param {string | number} moduleId
 * @param {unknown} options
 * @param {number=} cssId
 * @returns {() => void}
 */ module.exports = function update(moduleId, options, cssId) {
    // TODO: should not pass cssId === ''
    if (!cssId) cssId = 0;
    function update() {
        updateStyle(cssId);
    }
    return debounce(update, 50);
};


}),
"(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs": (function (module, __unused_webpack_exports, __webpack_require__) {
const { isComponent, flush } = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js");
// eslint-disable-next-line
const getExports = (m)=>m.exports || m.__proto__.exports;
function isSafeExport(key) {
    return key === '__esModule' || key === '__N_SSG' || key === '__N_SSP' || key === 'config';
}
function registerExports(moduleExports, moduleId) {
    globalThis['__PREFRESH__'].register(moduleExports, moduleId + ' %exports%');
    if (moduleExports == null || typeof moduleExports !== 'object') return;
    for(const key in moduleExports){
        if (isSafeExport(key)) continue;
        const exportValue = moduleExports[key];
        const typeID = moduleId + ' %exports% ' + key;
        globalThis['__PREFRESH__'].register(exportValue, typeID);
    }
}
const shouldBind = (m)=>{
    let isCitizen = false;
    const moduleExports = getExports(m);
    if (isComponent(moduleExports)) isCitizen = true;
    if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') isCitizen = isCitizen || false;
    else for(const key in moduleExports){
        if (key === '__esModule') continue;
        const exportValue = moduleExports[key];
        if (isComponent(exportValue)) isCitizen = isCitizen || true;
    }
    return isCitizen;
};
module.exports = Object.freeze({
    getExports,
    shouldBind,
    flush,
    registerExports
});


}),
"(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  flush: () => (flush),
  isComponent: () => (isComponent)
});
/* ESM import */var _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js");
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/catchError.js

// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/constants.js
var VNODE_COMPONENT = "__c";
var NAMESPACE = "__PREFRESH__";
var COMPONENT_HOOKS = "__H";
var HOOKS_LIST = "__";
var EFFECTS_LIST = "__h";
var RERENDER_COUNT = "__r";
var CATCH_ERROR_OPTION = "__e";
var COMPONENT_DIRTY = "__d";
var HOOK_VALUE = "__";
var HOOK_ARGS = "__H";
var HOOK_CLEANUP = "__c";
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/catchError.js
var oldCatchError = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options[CATCH_ERROR_OPTION];
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options[CATCH_ERROR_OPTION] = (error, vnode, oldVNode)=>{
    if (vnode[VNODE_COMPONENT] && vnode[VNODE_COMPONENT][COMPONENT_DIRTY]) vnode[VNODE_COMPONENT][COMPONENT_DIRTY] = false;
    if (oldCatchError) oldCatchError(error, vnode, oldVNode);
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/debounceRendering.js

var defer = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = (process)=>{
    defer(()=>{
        try {
            process();
        } catch (e) {
            process[RERENDER_COUNT] = 0;
            throw e;
        }
    });
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/vnode.js

// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/vnodesForComponent.js
var vnodesForComponent = /* @__PURE__ */ new WeakMap();
var mappedVNodes = /* @__PURE__ */ new WeakMap();
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/vnode.js
var getMappedVnode = (type)=>{
    if (mappedVNodes.has(type)) return getMappedVnode(mappedVNodes.get(type));
    return type;
};
var BUILT_IN_COMPONENTS = [
    "Fragment",
    "Suspense",
    "SuspenseList"
];
var isBuiltIn = (type)=>{
    return BUILT_IN_COMPONENTS.includes(type.name);
};
var oldVnode = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.vnode = (vnode)=>{
    if (vnode && typeof vnode.type === "function" && !isBuiltIn(vnode.type)) {
        const vnodes = vnodesForComponent.get(vnode.type);
        if (!vnodes) vnodesForComponent.set(vnode.type, [
            vnode
        ]);
        else vnodes.push(vnode);
        const foundType = getMappedVnode(vnode.type);
        if (foundType !== vnode.type) {
            const vnodes2 = vnodesForComponent.get(foundType);
            if (!vnodes2) vnodesForComponent.set(foundType, [
                vnode
            ]);
            else vnodes2.push(vnode);
        }
        vnode.type = foundType;
        if (vnode[VNODE_COMPONENT] && "prototype" in vnode.type && vnode.type.prototype.render) vnode[VNODE_COMPONENT].constructor = vnode.type;
    }
    if (oldVnode) oldVnode(vnode);
};
var oldDiffed = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.diffed;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.diffed = (vnode)=>{
    if (vnode && typeof vnode.type === "function") {
        const vnodes = vnodesForComponent.get(vnode.type);
        if (vnodes) {
            const matchingDom = vnodes.filter((p)=>p.__c === vnode.__c);
            if (matchingDom.length > 1) {
                const i = vnodes.findIndex((p)=>p === matchingDom[0]);
                vnodes.splice(i, 1);
            }
        }
    }
    if (oldDiffed) oldDiffed(vnode);
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/unmount.js

var oldUnmount = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.unmount = (vnode)=>{
    const type = (vnode || {}).type;
    if (typeof type === "function" && vnodesForComponent.has(type)) {
        const vnodes = vnodesForComponent.get(type);
        if (vnodes) {
            const index = vnodes.indexOf(vnode);
            if (index !== -1) vnodes.splice(index, 1);
        }
    }
    if (oldUnmount) oldUnmount(vnode);
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/index.js

// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/signaturesForType.js
var signaturesForType = /* @__PURE__ */ new WeakMap();
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/computeKey.js
var computeKey = (signature)=>{
    let fullKey = signature.key;
    let hooks;
    try {
        hooks = signature.getCustomHooks();
    } catch (err) {
        signature.forceReset = true;
        return fullKey;
    }
    for(let i = 0; i < hooks.length; i++){
        const hook = hooks[i];
        if (typeof hook !== "function") {
            signature.forceReset = true;
            return fullKey;
        }
        const nestedHookSignature = signaturesForType.get(hook);
        if (nestedHookSignature === void 0) continue;
        const nestedHookKey = computeKey(nestedHookSignature);
        if (nestedHookSignature.forceReset) signature.forceReset = true;
        fullKey += "\n---\n" + nestedHookKey;
    }
    return fullKey;
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/index.js
var typesById = /* @__PURE__ */ new Map();
var pendingUpdates = [];
function sign(type, key, forceReset, getCustomHooks, status) {
    if (type) {
        let signature = signaturesForType.get(type);
        if (status === "begin") {
            signaturesForType.set(type, {
                type,
                key,
                forceReset,
                getCustomHooks: getCustomHooks || (()=>[])
            });
            return "needsHooks";
        } else if (status === "needsHooks") signature.fullKey = computeKey(signature);
    }
}
function replaceComponent(OldType, NewType, resetHookState) {
    const vnodes = vnodesForComponent.get(OldType);
    if (!vnodes) return;
    vnodesForComponent.delete(OldType);
    vnodesForComponent.set(NewType, vnodes);
    mappedVNodes.set(OldType, NewType);
    pendingUpdates = pendingUpdates.filter((p)=>p[0] !== OldType);
    vnodes.forEach((vnode)=>{
        if (!vnode.__c || !vnode.__c.__P) return;
        vnode.type = NewType;
        if (vnode[VNODE_COMPONENT]) {
            vnode[VNODE_COMPONENT].constructor = vnode.type;
            try {
                if (vnode[VNODE_COMPONENT] instanceof OldType) {
                    const oldInst = vnode[VNODE_COMPONENT];
                    const newInst = new NewType(vnode[VNODE_COMPONENT].props, vnode[VNODE_COMPONENT].context);
                    vnode[VNODE_COMPONENT] = newInst;
                    for(let i in oldInst){
                        const type = typeof oldInst[i];
                        if (!(i in newInst)) newInst[i] = oldInst[i];
                        else if (type !== "function" && typeof newInst[i] === type) {
                            if (type === "object" && newInst[i] != null && newInst[i].constructor === oldInst[i].constructor) Object.assign(newInst[i], oldInst[i]);
                            else newInst[i] = oldInst[i];
                        }
                    }
                }
            } catch (e) {
                vnode[VNODE_COMPONENT].constructor = NewType;
            }
            if (resetHookState) {
                if (vnode[VNODE_COMPONENT][COMPONENT_HOOKS] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].length) vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].forEach((possibleEffect)=>{
                    if (possibleEffect[HOOK_CLEANUP] && typeof possibleEffect[HOOK_CLEANUP] === "function") {
                        possibleEffect[HOOK_CLEANUP]();
                        possibleEffect[HOOK_CLEANUP] = void 0;
                    } else if (possibleEffect[HOOK_ARGS] && possibleEffect[HOOK_VALUE] && Object.keys(possibleEffect).length === 3) {
                        const cleanupKey = Object.keys(possibleEffect).find((key)=>key !== HOOK_ARGS && key !== HOOK_VALUE);
                        if (cleanupKey && typeof possibleEffect[cleanupKey] == "function") {
                            possibleEffect[cleanupKey]();
                            possibleEffect[cleanupKey] = void 0;
                        }
                    }
                });
                vnode[VNODE_COMPONENT][COMPONENT_HOOKS] = {
                    [HOOKS_LIST]: [],
                    [EFFECTS_LIST]: []
                };
            } else if (vnode[VNODE_COMPONENT][COMPONENT_HOOKS] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].length) {
                vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].forEach((possibleEffect)=>{
                    if (possibleEffect[HOOK_CLEANUP] && typeof possibleEffect[HOOK_CLEANUP] === "function") {
                        possibleEffect[HOOK_CLEANUP]();
                        possibleEffect[HOOK_CLEANUP] = void 0;
                    } else if (possibleEffect[HOOK_ARGS] && possibleEffect[HOOK_VALUE] && Object.keys(possibleEffect).length === 3) {
                        const cleanupKey = Object.keys(possibleEffect).find((key)=>key !== HOOK_ARGS && key !== HOOK_VALUE);
                        if (cleanupKey && typeof possibleEffect[cleanupKey] == "function") possibleEffect[cleanupKey]();
                        possibleEffect[cleanupKey] = void 0;
                    }
                });
                vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].forEach((hook)=>{
                    if (hook.__H && Array.isArray(hook.__H)) hook.__H = void 0;
                });
            }
            _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate.call(vnode[VNODE_COMPONENT]);
        }
    });
}
globalThis[NAMESPACE] = {
    getSignature: (type)=>signaturesForType.get(type),
    register: (type, id)=>{
        if (typeof type !== "function") return;
        if (typesById.has(id)) {
            const existing = typesById.get(id);
            if (existing !== type) {
                pendingUpdates.push([
                    existing,
                    type
                ]);
                typesById.set(id, type);
            }
        } else typesById.set(id, type);
        if (!signaturesForType.has(type)) signaturesForType.set(type, {
            getCustomHooks: ()=>[],
            type
        });
    },
    getPendingUpdates: ()=>pendingUpdates,
    flush: ()=>{
        pendingUpdates = [];
    },
    replaceComponent,
    sign,
    computeKey
};
// ../../../node_modules/.pnpm/@prefresh+utils@1.2.0/node_modules/@prefresh/utils/src/index.js
var compareSignatures = (prev, next)=>{
    const prevSignature = globalThis.__PREFRESH__.getSignature(prev) || {};
    const nextSignature = globalThis.__PREFRESH__.getSignature(next) || {};
    if (prevSignature.key !== nextSignature.key || globalThis.__PREFRESH__.computeKey(prevSignature) !== globalThis.__PREFRESH__.computeKey(nextSignature) || nextSignature.forceReset) globalThis.__PREFRESH__.replaceComponent(prev, next, true);
    else globalThis.__PREFRESH__.replaceComponent(prev, next, false);
};
var flush = ()=>{
    const pending = [
        ...globalThis.__PREFRESH__.getPendingUpdates()
    ];
    globalThis.__PREFRESH__.flush();
    if (pending.length > 0) pending.forEach(([prev, next])=>{
        compareSignatures(prev, next);
    });
};
var isComponent = (exportValue)=>{
    if (typeof exportValue === "function") {
        if (exportValue.prototype != null && exportValue.prototype.isReactComponent) return true;
        const name = exportValue.name || exportValue.displayName;
        return typeof name === "string" && name[0] && name[0] == name[0].toUpperCase();
    }
    return false;
};



}),
"(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  jsx: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx),
  jsxDEV: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV),
  jsxs: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)
});
/* ESM import */var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackgroundSnapshotInstance: () => (BackgroundSnapshotInstance),
  hydrate: () => (hydrate)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _worklet_ctx_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js");
/* ESM import */var _gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGestureBagkround.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");










class BackgroundSnapshotInstance {
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    contains(child) {
        return child.parentNode === this;
    }
    // TODO: write tests for this
    // This will be called in `lazy`/`Suspense`.
    // We currently ignore this since we did not find a way to test.
    /* v8 ignore start */ appendChild(child) {
        return this.insertBefore(child);
    }
    /* v8 ignore stop */ insertBefore(node, beforeNode) {
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.InsertBefore, this.__id, node.__id, beforeNode === null || beforeNode === void 0 ? void 0 : beforeNode.__id);
        // If the node already has a parent, remove it from its current parent
        const p = node.__parent;
        if (p) {
            if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
            else p.__firstChild = node.__nextSibling;
            if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
            else p.__lastChild = node.__previousSibling;
        }
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    removeChild(node) {
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.RemoveChild, this.__id, node.__id);
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
        (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_4__.traverseSnapshotInstance)(node, (v)=>{
            v.__parent = null;
            _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_1__.globalBackgroundSnapshotInstancesToRemove.push(v.__id);
        });
    }
    get childNodes() {
        const nodes = [];
        let node = this.__firstChild;
        while(node){
            nodes.push(node);
            if (node === this.__lastChild) break;
            node = node.__nextSibling;
        }
        return nodes;
    }
    setAttribute(key, value) {
        if (true) console.profile('setAttribute');
        if (key === 'values') {
            if (_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch) {
                const oldValues = this.__values;
                if (oldValues) for(let index = 0; index < value.length; index++){
                    const { needUpdate, valueToCommit } = this.setAttributeImpl(value[index], oldValues[index], index);
                    if (needUpdate) _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.SetAttribute, this.__id, index, valueToCommit);
                }
                else {
                    const patch = [];
                    const length = value.length;
                    for(let index = 0; index < length; ++index){
                        const { valueToCommit } = this.setAttributeImpl(value[index], null, index);
                        patch[index] = valueToCommit;
                    }
                    _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.SetAttributes, this.__id, patch);
                }
            }
            this.__values = value;
            if (true) console.profileEnd();
            return;
        }
        // old path (`<__snapshot_xxxx_xxxx __0={} __1={} />` or `this.setAttribute(0, xxx)`)
        // is reserved as slow path
        const index = typeof key === 'string' ? Number(key.slice(2)) : key;
        var _this___values;
        ((_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [])[index] = value;
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.SetAttribute, this.__id, index, value);
        if (true) console.profileEnd();
    }
    setAttributeImpl(newValue, oldValue, index) {
        if (!newValue) {
            if (oldValue && oldValue.__ref) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__.markRefToRemove)(`${this.__id}:${index}:`, oldValue);
            return {
                needUpdate: oldValue !== newValue,
                valueToCommit: newValue
            };
        }
        const newType = typeof newValue;
        if (newType === 'object') {
            if (newValue.__spread) {
                const oldSpread = oldValue ? oldValue.__spread : oldValue;
                const newSpread = (0,_snapshot_spread_js__WEBPACK_IMPORTED_MODULE_3__.transformSpread)(this, index, newValue);
                const needUpdate = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isDirectOrDeepEqual)(oldSpread, newSpread);
                // use __spread to cache the transform result for next diff
                newValue.__spread = newSpread;
                if (needUpdate) {
                    if (oldSpread && oldSpread.ref) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__.markRefToRemove)(`${this.__id}:${index}:ref`, oldValue.ref);
                    for(let key in newSpread){
                        const newSpreadValue = newSpread[key];
                        if (!newSpreadValue) continue;
                        if (newSpreadValue._wkltId) newSpread[key] = (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_7__.onPostWorkletCtx)(newSpreadValue);
                        else if (newSpreadValue.__isGesture) (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_8__.processGestureBackground)(newSpreadValue);
                        else if (key == '__lynx_timing_flag' && (oldSpread === null || oldSpread === void 0 ? void 0 : oldSpread[key]) != newSpreadValue) {
                            if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_9__.globalPipelineOptions) _lynx_performance_js__WEBPACK_IMPORTED_MODULE_9__.globalPipelineOptions.needTimestamps = true;
                        }
                    }
                }
                return {
                    needUpdate,
                    valueToCommit: newSpread
                };
            }
            if (newValue.__ref) {
                // force update to update ref value
                // TODO: ref: optimize this. The ref update maybe can be done on the background thread to reduce updating.
                // The old ref must have a place to be stored because it needs to be cleared when the main thread returns.
                (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__.markRefToRemove)(`${this.__id}:${index}:`, oldValue);
                // update ref. On the main thread, the ref id will be replaced with value's sign when updating.
                return {
                    needUpdate: true,
                    valueToCommit: newValue.__ref
                };
            }
            if (newValue._wkltId) return {
                needUpdate: true,
                valueToCommit: (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_7__.onPostWorkletCtx)(newValue)
            };
            if (newValue.__isGesture) {
                (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_8__.processGestureBackground)(newValue);
                return {
                    needUpdate: true,
                    valueToCommit: newValue
                };
            }
            if (newValue.__ltf) {
                // __lynx_timing_flag
                if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_9__.globalPipelineOptions && (oldValue === null || oldValue === void 0 ? void 0 : oldValue.__ltf) != newValue.__ltf) {
                    _lynx_performance_js__WEBPACK_IMPORTED_MODULE_9__.globalPipelineOptions.needTimestamps = true;
                    return {
                        needUpdate: true,
                        valueToCommit: newValue
                    };
                }
                return {
                    needUpdate: false,
                    valueToCommit: newValue
                };
            }
            return {
                needUpdate: !(0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isDirectOrDeepEqual)(oldValue, newValue),
                valueToCommit: newValue
            };
        }
        if (newType === 'function') {
            if (newValue.__ref) {
                (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__.markRefToRemove)(`${this.__id}:${index}:`, oldValue);
                return {
                    needUpdate: true,
                    valueToCommit: newValue.__ref
                };
            }
            /* event */ return {
                needUpdate: !oldValue,
                valueToCommit: 1
            };
        }
        return {
            needUpdate: oldValue !== newValue,
            valueToCommit: newValue
        };
    }
    constructor(type){
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        let id;
        id = this.__id = _snapshot_js__WEBPACK_IMPORTED_MODULE_4__.backgroundSnapshotInstanceManager.nextId += 1;
        _snapshot_js__WEBPACK_IMPORTED_MODULE_4__.backgroundSnapshotInstanceManager.values.set(id, this);
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.CreateElement, type, id);
    }
}
function hydrate(before, after) {
    (0,_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.initGlobalSnapshotPatch)();
    const helper2 = (afters, parentId)=>{
        for (const child of afters){
            const id = child.__id;
            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.CreateElement, child.type, id);
            const values = child.__values;
            if (values) {
                child.__values = undefined;
                child.setAttribute('values', values);
            }
            helper2(child.childNodes, id);
            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.InsertBefore, parentId, id, undefined);
        }
    };
    const helper = (before, after)=>{
        var _after___values;
        _snapshot_js__WEBPACK_IMPORTED_MODULE_4__.backgroundSnapshotInstanceManager.updateId(after.__id, before.id);
        (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
            const old = before.values[index];
            if (value) {
                if (value.__spread) {
                    // `value.__spread` my contain event ids using snapshot ids before hydration. Remove it.
                    delete value.__spread;
                    value = (0,_snapshot_spread_js__WEBPACK_IMPORTED_MODULE_3__.transformSpread)(after, index, value);
                    for(let key in value){
                        if (value[key] && value[key]._wkltId) (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_7__.onPostWorkletCtx)(value[key]);
                        else if (value[key] && value[key].__isGesture) (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_8__.processGestureBackground)(value[key]);
                    }
                    after.__values[index].__spread = value;
                } else if (value.__ref) {
                    if (old) value = old;
                    else value = value.__ref;
                } else if (typeof value === 'function') value = `${after.__id}:${index}:`;
            }
            if (value && value._wkltId) (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_7__.onPostWorkletCtx)(value);
            else if (value && value.__isGesture) (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_8__.processGestureBackground)(value);
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isDirectOrDeepEqual)(value, old)) _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.SetAttribute, after.__id, index, value);
        });
        const { slot } = _snapshot_js__WEBPACK_IMPORTED_MODULE_4__.snapshotManager.values.get(after.type);
        const beforeChildNodes = before.children || [];
        const afterChildNodes = after.childNodes;
        if (!slot) return;
        slot.forEach(([type], index)=>{
            switch(type){
                case _snapshot_js__WEBPACK_IMPORTED_MODULE_4__.DynamicPartType.Slot:
                case _snapshot_js__WEBPACK_IMPORTED_MODULE_4__.DynamicPartType.MultiChildren:
                    {
                        // TODO: the following null assertions are not 100% safe
                        const v1 = beforeChildNodes[index];
                        const v2 = afterChildNodes[index];
                        helper(v1, v2);
                        break;
                    }
                case _snapshot_js__WEBPACK_IMPORTED_MODULE_4__.DynamicPartType.Children:
                case _snapshot_js__WEBPACK_IMPORTED_MODULE_4__.DynamicPartType.ListChildren:
                    {
                        const diffResult = (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_0__.diffArrayLepus)(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                            helper(a, b);
                        });
                        (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_0__.diffArrayAction)(beforeChildNodes, diffResult, (node, target)=>{
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.CreateElement, node.type, node.__id);
                            helper2(node.childNodes, node.__id);
                            const values = node.__values;
                            if (values) {
                                node.__values = undefined;
                                node.setAttribute('values', values);
                            }
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.InsertBefore, before.id, node.__id, target === null || target === void 0 ? void 0 : target.id);
                            return undefined;
                        }, (node)=>{
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.RemoveChild, before.id, node.id);
                        }, (node, target)=>{
                            // changedList.push([SnapshotOperation.RemoveChild, before.id, node.id]);
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotOperation.InsertBefore, before.id, node.id, target === null || target === void 0 ? void 0 : target.id);
                        });
                        break;
                    }
            }
        });
    };
    helper(before, after);
    return (0,_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_5__.takeGlobalSnapshotPatch)();
} //# sourceMappingURL=backgroundSnapshot.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// for better reuse if runtime is changed
function factory({ createElement, useMemo, Suspense, lazy }, loadLazyBundle) {
    /**
     * @internal a polyfill for <component is=? />
     */ const __ComponentIsPolyfill = ({ is, ...props })=>{
        if (typeof is !== 'string') {
            lynx.reportError(new Error('You must provide a string to props `is` when using syntax `<component is=? />`.'));
            return null;
        }
        // @ts-ignore
        const D = useMemo(()=>lazy(()=>loadLazyBundle(is)), [
            is
        ]);
        return createElement(Suspense, {
            key: is
        }, createElement(D, props));
    };
    return __ComponentIsPolyfill;
} //# sourceMappingURL=componentIs.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory),
  withInitDataInState: () => (withInitDataInState)
});
// for better reuse if runtime is changed
function factory({ createContext, useState, createElement, useLynxGlobalEventListener: useListener }, prop, eventName) {
    const Context = createContext({});
    const Provider = ({ children })=>{
        const [__, set] = useState(lynx[prop]);
        const handleChange = ()=>{
            set(lynx[prop]);
        };
        useChanged(handleChange);
        return createElement(Context.Provider, {
            value: __
        }, children);
    };
    const Consumer = Context.Consumer;
    const use = ()=>{
        const [__, set] = useState(lynx[prop]);
        useChanged(()=>{
            set(lynx[prop]);
        });
        return __;
    };
    const useChanged = (callback)=>{
        // @ts-ignore
        useListener(eventName, callback);
    };
    return {
        Context: ()=>Context,
        Provider: ()=>Provider,
        Consumer: ()=>Consumer,
        use: ()=>use,
        useChanged: ()=>useChanged
    };
}
/**
 * Higher-Order Component (HOC) that injects `initData` into the state of the given class component.
 *
 * This HOC checks if the provided component is a class component. If it is, it wraps the component
 * and injects the `initData` into its state. It also adds a listener
 * to update the state when data changes, and removes the listener when the component unmounts.
 *
 * @typeParam P - The type of the props of the wrapped component.
 * @typeParam S - The type of the state of the wrapped component.
 *
 * @param App - The class component to be wrapped by the HOC.
 *
 * @returns The original component if it is not a class component, otherwise a new class component
 *          with `initData` injection and state update functionality.
 *
 * @example
 * ```typescript
 * class App extends React.Component<MyProps, MyState> {
 *   // component implementation
 * }
 *
 * export default withInitDataInState(App);
 * ```
 * @public
 */ function withInitDataInState(App) {
    const isClassComponent = 'prototype' in App && App.prototype.render;
    if (!isClassComponent) return App;
    class C extends App {
        componentWillUnmount() {
            var _super_componentWillUnmount;
            (_super_componentWillUnmount = super.componentWillUnmount) === null || _super_componentWillUnmount === void 0 ? void 0 : _super_componentWillUnmount.call(this);
            lynx.getJSModule('GlobalEventEmitter').removeListener('onDataChanged', this.h);
        }
        constructor(props){
            super(props);
            this.state = {
                ...this.state,
                ...lynx.__initData
            };
            lynx.getJSModule('GlobalEventEmitter').addListener('onDataChanged', this.h = ()=>{
                this.setState(lynx.__initData);
            });
        }
    }
    return C;
} //# sourceMappingURL=initData.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComponentFromReactRuntime: () => (ComponentFromReactRuntime),
  wrapWithLynxComponent: () => (wrapWithLynxComponent)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function wrapWithLynxComponent(jsxSnapshot, jsxComponent) {
    const C = jsxComponent.type;
    if (typeof C === 'function') {
        if (C === ComponentFromReactRuntime || C.prototype instanceof ComponentFromReactRuntime) {
            if (jsxSnapshot.length === 1) return jsxSnapshot(jsxComponent);
            else {
                // spread
                if (!jsxComponent.props.removeComponentElement) return jsxSnapshot(jsxComponent, takeComponentAttributes(jsxComponent));
            }
        }
    }
    return jsxComponent;
}
// @ts-expect-error
class ComponentFromReactRuntime extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
}
const __COMPONENT_ATTRIBUTES__ = /* @__PURE__ */ new Set([
    'name',
    'style',
    'class',
    'flatten',
    'clip-radius',
    'overlap',
    'user-interaction-enabled',
    'native-interaction-enabled',
    'block-native-event',
    'enableLayoutOnly',
    'cssAlignWithLegacyW3C',
    'intersection-observers',
    'trigger-global-event',
    'exposure-scene',
    'exposure-id',
    'exposure-screen-margin-top',
    'exposure-screen-margin-bottom',
    'exposure-screen-margin-left',
    'exposure-screen-margin-right',
    'focusable',
    'focus-index',
    'accessibility-label',
    'accessibility-element',
    'accessibility-traits',
    'enable-new-animator'
]);
function takeComponentAttributes(jsxComponent) {
    const attributes = {};
    Object.keys(jsxComponent.props).forEach((k)=>{
        // let re1 = Regex::new(r"^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$").unwrap();
        // let re2 = Regex::new(r"^data-([A-Za-z]+)$").unwrap();
        if (__COMPONENT_ATTRIBUTES__.has(k) || k === 'id' || k === 'className' || k === 'dataSet' || k === 'data-set' || k === 'removeComponentElement' || k.match(/^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$/) || k.match(/^data-([A-Za-z]+)$/)) {
            attributes[k] = jsxComponent.props[k];
            delete jsxComponent.props[k];
        }
    });
    return attributes;
} //# sourceMappingURL=lynxComponent.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initProfileHook: () => (initProfileHook)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function initProfileHook() {
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = function(vnode) {
        // This __PROFILE__ is used for DCE testing
        if ( true && typeof vnode.type === 'function') console.profile(`diff::${getDisplayName(vnode.type)}`);
        oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff(vnode);
    };
    const oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = function(vnode) {
        // This __PROFILE__ is used for DCE testing
        if ( true && typeof vnode.type === 'function') console.profileEnd(); // for options[DIFF]
        oldDiffed === null || oldDiffed === void 0 ? void 0 : oldDiffed(vnode);
    };
    // Profile the user-provided `render`.
    const oldRender = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER] = function(vnode) {
        const displayName = getDisplayName(vnode.type);
        const originalRender = vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT].render;
        vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT].render = function render(props, state, context) {
            // This __PROFILE__ is used for DCE testing
            if (true) console.profile(`render::${displayName}`);
            try {
                return originalRender.call(this, props, state, context);
            } finally{
                // This __PROFILE__ is used for DCE testing
                if (true) console.profileEnd();
                vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT].render = originalRender;
            }
        };
        oldRender === null || oldRender === void 0 ? void 0 : oldRender(vnode);
    };
}
function getDisplayName(type) {
    var _type_displayName;
    return (_type_displayName = type.displayName) !== null && _type_displayName !== void 0 ? _type_displayName : type.name;
} //# sourceMappingURL=profile.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/document.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  document: () => (document),
  setupBackgroundDocument: () => (setupBackgroundDocument),
  setupDocument: () => (setupDocument)
});
/* ESM import */var _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const document = {};
function setupBackgroundDocument() {
    document.createElement = function(type) {
        return new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance(type);
    };
    document.createElementNS = function(_ns, type) {
        return new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance(type);
    };
    document.createTextNode = function(text) {
        const i = new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
function setupDocument() {
    document.createElement = function(type) {
        return new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(type);
    };
    document.createElementNS = function(_ns, type) {
        return new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(type);
    };
    document.createTextNode = function(text) {
        const i = new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
// if (__JS__) {
//   setupBackgroundDocument();
// } else if (__LEPUS__) {
//   setupDocument();
// }
 //# sourceMappingURL=document.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGesture: () => (processGesture)
});
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js");
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");


function isSerializedGesture(gesture) {
    var _gesture___isSerialized;
    return (_gesture___isSerialized = gesture.__isSerialized) !== null && _gesture___isSerialized !== void 0 ? _gesture___isSerialized : false;
}
function getGestureInfo(gesture, dom) {
    var _baseGesture_waitFor, _baseGesture_simultaneousWith, _baseGesture_continueWith;
    const config = {
        callbacks: []
    };
    const baseGesture = gesture;
    if (baseGesture.config) config.config = baseGesture.config;
    for (const key of Object.keys(baseGesture.callbacks)){
        const callback = baseGesture.callbacks[key];
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_1__.onWorkletCtxUpdate)(callback, dom);
        config.callbacks.push({
            name: key,
            callback: callback
        });
    }
    var _baseGesture_waitFor_map, _baseGesture_simultaneousWith_map, _baseGesture_continueWith_map;
    const relationMap = {
        waitFor: (_baseGesture_waitFor_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_waitFor = baseGesture.waitFor) === null || _baseGesture_waitFor === void 0 ? void 0 : _baseGesture_waitFor.map((subGesture)=>subGesture.id)) !== null && _baseGesture_waitFor_map !== void 0 ? _baseGesture_waitFor_map : [],
        simultaneous: (_baseGesture_simultaneousWith_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_simultaneousWith = baseGesture.simultaneousWith) === null || _baseGesture_simultaneousWith === void 0 ? void 0 : _baseGesture_simultaneousWith.map((subGesture)=>subGesture.id)) !== null && _baseGesture_simultaneousWith_map !== void 0 ? _baseGesture_simultaneousWith_map : [],
        continueWith: (_baseGesture_continueWith_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_continueWith = baseGesture.continueWith) === null || _baseGesture_continueWith === void 0 ? void 0 : _baseGesture_continueWith.map((subGesture)=>subGesture.id)) !== null && _baseGesture_continueWith_map !== void 0 ? _baseGesture_continueWith_map : []
    };
    return {
        config,
        relationMap
    };
}
function processGesture(dom, gesture, gestureOptions) {
    if (!gesture || !isSerializedGesture(gesture)) return;
    if (!(gestureOptions && gestureOptions.domSet)) {
        __SetAttribute(dom, 'has-react-gesture', true);
        __SetAttribute(dom, 'flatten', false);
    }
    if (gesture.type === _types_js__WEBPACK_IMPORTED_MODULE_0__.GestureTypeInner.COMPOSED) for (const subGesture of gesture.gestures)processGesture(dom, subGesture, {
        domSet: true
    });
    else {
        const baseGesture = gesture;
        const { config, relationMap } = getGestureInfo(baseGesture, dom);
        __SetGestureDetector(dom, baseGesture.id, baseGesture.type, config, relationMap);
    }
} //# sourceMappingURL=processGesture.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGestureBagkround.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGestureBackground: () => (processGestureBackground)
});
/* ESM import */var _worklet_ctx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js");
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js");


function processGestureBackground(gesture) {
    if (gesture.type === _types_js__WEBPACK_IMPORTED_MODULE_1__.GestureTypeInner.COMPOSED) for (const subGesture of gesture.gestures)processGestureBackground(subGesture);
    else {
        const baseGesture = gesture;
        for (const [name, value] of Object.entries(baseGesture.callbacks))baseGesture.callbacks[name] = (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_0__.onPostWorkletCtx)(value);
    }
} //# sourceMappingURL=processGestureBagkround.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GestureTypeInner: () => (GestureTypeInner)
});
var GestureTypeInner;
(function(GestureTypeInner) {
    GestureTypeInner[GestureTypeInner["COMPOSED"] = -1] = "COMPOSED";
    GestureTypeInner[GestureTypeInner["PAN"] = 0] = "PAN";
    GestureTypeInner[GestureTypeInner["FLING"] = 1] = "FLING";
    GestureTypeInner[GestureTypeInner["DEFAULT"] = 2] = "DEFAULT";
    GestureTypeInner[GestureTypeInner["TAP"] = 3] = "TAP";
    GestureTypeInner[GestureTypeInner["LONGPRESS"] = 4] = "LONGPRESS";
    GestureTypeInner[GestureTypeInner["ROTATION"] = 5] = "ROTATION";
    GestureTypeInner[GestureTypeInner["PINCH"] = 6] = "PINCH";
    GestureTypeInner[GestureTypeInner["NATIVE"] = 7] = "NATIVE";
})(GestureTypeInner || (GestureTypeInner = {})); //# sourceMappingURL=types.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
  useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)
});
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * `useLayoutEffect` is now an alias of `useEffect`. Use `useEffect` instead.
 *
 * Accepts a function that contains imperative, possibly effectful code. The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 *
 * @deprecated `useLayoutEffect` in the background thread cannot offer the precise timing for reading layout information and synchronously re-render, which is different from React.
 */ function useLayoutEffect(effect, deps) {
    return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(effect, deps);
}
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 */ function useEffect(effect, deps) {
    return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(effect, deps);
}
 //# sourceMappingURL=react.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useLynxGlobalEventListener: () => (useLynxGlobalEventListener)
});
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * `useLynxGlobalEventListener` help you `addListener` as early as possible.
 *
 * @example
 *
 * Use this hooks to listen to event 'exposure' and event 'disexposure'
 *
 * ```jsx
 * function App() {
 *   useLynxGlobalEventListener('exposure', (e) => {
 *     console.log("exposure", e)
 *   })
 *   useLynxGlobalEventListener('disexposure', (e) => {
 *     console.log("disexposure", e)
 *   })
 *   return (
 *     <view
 *       style='width: 100px; height: 100px; background-color: red;'
 *       exposure-id='a'
 *     />
 *   )
 * }
 * ```
 *
 * @param eventName - Event name to listen
 * @param listener - Event handler
 * @public
 */ function useLynxGlobalEventListener(eventName, listener) {
    'background only';
    const previousArgsRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (previousArgsRef.current) {
            const [eventName, listener] = previousArgsRef.current;
            lynx.getJSModule('GlobalEventEmitter').removeListener(eventName, listener);
        }
        lynx.getJSModule('GlobalEventEmitter').addListener(eventName, listener);
        previousArgsRef.current = [
            eventName,
            listener
        ];
    }, [
        eventName,
        listener
    ]);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            if (previousArgsRef.current) {
                const [eventName, listener] = previousArgsRef.current;
                lynx.getJSModule('GlobalEventEmitter').removeListener(eventName, listener);
            }
        };
    }, []);
} //# sourceMappingURL=useLynxGlobalEventListener.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  diffArrayAction: () => (diffArrayAction),
  diffArrayLepus: () => (diffArrayLepus),
  hydrate: () => (hydrate),
  isEmptyDiffResult: () => (isEmptyDiffResult)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




function isEmptyDiffResult(diffResult) {
    const hasChanged = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isEmptyObject)(diffResult.i) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isEmptyObject)(diffResult.m) || diffResult.r.length > 0;
    return !hasChanged;
}
function diffArrayLepus(before, after, isSameType, onDiffChildren) {
    let lastPlacedIndex = 0;
    const result = {
        $$diff: true,
        i: {},
        r: [],
        m: {}
    };
    const beforeMap = {};
    for(let i = 0; i < before.length; i++){
        var _beforeMap, _node_type;
        const node = before[i];
        var _;
        ((_ = (_beforeMap = beforeMap)[_node_type = node.type]) !== null && _ !== void 0 ? _ : _beforeMap[_node_type] = new Set()).add([
            node,
            i
        ]);
    }
    for(let i = 0; i < after.length; i++){
        const afterNode = after[i];
        const beforeNodes = beforeMap[afterNode.type];
        let beforeNode;
        if (beforeNodes && beforeNodes.size > 0 && ([beforeNode] = beforeNodes, beforeNode) && isSameType(beforeNode[0], afterNode)) {
            // Reuse old node
            beforeNodes.delete(beforeNode);
            const oldIndex = beforeNode[1];
            onDiffChildren(beforeNode[0], afterNode, oldIndex, i);
            if (oldIndex < lastPlacedIndex) {
                result.m[oldIndex] = i;
                continue;
            } else lastPlacedIndex = oldIndex;
        } else result.i[i] = afterNode;
    }
    // Delete
    for(const k in beforeMap)for (const [, i] of beforeMap[k])result.r.push(i);
    return result;
}
// export function diffIterableLepus<A extends Typed, B extends Typed>(
//   before: A[],
//   after: Iterable<B>,
//   isSameType: (a: A, b: B) => boolean,
//   onDiffChildren: (a: A, b: B) => void
// ): DiffResult<B> {
//   let returnResult = EMPTY_DIFF_RESULT as DiffResult<B>;
//   let lastPlacedIndex = 0;
//   const result: DiffResult<B> = {
//     $$diff: true,
//     i: {},
//     r: [],
//     m: {},
//   };
//   const beforeMap: Record<string, Set<[A, number]>> = {};
//   for (let i = 0; i < before.length; i++) {
//     let node = before[i];
//     (beforeMap[node.type] ??= new Set()).add([node, i]);
//   }
//   let i = 0;
//   for (const afterNode of after) {
//     const beforeNodes = beforeMap[afterNode.type];
//     let beforeNode: [A, number];
//     if (beforeNodes && (([beforeNode] = beforeNodes), beforeNode) && isSameType(beforeNode[0], afterNode)) {
//       // Reuse old node
//       beforeNodes.delete(beforeNode);
//       const oldIndex = beforeNode[1];
//       onDiffChildren(beforeNode[0], afterNode);
//       if (oldIndex < lastPlacedIndex) {
//         result.m[oldIndex] = i;
//         returnResult = result;
//         i++;
//         continue;
//       } else {
//         lastPlacedIndex = oldIndex;
//       }
//     } else {
//       // Create new node
//       result.i[i] = afterNode;
//       returnResult = result;
//     }
//     i++;
//   }
//   // delete
//   for (const k in beforeMap) {
//     for (const [, i] of beforeMap[k]) {
//       result.r.push(i);
//       returnResult = result;
//     }
//   }
//   return result;
// }
function diffArrayAction(before, diffResult, onInsert, onRemove, onMove) {
    if (isEmptyDiffResult(diffResult)) return before;
    const deleteSet = new Set(diffResult.r);
    const { i: insertMap, m: placementMap } = diffResult;
    const moveTempMap = new Map();
    let old;
    let k = 0;
    old = before[k];
    // let current: T | null | undefined = null;
    const result = [];
    let i = 0; // index of the old list
    let j = 0; // index of the new list
    let remain = Object.keys(insertMap).length;
    while(old || remain > 0){
        let keep = false;
        if (old && deleteSet.has(j)) onRemove(old);
        else if (old && placementMap[j] !== undefined) {
            // save node to re-use
            moveTempMap.set(placementMap[j], old);
            remain++;
        } else {
            // insert node
            let newNode = old;
            if (moveTempMap.has(i)) {
                // insert re-used node
                newNode = moveTempMap.get(i);
                keep = true;
                onMove(newNode, old);
                remain--;
            } else if (insertMap[i] !== undefined) {
                // insert new node
                newNode = onInsert(insertMap[i], old);
                keep = true;
                remain--;
            }
            result.push(newNode);
            i++;
        }
        if (old && !keep) {
            old = before[++k];
            j++;
        }
    }
    return result;
}
function hydrate(before, after, options) {
    var _after___values;
    after.__elements = before.__elements;
    after.__element_root = before.__element_root;
    if (!(options === null || options === void 0 ? void 0 : options.skipUnRef)) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_1__.unref)(before, false);
    let swap;
    if (swap = options === null || options === void 0 ? void 0 : options.swap) swap[before.__id] = after.__id;
    (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
        const old = before.__values[index];
        if (value !== old) {
            after.__values[index] = old;
            after.setAttribute(index, value);
        }
    });
    const { slot } = after.__snapshot_def;
    if (!slot) return;
    const beforeChildNodes = before.childNodes;
    const afterChildNodes = after.childNodes;
    slot.forEach(([type, elementIndex], index)=>{
        switch(type){
            case _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Slot:
            case _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.MultiChildren:
                {
                    // TODO: the following null assertions are not 100% safe
                    const v1 = beforeChildNodes[index];
                    const v2 = afterChildNodes[index];
                    hydrate(v1, v2, options);
                    break;
                }
            case _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Children:
                {
                    const diffResult = diffArrayLepus(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                        hydrate(a, b, options);
                    });
                    diffArrayAction(beforeChildNodes, diffResult, (node, target)=>{
                        node.ensureElements();
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                        return node;
                    }, (node)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                    }, (node, target)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                    });
                    break;
                }
            case _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.ListChildren:
                {
                    const removals = [];
                    const insertions = [];
                    const updateAction = [];
                    const diffResult = diffArrayLepus(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b, oldIndex, newIndex)=>{
                        if (JSON.stringify(a.__listItemPlatformInfo) !== JSON.stringify(b.__listItemPlatformInfo)) updateAction.push({
                            ...b.__listItemPlatformInfo,
                            from: newIndex,
                            to: newIndex,
                            // no flush
                            flush: false
                        });
                        // Mark list-item which is rendered (has `__elements`) as DELETE
                        // so list platform will call `enqueueComponent` on it
                        // and will call `componentAtIndex` on the inserted one
                        // In this way:
                        //  1. we make sure `<list/>` for hydrate is like a leaf node
                        //  2. we avoid hydrate so modifying recycleMap can be avoid
                        //  3. the delete list-item is recycled for later use, so no waste
                        if (a.__elements) {
                            removals.push(oldIndex);
                            insertions.push(newIndex);
                        }
                    });
                    for (const i of diffResult.r)removals.push(i);
                    for(const i in diffResult.i)insertions.push(Number(i));
                    for(const i in diffResult.m){
                        removals.push(Number(i));
                        insertions.push(diffResult.m[i]);
                    }
                    insertions.sort((a, b)=>a - b);
                    removals.sort((a, b)=>a - b);
                    const info = {
                        insertAction: insertions.map((it)=>({
                                position: it,
                                type: afterChildNodes[it].type,
                                ...afterChildNodes[it].__listItemPlatformInfo
                            })),
                        removeAction: removals,
                        updateAction
                    };
                    const listElement = before.__elements[elementIndex];
                    __SetAttribute(listElement, 'update-list-info', info);
                    __UpdateListCallbacks(listElement, (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.componentAtIndexFactory)(afterChildNodes), (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.enqueueComponentFactory)());
                    // The `before` & `after` target to the same list element, so we need to
                    // avoid the newly created list's (behind snapshot instance `after`) "update-list-info" being recorded.
                    delete _list_js__WEBPACK_IMPORTED_MODULE_0__.__pendingListUpdates.values[after.__id];
                }
        }
    });
} //# sourceMappingURL=hydrate.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Children),
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_4__.Component),
  Fragment: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Fragment),
  InitDataConsumer: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.InitDataConsumer),
  InitDataProvider: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.MainThreadRef),
  PureComponent: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.PureComponent),
  Suspense: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Suspense),
  createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_4__.createContext),
  createElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createElement),
  createRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createRef),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  forwardRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.forwardRef),
  isValidElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.isValidElement),
  lazy: () => (lazy),
  memo: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.memo),
  root: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.root),
  runOnBackground: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.runOnMainThread),
  useCallback: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useCallback),
  useContext: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useContext),
  useDebugValue: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useDebugValue),
  useEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useEffect),
  useErrorBoundary: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useErrorBoundary),
  useId: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useId),
  useImperativeHandle: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle),
  useInitData: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.useInitData),
  useInitDataChanged: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.useInitDataChanged),
  useLayoutEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect),
  useLynxGlobalEventListener: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.useMainThreadRef),
  useMemo: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo),
  useReducer: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useReducer),
  useRef: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useRef),
  useState: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useState),
  useSyncExternalStore: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore),
  withInitDataInState: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__.withInitDataInState)
});
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _lynx_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js");
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.







const lazy = preact_compat__WEBPACK_IMPORTED_MODULE_2__.lazy;
/**
 * @internal
 */ /* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // hooks
    useState: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useState,
    useReducer: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useReducer,
    useEffect: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useEffect,
    useLayoutEffect: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect,
    useRef: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useRef,
    useImperativeHandle: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle,
    useMemo: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo,
    useCallback: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useCallback,
    useContext: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useContext,
    useDebugValue: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useDebugValue,
    useSyncExternalStore: preact_compat__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore,
    createContext: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createContext,
    createRef: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createRef,
    Fragment: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Fragment,
    isValidElement: preact_compat__WEBPACK_IMPORTED_MODULE_2__.isValidElement,
    Children: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Children,
    Component: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Component,
    PureComponent: preact_compat__WEBPACK_IMPORTED_MODULE_2__.PureComponent,
    memo: preact_compat__WEBPACK_IMPORTED_MODULE_2__.memo,
    forwardRef: preact_compat__WEBPACK_IMPORTED_MODULE_2__.forwardRef,
    Suspense: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Suspense,
    lazy,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createElement
});

 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_15__.Component),
  SnapshotInstance: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.SnapshotInstance),
  __ComponentIsPolyfill: () => (__ComponentIsPolyfill),
  __DynamicPartChildren: () => (__DynamicPartChildren),
  __DynamicPartChildren_0: () => (__DynamicPartChildren_0),
  __DynamicPartListChildren: () => (__DynamicPartListChildren),
  __DynamicPartMultiChildren: () => (__DynamicPartMultiChildren),
  __DynamicPartSlot: () => (__DynamicPartSlot),
  __dynamicImport: () => (/* reexport safe */ _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_16__.__dynamicImport),
  __page: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.__page),
  __pageId: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.__pageId),
  __root: () => (/* reexport safe */ _root_js__WEBPACK_IMPORTED_MODULE_6__.__root),
  createSnapshot: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.createSnapshot),
  loadDynamicJS: () => (/* reexport safe */ _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_16__.loadDynamicJS),
  loadLazyBundle: () => (/* reexport safe */ _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_5__.loadLazyBundle),
  loadWorkletRuntime: () => (/* reexport safe */ _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_21__.loadWorkletRuntime),
  options: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_15__.options),
  registerWorkletOnBackground: () => (/* reexport safe */ _worklet_hmr_js__WEBPACK_IMPORTED_MODULE_20__.registerWorkletOnBackground),
  snapshotCreateList: () => (/* reexport safe */ _list_js__WEBPACK_IMPORTED_MODULE_4__.snapshotCreateList),
  snapshotManager: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.snapshotManager),
  transformRef: () => (/* reexport safe */ _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__.transformRef),
  transformToWorklet: () => (/* reexport safe */ _worklet_transformToWorklet_js__WEBPACK_IMPORTED_MODULE_19__.transformToWorklet),
  updateEvent: () => (/* reexport safe */ _snapshot_event_js__WEBPACK_IMPORTED_MODULE_9__.updateEvent),
  updateGesture: () => (/* reexport safe */ _snapshot_gesture_js__WEBPACK_IMPORTED_MODULE_13__.updateGesture),
  updateListItemPlatformInfo: () => (/* reexport safe */ _snapshot_platformInfo_js__WEBPACK_IMPORTED_MODULE_14__.updateListItemPlatformInfo),
  updateRef: () => (/* reexport safe */ _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__.updateRef),
  updateSpread: () => (/* reexport safe */ _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_8__.updateSpread),
  updateWorkletEvent: () => (/* reexport safe */ _snapshot_workletEvent_js__WEBPACK_IMPORTED_MODULE_11__.updateWorkletEvent),
  updateWorkletRef: () => (/* reexport safe */ _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_12__.updateWorkletRef),
  withInitDataInState: () => (/* reexport safe */ _compat_initData_js__WEBPACK_IMPORTED_MODULE_17__.withInitDataInState),
  wrapWithLynxComponent: () => (/* reexport safe */ _compat_lynxComponent_js__WEBPACK_IMPORTED_MODULE_18__.wrapWithLynxComponent)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _compat_componentIs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js");
/* ESM import */var _snapshot_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_workletEvent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _snapshot_gesture_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _snapshot_platformInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _compat_lynxComponent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js");
/* ESM import */var _worklet_transformToWorklet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js");
/* ESM import */var _worklet_hmr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js");
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.










const __DynamicPartSlot = _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.Slot;
const __DynamicPartMultiChildren = _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.MultiChildren;
const __DynamicPartChildren = _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.Children;
const __DynamicPartListChildren = _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.ListChildren;
const __DynamicPartChildren_0 = [
    [
        _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.Children,
        0
    ]
];











/**
 * @internal a polyfill for <component is=? />
 */ const __ComponentIsPolyfill = /* @__PURE__ */ (0,_compat_componentIs_js__WEBPACK_IMPORTED_MODULE_2__.factory)({
    Suspense: preact_compat__WEBPACK_IMPORTED_MODULE_0__.Suspense,
    lazy: preact_compat__WEBPACK_IMPORTED_MODULE_0__.lazy,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_0__.createElement,
    useMemo: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo
}, _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_5__.loadLazyBundle);



 //# sourceMappingURL=internal.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/delayUnmount.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initDelayUnmount: () => (initDelayUnmount),
  runDelayedUnmounts: () => (runDelayedUnmounts),
  takeDelayedUnmounts: () => (takeDelayedUnmounts)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


let delayedUnmounts = [];
let parentVNode;
function takeDelayedUnmounts() {
    const ret = delayedUnmounts;
    delayedUnmounts = [];
    // not clearing `parentVNode` here, which would be cleared before next diff in `options[DIFF]`
    return ret;
}
function runDelayedUnmounts(delayedUnmounts) {
    for (const fn of delayedUnmounts)fn();
}
/**
 * Delay `componentWillUnmount` until main thread patching finishes.
 */ function initDelayUnmount() {
    const oldUnmount = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
    preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = (vnode)=>{
        if (!parentVNode) {
            // `parentVNode` is the first vnode to unmount,
            // which is needed to find proper error boundary when running `componentWillUnmount`.
            // Shallow copy vnode to prevent modification to vnode in preact unmounting process.
            parentVNode = {
                ...vnode
            };
            const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
            preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = (vnode)=>{
                // A new diff indicates that the unmounting process of parentVNode is finished.
                parentVNode = undefined;
                preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = oldDiff;
                oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff(vnode);
            };
        }
        const component = vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
        if (component) {
            if (oldUnmount) {
                const vnode_clone = {
                    ...vnode
                };
                delayedUnmounts.push(()=>{
                    const v = vnode_clone[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT][_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE];
                    vnode_clone[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT][_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE] = vnode_clone;
                    oldUnmount === null || oldUnmount === void 0 ? void 0 : oldUnmount(vnode_clone);
                    vnode_clone[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT][_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE] = v;
                });
            }
            if (component.componentWillUnmount) {
                const unmount = component.componentWillUnmount;
                // @ts-ignore
                component.componentWillUnmount = undefined;
                const parentVNode_ = parentVNode;
                delayedUnmounts.push(()=>{
                    try {
                        component.componentWillUnmount = unmount;
                        component.componentWillUnmount();
                    } catch (e) {
                        preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.CATCH_ERROR](e, parentVNode_);
                    }
                });
            }
        }
    };
}
 //# sourceMappingURL=delayUnmount.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyBackground: () => (destroyBackground)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _patch_commit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function destroyBackground() {
    if (true) console.profile('destroyBackground');
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, _root_js__WEBPACK_IMPORTED_MODULE_1__.__root);
    _patch_commit_js__WEBPACK_IMPORTED_MODULE_2__.globalCommitTaskMap.forEach((task)=>{
        task();
    });
    _patch_commit_js__WEBPACK_IMPORTED_MODULE_2__.globalCommitTaskMap.clear();
    if (true) console.profileEnd();
}
 //# sourceMappingURL=destroy.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getReloadVersion: () => (getReloadVersion),
  increaseReloadVersion: () => (increaseReloadVersion)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
let reloadVersion = 0;
function getReloadVersion() {
    return reloadVersion;
}
function increaseReloadVersion() {
    return ++reloadVersion;
}
 //# sourceMappingURL=pass.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  commitPatchUpdate: () => (commitPatchUpdate),
  genCommitTaskId: () => (genCommitTaskId),
  globalBackgroundSnapshotInstancesToRemove: () => (globalBackgroundSnapshotInstancesToRemove),
  globalCommitTaskMap: () => (globalCommitTaskMap),
  globalFlushOptions: () => (globalFlushOptions),
  nextCommitTaskId: () => (nextCommitTaskId),
  replaceCommitHook: () => (replaceCommitHook),
  replaceRequestAnimationFrame: () => (replaceRequestAnimationFrame)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _worklet_workletRefPool_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
/* ESM import */var _delayUnmount_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/delayUnmount.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");











let globalFlushOptions = {};
const globalCommitTaskMap = /*@__PURE__*/ new Map();
let nextCommitTaskId = 1;
let globalBackgroundSnapshotInstancesToRemove = [];
function replaceCommitHook() {
    const oldCommit = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.COMMIT];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.COMMIT] = async (vnode, commitQueue)=>{
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.markTimingLegacy)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.PerformanceTimingKeys.update_diff_vdom_end);
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.PerformanceTimingKeys.diff_vdom_end);
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.PerformanceTimingKeys.pack_changes_start);
        if (true) console.profile('commitChanges');
        const renderCallbacks = commitQueue.map((component)=>{
            const ret = {
                component,
                [_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.RENDER_CALLBACKS]: component[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.RENDER_CALLBACKS],
                [_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.VNODE]: component[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.VNODE]
            };
            component[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.RENDER_CALLBACKS] = [];
            return ret;
        });
        commitQueue.length = 0;
        const delayedUnmounts = (0,_delayUnmount_js__WEBPACK_IMPORTED_MODULE_9__.takeDelayedUnmounts)();
        const backgroundSnapshotInstancesToRemove = globalBackgroundSnapshotInstancesToRemove;
        globalBackgroundSnapshotInstancesToRemove = [];
        const commitTaskId = genCommitTaskId();
        globalCommitTaskMap.set(commitTaskId, ()=>{
            (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__.updateBackgroundRefs)(commitTaskId);
            (0,_delayUnmount_js__WEBPACK_IMPORTED_MODULE_9__.runDelayedUnmounts)(delayedUnmounts);
            oldCommit === null || oldCommit === void 0 ? void 0 : oldCommit(vnode, renderCallbacks);
            renderCallbacks.some((wrapper)=>{
                try {
                    wrapper[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.RENDER_CALLBACKS].some((cb)=>{
                        cb.call(wrapper.component);
                    });
                } catch (e) {
                    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.CATCH_ERROR](e, wrapper[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_4__.VNODE]);
                }
            });
            if (backgroundSnapshotInstancesToRemove.length) setTimeout(()=>{
                backgroundSnapshotInstancesToRemove.forEach((id)=>{
                    _snapshot_js__WEBPACK_IMPORTED_MODULE_6__.backgroundSnapshotInstanceManager.values["delete"](id);
                });
            }, 10000);
        });
        const snapshotPatch = (0,_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.takeGlobalSnapshotPatch)();
        const flushOptions = globalFlushOptions;
        const workletRefInitValuePatch = (0,_worklet_workletRefPool_js__WEBPACK_IMPORTED_MODULE_8__.takeWorkletRefInitValuePatch)();
        globalFlushOptions = {};
        if (!snapshotPatch && workletRefInitValuePatch.length === 0) {
            // before hydration, skip patch
            if (true) console.profileEnd();
            return;
        }
        const patch = {};
        // TODO: check all fields in `flushOptions` from runtime3
        if (snapshotPatch === null || snapshotPatch === void 0 ? void 0 : snapshotPatch.length) patch.snapshotPatch = snapshotPatch;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.isEmptyObject)(flushOptions)) patch.flushOptions = flushOptions;
        if (workletRefInitValuePatch.length) patch.workletRefInitValuePatch = workletRefInitValuePatch;
        await commitPatchUpdate(patch, {
            commitTaskId
        });
        const commitTask = globalCommitTaskMap.get(commitTaskId);
        if (commitTask) {
            commitTask();
            globalCommitTaskMap.delete(commitTaskId);
        }
    };
}
function commitPatchUpdate(data, patchOptions) {
    return new Promise((resolve)=>{
        // console.debug('********** JS update:');
        // printSnapshotInstance(
        //   (backgroundSnapshotInstanceManager.values.get(1) || backgroundSnapshotInstanceManager.values.get(-1))!,
        // );
        // console.debug('commitPatchUpdate: ', JSON.stringify(data));
        const obj = {
            data: JSON.stringify(data),
            patchOptions: {
                ...patchOptions,
                reloadVersion: (0,_pass_js__WEBPACK_IMPORTED_MODULE_10__.getReloadVersion)()
            }
        };
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.PerformanceTimingKeys.pack_changes_end);
        if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.globalPipelineOptions) {
            obj.patchOptions.pipelineOptions = _lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.globalPipelineOptions;
            (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_3__.setPipeline)(undefined);
        }
        if (true) console.profileEnd();
        lynx.getNativeApp().callLepusMethod(_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__.LifecycleConstant.patchUpdate, obj, resolve);
    });
}
function genCommitTaskId() {
    return nextCommitTaskId++;
}
function replaceRequestAnimationFrame() {
    // to make afterPaintEffects run faster
    const resolvedPromise = Promise.resolve();
    preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame = (cb)=>{
        resolvedPromise.then(cb);
    };
}
/**
 * @internal
 */  //# sourceMappingURL=commit.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnapshotOperation: () => (SnapshotOperation),
  __globalSnapshotPatch: () => (__globalSnapshotPatch),
  deinitGlobalSnapshotPatch: () => (deinitGlobalSnapshotPatch),
  initGlobalSnapshotPatch: () => (initGlobalSnapshotPatch),
  takeGlobalSnapshotPatch: () => (takeGlobalSnapshotPatch)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var SnapshotOperation;
(function(SnapshotOperation) {
    SnapshotOperation[SnapshotOperation["CreateElement"] = 0] = "CreateElement";
    SnapshotOperation[SnapshotOperation["InsertBefore"] = 1] = "InsertBefore";
    SnapshotOperation[SnapshotOperation["RemoveChild"] = 2] = "RemoveChild";
    SnapshotOperation[SnapshotOperation["SetAttribute"] = 3] = "SetAttribute";
    SnapshotOperation[SnapshotOperation["SetAttributes"] = 4] = "SetAttributes";
    SnapshotOperation[SnapshotOperation["DEV_ONLY_AddSnapshot"] = 100] = "DEV_ONLY_AddSnapshot";
    SnapshotOperation[SnapshotOperation["DEV_ONLY_RegisterWorklet"] = 101] = "DEV_ONLY_RegisterWorklet";
})(SnapshotOperation || (SnapshotOperation = {}));
let __globalSnapshotPatch;
function takeGlobalSnapshotPatch() {
    if (__globalSnapshotPatch) {
        const list = __globalSnapshotPatch;
        __globalSnapshotPatch = [];
        return list;
    } else return undefined;
}
function initGlobalSnapshotPatch() {
    __globalSnapshotPatch = [];
}
function deinitGlobalSnapshotPatch() {
    __globalSnapshotPatch = undefined;
} //# sourceMappingURL=snapshotPatch.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatchApply.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  snapshotPatchApply: () => (snapshotPatchApply)
});
/* ESM import */var _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");


function reportCtxNotFound() {
    lynx.reportError(new Error(`snapshotPatchApply failed: ctx not found`));
}
function snapshotPatchApply(snapshotPatch) {
    const length = snapshotPatch.length;
    for(let i = 0; i < length; ++i)switch(snapshotPatch[i]){
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.CreateElement:
            {
                const type = snapshotPatch[++i];
                const id = snapshotPatch[++i];
                new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(type, id);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.InsertBefore:
            {
                const parentId = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const beforeId = snapshotPatch[++i];
                const parent = _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.snapshotInstanceManager.values.get(parentId);
                const child = _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.snapshotInstanceManager.values.get(childId);
                const existingNode = _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.snapshotInstanceManager.values.get(beforeId);
                if (!parent || !child) reportCtxNotFound();
                else parent.insertBefore(child, existingNode);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.RemoveChild:
            {
                const parentId = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const parent = _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.snapshotInstanceManager.values.get(parentId);
                const child = _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.snapshotInstanceManager.values.get(childId);
                if (!parent || !child) reportCtxNotFound();
                else parent.removeChild(child);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.SetAttribute:
            {
                const id = snapshotPatch[++i];
                const dynamicPartIndex = snapshotPatch[++i];
                const value = snapshotPatch[++i];
                const si = _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.snapshotInstanceManager.values.get(id);
                if (si) si.setAttribute(dynamicPartIndex, value);
                else reportCtxNotFound();
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.SetAttributes:
            {
                const id = snapshotPatch[++i];
                const values = snapshotPatch[++i];
                const si = _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.snapshotInstanceManager.values.get(id);
                if (si) si.setAttribute('values', values);
                else reportCtxNotFound();
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.DEV_ONLY_AddSnapshot:
            if (true) {
                const uniqID = snapshotPatch[++i];
                const create = snapshotPatch[++i];
                const update = snapshotPatch[++i];
                const slot = snapshotPatch[++i];
                var _snapshotPatch_;
                const cssId = (_snapshotPatch_ = snapshotPatch[++i]) !== null && _snapshotPatch_ !== void 0 ? _snapshotPatch_ : 0;
                const entryName = snapshotPatch[++i];
                if (!_snapshot_js__WEBPACK_IMPORTED_MODULE_1__.snapshotManager.values.has(uniqID)) // Update the evaluated snapshots from JS.
                (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_1__.createSnapshot)(uniqID, evaluate(create), update.map(evaluate), slot, cssId, entryName);
            }
            break;
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.DEV_ONLY_RegisterWorklet:
            // HMR-related
            if (true) {
                const hash = snapshotPatch[++i];
                const fnStr = snapshotPatch[++i];
                const fn = evaluate(fnStr);
                registerWorklet('main-thread', hash, fn);
            }
            break;
    }
}
/**
 * Given an expression string, return the evaluated result with ReactLynx runtime injected.
 *
 * @param code - The code to be evaluated
 * @returns the evaluated expression
 */ function evaluate(code) {
    return new Function(`return ${code}`)();
} //# sourceMappingURL=snapshotPatchApply.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/updateMainThread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  commitMainThreadPatchUpdate: () => (commitMainThreadPatchUpdate),
  injectUpdateMainThread: () => (injectUpdateMainThread)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _snapshotPatchApply_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatchApply.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.









function updateMainThread({ data, patchOptions }) {
    var _patchOptions_reloadVersion;
    if (((_patchOptions_reloadVersion = patchOptions.reloadVersion) !== null && _patchOptions_reloadVersion !== void 0 ? _patchOptions_reloadVersion : 0) < (0,_pass_js__WEBPACK_IMPORTED_MODULE_8__.getReloadVersion)()) return;
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.setPipeline)(patchOptions.pipelineOptions);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.parse_changes_start);
    let { snapshotPatch, workletRefInitValuePatch, flushOptions } = JSON.parse(data);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.parse_changes_end);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.patch_changes_start);
    (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRefInitValueChanges)(workletRefInitValuePatch);
    _list_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.clear();
    if (snapshotPatch) (0,_snapshotPatchApply_js__WEBPACK_IMPORTED_MODULE_1__.snapshotPatchApply)(snapshotPatch);
    _list_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.flush();
    // console.debug('********** Lepus updatePatch:');
    // printSnapshotInstance(snapshotInstanceManager.values.get(-1)!);
    commitMainThreadPatchUpdate(patchOptions.commitTaskId);
    if (patchOptions.isHydration) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.clearDelayedWorklets)();
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.patch_changes_end);
    flushOptions || (flushOptions = {});
    if (patchOptions.pipelineOptions) flushOptions.pipelineOptions = patchOptions.pipelineOptions;
    // TODO: triggerDataUpdated?
    __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_6__.__page, flushOptions);
}
function injectUpdateMainThread() {
    Object.assign(globalThis, {
        [_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__.LifecycleConstant.patchUpdate]: updateMainThread
    });
}
function commitMainThreadPatchUpdate(commitTaskId) {
    const refPatch = (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__.takeGlobalRefPatchMap)();
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.isEmptyObject)(refPatch)) __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__.LifecycleConstant.ref,
        {
            commitTaskId,
            refPatch: JSON.stringify(refPatch)
        }
    ]);
}
/**
 * @internal
 */  //# sourceMappingURL=updateMainThread.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  reloadBackground: () => (reloadBackground),
  reloadMainThread: () => (reloadMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
/* ESM import */var _render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js");
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _worklet_destroy_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.













function reloadMainThread(data, options) {
    if (true) console.profile('reloadTemplate');
    (0,_pass_js__WEBPACK_IMPORTED_MODULE_5__.increaseReloadVersion)();
    if (typeof data == 'object' && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isEmptyObject)(data)) Object.assign(lynx.__initData, data);
    (0,_worklet_destroy_js__WEBPACK_IMPORTED_MODULE_12__.destroyWorklet)();
    _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.snapshotInstanceManager.clear();
    _list_js__WEBPACK_IMPORTED_MODULE_9__.__pendingListUpdates.clear();
    const oldRoot = _root_js__WEBPACK_IMPORTED_MODULE_1__.__root;
    (0,_root_js__WEBPACK_IMPORTED_MODULE_1__.setRoot)(new _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.SnapshotInstance('root'));
    _root_js__WEBPACK_IMPORTED_MODULE_1__.__root.__jsx = oldRoot.__jsx;
    (0,_render_js__WEBPACK_IMPORTED_MODULE_6__.renderMainThread)();
    (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_7__.hydrate)(oldRoot, _root_js__WEBPACK_IMPORTED_MODULE_1__.__root, {
        skipUnRef: true
    });
    // always call this before `__FlushElementTree`
    _list_js__WEBPACK_IMPORTED_MODULE_9__.__pendingListUpdates.flush();
    __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_2__.__page, options);
    __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_8__.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(_root_js__WEBPACK_IMPORTED_MODULE_1__.__root),
            refPatch: JSON.stringify((0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__.takeGlobalRefPatchMap)())
        }
    ]);
    if (true) console.profileEnd();
    return;
}
function reloadBackground(updateData) {
    if (true) console.profile('reload');
    (0,_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_11__.deinitGlobalSnapshotPatch)();
    (0,_destroy_js__WEBPACK_IMPORTED_MODULE_4__.destroyBackground)();
    (0,_pass_js__WEBPACK_IMPORTED_MODULE_5__.increaseReloadVersion)();
    // COW when modify `lynx.__initData` to make sure Provider & Consumer works
    lynx.__initData = Object.assign({}, lynx.__initData, updateData);
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(_root_js__WEBPACK_IMPORTED_MODULE_1__.__root.__jsx, _root_js__WEBPACK_IMPORTED_MODULE_1__.__root);
    if (true) console.profileEnd();
}
 //# sourceMappingURL=reload.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderMainThread: () => (renderMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _opcodes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js");
/* ESM import */var _renderToOpcodes_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




// @ts-ignore
function renderMainThread() {
    /* v8 ignore start */ if (false) {}
    else {
        let opcodes;
        try {
            if (true) console.profile('renderToString');
            // @ts-ignore
            opcodes = (0,_renderToOpcodes_index_js__WEBPACK_IMPORTED_MODULE_2__.render)(_root_js__WEBPACK_IMPORTED_MODULE_3__.__root.__jsx);
        } catch (e) {
            lynx.reportError(e);
            opcodes = [];
        } finally{
            if (true) console.profileEnd();
        }
        if (true) console.profile('renderOpcodesInto');
        (0,_opcodes_js__WEBPACK_IMPORTED_MODULE_1__.renderOpcodesInto)(opcodes, _root_js__WEBPACK_IMPORTED_MODULE_3__.__root);
        if (true) console.profileEnd();
    }
/* v8 ignore stop */ }
 //# sourceMappingURL=render.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LifecycleConstant: () => (LifecycleConstant),
  NativeUpdateDataType: () => (NativeUpdateDataType)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
class LifecycleConstant {
}
LifecycleConstant.firstScreen = 'rLynxFirstScreen';
LifecycleConstant.updateFromRoot = 'updateFromRoot';
LifecycleConstant.globalEventFromLepus = 'globalEventFromLepus';
LifecycleConstant.ref = 'rLynxRef';
LifecycleConstant.jsReady = 'rLynxJSReady';
LifecycleConstant.patchUpdate = 'rLynxChange';
var NativeUpdateDataType;
(function(NativeUpdateDataType) {
    NativeUpdateDataType[NativeUpdateDataType["UPDATE"] = 0] = "UPDATE";
    NativeUpdateDataType[NativeUpdateDataType["RESET"] = 1] = "RESET";
})(NativeUpdateDataType || (NativeUpdateDataType = {})); //# sourceMappingURL=lifecycleConstant.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ListUpdateInfoRecording: () => (ListUpdateInfoRecording),
  __pendingListUpdates: () => (__pendingListUpdates),
  componentAtIndexFactory: () => (componentAtIndexFactory),
  enqueueComponentFactory: () => (enqueueComponentFactory),
  snapshotCreateList: () => (snapshotCreateList),
  snapshotDestroyList: () => (snapshotDestroyList)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/updateMainThread.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


// class ListUpdateInfoDiffing implements ListUpdateInfo {
//   private oldChildNodes: SnapshotInstance[];
//   constructor(private list: SnapshotInstance) {
//     this.oldChildNodes = list.childNodes;
//   }
//   flush(): void {
//     Object.defineProperty(SnapshotInstance.prototype, "key", {
//       get: function () {
//         return this.values[0]["item-key"];
//       },
//     });
//   }
//   onInsertBefore(newNode: SnapshotInstance, existingNode?: SnapshotInstance | undefined): void {}
//   onRemoveChild(child: SnapshotInstance): void {}
//   onSetAttribute(child: SnapshotInstance, attr: any): void {
//     throw new Error("Method not implemented.");
//   }
// }
class ListUpdateInfoRecording {
    // private __commitAndReset() {
    //   (this.__pendingAttributes ??= []).push(this.__toAttribute());
    //   this.oldChildNodes = this.list.childNodes;
    //   this.oldChildNodesSet = new Set(this.oldChildNodes);
    //   this.removeChild1.clear();
    //   this.removeChild2.clear();
    //   this.insertBefore.clear();
    //   this.appendChild.length = 0;
    //   this.platformInfoUpdate.clear();
    // }
    flush() {
        const elementIndex = this.list.__snapshot_def.slot[0][1];
        const listElement = this.list.__elements[elementIndex];
        // this.__pendingAttributes?.forEach(pendingAttribute => {
        //   __SetAttribute(listElement, "update-list-info", pendingAttribute);
        //   __FlushElementTree(listElement);
        // });
        __SetAttribute(listElement, 'update-list-info', this.__toAttribute());
        __UpdateListCallbacks(listElement, componentAtIndexFactory(this.list.childNodes), enqueueComponentFactory());
    }
    onInsertBefore(newNode, existingNode) {
        // @ts-ignore
        if (newNode.__parent) //   this.__commitAndReset();
        // }
        this.removeChild.add(newNode);
        if (existingNode) {
            var _this_insertBefore_get;
            // if (!this.oldChildNodesSet.has(existingNode)) {
            //   this.__commitAndReset();
            // }
            const newChildren = (_this_insertBefore_get = this.insertBefore.get(existingNode)) !== null && _this_insertBefore_get !== void 0 ? _this_insertBefore_get : [];
            newChildren.push(newNode);
            this.insertBefore.set(existingNode, newChildren);
        } else this.appendChild.push(newNode);
    }
    onRemoveChild(child) {
        // if (!this.oldChildNodesSet.has(child)) {
        //   this.__commitAndReset();
        // }
        this.removeChild.add(child);
    }
    onSetAttribute(child, attr, _oldAttr) {
        this.platformInfoUpdate.set(child, attr);
    }
    __toAttribute() {
        const { removeChild, insertBefore, appendChild, platformInfoUpdate } = this;
        const removals = [];
        const insertions = [];
        const updates = [];
        let j = 0;
        for(let i = 0; i < this.oldChildNodes.length; i++, j++){
            const child = this.oldChildNodes[i];
            if (platformInfoUpdate.has(child)) updates.push({
                ...platformInfoUpdate.get(child),
                from: +j,
                to: +j,
                // no flush
                flush: false,
                type: child.type
            });
            if (insertBefore.has(child)) {
                const children = insertBefore.get(child);
                children.forEach((c)=>{
                    insertions.push({
                        position: j,
                        type: c.type,
                        ...c.__listItemPlatformInfo
                    });
                    j++;
                });
            }
            if (removeChild.has(child)) {
                removals.push(i);
                removeChild.delete(child);
                j--;
            }
        }
        for(let i = 0; i < appendChild.length; i++){
            const child = appendChild[i];
            insertions.push({
                position: j + i,
                type: child.type,
                ...child.__listItemPlatformInfo
            });
        }
        insertions.sort((a, b)=>a.position - b.position);
        removals.sort((a, b)=>a - b);
        if (SystemInfo.lynxSdkVersion === '2.14' || SystemInfo.lynxSdkVersion === '2.15' || SystemInfo.lynxSdkVersion === '2.16' || SystemInfo.lynxSdkVersion === '2.17' || SystemInfo.lynxSdkVersion === '2.18') {
            const elementIndex = this.list.__snapshot_def.slot[0][1];
            const listElement = this.list.__elements[elementIndex];
            // `__GetAttributeByName` is avaiable since Lynx 2.14
            if (__GetAttributeByName(listElement, 'custom-list-name') === 'list-container') {
                // `updateAction` must be full (not incremental) when Lynx version <= 2.18 and
                // when `custom-list-name` is `list-container` (avaiable when Lynx version >= 2.14) is true,
                updates.length = 0;
                this.list.childNodes.forEach((child, index)=>{
                    updates.push({
                        ...child.__listItemPlatformInfo,
                        from: index,
                        to: index,
                        // no flush
                        flush: false,
                        type: child.type
                    });
                });
            }
        }
        return {
            insertAction: insertions,
            removeAction: removals,
            updateAction: updates
        };
    }
    toJSON() {
        // if (this.__pendingAttributes) {
        //   return [...this.__pendingAttributes, this.__toAttribute()];
        // } else {
        //   return [this.__toAttribute()];
        // }
        return [
            this.__toAttribute()
        ];
    }
    constructor(list){
        // private oldChildNodesSet: Set<SnapshotInstance>;
        this.removeChild = new Set();
        this.insertBefore = new Map();
        this.appendChild = [];
        this.platformInfoUpdate = new Map();
        this.list = list;
        this.oldChildNodes = list.childNodes;
    // this.oldChildNodesSet = new Set(this.oldChildNodes);
    }
}
const __pendingListUpdates = {
    values: {},
    clear () {
        this.values = {};
    },
    flush () {
        Object.values(this.values).forEach((update)=>{
            update.flush();
        });
        this.clear();
    }
};
const gSignMap = {};
const gRecycleMap = {};
function componentAtIndexFactory(ctx) {
    const componentAtIndex = (list, listID, cellIndex, operationID, enableReuseNotification)=>{
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('componentAtIndex called on removed list');
        const childCtx = ctx[cellIndex];
        if (!childCtx) throw new Error('childCtx not found');
        const platformInfo = childCtx.__listItemPlatformInfo || {};
        var _platformInfo_reuseidentifier;
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        const recycleSignMap = recycleMap.get(uniqID);
        if (childCtx.__elements) {
            /**
             * If this situation is encountered, there might be two cases:
             * 1. Reusing with itself
             *    In this case, enqueueComponent will be triggered first, followed by componentAtIndex.
             * 2. Moving
             *    In this case, the trigger order is uncertain; componentAtIndex might be triggered first, or enqueueComponent might be triggered first.
             *
             * When enqueueComponent is triggered first, there must be an item in the reuse pool with the same sign as here, which can be returned directly.
             * When componentAtIndex is triggered first, a clone needs to be made first, then follow the logic for adding or reusing. The cloned item will enter the reuse pool in the subsequent enqueueComponent.
             */ const root = childCtx.__elements[0];
            const sign = __GetElementUniqueID(root);
            if (recycleSignMap === null || recycleSignMap === void 0 ? void 0 : recycleSignMap.has(sign)) {
                signMap.set(sign, childCtx);
                recycleSignMap.delete(sign);
                __FlushElementTree(root, {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                });
                return sign;
            } else {
                const newCtx = childCtx.takeElements();
                signMap.set(sign, newCtx);
            }
        }
        if (recycleSignMap && recycleSignMap.size > 0) {
            const [first] = recycleSignMap;
            const [sign, oldCtx] = first;
            recycleSignMap.delete(sign);
            (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_0__.hydrate)(oldCtx, childCtx);
            oldCtx.unRenderElements();
            const root = childCtx.__element_root;
            if (enableReuseNotification) __FlushElementTree(root, {
                triggerLayout: true,
                operationID,
                elementID: sign,
                listID,
                listReuseNotification: {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                }
            });
            else __FlushElementTree(root, {
                triggerLayout: true,
                operationID,
                elementID: sign,
                listID
            });
            signMap.set(sign, childCtx);
            (0,_lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_1__.commitMainThreadPatchUpdate)(undefined);
            return sign;
        }
        childCtx.ensureElements();
        const root = childCtx.__element_root;
        __AppendElement(list, root);
        const sign = __GetElementUniqueID(root);
        __FlushElementTree(root, {
            triggerLayout: true,
            operationID,
            elementID: sign,
            listID
        });
        signMap.set(sign, childCtx);
        (0,_lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_1__.commitMainThreadPatchUpdate)(undefined);
        return sign;
    };
    return componentAtIndex;
}
function enqueueComponentFactory() {
    const enqueueComponent = (_, listID, sign)=>{
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('enqueueComponent called on removed list');
        const childCtx = signMap.get(sign);
        if (!childCtx) return;
        const platformInfo = childCtx.__listItemPlatformInfo || {};
        var _platformInfo_reuseidentifier;
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        if (!recycleMap.has(uniqID)) recycleMap.set(uniqID, new Map());
        recycleMap.get(uniqID).set(sign, childCtx);
    };
    return enqueueComponent;
}
function snapshotCreateList(pageId, _ctx, _expIndex) {
    const signMap = new Map();
    const recycleMap = new Map();
    const list = __CreateList(pageId, componentAtIndexFactory([]), enqueueComponentFactory(), {});
    const listID = __GetElementUniqueID(list);
    gSignMap[listID] = signMap;
    gRecycleMap[listID] = recycleMap;
    return list;
}
function snapshotDestroyList(si) {
    const [, elementIndex] = si.__snapshot_def.slot[0];
    const list = si.__elements[elementIndex];
    const listID = __GetElementUniqueID(list);
    delete gSignMap[listID];
    delete gRecycleMap[listID];
} //# sourceMappingURL=list.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InitDataConsumer: () => (InitDataConsumer),
  InitDataProvider: () => (InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_10__.MainThreadRef),
  root: () => (root),
  runOnBackground: () => (/* reexport safe */ _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_9__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_8__.runOnMainThread),
  useInitData: () => (useInitData),
  useInitDataChanged: () => (useInitDataChanged),
  useLynxGlobalEventListener: () => (/* reexport safe */ _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_4__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_10__.useMainThreadRef),
  withInitDataInState: () => (/* reexport safe */ _compat_initData_js__WEBPACK_IMPORTED_MODULE_3__.withInitDataInState)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _lynx_tt_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/tt.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js");
/* ESM import */var _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js");
/* ESM import */var _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.








/**
 * The default and only root of ReactLynx for you to render JSX
 * @example
 * ```ts
 * import { root } from "@lynx-js/react"
 * ```
 *
 * @public
 */ const root = {
    render: (jsx)=>{
        _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.__jsx = jsx;
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(jsx, _root_js__WEBPACK_IMPORTED_MODULE_7__.__root);
        if (true) ;
        else {}
        (0,_lynx_tt_js__WEBPACK_IMPORTED_MODULE_6__.flushDelayedLifecycleEvents)();
    },
    registerDataProcessors: (dataProcessorDefinition)=>{
        lynx.registerDataProcessors(dataProcessorDefinition);
    }
};
const _InitData = /* @__PURE__ */ (0,_compat_initData_js__WEBPACK_IMPORTED_MODULE_3__.factory)({
    createContext: preact_compat__WEBPACK_IMPORTED_MODULE_1__.createContext,
    useState: preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_1__.createElement,
    useLynxGlobalEventListener: _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_4__.useLynxGlobalEventListener
}, '__initData', 'onDataChanged');
/**
 * The {@link https://react.dev/reference/react/createContext#provider | Provider} Component that provide `initData`,
 * you must wrap your JSX inside it
 * @group Components
 *
 * @example
 *
 * ```ts
 * import { root } from "@lynx-js/react"
 *
 * function App() {
 *   return (
 *     <InitDataConsumer children={(initData) => <view>...</view>}/>
 *   )
 * }
 *
 * root.render(
 *   <InitDataProvider>
 *      <App/>
 *   </InitDataProvider>
 * );
 *
 * ```
 *
 * @public
 */ const InitDataProvider = /* @__PURE__ */ _InitData.Provider();
/**
 * The {@link https://react.dev/reference/react/createContext#consumer | Consumer} Component that provide `initData`.
 * This should be used with {@link InitDataProvider}
 * @group Components
 * @public
 */ const InitDataConsumer = /* @__PURE__ */ _InitData.Consumer();
/**
 * A React Hooks for you to get `initData`.
 * If `initData` is changed, a re-render will be triggered automatically.
 *
 * @example
 *
 * ```ts
 * function App() {
 *   const initData = useInitData();
 *
 *   initData.someProperty // use it
 * }
 * ```
 *
 * @public
 */ const useInitData = /* @__PURE__ */ _InitData.use();
/**
 * A React Hooks for you to get notified when `initData` changed.
 *
 * @example
 * ```ts
 * function App() {
 *   useInitDataChanged((data) => {
 *     data.someProperty // can use it
 *   })
 * }
 * ```
 * @public
 */ const useInitDataChanged = /* @__PURE__ */ _InitData.useChanged();




 //# sourceMappingURL=lynx-api.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _debug_profile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js");
/* ESM import */var _document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/document.js");
/* ESM import */var _lifecycle_delayUnmount_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/delayUnmount.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _lynx_env_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _lynx_tt_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/tt.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

// to make sure preact's hooks to register earlier than ours








// TODO: replace this with __PROFILE__
if (true) (0,_debug_profile_js__WEBPACK_IMPORTED_MODULE_2__.initProfileHook)();
preact__WEBPACK_IMPORTED_MODULE_0__.options.document = _document_js__WEBPACK_IMPORTED_MODULE_3__.document;
(0,_document_js__WEBPACK_IMPORTED_MODULE_3__.setupBackgroundDocument)();
(0,_lynx_tt_js__WEBPACK_IMPORTED_MODULE_8__.injectTt)();
if (false) {}
else {
    (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__.replaceCommitHook)();
    (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__.replaceRequestAnimationFrame)();
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_7__.initTimingAPI)();
    (0,_lifecycle_delayUnmount_js__WEBPACK_IMPORTED_MODULE_4__.initDelayUnmount)();
}
(0,_lynx_env_js__WEBPACK_IMPORTED_MODULE_6__.setupLynxEnv)(); //# sourceMappingURL=lynx.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _performance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




{
    const __Component = preact__WEBPACK_IMPORTED_MODULE_0__.Component;
    __Component.prototype._reactAppInstance = lynxCoreInject.tt;
    __Component.prototype.getNodeRef = function(a, b) {
        if (true) lynx.reportError(new Error('getNodeRef is deprecated and has different behavior in ReactLynx 3.0, please use ref or lynx.createSelectorQuery instead.'));
        return lynxCoreInject.tt._reactLynx.ReactComponent.prototype.getNodeRef.call({
            _type: '',
            _nativeApp: lynxCoreInject.tt._nativeApp,
            _uiModule: lynxCoreInject.tt._nativeApp.nativeModuleProxy.LynxUIMethodModule,
            _reactAppInstance: lynxCoreInject.tt
        }, a, b);
    };
    __Component.prototype.getNodeRefFromRoot = function(a) {
        if (true) lynx.reportError(new Error('getNodeRefFromRoot is deprecated and has different behavior in ReactLynx 3.0, please use ref or lynx.createSelectorQuery instead.'));
        return lynxCoreInject.tt._reactLynx.ReactComponent.prototype.getNodeRefFromRoot.call({
            _type: '',
            _nativeApp: lynxCoreInject.tt._nativeApp,
            _uiModule: lynxCoreInject.tt._nativeApp.nativeModuleProxy.LynxUIMethodModule,
            _reactAppInstance: lynxCoreInject.tt
        }, a);
    };
    __Component.prototype.registerModule = function(name, module) {
        this._reactAppInstance.registerModule(name, module);
    };
    __Component.prototype.getJSModule = function(name) {
        return this._reactAppInstance.getJSModule(name);
    };
    __Component.prototype.addGlobalEventListener = function(eventName, callback, context) {
        return this._reactAppInstance.getJSModule('GlobalEventEmitter').addListener(eventName, callback, context);
    };
    __Component.prototype.getElementById = function(id) {
        if (true) lynx.reportError(new Error('getElementById on component instance is deprecated and has different behavior in ReactLynx 3.0, please use ref or lynx.getElementById instead.'));
        return lynx.getElementById(id);
    };
    __Component.prototype.GlobalEventEmitter = lynxCoreInject.tt.GlobalEventEmitter;
    __Component.prototype.createSelectorQuery = function() {
        if (true) lynx.reportError(new Error('createSelectorQuery on component instance is deprecated and has different behavior in ReactLynx 3.0, please use ref or lynx.createSelectorQuery instead.'));
        return lynx.createSelectorQuery();
    };
    const oldSetState = __Component.prototype.setState;
    __Component.prototype.setState = function(state, callback) {
        oldSetState.call(this, state, callback);
        // @ts-ignore
        const timingFlag = this[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_STATE][_performance_js__WEBPACK_IMPORTED_MODULE_1__.PerfSpecificKey];
        if (timingFlag) {
            _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__.globalFlushOptions.__lynx_timing_flag = timingFlag;
            (0,_performance_js__WEBPACK_IMPORTED_MODULE_1__.markTimingLegacy)(_performance_js__WEBPACK_IMPORTED_MODULE_1__.PerformanceTimingKeys.update_set_state_trigger, timingFlag);
            this[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_STATE][_performance_js__WEBPACK_IMPORTED_MODULE_1__.PerfSpecificKey] = '';
        }
    };
} //# sourceMappingURL=component.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __dynamicImport: () => (__dynamicImport),
  loadDynamicJS: () => (loadDynamicJS)
});
/* ESM import */var _lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function loadDynamicJS(url) {
    return new Promise((resolve, reject)=>{
        lynx.requireModuleAsync(url, (err, data)=>{
            if (err) reject(err);
            else resolve(data);
        });
    });
}
function __dynamicImport(url, options) {
    var _options_with;
    const t = options === null || options === void 0 ? void 0 : (_options_with = options.with) === null || _options_with === void 0 ? void 0 : _options_with.type;
    if (t === 'component' || t === 'tsx' || t === 'jsx') return (0,_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__.loadLazyBundle)(url);
    else return loadDynamicJS(url);
} //# sourceMappingURL=dynamic-js.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupLynxEnv: () => (setupLynxEnv)
});
function setupLynxEnv() {
    {
        const { initData, updateData } = lynxCoreInject.tt._params;
        // @ts-ignore
        lynx.__initData = {
            ...initData,
            ...updateData
        };
        lynx.registerDataProcessors = function() {};
    }
} //# sourceMappingURL=env.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadLazyBundle: () => (loadLazyBundle),
  mainThreadLazy: () => (mainThreadLazy),
  makeSyncThen: () => (makeSyncThen)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * To make code below works
 * const App1 = lazy(() => import("./x").then(({App1}) => ({default: App1})))
 * const App2 = lazy(() => import("./x").then(({App2}) => ({default: App2})))
 * @internal
 */ const makeSyncThen = function(result) {
    return function(onF) {
        if (onF) {
            let ret;
            try {
                ret = onF(result);
            } catch (e) {
                return Promise.reject(e);
            }
            // @ts-ignore
            if (ret && typeof ret.then === 'function' /* `thenable` object */ ) //   import("./x").then(() => new Promise(...))
            // )
            // Calling `then` and passing a callback is standard behavior
            // but in Lepus runtime the callback will never be called
            // So can be simplified to code below
            return new Promise(()=>{});
            const p = Promise.resolve(ret);
            // @ts-ignore
            p.then = makeSyncThen(ret);
            return p;
        }
        return this;
    };
};
/**
 * Load dynamic component from source. Designed to be used with `lazy`.
 * @param source - where dynamic component template.js locates
 * @returns
 * @public
 */ function loadLazyBundle(source) {
    return new Promise((resolve, reject)=>{
        const callback = (result)=>{
            const { code, detail } = result;
            if (code === 0) {
                const { schema } = detail;
                const exports = lynxCoreInject.tt.getDynamicComponentExports(schema);
                // `code === 0` means that the lazy bundle has been successfully parsed. However,
                // its javascript files may still fail to run, which would prevent the retrieval of the exports object.
                if (exports) {
                    resolve(exports);
                    return;
                }
            }
            reject(new Error('Lazy bundle load failed: ' + JSON.stringify(result)));
        };
        if (typeof lynx.QueryComponent === 'function') lynx.QueryComponent(source, callback);
        else lynx.getNativeLynx().QueryComponent(source, callback);
    });
}
lynx.loadLazyBundle = loadLazyBundle;
/**
 * @internal
 */ function mainThreadLazy(loader) {
    const Lazy = (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.lazy)(loader);
    function _Lazy(props) {
        try {
            // @ts-expect-error `Lazy` returned from `backgroundLazy` should be a FC
            return Lazy(props);
        } catch (e) {
            // We should never throw at mainThread
            return (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact_compat__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
        }
    }
    return _Lazy;
} //# sourceMappingURL=lazy-bundle.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PerfSpecificKey: () => (PerfSpecificKey),
  PerformanceTimingKeys: () => (PerformanceTimingKeys),
  beginPipeline: () => (beginPipeline),
  globalPipelineOptions: () => (globalPipelineOptions),
  initTimingAPI: () => (initTimingAPI),
  markTiming: () => (markTiming),
  markTimingLegacy: () => (markTimingLegacy),
  setPipeline: () => (setPipeline)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



var PerformanceTimingKeys;
(function(PerformanceTimingKeys) {
    PerformanceTimingKeys[PerformanceTimingKeys["update_set_state_trigger"] = 0] = "update_set_state_trigger";
    PerformanceTimingKeys[PerformanceTimingKeys["update_diff_vdom_start"] = 1] = "update_diff_vdom_start";
    PerformanceTimingKeys[PerformanceTimingKeys["update_diff_vdom_end"] = 2] = "update_diff_vdom_end";
    // update_set_state_trigger, update_diff_vdom_start and update_diff_vdom_end is deprecated
    PerformanceTimingKeys[PerformanceTimingKeys["diff_vdom_start"] = 3] = "diff_vdom_start";
    PerformanceTimingKeys[PerformanceTimingKeys["diff_vdom_end"] = 4] = "diff_vdom_end";
    PerformanceTimingKeys[PerformanceTimingKeys["pack_changes_start"] = 5] = "pack_changes_start";
    PerformanceTimingKeys[PerformanceTimingKeys["pack_changes_end"] = 6] = "pack_changes_end";
    PerformanceTimingKeys[PerformanceTimingKeys["parse_changes_start"] = 7] = "parse_changes_start";
    PerformanceTimingKeys[PerformanceTimingKeys["parse_changes_end"] = 8] = "parse_changes_end";
    PerformanceTimingKeys[PerformanceTimingKeys["patch_changes_start"] = 9] = "patch_changes_start";
    PerformanceTimingKeys[PerformanceTimingKeys["patch_changes_end"] = 10] = "patch_changes_end";
    PerformanceTimingKeys[PerformanceTimingKeys["hydrate_parse_snapshot_start"] = 11] = "hydrate_parse_snapshot_start";
    PerformanceTimingKeys[PerformanceTimingKeys["hydrate_parse_snapshot_end"] = 12] = "hydrate_parse_snapshot_end";
})(PerformanceTimingKeys || (PerformanceTimingKeys = {}));
/**
 * @deprecated used by old timing api(setState timing flag)
 */ const PerfSpecificKey = '__lynx_timing_flag';
let timingFlag;
let shouldMarkDiffVdomStart = false;
let shouldMarkDiffVdomEnd = false;
let globalPipelineOptions;
/**
 * @deprecated used by old timing api(setState timing flag)
 */ function markTimingLegacy(key, timingFlag_) {
    var _lynx_getNativeApp_markTiming, _lynx_getNativeApp;
    switch(key){
        case PerformanceTimingKeys.update_set_state_trigger:
            shouldMarkDiffVdomStart = true;
            shouldMarkDiffVdomEnd = true;
            timingFlag = timingFlag_;
            break;
        case PerformanceTimingKeys.update_diff_vdom_start:
            /* v8 ignore start */ if (!shouldMarkDiffVdomStart) return;
            /* v8 ignore stop */ shouldMarkDiffVdomStart = false;
            break;
        case PerformanceTimingKeys.update_diff_vdom_end:
            if (!shouldMarkDiffVdomEnd) return;
            shouldMarkDiffVdomEnd = false;
            break;
    }
    (_lynx_getNativeApp_markTiming = (_lynx_getNativeApp = lynx.getNativeApp()).markTiming) === null || _lynx_getNativeApp_markTiming === void 0 ? void 0 : _lynx_getNativeApp_markTiming.call(_lynx_getNativeApp, timingFlag, PerformanceTimingKeys[key]);
}
function beginPipeline(needTimestamps, timingFlag) {
    var _lynx_performance__generatePipelineOptions, _lynx_performance;
    globalPipelineOptions = (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__generatePipelineOptions = _lynx_performance._generatePipelineOptions) === null || _lynx_performance__generatePipelineOptions === void 0 ? void 0 : _lynx_performance__generatePipelineOptions.call(_lynx_performance);
    if (globalPipelineOptions) {
        var _lynx_performance__onPipelineStart, _lynx_performance1, _lynx_performance__bindPipelineIdWithTimingFlag, _lynx_performance2;
        globalPipelineOptions.needTimestamps = needTimestamps;
        (_lynx_performance1 = lynx.performance) === null || _lynx_performance1 === void 0 ? void 0 : (_lynx_performance__onPipelineStart = _lynx_performance1._onPipelineStart) === null || _lynx_performance__onPipelineStart === void 0 ? void 0 : _lynx_performance__onPipelineStart.call(_lynx_performance1, globalPipelineOptions.pipelineID);
        if (timingFlag) (_lynx_performance2 = lynx.performance) === null || _lynx_performance2 === void 0 ? void 0 : (_lynx_performance__bindPipelineIdWithTimingFlag = _lynx_performance2._bindPipelineIdWithTimingFlag) === null || _lynx_performance__bindPipelineIdWithTimingFlag === void 0 ? void 0 : _lynx_performance__bindPipelineIdWithTimingFlag.call(_lynx_performance2, globalPipelineOptions.pipelineID, timingFlag);
    }
}
function setPipeline(pipeline) {
    globalPipelineOptions = pipeline;
}
function markTiming(timestampKey, force) {
    var _lynx_performance__markTiming, _lynx_performance;
    if (globalPipelineOptions && (force || globalPipelineOptions.needTimestamps)) (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__markTiming = _lynx_performance._markTiming) === null || _lynx_performance__markTiming === void 0 ? void 0 : _lynx_performance__markTiming.call(_lynx_performance, globalPipelineOptions.pipelineID, PerformanceTimingKeys[timestampKey]);
}
function initTimingAPI() {
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = (vnode)=>{
        // check `__globalSnapshotPatch` to make sure this only runs after hydrate
        if (_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__.__globalSnapshotPatch) {
            if (!globalPipelineOptions) {
                beginPipeline(false);
                markTiming(PerformanceTimingKeys.diff_vdom_start, true);
            }
            if (shouldMarkDiffVdomStart) markTimingLegacy(PerformanceTimingKeys.update_diff_vdom_start);
        }
        oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff(vnode);
    };
}
/**
 * @internal
 */  //# sourceMappingURL=performance.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/tt.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayedLifecycleEvents: () => (delayedLifecycleEvents),
  flushDelayedLifecycleEvents: () => (flushDelayedLifecycleEvents),
  injectTt: () => (injectTt),
  runWithForce: () => (runWithForce)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _performance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js");
/* ESM import */var _lifecycle_destroy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _worklet_destroy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.












function runWithForce(cb) {
    // save vnode and its `_component` in WeakMap
    const m = new WeakMap();
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.DIFF];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.DIFF] = (vnode)=>{
        if (oldDiff) oldDiff(vnode);
        // when `options[DIFF]` is called, a newVnode is passed in
        // so its `vnode[COMPONENT]` should be null,
        // but it will be set later
        Object.defineProperty(vnode, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.COMPONENT, {
            configurable: true,
            set (c) {
                m.set(vnode, c);
                if (c) c[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.FORCE] = true;
            },
            get () {
                return m.get(vnode);
            }
        });
    };
    const oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.DIFFED];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.DIFFED] = (vnode)=>{
        if (oldDiffed) oldDiffed(vnode);
        // delete is a reverse operation of previous `Object.defineProperty`
        delete vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.COMPONENT];
        // restore
        vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.COMPONENT] = m.get(vnode);
    };
    try {
        cb();
    } finally{
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.DIFF] = oldDiff;
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.DIFFED] = oldDiffed;
    }
}
function injectTt() {
    // @ts-ignore
    const tt = lynxCoreInject.tt;
    tt.OnLifecycleEvent = OnLifecycleEvent;
    tt.publishEvent = delayedPublishEvent;
    tt.publicComponentEvent = delayedPublicComponentEvent;
    tt.callDestroyLifetimeFun = ()=>{
        (0,_worklet_destroy_js__WEBPACK_IMPORTED_MODULE_11__.destroyWorklet)();
        (0,_lifecycle_destroy_js__WEBPACK_IMPORTED_MODULE_4__.destroyBackground)();
    };
    tt.updateGlobalProps = updateGlobalProps;
    tt.updateCardData = updateCardData;
    tt.onAppReload = _lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_6__.reloadBackground;
    tt.processCardConfig = ()=>{
    // used to updateTheme, no longer rely on this function
    };
}
let delayedLifecycleEvents;
async function OnLifecycleEvent([type, data]) {
    const hasRootRendered = _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_7__.CHILDREN in _root_js__WEBPACK_IMPORTED_MODULE_8__.__root;
    // never called `render(<App/>, __root)`
    // happens if user call `root.render()` async
    if (!hasRootRendered) {
        delayedLifecycleEvents !== null && delayedLifecycleEvents !== void 0 ? delayedLifecycleEvents : delayedLifecycleEvents = [];
        delayedLifecycleEvents.push([
            type,
            data
        ]);
        return;
    }
    if (true) console.profile(`OnLifecycleEvent::${type}`);
    switch(type){
        case _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.firstScreen:
            {
                const { root: lepusSide, refPatch, jsReadyEventIdSwap } = data;
                if (true) console.profile('hydrate');
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.beginPipeline)(true, 'react_lynx_hydrate');
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.hydrate_parse_snapshot_start);
                const before = JSON.parse(lepusSide);
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.hydrate_parse_snapshot_end);
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.diff_vdom_start);
                const snapshotPatch = (0,_backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_3__.hydrate)(before, _root_js__WEBPACK_IMPORTED_MODULE_8__.__root);
                if (true) console.profileEnd();
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.diff_vdom_end);
                if (delayedEvents) {
                    delayedEvents.forEach((args)=>{
                        const [handlerName, data] = args;
                        let [idStr, ...rest] = handlerName.split(':');
                        while(jsReadyEventIdSwap[idStr])idStr = jsReadyEventIdSwap[idStr];
                        try {
                            publishEvent([
                                idStr,
                                ...rest
                            ].join(':'), data);
                        } catch (e) {
                            lynx.reportError(e);
                        }
                    });
                    delayedEvents.length = 0;
                }
                lynxCoreInject.tt.publishEvent = publishEvent;
                lynxCoreInject.tt.publicComponentEvent = publicComponentEvent;
                if (true) console.profile('patchRef');
                if (refPatch) {
                    _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_9__.globalRefsToSet.set(0, JSON.parse(refPatch));
                    (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_9__.updateBackgroundRefs)(0);
                }
                if (true) console.profileEnd();
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.pack_changes_start);
                // console.debug("********** After hydration:");
                // printSnapshotInstance(__root as BackgroundSnapshotInstance);
                if (true) console.profile('commitChanges');
                const commitTaskId = (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__.genCommitTaskId)();
                await (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__.commitPatchUpdate)({
                    snapshotPatch
                }, {
                    commitTaskId,
                    isHydration: true
                });
                (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_9__.updateBackgroundRefs)(commitTaskId);
                _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__.globalCommitTaskMap.forEach((commitTask, id)=>{
                    if (id > commitTaskId) return;
                    commitTask();
                    _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__.globalCommitTaskMap["delete"](id);
                });
                break;
            }
        case _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.globalEventFromLepus:
            {
                const [eventName, params] = data;
                lynx.getJSModule('GlobalEventEmitter').trigger(eventName, params);
                break;
            }
        case _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.ref:
            {
                const { refPatch, commitTaskId } = data;
                if (commitTaskId) _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_9__.globalRefsToSet.set(commitTaskId, JSON.parse(refPatch));
                else {
                    _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_9__.globalRefsToSet.set(0, JSON.parse(refPatch));
                    (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_9__.updateBackgroundRefs)(0);
                }
                break;
            }
    }
    if (true) console.profileEnd();
}
function flushDelayedLifecycleEvents() {
    if (delayedLifecycleEvents) {
        delayedLifecycleEvents.forEach((e)=>{
            try {
                OnLifecycleEvent(e);
            } catch (e) {
                lynx.reportError(e);
            }
        });
        delayedLifecycleEvents.length = 0;
    }
}
function publishEvent(handlerName, data) {
    var // TODO: delay js events until js ready
    _lynxCoreInject_tt_callBeforePublishEvent, _lynxCoreInject_tt;
    (_lynxCoreInject_tt_callBeforePublishEvent = (_lynxCoreInject_tt = lynxCoreInject.tt).callBeforePublishEvent) === null || _lynxCoreInject_tt_callBeforePublishEvent === void 0 ? void 0 : _lynxCoreInject_tt_callBeforePublishEvent.call(_lynxCoreInject_tt, data);
    const eventHandler = _snapshot_js__WEBPACK_IMPORTED_MODULE_10__.backgroundSnapshotInstanceManager.getValueBySign(handlerName);
    if (eventHandler) try {
        eventHandler(data);
    } catch (e) {
        lynx.reportError(e);
    }
}
function publicComponentEvent(_componentId, handlerName, data) {
    publishEvent(handlerName, data);
}
let delayedEvents;
function delayedPublishEvent(handlerName, data) {
    delayedEvents !== null && delayedEvents !== void 0 ? delayedEvents : delayedEvents = [];
    delayedEvents.push([
        handlerName,
        data
    ]);
}
function delayedPublicComponentEvent(_componentId, handlerName, data) {
    delayedPublishEvent(handlerName, data);
}
function updateGlobalProps(newData) {
    Object.assign(lynx.__globalProps, newData);
    // Our purpose is to make sure SYNC setState inside `emit`'s listeners
    // can be batched with updateFromRoot
    // This is already done because updateFromRoot will consume all dirty flags marked by
    // the setState, and setState's flush will be a noop. No extra diffs will be needed.
    Promise.resolve().then(()=>{
        runWithForce(()=>(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(_root_js__WEBPACK_IMPORTED_MODULE_8__.__root.__jsx, _root_js__WEBPACK_IMPORTED_MODULE_8__.__root));
    });
    lynxCoreInject.tt.GlobalEventEmitter.emit('onGlobalPropsChanged');
}
function updateCardData(newData, options) {
    const { ['__lynx_timing_flag']: performanceTimingFlag, ...restNewData } = newData;
    if (performanceTimingFlag) lynx.reportError(new Error(`Received unsupported updateData with \`__lynx_timing_flag\` (value "${performanceTimingFlag}"), the timing flag is ignored`));
    const { type = _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.NativeUpdateDataType.UPDATE } = options || {};
    if (type == _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.NativeUpdateDataType.RESET) lynx.__initData = {};
    // COW when modify `lynx.__initData` to make sure Provider & Consumer works
    // @ts-ignore
    lynx.__initData = Object.assign({}, lynx.__initData, restNewData);
    lynxCoreInject.tt.GlobalEventEmitter.emit('onDataChanged');
}
 //# sourceMappingURL=tt.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderOpcodesInto: () => (renderOpcodesInto)
});
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


var Opcode;
(function(Opcode) {
    Opcode[Opcode["Begin"] = 0] = "Begin";
    Opcode[Opcode["End"] = 1] = "End";
    Opcode[Opcode["Attr"] = 2] = "Attr";
    Opcode[Opcode["Text"] = 3] = "Text";
})(Opcode || (Opcode = {}));
function renderOpcodesInto(opcodes, into) {
    let top = into;
    const stack = [
        into
    ];
    for(let i = 0; i < opcodes.length;){
        const opcode = opcodes[i];
        switch(opcode){
            case Opcode.Begin:
                {
                    const p = top;
                    top = opcodes[i + 1];
                    // @ts-ignore
                    if (top.__parent) top = new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(top.type);
                    p.insertBefore(top);
                    stack.push(top);
                    i += 2;
                    break;
                }
            case Opcode.End:
                {
                    // @ts-ignore
                    top[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_0__.CHILDREN] = undefined;
                    stack.pop();
                    const p = stack[stack.length - 1];
                    top = p;
                    i += 1;
                    break;
                }
            case Opcode.Attr:
                {
                    const key = opcodes[i + 1];
                    const value = opcodes[i + 2];
                    top.setAttribute(key, value);
                    i += 3;
                    break;
                }
            case Opcode.Text:
                {
                    const text = opcodes[i + 1];
                    const s = new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(null);
                    s.setAttribute(0, text);
                    top.insertBefore(s);
                    i += 2;
                    break;
                }
        }
    }
} //# sourceMappingURL=opcodes.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CATCH_ERROR: () => (CATCH_ERROR),
  CHILDREN: () => (CHILDREN),
  CHILD_DID_SUSPEND: () => (CHILD_DID_SUSPEND),
  COMMIT: () => (COMMIT),
  COMPONENT: () => (COMPONENT),
  DIFF: () => (DIFF),
  DIFFED: () => (DIFFED),
  DIRTY: () => (DIRTY),
  FORCE: () => (FORCE),
  HOOK: () => (HOOK),
  MASK: () => (MASK),
  NEXT_STATE: () => (NEXT_STATE),
  PARENT: () => (PARENT),
  RENDER: () => (RENDER),
  RENDER_CALLBACKS: () => (RENDER_CALLBACKS),
  SKIP_EFFECTS: () => (SKIP_EFFECTS),
  VNODE: () => (VNODE)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const DIFF = '__b';
const RENDER = '__r';
const DIFFED = 'diffed';
const COMMIT = '__c';
const SKIP_EFFECTS = '__s';
const CATCH_ERROR = '__e';
// VNode properties
const COMPONENT = '__c';
const CHILDREN = '__k';
const PARENT = '__';
const MASK = '__m';
// Component properties
const VNODE = '__v';
const DIRTY = '__d';
const FORCE = '__e';
const NEXT_STATE = '__s';
const CHILD_DID_SUSPEND = '__c';
const RENDER_CALLBACKS = '__h';
const HOOK = '__h'; //# sourceMappingURL=constants.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __OpAttr: () => (__OpAttr),
  __OpBegin: () => (__OpBegin),
  __OpEnd: () => (__OpEnd),
  __OpText: () => (__OpText),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  render: () => (render),
  renderToStaticMarkup: () => (renderToStaticMarkup),
  renderToString: () => (renderToString)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// modified from preact-render-to-string@6.0.3
// @ts-nocheck


/** @typedef {import('preact').VNode} VNode */ const EMPTY_ARR = [];
const isArray = /* @__PURE__ */ Array.isArray;
const assign = /* @__PURE__ */ Object.assign;
// Global state for the current render pass
let beforeDiff, afterDiff, renderHook, ummountHook;
/**
 * Render Preact JSX + Components to an HTML string.
 * @param {VNode} vnode	JSX Element / VNode to render
 * @param {object} [context] Initial root context object
 */ function renderToString(vnode, context) {
    // Performance optimization: `renderToString` is synchronous and we
    // therefore don't execute any effects. To do that we pass an empty
    // array to `options._commit` (`__c`). But we can go one step further
    // and avoid a lot of dirty checks and allocations by setting
    // `options._skipEffects` (`__s`) too.
    const previousSkipEffects = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS] = true;
    // store options hooks once before each synchronous render call
    beforeDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    afterDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    renderHook = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER];
    ummountHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
    const parent = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    parent[_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = [
        vnode
    ];
    const opcodes = [];
    try {
        _renderToString(vnode, context || EMPTY_OBJ, false, undefined, parent, opcodes);
    } finally{
        // options._commit, we don't schedule any effects in this library right now,
        // so we can pass an empty queue to this hook.
        if (preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMIT]) preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMIT](vnode, EMPTY_ARR);
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS] = previousSkipEffects;
        EMPTY_ARR.length = 0;
    }
    return opcodes;
}
// Installed as setState/forceUpdate for function components
function markAsDirty() {
    this.__d = true;
}
const EMPTY_OBJ = {};
const __OpBegin = 0;
const __OpEnd = 1;
const __OpAttr = 2;
const __OpText = 3;
/**
 * @param {VNode} vnode
 * @param {Record<string, unknown>} context
 */ function renderClassComponent(vnode, context) {
    let type = /** @type {import("preact").ComponentClass<typeof vnode.props>} */ vnode.type;
    let c = new type(vnode.props, context);
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = c;
    c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE] = vnode;
    c.props = vnode.props;
    c.context = context;
    // turn off stateful re-rendering:
    c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = true;
    if (c.state == null) c.state = EMPTY_OBJ;
    if (c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE] == null) c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE] = c.state;
    if (type.getDerivedStateFromProps) c.state = assign({}, c.state, type.getDerivedStateFromProps(c.props, c.state));
    if (renderHook) renderHook(vnode);
    return c.render(c.props, c.state, context);
}
/**
 * Recursively render VNodes to HTML.
 * @param {VNode|any} vnode
 * @param {any} context
 * @param {boolean} isSvgMode
 * @param {any} selectValue
 * @param {VNode} parent
 * @param opcodes
 */ function _renderToString(vnode, context, isSvgMode, selectValue, parent, opcodes) {
    // Ignore non-rendered VNodes/values
    if (vnode == null || vnode === true || vnode === false || vnode === '') return;
    // Text VNodes: escape as HTML
    if (typeof vnode !== 'object') {
        if (typeof vnode === 'function') return;
        opcodes.push(__OpText, vnode + '');
        return;
    }
    // Recurse into children / Arrays
    if (isArray(vnode)) {
        parent[_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = vnode;
        for(let i = 0; i < vnode.length; i++){
            let child = vnode[i];
            if (child == null || typeof child === 'boolean') continue;
            _renderToString(child, context, isSvgMode, selectValue, parent, opcodes);
        }
        return;
    }
    // VNodes have {constructor:undefined} to prevent JSON injection:
    // if (vnode.constructor !== undefined) return;
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = parent;
    if (beforeDiff) beforeDiff(vnode);
    let type = vnode.type, props = vnode.props, cctx = context, contextType, rendered, component;
    // Invoke rendering on Components
    if (typeof type === 'function') {
        if (type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment) rendered = props.children;
        else {
            contextType = type.contextType;
            if (contextType != null) {
                let provider = context[contextType.__c];
                cctx = provider ? provider.props.value : contextType.__;
            }
            if (type.prototype && typeof type.prototype.render === 'function') {
                rendered = /**#__NOINLINE__**/ renderClassComponent(vnode, cctx);
                component = vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
            } else {
                component = {
                    __v: vnode,
                    props,
                    context: cctx,
                    // silently drop state updates
                    setState: markAsDirty,
                    forceUpdate: markAsDirty,
                    __d: true,
                    // hooks
                    __h: []
                };
                vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = component;
                component.constructor = type;
                component.render = doRender;
                // If a hook invokes setState() to invalidate the component during rendering,
                // re-render it up to 25 times to allow "settling" of memoized states.
                // Note:
                //   This will need to be updated for Preact 11 to use internal.flags rather than component._dirty:
                //   https://github.com/preactjs/preact/blob/d4ca6fdb19bc715e49fd144e69f7296b2f4daa40/src/diff/component.js#L35-L44
                let count = 0;
                while(component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] && count++ < 25){
                    component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = false;
                    if (renderHook) renderHook(vnode);
                    rendered = component.render(props, component.state, cctx);
                }
                component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = true;
            }
            if (component.getChildContext != null) context = assign({}, context, component.getChildContext());
        }
        // When a component returns a Fragment node we flatten it in core, so we
        // need to mirror that logic here too
        let isTopLevelFragment = rendered != null && rendered.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment && rendered.key == null;
        rendered = isTopLevelFragment ? rendered.props.children : rendered;
        // Recurse into children before invoking the after-diff hook
        _renderToString(rendered, context, isSvgMode, selectValue, vnode, opcodes);
        if (afterDiff) afterDiff(vnode);
        vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = undefined;
        if (ummountHook) ummountHook(vnode);
        return;
    }
    let children;
    opcodes.push(__OpBegin, vnode);
    for(let name in props){
        let v = props[name];
        switch(name){
            case 'children':
                children = v;
                continue;
            // VDOM-specific props
            /* c8 ignore next 5 */ case 'key':
            case 'ref':
            case '__self':
            case '__source':
                continue;
            default:
        }
        // write this attribute to the buffer
        if (v != null && v !== false && typeof v !== 'function') opcodes.push(__OpAttr, name, v);
    }
    if (typeof children === 'string') opcodes.push(__OpText, children);
    else if (children != null && children !== false && children !== true) _renderToString(children, context, false, selectValue, vnode, opcodes);
    if (afterDiff) afterDiff(vnode);
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = undefined;
    if (ummountHook) ummountHook(vnode);
    opcodes.push(__OpEnd);
    return;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderToString);
const render = renderToString;
const renderToStaticMarkup = renderToString; //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __root: () => (__root),
  setRoot: () => (setRoot)
});
/* ESM import */var _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let __root;
function setRoot(root) {
    __root = root;
}
setRoot(new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance('root'));
 //# sourceMappingURL=root.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DynamicPartType: () => (DynamicPartType),
  SnapshotInstance: () => (SnapshotInstance),
  __page: () => (__page),
  __pageId: () => (__pageId),
  backgroundSnapshotInstanceManager: () => (backgroundSnapshotInstanceManager),
  createSnapshot: () => (createSnapshot),
  setupPage: () => (setupPage),
  snapshotInstanceManager: () => (snapshotInstanceManager),
  snapshotManager: () => (snapshotManager),
  traverseSnapshotInstance: () => (traverseSnapshotInstance)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");




var DynamicPartType;
(function(DynamicPartType) {
    DynamicPartType[DynamicPartType["Attr"] = 0] = "Attr";
    DynamicPartType[DynamicPartType["Spread"] = 1] = "Spread";
    DynamicPartType[DynamicPartType["Slot"] = 2] = "Slot";
    // Component,
    DynamicPartType[DynamicPartType["Children"] = 3] = "Children";
    DynamicPartType[DynamicPartType["ListChildren"] = 4] = "ListChildren";
    // Used by compat layer
    DynamicPartType[DynamicPartType["MultiChildren"] = 5] = "MultiChildren";
})(DynamicPartType || (DynamicPartType = {}));
let __page;
let __pageId = 0;
function setupPage(page) {
    __page = page;
    __pageId = __GetElementUniqueID(page);
}
const snapshotManager = {
    values: /* @__PURE__ */ new Map([
        [
            'root',
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __page
                    ];
                },
                update: [],
                slot: [
                    [
                        DynamicPartType.Children,
                        0
                    ]
                ],
                isListHolder: false,
                cssId: 0
            }
        ],
        [
            'wrapper',
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __CreateWrapperElement(__pageId)
                    ];
                },
                update: [],
                slot: [
                    [
                        DynamicPartType.Children,
                        0
                    ]
                ],
                isListHolder: false
            }
        ],
        [
            null,
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __CreateElement('raw-text', __pageId)
                    ];
                },
                update: [
                    (ctx)=>{
                        /* v8 ignore start */ if (false) {}
                        /* v8 ignore stop */ if (ctx.__elements) __SetAttribute(ctx.__elements[0], 'text', ctx.__values[0]);
                    }
                ],
                slot: [],
                isListHolder: false
            }
        ]
    ])
};
const snapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
    }
};
const backgroundSnapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
    },
    updateId (id, newId) {
        const values = this.values;
        const si = values.get(id);
        values.delete(id);
        values.set(newId, si);
        si.__id = newId;
    },
    getValueBySign (str) {
        const res = str === null || str === void 0 ? void 0 : str.split(':');
        if (!res || res.length != 2 && res.length != 3) throw new Error('Invalid ctx format: ' + str);
        let id = Number(res[0]);
        const expIndex = Number(res[1]);
        const ctx = this.values.get(id);
        if (!ctx) return null;
        const spreadKey = res[2];
        if (spreadKey) return ctx.__values[expIndex][spreadKey];
        else return ctx.__values[expIndex];
    }
};
function createSnapshot(uniqID, create, update, slot, cssId, entryName) {
    var _update_map;
    if ( true && _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__.__globalSnapshotPatch && !snapshotManager.values.has(uniqID) && create !== null) // This means that `uniqID` is considered the "hash" of the snapshot.
    // When HMR (Hot Module Replacement) or fast refresh updates occur, `createSnapshot` will be re-executed with the new snapshot definition.
    _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__.SnapshotOperation.DEV_ONLY_AddSnapshot, uniqID, // This allows the updates to be applied to Lepus.
    // As a result, both the static part (`create`) and the dynamic parts (`update` and `slot`) can be updated.
    create.toString(), (_update_map = update === null || update === void 0 ? void 0 : update.map((f)=>f.toString())) !== null && _update_map !== void 0 ? _update_map : [], slot, cssId, entryName);
    if (entryName) uniqID = `${entryName}:${uniqID}`;
    const s = {
        create,
        update,
        slot,
        cssId,
        entryName
    };
    snapshotManager.values.set(uniqID, s);
    if (slot && slot[0] && slot[0][0] === DynamicPartType.ListChildren) s.isListHolder = true;
    return uniqID;
}
function traverseSnapshotInstance(si, callback) {
    const c = si.childNodes;
    callback(si);
    for (const vv of c)traverseSnapshotInstance(vv, callback);
}
const DEFAULT_ENTRY_NAME = '__Card__';
const DEFAULT_CSS_ID = 0;
class SnapshotInstance {
    ensureElements() {
        const { create, slot, isListHolder, cssId, entryName } = this.__snapshot_def;
        const elements = create(this);
        this.__elements = elements;
        this.__element_root = elements[0];
        if (cssId === undefined) {
            if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, DEFAULT_CSS_ID, entryName);
        } else if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, cssId, entryName);
        else __SetCSSId(this.__elements, cssId);
        const values = this.__values;
        if (values) {
            this.__values = undefined;
            this.setAttribute('values', values);
        }
        if (isListHolder) ;
        else {
            let index = 0;
            let child = this.__firstChild;
            while(child){
                child.ensureElements();
                const [type, elementIndex] = slot[index];
                switch(type){
                    case DynamicPartType.Slot:
                        __ReplaceElement(child.__element_root, elements[elementIndex]);
                        elements[elementIndex] = child.__element_root;
                        index++;
                        break;
                    /* v8 ignore start */ case DynamicPartType.MultiChildren:
                        if (__GetTag(elements[elementIndex]) === 'wrapper') __ReplaceElement(child.__element_root, elements[elementIndex]);
                        else __AppendElement(elements[elementIndex], child.__element_root);
                        index++;
                        break;
                    /* v8 ignore end */ case DynamicPartType.Children:
                    case DynamicPartType.ListChildren:
                        __AppendElement(elements[elementIndex], child.__element_root);
                        break;
                }
                child = child.__nextSibling;
            }
        }
    }
    unRenderElements() {
        const { isListHolder } = this.__snapshot_def;
        this.__elements = undefined;
        this.__element_root = undefined;
        if (isListHolder) ;
        else {
            let child = this.__firstChild;
            while(child){
                child.unRenderElements();
                child = child.__nextSibling;
            }
        }
    }
    takeElements() {
        const a = Object.create(SnapshotInstance.prototype);
        a.__id = this.__id;
        a.__snapshot_def = this.__snapshot_def;
        a.__values = this.__values;
        // all clear
        a.__parent = null;
        a.__firstChild = null;
        a.__lastChild = null;
        a.__nextSibling = null;
        a.__previousSibling = null;
        this.childNodes.map((c)=>c.takeElements()).forEach((node)=>a.__insertBefore(node));
        a.__elements = this.__elements;
        a.__element_root = this.__element_root;
        this.__elements = undefined;
        this.__element_root = undefined;
        return a;
    }
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    contains(child) {
        return child.parentNode === this;
    }
    get childNodes() {
        const nodes = [];
        let node = this.__firstChild;
        while(node){
            nodes.push(node);
            node = node.__nextSibling;
        }
        return nodes;
    }
    __insertBefore(node, beforeNode) {
        // If the node already has a parent, remove it from its current parent
        if (node.__parent) node.__parent.__removeChild(node);
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    __removeChild(node) {
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
    }
    insertBefore(newNode, existingNode) {
        const __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id;
            var _;
            ((_ = (__pendingListUpdates_values = _list_js__WEBPACK_IMPORTED_MODULE_0__.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(this)).onInsertBefore(newNode, existingNode);
            this.__insertBefore(newNode, existingNode);
            return;
        }
        const shouldRemove = newNode.__parent === this;
        this.__insertBefore(newNode, existingNode);
        const __elements = this.__elements;
        if (__elements) {
            if (!newNode.__elements) newNode.ensureElements();
        } else return;
        const count = __snapshot_def.slot.length;
        if (count === 1) {
            const [, elementIndex] = __snapshot_def.slot[0];
            const parent = __elements[elementIndex];
            if (shouldRemove) __RemoveElement(parent, newNode.__element_root);
            if (existingNode) __InsertElementBefore(parent, newNode.__element_root, existingNode.__element_root);
            else __AppendElement(parent, newNode.__element_root);
        } else if (count > 1) {
            const index = this.__current_slot_index++;
            const [s, elementIndex] = __snapshot_def.slot[index];
            if (s === DynamicPartType.Slot) {
                __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                __elements[elementIndex] = newNode.__element_root;
            /* v8 ignore start */ } else if (s === DynamicPartType.MultiChildren) {
                if (__GetTag(__elements[elementIndex]) === 'wrapper') __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                else __AppendElement(__elements[elementIndex], newNode.__element_root);
            }
        /* v8 ignore end */ }
    }
    removeChild(child) {
        const r = ()=>{
            this.__removeChild(child);
            traverseSnapshotInstance(child, (v)=>{
                v.__parent = null;
                snapshotInstanceManager.values.delete(v.__id);
            });
        };
        const __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id;
            var _;
            ((_ = (__pendingListUpdates_values = _list_js__WEBPACK_IMPORTED_MODULE_0__.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(this)).onRemoveChild(child);
            r();
            return;
        }
        // TODO: ref: can this be done on the background thread?
        (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_1__.unref)(child, true);
        r();
        if (this.__elements) {
            const [, elementIndex] = __snapshot_def.slot[0];
            __RemoveElement(this.__elements[elementIndex], child.__element_root);
        }
        if (child.__snapshot_def.isListHolder) (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.snapshotDestroyList)(child);
    }
    setAttribute(key, value) {
        const helper = (index, oldValue, newValue)=>{
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isDirectOrDeepEqual)(oldValue, newValue)) ;
            else this.__snapshot_def.update[index](this, index, oldValue);
        };
        if (key === 'values') {
            const oldValues = this.__values;
            this.__values = value;
            if (oldValues) for(let index = 0; index < value.length; index++)helper(index, oldValues[index], value[index]);
            else for(let index = 0; index < value.length; index++)helper(index, undefined, value[index]);
            return;
        }
        const index = typeof key === 'string' ? Number(key.slice(2)) : key;
        var _this___values;
        (_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [];
        helper(index, this.__values[index], this.__values[index] = value);
    }
    toJSON() {
        return {
            id: this.__id,
            type: this.type,
            values: this.__values,
            children: this.__firstChild ? this.childNodes : undefined
        };
    }
    constructor(type, id){
        this.__current_slot_index = 0;
        // onCreate?: () => void;
        // onAttach?: () => void;
        // onDetach?: () => void;
        // onRef?: () => void;
        // onUnref?: () => void;
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        this.__snapshot_def = snapshotManager.values.get(type);
        id || (id = snapshotInstanceManager.nextId -= 1);
        this.__id = id;
        snapshotInstanceManager.values.set(id, this);
    }
} //# sourceMappingURL=snapshot.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateEvent: () => (updateEvent)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function updateEvent(snapshot, expIndex, _oldValue, elementIndex, eventType, eventName, spreadKey) {
    const value = snapshot.__values[expIndex];
    let event;
    if (!value) event = undefined;
    else if (typeof value === 'string') event = value;
    else event = `${snapshot.__id}:${expIndex}:${spreadKey}`;
    // todo: reuseId?
    snapshot.__values[expIndex] = event;
    if (snapshot.__elements) __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
}
 //# sourceMappingURL=event.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateGesture: () => (updateGesture)
});
/* ESM import */var _gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js");

function updateGesture(snapshot, expIndex, _oldValue, elementIndex, workletType) {
    if (!snapshot.__elements) return;
    if (true) console.profile('updateGesture');
    const value = snapshot.__values[expIndex];
    if (workletType === 'main-thread') (0,_gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__.processGesture)(snapshot.__elements[elementIndex], value);
    if (true) console.profileEnd();
} //# sourceMappingURL=gesture.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  platformInfoAttributes: () => (platformInfoAttributes),
  updateListItemPlatformInfo: () => (updateListItemPlatformInfo)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");

const platformInfoVirtualAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier'
]);
const platformInfoAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier',
    'full-span',
    'item-key',
    'sticky-top',
    'sticky-bottom',
    'estimated-height',
    'estimated-height-px',
    'estimated-main-axis-size-px'
]);
function updateListItemPlatformInfo(ctx, index, oldValue, elementIndex) {
    var __pendingListUpdates_values, _list___id;
    const newValue = ctx.__listItemPlatformInfo = ctx.__values[index];
    // @ts-ignore
    const list = ctx.__parent;
    var _;
    if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) ((_ = (__pendingListUpdates_values = _list_js__WEBPACK_IMPORTED_MODULE_0__.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _list_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(list)).onSetAttribute(ctx, newValue, oldValue);
    // In this updater, unlike `updateSpread`, the shape of the value is guaranteed to be an fixed object.
    // No adding / removing keys.
    if (ctx.__elements) {
        const e = ctx.__elements[elementIndex];
        const value = ctx.__values[index];
        for(const k in value){
            if (platformInfoVirtualAttributes.has(k)) continue;
            __SetAttribute(e, k, value[k]);
        }
    }
}
 //# sourceMappingURL=platformInfo.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  globalRefsToRemove: () => (globalRefsToRemove),
  globalRefsToSet: () => (globalRefsToSet),
  markRefToRemove: () => (markRefToRemove),
  takeGlobalRefPatchMap: () => (takeGlobalRefPatchMap),
  transformRef: () => (transformRef),
  unref: () => (unref),
  updateBackgroundRefs: () => (updateBackgroundRefs),
  updateRef: () => (updateRef)
});
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");



let globalRefPatch = {};
const globalRefsToRemove = /* @__PURE__ */ new Map();
const globalRefsToSet = /* @__PURE__ */ new Map();
let nextRefId = 1;
function unref(snapshot, recursive) {
    var _snapshot___ref_set, _snapshot___ref_set1, _snapshot___worklet_ref_set, _snapshot___worklet_ref_set1;
    (_snapshot___ref_set = snapshot.__ref_set) === null || _snapshot___ref_set === void 0 ? void 0 : _snapshot___ref_set.forEach((v)=>{
        globalRefPatch[v] = null;
    });
    (_snapshot___ref_set1 = snapshot.__ref_set) === null || _snapshot___ref_set1 === void 0 ? void 0 : _snapshot___ref_set1.clear();
    (_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.forEach((v)=>{
        if (v) (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_2__.workletUnRef)(v);
    });
    (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.clear();
    if (recursive) snapshot.childNodes.forEach((it)=>{
        unref(it, recursive);
    });
}
function applyRef(ref, value) {
    // TODO: ref: exceptions thrown in user functions should be able to be caught by an Error Boundary
    if (typeof ref == 'function') {
        const hasRefUnmount = typeof ref._unmount == 'function';
        if (hasRefUnmount) ref._unmount();
        if (!hasRefUnmount || value != null) // instance object itself to avoid shape
        // transitioning vnode
        ref._unmount = ref(value);
    } else ref.current = value;
}
function updateBackgroundRefs(commitId) {
    const oldRefMap = globalRefsToRemove.get(commitId);
    if (oldRefMap) {
        globalRefsToRemove.delete(commitId);
        for (const ref of oldRefMap.values())applyRef(ref, null);
    }
    const newRefMap = globalRefsToSet.get(commitId);
    if (newRefMap) {
        globalRefsToSet.delete(commitId);
        for(const sign in newRefMap){
            const ref = _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.backgroundSnapshotInstanceManager.getValueBySign(sign);
            if (ref) {
                // TODO: ref: support __REF_FIRE_IMMEDIATELY__
                const v = newRefMap[sign] && lynx.createSelectorQuery().selectUniqueID(newRefMap[sign]);
                applyRef(ref, v);
            }
        }
    }
}
function updateRef(snapshot, expIndex, oldValue, elementIndex, spreadKey) {
    var _snapshot___ref_set;
    const value = snapshot.__values[expIndex];
    let ref;
    if (!value) ref = undefined;
    else if (typeof value === 'string') ref = value;
    else ref = `${snapshot.__id}:${expIndex}:${spreadKey}`;
    snapshot.__values[expIndex] = ref;
    if (snapshot.__elements && ref) {
        var _snapshot;
        __SetAttribute(snapshot.__elements[elementIndex], 'has-react-ref', true);
        const uid = __GetElementUniqueID(snapshot.__elements[elementIndex]);
        globalRefPatch[ref] = uid;
        var ___ref_set;
        (___ref_set = (_snapshot = snapshot).__ref_set) !== null && ___ref_set !== void 0 ? ___ref_set : _snapshot.__ref_set = new Set();
        snapshot.__ref_set.add(ref);
    }
    if (oldValue !== ref) (_snapshot___ref_set = snapshot.__ref_set) === null || _snapshot___ref_set === void 0 ? void 0 : _snapshot___ref_set.delete(oldValue);
}
function takeGlobalRefPatchMap() {
    const patch = globalRefPatch;
    globalRefPatch = {};
    return patch;
}
function transformRef(ref) {
    if (ref === undefined || ref === null) return ref;
    if (typeof ref === 'function' || typeof ref === 'object' && 'current' in ref) {
        if ('__ref' in ref) return ref;
        return Object.defineProperty(ref, '__ref', {
            value: nextRefId++
        });
    }
    throw new Error(`Elements' "ref" property should be a function, or an object created ` + `by createRef(), but got [${typeof ref}] instead`);
}
function markRefToRemove(sign, ref) {
    if (!ref) return;
    let oldRefs = globalRefsToRemove.get(_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__.nextCommitTaskId);
    if (!oldRefs) {
        oldRefs = new Map();
        globalRefsToRemove.set(_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__.nextCommitTaskId, oldRefs);
    }
    oldRefs.set(sign, ref);
}
 //# sourceMappingURL=ref.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformSpread: () => (transformSpread),
  updateSpread: () => (updateSpread)
});
/* ESM import */var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _workletEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _gesture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.








const eventRegExp = /^(([A-Za-z-]*):)?(bind|catch|capture-bind|capture-catch|global-bind)([A-Za-z]+)$/;
const eventTypeMap = {
    bind: 'bindEvent',
    catch: 'catchEvent',
    'capture-bind': 'capture-bind',
    'capture-catch': 'capture-catch',
    'global-bind': 'global-bindEvent'
};
const noFlattenAttributes = /* @__PURE__ */ new Set([
    'name',
    'clip-radius',
    'overlap',
    'exposure-scene',
    'exposure-id'
]);
function updateSpread(snapshot, index, oldValue, elementIndex) {
    oldValue || (oldValue = {});
    let newValue = snapshot.__values[index]; // compiler guarantee this must be an object;
    // @ts-ignore
    const list = snapshot.__parent;
    if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) {
        const oldPlatformInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.pick)(oldValue, _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes);
        const platformInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.pick)(newValue, _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes);
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isDirectOrDeepEqual)(oldPlatformInfo, platformInfo)) {
            var __pendingListUpdates_values, _list___id;
            var _;
            ((_ = (__pendingListUpdates_values = _list_js__WEBPACK_IMPORTED_MODULE_7__.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _list_js__WEBPACK_IMPORTED_MODULE_7__.ListUpdateInfoRecording(list)).onSetAttribute(snapshot, platformInfo, oldPlatformInfo);
            snapshot.__listItemPlatformInfo = platformInfo;
            // The fakeSnapshot is missing `__parent`, so no `ListUpdateInfoRecording#onSetAttribute` will be called
            const fakeSnapshot = {
                __values: {
                    get [index] () {
                        return platformInfo;
                    }
                },
                __id: snapshot.__id,
                __elements: snapshot.__elements
            };
            (0,_platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.updateListItemPlatformInfo)(fakeSnapshot, index, oldPlatformInfo, elementIndex);
        }
    }
    if (!snapshot.__elements) return;
    if ('__spread' in newValue) {
        // first screen
        newValue = transformSpread(snapshot, index, newValue);
        snapshot.__values[index] = newValue;
    }
    const dataset = {};
    let match = null;
    for(const key in newValue){
        const v = newValue[key];
        if (v !== oldValue[key]) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], v);
            else if (key === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], v);
            else if (key === 'id') __SetID(snapshot.__elements[elementIndex], v);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                var _snapshot;
                var ___ref_set;
                (___ref_set = (_snapshot = snapshot).__ref_set) !== null && ___ref_set !== void 0 ? ___ref_set : _snapshot.__ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __ref_set: snapshot.__ref_set
                };
                (0,_ref_js__WEBPACK_IMPORTED_MODULE_1__.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex, key);
            } else if (key.endsWith(':ref')) {
                var _snapshot1;
                var ___worklet_ref_set;
                (___worklet_ref_set = (_snapshot1 = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot1.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_3__.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__WEBPACK_IMPORTED_MODULE_4__.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = key.match(eventRegExp)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the event value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__WEBPACK_IMPORTED_MODULE_2__.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__WEBPACK_IMPORTED_MODULE_0__.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, v);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) dataset[key.slice(5)] = v;
    }
    let hasOldDataset = false;
    for(const key in oldValue){
        if (!(key in newValue)) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], '');
            else if (key === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], '');
            else if (key === 'id') __SetID(snapshot.__elements[elementIndex], null);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                var _snapshot2;
                var ___ref_set1;
                (___ref_set1 = (_snapshot2 = snapshot).__ref_set) !== null && ___ref_set1 !== void 0 ? ___ref_set1 : _snapshot2.__ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __ref_set: snapshot.__ref_set
                };
                (0,_ref_js__WEBPACK_IMPORTED_MODULE_1__.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex, key);
            } else if (key.endsWith(':ref')) {
                var _snapshot3;
                var ___worklet_ref_set1;
                (___worklet_ref_set1 = (_snapshot3 = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set1 !== void 0 ? ___worklet_ref_set1 : _snapshot3.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_3__.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__WEBPACK_IMPORTED_MODULE_4__.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = key.match(eventRegExp)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__WEBPACK_IMPORTED_MODULE_2__.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__WEBPACK_IMPORTED_MODULE_0__.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, null);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) hasOldDataset = true;
    }
    // TODO: compare dataset before commit it to native?
    if (hasOldDataset || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isEmptyObject)(dataset)) __SetDataset(snapshot.__elements[elementIndex], dataset);
}
function transformSpread(snapshot, index, spread) {
    const result = {};
    let hasNoFlattenAttributes = false;
    for(const key in spread){
        var _transformRef;
        let value1 = spread[key];
        if (key === '__spread') ;
        else if (key === 'class' || key === 'className') {
            value1 !== null && value1 !== void 0 ? value1 : value1 = '';
            result['className'] = value1;
        } else if (key === 'ref') result[key] = (_transformRef = (0,_ref_js__WEBPACK_IMPORTED_MODULE_1__.transformRef)(value1)) === null || _transformRef === void 0 ? void 0 : _transformRef.__ref;
        else if (typeof value1 === 'function') result[key] = `${snapshot.__id}:${index}:${key}`;
        else {
            if (!hasNoFlattenAttributes && noFlattenAttributes.has(key)) hasNoFlattenAttributes = true;
            result[key] = value1;
        }
    }
    if (hasNoFlattenAttributes) result['flatten'] = false;
    return result;
}
 //# sourceMappingURL=spread.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletEvent: () => (updateWorkletEvent)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function updateWorkletEvent(snapshot, expIndex, _oldValue, elementIndex, workletType, eventType, eventName) {
    if (!snapshot.__elements) return;
    const value = snapshot.__values[expIndex] || {};
    value._workletType = workletType;
    if (workletType === 'main-thread') {
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onWorkletCtxUpdate)(value, snapshot.__elements[elementIndex]);
        const event = {
            type: 'worklet',
            value
        };
        __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
    }
}
 //# sourceMappingURL=workletEvent.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletRef: () => (updateWorkletRef),
  workletUnRef: () => (workletUnRef)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function workletUnRef(value) {
    if ('_wvid' in value) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRef)(value, null);
    else if ('_wkltId' in value) {
        if (typeof value._unmount == 'function') value._unmount();
        else (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.runWorkletCtx)(value, [
            null
        ]);
    }
}
function updateWorkletRef(snapshot, expIndex, oldValue, elementIndex, _workletType) {
    var _snapshot___worklet_ref_set;
    if (!snapshot.__elements) return;
    if (oldValue && ((_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.has(oldValue))) {
        var _snapshot___worklet_ref_set1;
        workletUnRef(oldValue);
        (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.delete(oldValue);
    }
    const value = snapshot.__values[expIndex];
    if (value === null || value === undefined) ;
    else if (value._wvid) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRef)(value, snapshot.__elements[elementIndex]);
    else if (value._wkltId) value._unmount = (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.runWorkletCtx)(value, [
        {
            elementRefptr: snapshot.__elements[elementIndex]
        }
    ]);
    else if (value._type === '__LEPUS__' || value._lepusWorkletHash) ;
    else throw new Error('MainThreadRef: main-thread:ref must be of type MainThreadRef or main-thread function.');
    if (value) {
        var _snapshot;
        var ___worklet_ref_set;
        (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
        snapshot.__worklet_ref_set.add(value);
    }
    // Add an arbitrary attribute to avoid this element being layout-only
    __SetAttribute(snapshot.__elements[elementIndex], 'has-react-ref', true);
}
 //# sourceMappingURL=workletRef.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isDirectOrDeepEqual: () => (isDirectOrDeepEqual),
  isEmptyObject: () => (isEmptyObject),
  isSdkVersionGt: () => (isSdkVersionGt),
  pick: () => (pick)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function isDirectOrDeepEqual(a, b) {
    if (a === b) return true;
    if (typeof a == 'object' && a !== null && typeof b == 'object' && b !== null && JSON.stringify(a) === JSON.stringify(b)) return true;
    return false;
}
function isEmptyObject(obj) {
    for(var _ in obj)return false;
    return true;
}
function isSdkVersionGt(major, minor) {
    const lynxSdkVersion = SystemInfo.lynxSdkVersion || '1.0';
    const version = lynxSdkVersion.split('.');
    return Number(version[0]) > major || Number(version[0]) == major && Number(version[1]) > minor;
}
function pick(obj, keys) {
    const result = {};
    for (const key of keys)if (key in obj) result[key] = obj[key];
    return result;
} //# sourceMappingURL=utils.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onPostWorkletCtx: () => (onPostWorkletCtx)
});
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
/* ESM import */var _runOnBackground_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js");


/**
 * @internal
 */ function onPostWorkletCtx(afterValue) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isMtsEnabled)() && afterValue) {
        lynx.reportError(new Error('Main thread script requires Lynx sdk version 2.14'));
        return null;
    }
    if (!afterValue || !(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isRunOnBackgroundEnabled)()) return afterValue;
    (0,_runOnBackground_js__WEBPACK_IMPORTED_MODULE_1__.registerWorkletCtx)(afterValue);
    return afterValue;
} //# sourceMappingURL=ctx.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyTasks: () => (destroyTasks),
  destroyWorklet: () => (destroyWorklet)
});
/* ESM import */var _workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const destroyTasks = [];
function destroyWorklet() {
    (0,_workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__.takeWorkletRefInitValuePatch)();
    for (const task of destroyTasks)task();
    destroyTasks.length = 0;
} //# sourceMappingURL=destroy.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/execMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletExecIdMap: () => (WorkletExecIdMap)
});
/* ESM import */var _indexMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js");

/**
 * `WorkletExecIdMap` ensures the worklet object is not released in js context when the main thread is still holding the
 * worklet object (or any of its jsFnHandles). The worklet object holds the js functions which might be called by `runOnBackground()`.
 * If the worklet object is incorrectly released earlier, the `runOnBackground()` would result in failure.
 *
 * Every time a worklet object is sent to the main thread, an `execId` is distributed and will be sent to element
 * context with the worklet object. This relationship is recorded in this class. When all the references to the
 * worklet object are released in the main thread, a message will be sent back to remove the record here.
 *
 * @internal
 */ class WorkletExecIdMap extends _indexMap_js__WEBPACK_IMPORTED_MODULE_0__.IndexMap {
    add(worklet) {
        const execId = super.add(worklet);
        worklet._execId = execId;
        return execId;
    }
    findJsFnHandle(execId, fnId) {
        const worklet = this.get(execId);
        if (!worklet) return undefined;
        const f = (obj)=>{
            if (obj === null || typeof obj !== 'object') return undefined;
            if ('_jsFnId' in obj && obj._jsFnId === fnId) return obj;
            for(const i in obj){
                const result = f(obj[i]);
                if (result) return result;
            }
            return undefined;
        };
        return f(worklet);
    }
} //# sourceMappingURL=execMap.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onFunctionCall: () => (onFunctionCall)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _indexMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



let resolveMap;
function initReturnValueListener() {
    const context = lynx.getCoreContext();
    resolveMap = new _indexMap_js__WEBPACK_IMPORTED_MODULE_2__.IndexMap();
    context.addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet, onFunctionCallRet);
    _destroy_js__WEBPACK_IMPORTED_MODULE_1__.destroyTasks.push(()=>{
        context.removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet, onFunctionCallRet);
        resolveMap = undefined;
    });
}
/**
 * @internal
 */ function onFunctionCall(resolve) {
    if (!resolveMap) initReturnValueListener();
    return resolveMap.add(resolve);
}
function onFunctionCallRet(event) {
    const data = JSON.parse(event.data);
    const resolve = resolveMap.get(data.resolveId);
    resolveMap.remove(data.resolveId);
    resolve(data.returnValue);
}
 //# sourceMappingURL=functionCall.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearConfigCacheForTesting: () => (clearConfigCacheForTesting),
  isMtsEnabled: () => (isMtsEnabled),
  isRunOnBackgroundEnabled: () => (isRunOnBackgroundEnabled)
});
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let mtsEnabled;
let runOnBackgroundEnabled;
/**
 * @internal
 */ function isMtsEnabled() {
    if (mtsEnabled === undefined) mtsEnabled = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSdkVersionGt)(2, 13);
    return mtsEnabled;
}
/**
 * @internal
 */ function isRunOnBackgroundEnabled() {
    if (runOnBackgroundEnabled === undefined) runOnBackgroundEnabled = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSdkVersionGt)(2, 15);
    return runOnBackgroundEnabled;
}
function clearConfigCacheForTesting() {
    mtsEnabled = undefined;
    runOnBackgroundEnabled = undefined;
}
 //# sourceMappingURL=functionality.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletOnBackground: () => (registerWorkletOnBackground)
});
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const workletHashSet = /* @__PURE__ */ new Set();
/**
 * @internal
 */ function registerWorkletOnBackground(_type, hash, fn) {
    if (workletHashSet.has(hash)) return;
    workletHashSet.add(hash);
    if (_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.__globalSnapshotPatch) _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.DEV_ONLY_RegisterWorklet, hash, fn.toString());
}
 //# sourceMappingURL=hmr.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IndexMap: () => (IndexMap)
});
class IndexMap {
    add(value) {
        const index = ++this.lastIndex;
        this.indexMap.set(index, value);
        return index;
    }
    get(index) {
        return this.indexMap.get(index);
    }
    remove(index) {
        this.indexMap.delete(index);
    }
    constructor(){
        this.lastIndex = 0;
        this.indexMap = new Map();
    }
}
 //# sourceMappingURL=indexMap.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletCtx: () => (registerWorkletCtx),
  runJSFunction: () => (runJSFunction),
  runOnBackground: () => (runOnBackground)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _execMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/execMap.js");
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




let execIdMap;
function init() {
    'background only';
    if (execIdMap) return;
    execIdMap = new _execMap_js__WEBPACK_IMPORTED_MODULE_2__.WorkletExecIdMap();
    lynx.getCoreContext().addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runOnBackground, runJSFunction);
    lynx.getCoreContext().addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundWorkletCtx);
    _destroy_js__WEBPACK_IMPORTED_MODULE_1__.destroyTasks.push(()=>{
        lynx.getCoreContext().removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runOnBackground, runJSFunction);
        lynx.getCoreContext().removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundWorkletCtx);
        execIdMap = undefined;
    });
}
/**
 * @internal
 */ function runJSFunction(event) {
    'background only';
    const data = JSON.parse(event.data);
    const obj = execIdMap.findJsFnHandle(data.obj._execId, data.obj._jsFnId);
    const f = obj === null || obj === void 0 ? void 0 : obj._fn;
    if (!f) throw new Error('runOnBackground: JS function not found: ' + JSON.stringify(data.obj));
    const returnValue = f(...data.params);
    lynx.getCoreContext().dispatchEvent({
        type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet,
        data: JSON.stringify({
            resolveId: data.resolveId,
            returnValue
        })
    });
}
function releaseBackgroundWorkletCtx(event) {
    'background only';
    for (const id of event.data)execIdMap.remove(id);
}
/**
 * @internal
 */ function registerWorkletCtx(ctx) {
    'background only';
    init();
    execIdMap.add(ctx);
}
/**
 * `runOnBackground` allows triggering js functions on the background thread asynchronously.
 * @param f - The js function to be called.
 * @returns A function. Calling which with the arguments to be passed to the js function to trigger it on the background thread. This function returns a promise that resolves to the return value of the js function.
 * @example
 * ```ts
 * import { runOnBackground } from '@lynx-js/react';
 *
 * async function someMainthreadFunction() {
 *   'main thread';
 *   const fn = runOnBackground(() => {
 *     return 'hello';
 *   });
 *   const result = await fn();
}
 * ```
 * @public
 */ function runOnBackground(f) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_3__.isRunOnBackgroundEnabled)()) throw new Error('runOnBackground requires Lynx sdk version 2.16.');
    throw new Error('runOnBackground can only be used on the main thread.');
}
 //# sourceMappingURL=runOnBackground.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runOnMainThread: () => (runOnMainThread)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _ctx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js");
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
/* ESM import */var _functionCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js");




/**
 * `runOnMainThread` allows triggering main thread functions on the main thread asynchronously.
 * @param fn - The main thread functions to be called.
 * @returns A function. Calling which with the arguments to be passed to the main thread function to trigger it on the main thread. This function returns a promise that resolves to the return value of the main thread function.
 * @example
 * ```ts
 * import { runOnMainThread } from '@lynx-js/react';
 *
 * async function someFunction() {
 *   const fn = runOnMainThread(() => {
 *     'main thread';
 *     return 'hello';
 *   });
 *   const result = await fn();
 * }
 * ```
 * @public
 */ function runOnMainThread(fn) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_2__.isMtsEnabled)()) throw new Error('runOnMainThread requires Lynx sdk version 2.14.');
    return async (...params)=>{
        return new Promise((resolve)=>{
            (0,_ctx_js__WEBPACK_IMPORTED_MODULE_1__.onPostWorkletCtx)(fn);
            const resolveId = (0,_functionCall_js__WEBPACK_IMPORTED_MODULE_3__.onFunctionCall)(resolve);
            lynx.getCoreContext().dispatchEvent({
                type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runWorkletCtx,
                data: JSON.stringify({
                    worklet: fn,
                    params,
                    resolveId
                })
            });
        });
    };
} //# sourceMappingURL=runOnMainThread.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformToWorklet: () => (transformToWorklet)
});
let lastId = 0;
/**
 * transform args of `runOnBackground()`.
 *
 * @internal
 */ function transformToWorklet(obj) {
    const id = ++lastId;
    if (typeof obj !== 'function') return {
        _jsFnId: id,
        _error: `Argument of runOnBackground should be a function, but got [${typeof obj}] instead`
    };
    return {
        _jsFnId: id,
        _fn: obj
    };
} //# sourceMappingURL=transformToWorklet.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainThreadRef: () => (MainThreadRef),
  useMainThreadRef: () => (useMainThreadRef)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _workletRefPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");



let lastId = 0;
class WorkletRef {
    get current() {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed in the background thread.');
        /* v8 ignore next */ return undefined;
    }
    set current(_) {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed in the background thread.');
    }
    /**
     * @internal
     */ toJSON() {
        return {
            _wvid: this._id
        };
    }
    /**
     * @internal
     */ constructor(initValue, type){
        this._id = ++lastId;
        this._initValue = initValue;
        this._type = type;
        (0,_workletRefPool_js__WEBPACK_IMPORTED_MODULE_1__.addWorkletRefInitValue)(this._id, initValue);
    }
}
/**
 * A `MainThreadRef` is a ref that can only be accessed on the main thread. It is used to preserve
 * states between main thread function calls.
 * The data saved in `current` property of the `MainThreadRef` can be read and written in
 * multiple main thread functions.
 * @public
 */ class MainThreadRef extends WorkletRef {
    constructor(initValue){
        super(initValue, 'main-thread');
        {
            var _lynx_getNativeApp_createJSObjectDestructionObserver, _lynx_getNativeApp;
            const id = this._id;
            this._lifecycleObserver = (_lynx_getNativeApp_createJSObjectDestructionObserver = (_lynx_getNativeApp = lynx.getNativeApp()).createJSObjectDestructionObserver) === null || _lynx_getNativeApp_createJSObjectDestructionObserver === void 0 ? void 0 : _lynx_getNativeApp_createJSObjectDestructionObserver.call(_lynx_getNativeApp, ()=>{
                var _lynx_getCoreContext, _lynx;
                (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx).dispatchEvent({
                    type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.releaseWorkletRef,
                    data: {
                        id
                    }
                });
            });
        }
    }
}
function useMainThreadRef(initValue) {
    return (0,_hooks_react_js__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return new MainThreadRef(initValue);
    }, []);
} //# sourceMappingURL=workletRef.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addWorkletRefInitValue: () => (addWorkletRefInitValue),
  takeWorkletRefInitValuePatch: () => (takeWorkletRefInitValuePatch)
});
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let initValuePatch = [];
const initValueIdSet = /*#__PURE__*/ new Set();
/**
 * @internal
 */ function addWorkletRefInitValue(id, value) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isMtsEnabled)()) return;
    initValueIdSet.add(id);
    initValuePatch.push([
        id,
        value
    ]);
}
/**
 * @internal
 */ function takeWorkletRefInitValuePatch() {
    const res = initValuePatch;
    initValuePatch = [];
    return res;
} //# sourceMappingURL=workletRefPool.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearDelayedWorklets: () => (clearDelayedWorklets),
  onWorkletCtxUpdate: () => (onWorkletCtxUpdate),
  registerWorklet: () => (registerWorklet),
  runWorkletCtx: () => (runWorkletCtx),
  updateWorkletRef: () => (updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (updateWorkletRefInitValueChanges)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Register a worklet function to the `jsFunctionLifecycleManager`.
 * This function mast be called when a worklet context is updated.
 *
 * @param worklet - The worklet to be updated
 * @param element - The element associated with the worklet
 * @internal
 */ function onWorkletCtxUpdate(worklet, element) {
    var _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager, _globalThis_lynxWorkletImpl, _globalThis_lynxWorkletImpl1;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : (_globalThis_lynxWorkletImpl__jsFunctionLifecycleManager = _globalThis_lynxWorkletImpl._jsFunctionLifecycleManager) === null || _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager === void 0 ? void 0 : _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager.addRef(worklet._execId, worklet);
    (_globalThis_lynxWorkletImpl1 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl1 === void 0 ? void 0 : _globalThis_lynxWorkletImpl1._eventDelayImpl.runDelayedWorklet(worklet, element);
}
/**
 * Executes the worklet ctx.
 * @param worklet - The Worklet ctx to run.
 * @param params - An array as parameters of the worklet run.
 */ function runWorkletCtx(worklet, params) {
    var _globalThis_runWorklet, _globalThis;
    return (_globalThis_runWorklet = (_globalThis = globalThis).runWorklet) === null || _globalThis_runWorklet === void 0 ? void 0 : _globalThis_runWorklet.call(_globalThis, worklet, params);
}
/**
 * Save an element to a `WorkletRef`.
 *
 * @param workletRef - The `WorkletRef` to be updated.
 * @param element - The element.
 * @internal
 */ function updateWorkletRef(workletRef, element) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRef(workletRef, element);
}
/**
 * Update the initial value of the `WorkletRef`.
 *
 * @param patch - An array containing the index and new value of the worklet value.
 */ function updateWorkletRefInitValueChanges(patch) {
    var _globalThis_lynxWorkletImpl;
    if (patch) (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRefInitValueChanges(patch);
}
/**
 * Clear all delayed worklets to run.
 *
 * @internal
 */ function clearDelayedWorklets() {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._eventDelayImpl.clearDelayedWorklets();
}
/**
 * Register a worklet.
 *
 * @internal
 */ function registerWorklet(type, id, worklet) {
    globalThis.registerWorklet(type, id, worklet);
}
 //# sourceMappingURL=bindings.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (WorkletEvents)
});
var WorkletEvents;
(function(WorkletEvents) {
    WorkletEvents["runWorkletCtx"] = "Lynx.Worklet.runWorkletCtx";
    WorkletEvents["runOnBackground"] = "Lynx.Worklet.runOnBackground";
    WorkletEvents["FunctionCallRet"] = "Lynx.Worklet.FunctionCallRet";
    WorkletEvents["releaseBackgroundWorkletCtx"] = "Lynx.Worklet.releaseBackgroundWorkletCtx";
    WorkletEvents["releaseWorkletRef"] = "Lynx.Worklet.releaseWorkletRef";
})(WorkletEvents || (WorkletEvents = {}));
 //# sourceMappingURL=events.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (/* reexport safe */ _events_js__WEBPACK_IMPORTED_MODULE_2__.WorkletEvents),
  clearDelayedWorklets: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.clearDelayedWorklets),
  loadWorkletRuntime: () => (/* reexport safe */ _loadRuntime_js__WEBPACK_IMPORTED_MODULE_0__.loadWorkletRuntime),
  onWorkletCtxUpdate: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.onWorkletCtxUpdate),
  runWorkletCtx: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.runWorkletCtx),
  updateWorkletRef: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.updateWorkletRefInitValueChanges)
});
/* ESM import */var _loadRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js");
/* ESM import */var _bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js");
/* ESM import */var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadWorkletRuntime: () => (loadWorkletRuntime)
});
/* ESM import */var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/// <reference path="../types/elementApi.d.ts" />

/**
 * Loads and initializes the Lepus chunk in the main thread.
 * @param __schema - The dynamic component entry for loading the Lepus chunk.
 * @returns A boolean indicating whether the Lepus chunk was loaded and initialized successfully.
 */ function loadWorkletRuntime(__schema) {
    if (typeof __LoadLepusChunk === 'undefined') return false;
    if (globalThis.lynxWorkletImpl) return true;
    return __LoadLepusChunk('worklet-runtime', {
        // @ts-ignore
        dynamicComponentEntry: __schema,
        chunkType: 0
    });
}
 //# sourceMappingURL=loadRuntime.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
 //# sourceMappingURL=global.js.map


}),
"(react:background)/./node_modules/@lynx-js/rspeedy/client/hmr/WebSocketClient.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (WebSocketClient)
});
/* provided dependency */ var WebSocket = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/index.js")["default"];
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * @license MIT
Copyright JS Foundation and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ class WebSocketClient {
    /**
   * @param {(...args: any[]) => void} f - The callback for onOpen.
   */ onOpen(f) {
        this.client.onopen = f;
    }
    /**
   * @param {(...args: any[]) => void} f - The callback for onClose.
   */ onClose(f) {
        this.client.onclose = f;
    }
    // call f with the message string as the first argument
    /**
   * @param {(...args: any[]) => void} f - The callback for onMessage.
   */ onMessage(f) {
        this.client.onmessage = (e)=>{
            f(e.data);
        };
    }
    /**
   * @param {string} url - The WebSocket URL.
   */ constructor(url){
        // eslint-disable-next-line n/no-unsupported-features/node-builtins
        this.client = new WebSocket(url);
        this.client.onerror = (error)=>{
            // TODO: use the real webpack logger
            console.error('[webpack-dev-server]', error);
        };
    }
}



}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/createSocketURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createSocketURL: () => (createSocketURL)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function format(objURL) {
    var _objURL_protocol;
    let protocol = (_objURL_protocol = objURL.protocol) !== null && _objURL_protocol !== void 0 ? _objURL_protocol : '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    var _objURL_auth;
    let auth = (_objURL_auth = objURL.auth) !== null && _objURL_auth !== void 0 ? _objURL_auth : '';
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3a/i, ':');
        auth += '@';
    }
    let host = '';
    if (objURL.hostname) {
        host = auth + (objURL.hostname.includes(':') ? `[${objURL.hostname}]` : objURL.hostname);
        if (objURL.port) host += `:${objURL.port}`;
    }
    var _objURL_pathname;
    let pathname = (_objURL_pathname = objURL.pathname) !== null && _objURL_pathname !== void 0 ? _objURL_pathname : '';
    if (objURL.slashes) {
        host = `//${host || ''}`;
        if (pathname && !pathname.startsWith('/')) pathname = `/${pathname}`;
    } else if (!host) host = '';
    var _objURL_search;
    let search = (_objURL_search = objURL.search) !== null && _objURL_search !== void 0 ? _objURL_search : '';
    if (search && !search.startsWith('?')) search = `?${search}`;
    var _objURL_hash;
    let hash = (_objURL_hash = objURL.hash) !== null && _objURL_hash !== void 0 ? _objURL_hash : '';
    if (hash && !hash.startsWith('#')) hash = `#${hash}`;
    pathname = pathname.replace(/[#?]/g, /**
     * @param {string} match
     * @returns {string}
     */ (match)=>encodeURIComponent(match));
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
function createSocketURL(parsedURL, compilationId) {
    const { hostname } = parsedURL;
    let socketURLProtocol = parsedURL.protocol;
    socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, 'ws');
    let socketURLAuth = '';
    // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
    // Parse authentication credentials in case we need them
    if (parsedURL.username) {
        socketURLAuth = parsedURL.username;
        // Since HTTP basic authentication does not allow empty username,
        // we only include password if the username is not empty.
        if (parsedURL.password) socketURLAuth = socketURLAuth.concat(':', parsedURL.password);
    }
    // In case the host is a raw IPv6 address, it can be enclosed in
    // the brackets as the brackets are needed in the final URL string.
    // Need to remove those as url.format blindly adds its own set of brackets
    // if the host string contains colons. That would lead to non-working
    // double brackets (e.g. [[::]]) host
    //
    // All of these web socket url params are optionally passed in through resourceQuery,
    // so we need to fall back to the default if they are not provided
    const socketURLHostname = hostname.replace(/^\[(.*)\]$/, '$1');
    const socketURLPort = parsedURL.port;
    // If path is provided it'll be passed in via the resourceQuery as a
    // query param so it has to be parsed out of the querystring in order for the
    // client to open the socket to the correct location.
    let socketURLPathname = '/ws';
    if (parsedURL.pathname) socketURLPathname = parsedURL.pathname;
    return format({
        protocol: socketURLProtocol,
        auth: socketURLAuth,
        hostname: socketURLHostname,
        port: socketURLPort,
        pathname: socketURLPathname,
        slashes: true,
        search: compilationId ? `?compilationId=${compilationId}` : ''
    });
} //# sourceMappingURL=createSocketURL.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/index.js?hostname=192.168.64.1&port=3000&pathname=/rsbuild-hmr&hot=true&live-reload=true&protocol=ws": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
var __resourceQuery = "?hostname=192.168.64.1&port=3000&pathname=/rsbuild-hmr&hot=true&live-reload=true&protocol=ws";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _createSocketURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/createSocketURL.js");
/* ESM import */var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js");
/* ESM import */var _parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/parseURL.js");
/* ESM import */var _reloadApp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/reloadApp.js");
/* ESM import */var _socket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/socket.js");
/* ESM import */var _transport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






const status = {
    isReconnecting: false,
    currentHash: __webpack_require__.h()
};
const enabledFeatures = {
    'Hot Module Replacement': false,
    'Live Reloading': false,
    Progress: false,
    Overlay: false
};
const options = {
    hot: false,
    liveReload: false,
    progress: false
};
const parsedResourceQuery = (0,_parseURL_js__WEBPACK_IMPORTED_MODULE_2__.parseURL)(__resourceQuery);
const compilationId = "lynx_rspeedy-project";
if (parsedResourceQuery['hot'] === 'true') {
    options.hot = true;
    enabledFeatures['Hot Module Replacement'] = true;
}
if (parsedResourceQuery['live-reload'] === 'true') {
    options.liveReload = true;
    enabledFeatures['Live Reloading'] = true;
}
if (parsedResourceQuery['progress'] === 'true') {
    options.progress = true;
    enabledFeatures.Progress = true;
}
(0,_log_js__WEBPACK_IMPORTED_MODULE_1__.logEnabledFeatures)(enabledFeatures);
const onSocketMessage = {
    hot () {
        if (parsedResourceQuery['hot'] === 'false') return;
        options.hot = true;
    },
    liveReload () {
        if (parsedResourceQuery['live-reload'] === 'false') return;
        options.liveReload = true;
    },
    invalid () {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info('App updated. Recompiling...');
    },
    hash (hash) {
        if (status.isReconnecting) {
            // We only need this once when reconnecting
            status.isReconnecting = false;
            // Here, we not only override the currentHash, but also override the
            // previousHash and the hash in webpack runtime.
            // In this way, we reset all the hash-related runtime status to match
            // the cold start.
            status.currentHash = status.previousHash = hash;
            // @ts-expect-error webpack runtime hack
            /* webpack/runtime/getFullHash */ __webpack_require__.h = function() {
                return hash;
            };
            return;
        }
        status.previousHash = status.currentHash;
        status.currentHash = hash;
    },
    reconnect (value) {
        if (parsedResourceQuery['reconnect'] === 'false') return;
        options.reconnect = value;
    },
    progress (value) {
        options.progress = value;
    },
    'still-ok': function stillOk() {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info('Nothing changed.');
    },
    ok () {
        (0,_reloadApp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options, status);
    },
    warnings (_warnings, params) {
        // TODO: format warnings
        if (params === null || params === void 0 ? void 0 : params.preventReloading) return;
        (0,_reloadApp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options, status);
    },
    'static-changed': function staticChanged(file) {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(`${file ? `"${file}"` : 'Content'} from static directory was changed. Reloading...`);
        (0,_reloadApp_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
            liveReload: true,
            hot: false,
            progress: false
        }, status);
    },
    errors (_errors) {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.error('Errors while compiling. Reload prevented.');
    // TODO: format errors
    },
    error (error) {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.error(error.toString());
    },
    close () {
        // When the dev-server disconnected, we set `isReconnecting` to allow
        // override the webpack hash when dev-server restart and connect to client.
        status.isReconnecting = true;
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info('Disconnected!');
    }
};
const socketURL = (0,_createSocketURL_js__WEBPACK_IMPORTED_MODULE_0__.createSocketURL)(parsedResourceQuery, compilationId);
// @ts-expect-error I don't know TypeScript. I can't make it work :(
(0,_socket_js__WEBPACK_IMPORTED_MODULE_4__["default"])(socketURL, onSocketMessage, options.reconnect);
// Export the transport client so that it can be used in the `devServer.client.webSocketTransport`
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_transport_js__WEBPACK_IMPORTED_MODULE_5__.LynxTransportClient); //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  log: () => (log),
  logEnabledFeatures: () => (logEnabledFeatures)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const PREFIX = '[rspeedy-dev-server]';
const log = {
    error: console.error.bind(console, PREFIX),
    warn: console.warn.bind(console, PREFIX),
    info: console.info.bind(console, PREFIX),
    log: console.log.bind(console, PREFIX),
    debug: console.debug.bind(console, PREFIX)
};
const logEnabledFeatures = (features)=>{
    if (!features || Object.keys(features).length === 0) return;
    let logString = 'Server started:';
    // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
    for (const [key, enable] of Object.entries(features))logString += ` ${key} ${enable ? 'enabled' : 'disabled'},`;
    // replace last comma with a period
    logString = logString.slice(0, -1).concat('.');
    log.info(logString);
};
 //# sourceMappingURL=log.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/parseURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseURL: () => (parseURL)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function parseURL(resourceQuery) {
    const options = {};
    if (!(resourceQuery === null || resourceQuery === void 0 ? void 0 : resourceQuery.startsWith('?'))) return options;
    const searchParams = resourceQuery.slice(1).split('&');
    for (const keyValuePair of searchParams){
        const [key, value] = keyValuePair.split('=');
        options[key] = value === undefined ? true : decodeURIComponent(value);
    }
    return options;
} //# sourceMappingURL=parseURL.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/reloadApp.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/emitter.js");
/* ESM import */var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function reloadApp({ hot, liveReload }, status) {
    const { currentHash, previousHash } = status;
    const isInitial = currentHash.includes(previousHash);
    if (isInitial) return;
    if (hot) webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit('webpackHotUpdate', status.currentHash);
    else if (liveReload) {
        const intervalId = +setInterval(()=>{
            // reload immediately
            applyReload(intervalId);
        }, 10);
    }
}
function applyReload(intervalId) {
    clearInterval(intervalId);
    NativeModules.LynxDevtoolSetModule.invokeCdp('Page.reload', JSON.stringify({
        method: 'Page.reload',
        params: {
            ignoreCache: true
        }
    }), (data)=>{
        if (!data) return;
        try {
            const { error } = JSON.parse(data);
            if (error) console.error('[HMR] live-reload failed:', error.message);
        } catch  {
        // explicitly ignore error
        }
    });
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp); //# sourceMappingURL=reloadApp.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/socket.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  client: () => (client),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js");
/* ESM import */var _transport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/rspeedy/client/hmr/WebSocketClient.js")["default"];
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


// this LynxTransportClient is here as a default fallback, in case the client is not injected
const C = typeof __webpack_dev_server_client__ === 'undefined' ? _transport_js__WEBPACK_IMPORTED_MODULE_1__.LynxTransportClient : 'default' in __webpack_dev_server_client__ ? __webpack_dev_server_client__.default : __webpack_dev_server_client__;
let retries = 0;
let maxRetries = 10;
// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
let client = null;
const socket = function initSocket(url, handlers, reconnect) {
    client = new C(url);
    client.onOpen(()=>{
        retries = 0;
        if (reconnect !== undefined) maxRetries = reconnect;
    });
    client.onClose(()=>{
        var _handlers_close;
        if (retries === 0) (_handlers_close = handlers['close']) === null || _handlers_close === void 0 ? void 0 : _handlers_close.call(handlers, void 0, void 0);
        // Try to reconnect.
        client = null;
        // After 10 retries stop trying, to prevent log spam.
        if (retries < maxRetries) {
            // Exponentially increase timeout to reconnect.
            // Respectfully copied from the package `got`.
            const retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
            retries += 1;
            _log_js__WEBPACK_IMPORTED_MODULE_0__.log.info('Trying to reconnect...');
            setTimeout(()=>{
                socket(url, handlers, reconnect);
            }, retryInMs);
        } else _log_js__WEBPACK_IMPORTED_MODULE_0__.log.error('Unable to establish a connection after exceeding the maximum retry attempts.');
    });
    client.onMessage((data)=>{
        var _handlers_message_type;
        const message = JSON.parse(data);
        (_handlers_message_type = handlers[message.type]) === null || _handlers_message_type === void 0 ? void 0 : _handlers_message_type.call(handlers, message.data, message.params);
    });
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket); //# sourceMappingURL=socket.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LynxTransportClient: () => (LynxTransportClient)
});
/**
 * LynxTransportClient is the client transport implementation for webpack-dev-server.
 * It can be used in the
 * {@link https://webpack.js.org/configuration/dev-server/#websockettransport | `devServer.client.webSocketTransport`}
 * configuration of webpack.
 * It should be used with `LynxTransportServer`.
 *
 * @example
 * ```js
 * // webpack.config.js
 * import { createRequire } from 'node:module'
 * import { LynxTransportServer } from '@lynx-js/webpack-dev-transport'
 *
 * const require = createRequire(import.meta.url)
 * export default {
 *   devServer: {
 *     client: {
 *       webSocketTransport: require.resolve('@lynx-js/webpack-dev-transport/client')
 *     },
 *     allowedHosts: 'all',
 *     webSocketServer: LynxTransportServer
 *   }
 * }
 * ```
 *
 * @public
 */ class LynxTransportClient {
    /** {@inheritdoc Client.onOpen} */ onOpen(callback) {
        callback();
    }
    /** {@inheritdoc Client.onClose} */ onClose(_callback) {
    // webpack-dev-server will retry in the `callback`
    // but `onOpen` in Lynx will never fail.
    }
    /** {@inheritdoc Client.onMessage} */ onMessage(callback) {
        lynx.getDevtool().addEventListener(LynxTransportClient.EventType, (event)=>{
            const CDP = JSON.parse(event.data.message);
            if (CDP.method === LynxTransportClient.EventType) callback(CDP.params.data);
        });
    }
} //# sourceMappingURL=transport.js.map
/** @internal */ LynxTransportClient.EventType = 'message';


}),
"(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocket.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WebSocket: () => (WebSocket)
});
/* ESM import */var _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js");
/* ESM import */var _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js");
/* ESM import */var _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js");
/* ESM import */var _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




var _impl = /*#__PURE__*/ new WeakMap();
/**
 * The implementation of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket | WebSocket}
 * for Lynx.
 *
 * @remarks
 *
 * This only works in environment that has `NativeModules.LynxWebSocketModule`.
 *
 * @public
 */ class WebSocket {
    /**
     * The `addEventListener()` method of the `EventTarget` interface sets up a function that will be called whenever the specified event is delivered to the target.
     * @param type - A case-sensitive string representing the event type to listen for.
     * @param callback - The function that receives a notification. See {@link @lynx-js/websocket#EventMap} for details of events.
     */ addEventListener(type, callback) {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).addEventListener(type, callback);
    }
    /**
     * The `removeEventListener()` method of the `EventTarget` interface removes an event listener from the WebSocket.
     * @param type - The type of event to stop listening for.
     * @param callback - The function to remove as an event listener.
     */ removeEventListener(type, callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).removeEventListener(type, callback);
    }
    /**
     * onmessage is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onmessage = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onmessage() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onmessage;
    }
    set onmessage(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onmessage = callback;
    }
    /**
     * onopen is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onopen = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onopen() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onopen;
    }
    set onopen(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onopen = callback;
    }
    /**
     * onclose is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onclose = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onclose() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onclose;
    }
    set onclose(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onclose = callback;
    }
    /**
     * onerror is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onerror = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onerror() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onerror;
    }
    set onerror(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onerror = callback;
    }
    /**
     * The `url` read-only property returns the URL of the {@link WebSocket} passed by the constructor.
     */ get url() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).url;
    }
    /**
     * The `readyState` read-only property returns the current state of the {@link WebSocket} connection.
     */ get readyState() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).readyState;
    }
    /**
     * The WebSocket.protocol read-only property returns the name of the sub-protocol the server selected.
     *
     * @remarks
     * This will be one of the strings specified in the protocols parameter when creating the WebSocket object,
     * or the empty string if no connection is established.
     */ get protocol() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).protocol;
    }
    /**
     * The `send` method send the specified data to be transmitted to the server over the {@link WebSocket} connection.
     *
     * @remarks
     * It will throw an exception if you call `send()` when the connection is in the {@link WebSocket.CONNECTING | CONNECTING } state. If you call `send()` when the connection is in the {@link WebSocket.CLOSING | CLOSING } or {@link WebSocket.CLOSED | CLOSED } states, it will silently discard the data.
     * @param data - The specified data to be transmitted.
     */ send(data) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).send(data);
    }
    /**
     * The `ping` method send an empty message to the server over the {@link WebSocket} connection.
     * @remarks
     * It will throw an exception if you call `ping()` when the connection is in the {@link WebSocket.CONNECTING | CONNECTING } state. If you call `ping()` when the connection is in the {@link WebSocket.CLOSING | CLOSING } or {@link WebSocket.CLOSED | CLOSED } states, it will silently discard the data.
     */ ping() {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).ping();
    }
    /**
     * The `close()` method closes the {@link WebSocket} connection or connection attempt, if any.
     *
     * @remarks
     * If the connection is already {@link WebSocket.CLOSED | CLOSED }, this method does nothing.
     */ close(code, reason) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).close(code, reason);
    }
    /**
     * @param url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
     * @param protocols - Either a single protocol string or an array of protocol strings. If it is omitted, an empty array is used by default, i.e. `[]`.
     * @param options - Extra options for Lynx only.
     */ constructor(url, protocols, options = {}){
        (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_2__._)(this, _impl, {
            writable: true,
            value: void 0
        });
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _impl, new _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.WebSocketImpl(NativeModules.LynxWebSocketModule, url, protocols, options));
    }
} //# sourceMappingURL=WebSocket.js.map
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CONNECTING}
     */ WebSocket.CONNECTING = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.CONNECTING;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.OPEN}
     */ WebSocket.OPEN = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.OPEN;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CLOSING}
     */ WebSocket.CLOSING = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.CLOSING;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CLOSED}
     */ WebSocket.CLOSED = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.CLOSED;


}),
"(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CloseCode: () => (CloseCode),
  GlobalEventEmitter: () => (GlobalEventEmitter),
  ReadyState: () => (ReadyState),
  WebSocketImpl: () => (WebSocketImpl)
});
/* ESM import */var _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js");
/* ESM import */var _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js");
/* ESM import */var _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js");
/* ESM import */var _swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_get.js");
/* ESM import */var _swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_init.js");
/* ESM import */var _swc_helpers_class_static_private_field_update__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_static_private_field_update.js");
/* ESM import */var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/eventemitter3/index.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






var _a;

/**
 * The `ReadyState` describe the state of a `WebSocket` connection.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
 * @public
 */ var ReadyState;
(function(ReadyState) {
    /** Socket has been created. The connection is not yet open. */ ReadyState[ReadyState["CONNECTING"] = 0] = "CONNECTING";
    /** The connection is open and ready to communicate. */ ReadyState[ReadyState["OPEN"] = 1] = "OPEN";
    /** The connection is in the process of closing. */ ReadyState[ReadyState["CLOSING"] = 2] = "CLOSING";
    /** The connection is closed or couldn't be opened. */ ReadyState[ReadyState["CLOSED"] = 3] = "CLOSED";
})(ReadyState || (ReadyState = {}));
const GlobalEventEmitter = lynx.getJSModule('GlobalEventEmitter');
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
 */ var CloseCode;
(function(CloseCode) {
    CloseCode[CloseCode["NORMAL"] = 1000] = "NORMAL";
    CloseCode[CloseCode["ABNORMAL"] = 1006] = "ABNORMAL";
})(CloseCode || (CloseCode = {}));
var _socketID = /*#__PURE__*/ new WeakMap(), _close = /*#__PURE__*/ new WeakSet(), _registerEvents = /*#__PURE__*/ new WeakSet(), _unregisterEvents = /*#__PURE__*/ new WeakSet(), _previousOnMessage = /*#__PURE__*/ new WeakMap(), _onMessage = /*#__PURE__*/ new WeakSet(), _previousOnOpen = /*#__PURE__*/ new WeakMap(), _onOpen = /*#__PURE__*/ new WeakSet(), _previousOnClose = /*#__PURE__*/ new WeakMap(), _onClosed = /*#__PURE__*/ new WeakSet(), _previousOnError = /*#__PURE__*/ new WeakMap(), _onFailed = /*#__PURE__*/ new WeakSet(), _createWebSocketEvent = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ class WebSocketImpl extends eventemitter3__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    addEventListener(type, callback) {
        if (!callback) return;
        this.addListener(type, callback);
        return;
    }
    removeEventListener(type, callback) {
        return this.removeListener(type, callback);
    }
    dispatchEvent(event) {
        return this.emit(event.type, event);
    }
    send(data) {
        if (this.readyState === ReadyState.CONNECTING) throw new Error('INVALID_STATE_ERR');
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        if (typeof data === 'string') {
            var _this_websocketModule;
            (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.send(data, (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
            return;
        }
        // TODO: support binary data
        throw new Error('Unsupported data type');
    }
    ping() {
        var _this_websocketModule;
        if (this.readyState === ReadyState.CONNECTING) throw new Error('INVALID_STATE_ERR');
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.ping((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
    }
    close(code, reason) {
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        this.readyState = ReadyState.CLOSING;
        (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _close, close).call(this, code, reason);
    }
    get onmessage() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnMessage);
    }
    set onmessage(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnMessage)) this.removeEventListener('message', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnMessage));
        this.addEventListener('message', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnMessage, callback);
    }
    get onopen() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnOpen);
    }
    set onopen(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnOpen)) this.removeEventListener('open', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnOpen));
        this.addEventListener('open', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnOpen, callback);
    }
    get onclose() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnClose);
    }
    set onclose(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnClose)) this.removeEventListener('close', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnClose));
        this.addEventListener('close', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnClose, callback);
    }
    get onerror() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnError);
    }
    set onerror(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnError)) this.removeEventListener('error', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnError));
        this.addEventListener('error', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnError, callback);
    }
    constructor(websocketModule, url, protocols, options = {}){
        var _this_websocketModule;
        super(), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _close), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _registerEvents), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _unregisterEvents), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onMessage), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onOpen), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onClosed), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onFailed), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _createWebSocketEvent), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _socketID, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnMessage, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnOpen, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnClose, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnError, {
            writable: true,
            value: void 0
        }), this.readyState = ReadyState.CONNECTING, (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _socketID, (0,_swc_helpers_class_static_private_field_update__WEBPACK_IMPORTED_MODULE_6__._)(_a, WebSocketImpl, _nextWebSocketId).value++), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnMessage, null), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnOpen, null), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnClose, null), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnError, null);
        this.websocketModule = websocketModule;
        this.url = url;
        if (!websocketModule) {
            lynx.reportError(new Error(`WebSocket is not found. Please use Lynx >= 2.16 or consider using a polyfill.`), {
                level: 'warning'
            });
            return;
        }
        if (typeof protocols === 'string') protocols = [
            protocols
        ];
        if (!Array.isArray(protocols)) protocols = [];
        (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _registerEvents, registerEvents).call(this);
        (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.connect(url, protocols, options, (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
    }
}
var _nextWebSocketId = {
    writable: true,
    value: 1
};
function close(code, reason) {
    var _this_websocketModule;
    // See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
    const statusCode = typeof code === 'number' ? code : CloseCode.NORMAL;
    const closeReason = typeof reason === 'string' ? reason : '';
    (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.close(statusCode, closeReason, (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
}
function registerEvents() {
    /* eslint-disable @typescript-eslint/unbound-method */ GlobalEventEmitter.addListener('websocketMessage', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onMessage, onMessage), this);
    GlobalEventEmitter.addListener('websocketOpen', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onOpen, onOpen), this);
    GlobalEventEmitter.addListener('websocketClosed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onClosed, onClosed), this);
    GlobalEventEmitter.addListener('websocketFailed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onFailed, onFailed), this);
/* eslint-enable @typescript-eslint/unbound-method */ }
function unregisterEvents() {
    /* eslint-disable @typescript-eslint/unbound-method */ GlobalEventEmitter.removeListener('websocketMessage', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onMessage, onMessage));
    GlobalEventEmitter.removeListener('websocketOpen', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onOpen, onOpen));
    GlobalEventEmitter.removeListener('websocketClosed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onClosed, onClosed));
    GlobalEventEmitter.removeListener('websocketFailed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onFailed, onFailed));
/* eslint-enable @typescript-eslint/unbound-method */ }
function onMessage(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    const data = event.data;
    event.type;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'message', {
        data
    }));
}
function onOpen(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    this.readyState = ReadyState.OPEN;
    this.protocol = event.protocol;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'open'));
}
function onClosed(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    this.readyState = ReadyState.CLOSED;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'close', {
        code: event.code,
        reason: event.reason
    }));
    (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _unregisterEvents, unregisterEvents).call(this);
}
function onFailed(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    this.readyState = ReadyState.CLOSED;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'error', {
        message: event.message
    }));
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'close', {
        code: CloseCode.ABNORMAL,
        reason: event.message
    }));
    (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _unregisterEvents, unregisterEvents).call(this);
}
function createWebSocketEvent(type, data) {
    return Object.assign({
        type,
        target: this
    }, data);
}
_a = WebSocketImpl; //# sourceMappingURL=WebSocketImpl.js.map


}),
"(react:background)/./node_modules/@lynx-js/websocket/lib/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReadyState: () => (/* reexport safe */ _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_1__.ReadyState),
  WebSocket: () => (/* reexport safe */ _WebSocket_js__WEBPACK_IMPORTED_MODULE_0__.WebSocket),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _WebSocket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocket.js");
/* ESM import */var _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_WebSocket_js__WEBPACK_IMPORTED_MODULE_0__.WebSocket);
 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@rspack/core/hot/dev-server.js": (function (module, __unused_webpack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ /* globals __webpack_hash__ */ if (true) {
    /** @type {undefined|string} */ var lastHash;
    var upToDate = function upToDate() {
        return /** @type {string} */ lastHash.indexOf(__webpack_require__.h()) >= 0;
    };
    var log = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/log.js");
    var check = function check() {
        module.hot.check(true).then(function(updatedModules) {
            if (!updatedModules) {
                log("warning", "[HMR] Cannot find update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
                log("warning", "[HMR] (Probably because of restarting the webpack-dev-server)");
                if (typeof window !== "undefined") window.location.reload();
                return;
            }
            if (!upToDate()) check();
            __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/log-apply-result.js")(updatedModules, updatedModules);
            if (upToDate()) log("info", "[HMR] App is up to date.");
        }).catch(function(err) {
            var status = module.hot.status();
            if ([
                "abort",
                "fail"
            ].indexOf(status) >= 0) {
                log("warning", "[HMR] Cannot apply update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
                log("warning", "[HMR] " + log.formatError(err));
                if (typeof window !== "undefined") window.location.reload();
            } else log("warning", "[HMR] Update failed: " + log.formatError(err));
        });
    };
    var hotEmitter = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/emitter.js");
    hotEmitter.on("webpackHotUpdate", function(currentHash) {
        lastHash = currentHash;
        if (!upToDate() && module.hot.status() === "idle") {
            log("info", "[HMR] Checking for updates on the server...");
            check();
        }
    });
    log("info", "[HMR] Waiting for update signal from WDS...");
} else {}


}),
"(react:background)/./node_modules/@rspack/core/hot/emitter.js": (function (module) {
function EventEmitter() {
    this.events = {};
}
EventEmitter.prototype.on = function(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
};
EventEmitter.prototype.emit = function(eventName) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (this.events[eventName]) this.events[eventName].forEach(function(callback) {
        callback.apply(null, args);
    });
};
module.exports = new EventEmitter();


}),
"(react:background)/./node_modules/@rspack/core/hot/log-apply-result.js": (function (module, __unused_webpack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ /**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */ module.exports = function(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
        return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });
    var log = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/log.js");
    if (unacceptedModules.length > 0) {
        log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
        unacceptedModules.forEach(function(moduleId) {
            log("warning", "[HMR]  - " + moduleId);
        });
    }
    if (!renewedModules || renewedModules.length === 0) log("info", "[HMR] Nothing hot updated.");
    else {
        log("info", "[HMR] Updated modules:");
        renewedModules.forEach(function(moduleId) {
            if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
                var parts = moduleId.split("!");
                log.groupCollapsed("info", "[HMR]  - " + parts.pop());
                log("info", "[HMR]  - " + moduleId);
                log.groupEnd("info");
            } else log("info", "[HMR]  - " + moduleId);
        });
        var numberIds = renewedModules.every(function(moduleId) {
            return typeof moduleId === "number";
        });
        if (numberIds) log("info", '[HMR] Consider using the optimization.moduleIds: "named" for module names.');
    }
};


}),
"(react:background)/./node_modules/@rspack/core/hot/log.js": (function (module) {
/** @typedef {"info" | "warning" | "error"} LogLevel */ /** @type {LogLevel} */ var logLevel = "info";
function dummy() {}
/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */ function shouldLog(level) {
    var shouldLog = logLevel === "info" && level === "info" || [
        "info",
        "warning"
    ].indexOf(logLevel) >= 0 && level === "warning" || [
        "info",
        "warning",
        "error"
    ].indexOf(logLevel) >= 0 && level === "error";
    return shouldLog;
}
/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */ function logGroup(logFn) {
    return function(level, msg) {
        if (shouldLog(level)) logFn(msg);
    };
}
/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */ module.exports = function(level, msg) {
    if (shouldLog(level)) {
        if (level === "info") console.log(msg);
        else if (level === "warning") console.warn(msg);
        else if (level === "error") console.error(msg);
    }
};
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);
/**
 * @param {LogLevel} level log level
 */ module.exports.setLogLevel = function(level) {
    logLevel = level;
};
/**
 * @param {Error} err error
 * @returns {string} formatted error
 */ module.exports.formatError = function(err) {
    var message = err.message;
    var stack = err.stack;
    if (!stack) return message;
    else if (stack.indexOf(message) < 0) return message + "\n" + stack;
    else return stack;
};


}),
"(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_check_private_redeclaration)
});
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_get)
});
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_set)
});
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_update)
});
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) throw new TypeError("attempted to read set only private field");
        if (!("__destrWrapper" in descriptor)) descriptor.__destrWrapper = {
            set value (v){
                descriptor.set.call(receiver, v);
            },
            get value () {
                return descriptor.get.call(receiver);
            }
        };
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        return descriptor;
    }
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_access.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_check_private_static_access)
});
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_check_private_static_field_descriptor)
});
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) throw new TypeError("attempted to " + action + " private static field before its declaration");
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_extract_field_descriptor)
});
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_get)
});
/* ESM import */var _class_apply_descriptor_get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js");
/* ESM import */var _class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js");


function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0,_class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__._)(receiver, privateMap, "get");
    return (0,_class_apply_descriptor_get_js__WEBPACK_IMPORTED_MODULE_1__._)(receiver, descriptor);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_init)
});
/* ESM import */var _check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js");

function _class_private_field_init(obj, privateMap, value) {
    (0,_check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__._)(obj, privateMap);
    privateMap.set(obj, value);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_set)
});
/* ESM import */var _class_apply_descriptor_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js");
/* ESM import */var _class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js");


function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0,_class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__._)(receiver, privateMap, "set");
    (0,_class_apply_descriptor_set_js__WEBPACK_IMPORTED_MODULE_1__._)(receiver, descriptor, value);
    return value;
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_get.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_method_get)
});
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_init.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_method_init)
});
/* ESM import */var _check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js");

function _class_private_method_init(obj, privateSet) {
    (0,_check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__._)(obj, privateSet);
    privateSet.add(obj);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_static_private_field_update.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_static_private_field_update)
});
/* ESM import */var _class_apply_descriptor_update_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js");
/* ESM import */var _class_check_private_static_access_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_access.js");
/* ESM import */var _class_check_private_static_field_descriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js");



function _class_static_private_field_update(receiver, classConstructor, descriptor) {
    (0,_class_check_private_static_access_js__WEBPACK_IMPORTED_MODULE_0__._)(receiver, classConstructor);
    (0,_class_check_private_static_field_descriptor_js__WEBPACK_IMPORTED_MODULE_1__._)(descriptor, "update");
    return (0,_class_apply_descriptor_update_js__WEBPACK_IMPORTED_MODULE_2__._)(receiver, descriptor);
}



}),
"(react:background)/./node_modules/eventemitter3/index.js": (function (module) {

var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if (true) module.exports = EventEmitter;


}),
"(react:background)/./node_modules/eventemitter3/index.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventEmitter: () => (/* reexport default from dynamic */ _index_js__WEBPACK_IMPORTED_MODULE_0___default.a),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/eventemitter3/index.js");
/* ESM import */var _index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_0__);


/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_index_js__WEBPACK_IMPORTED_MODULE_0___default()));


}),
"(react:background)/./node_modules/preact/compat/dist/compat.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (Children),
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
  Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  PureComponent: () => (PureComponent),
  StrictMode: () => (StrictMode),
  Suspense: () => (Suspense),
  SuspenseList: () => (SuspenseList),
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
  cloneElement: () => (cloneElement),
  createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
  createElement: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
  createFactory: () => (createFactory),
  createPortal: () => (createPortal),
  createRef: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
  "default": () => (index),
  findDOMNode: () => (findDOMNode),
  flushSync: () => (flushSync),
  forwardRef: () => (forwardRef),
  hydrate: () => (hydrate),
  isElement: () => (isElement),
  isFragment: () => (isFragment),
  isMemo: () => (isMemo),
  isValidElement: () => (isValidElement),
  lazy: () => (lazy),
  memo: () => (memo),
  render: () => (render),
  startTransition: () => (startTransition),
  unmountComponentAtNode: () => (unmountComponentAtNode),
  unstable_batchedUpdates: () => (unstable_batchedUpdates),
  useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
  useDeferredValue: () => (useDeferredValue),
  useEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
  useInsertionEffect: () => (useInsertionEffect),
  useLayoutEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
  useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
  useSyncExternalStore: () => (useSyncExternalStore),
  useTransition: () => (useTransition),
  version: () => (version)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");




/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Check if two objects have a different shape
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */ function shallowDiffers(a, b) {
    for(var i in a)if (i !== '__source' && !(i in b)) return true;
    for(var _i in b)if (_i !== '__source' && a[_i] !== b[_i]) return true;
    return false;
}
/**
 * Check if two values are the same value
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */ function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */ function PureComponent(p, c) {
    this.props = p;
    this.context = c;
}
PureComponent.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
// Some third-party libraries check if this property is present
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
    return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};
/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 * @param {import('./internal').FunctionComponent} c functional component
 * @param {(prev: object, next: object) => boolean} [comparer] Custom equality function
 * @returns {import('./internal').FunctionComponent}
 */ function memo(c, comparer) {
    function shouldUpdate(nextProps) {
        var ref = this.props.ref;
        var updateRef = ref == nextProps.ref;
        if (!updateRef && ref) ref.call ? ref(null) : ref.current = null;
        if (!comparer) return shallowDiffers(this.props, nextProps);
        return !comparer(this.props, nextProps) || !updateRef;
    }
    function Memoed(props) {
        this.shouldComponentUpdate = shouldUpdate;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(c, props);
    }
    Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
    Memoed.prototype.isReactComponent = true;
    Memoed.__f = true;
    return Memoed;
}
var oldDiffHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function(vnode) {
    if (vnode.type && vnode.type.__f && vnode.ref) {
        vnode.props.ref = vnode.ref;
        vnode.ref = null;
    }
    if (oldDiffHook) oldDiffHook(vnode);
};
var REACT_FORWARD_SYMBOL = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.forward_ref') || 0xf47;
/**
 * Pass ref down to a child. This is mainly used in libraries with HOCs that
 * wrap components. Using `forwardRef` there is an easy way to get a reference
 * of the wrapped component instead of one of the wrapper itself.
 * @param {import('./index').ForwardFn} fn
 * @returns {import('./internal').FunctionComponent}
 */ function forwardRef(fn) {
    function Forwarded(props) {
        var clone = assign({}, props);
        delete clone.ref;
        return fn(clone, props.ref || null);
    }
    // mobx-react checks for this being present
    Forwarded.$$typeof = REACT_FORWARD_SYMBOL;
    // mobx-react heavily relies on implementation details.
    // It expects an object here with a `render` property,
    // and prototype.render will fail. Without this
    // mobx-react throws.
    Forwarded.render = Forwarded;
    Forwarded.prototype.isReactComponent = Forwarded.__f = true;
    Forwarded.displayName = 'ForwardRef(' + (fn.displayName || fn.name) + ')';
    return Forwarded;
}
var mapFn = function mapFn(children, fn) {
    if (children == null) return null;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children).map(fn));
};
// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
    map: mapFn,
    forEach: mapFn,
    count: function count(children) {
        return children ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children).length : 0;
    },
    only: function only(children) {
        var normalized = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children);
        if (normalized.length !== 1) throw 'Children.only';
        return normalized[0];
    },
    toArray: preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray
};
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
var oldCatchError = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function(error, newVNode, oldVNode, errorInfo) {
    if (error.then) {
        /** @type {import('./internal').Component} */ var component;
        var vnode = newVNode;
        for(; vnode = vnode.__;)if ((component = vnode.__c) && component.__c) {
            if (newVNode.__e == null) {
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
            }
            // Don't call oldCatchError if we found a Suspense
            return component.__c(error, newVNode);
        }
    }
    oldCatchError(error, newVNode, oldVNode, errorInfo);
};
var oldUnmount = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__c;
    if (component && component.__R) component.__R();
    // if the component is still hydrating
    // most likely it is because the component is suspended
    // we set the vnode.type as `null` so that it is not a typeof function
    // so the unmount will remove the vnode._dom
    if (component && vnode.__u & MODE_HYDRATE) vnode.type = null;
    if (oldUnmount) oldUnmount(vnode);
};
function detachedClone(vnode, detachedParent, parentDom) {
    if (vnode) {
        if (vnode.__c && vnode.__c.__H) {
            vnode.__c.__H.__.forEach(function(effect) {
                if (typeof effect.__c == 'function') effect.__c();
            });
            vnode.__c.__H = null;
        }
        vnode = assign({}, vnode);
        if (vnode.__c != null) {
            if (vnode.__c.__P === parentDom) vnode.__c.__P = detachedParent;
            vnode.__c = null;
        }
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return detachedClone(child, detachedParent, parentDom);
        });
    }
    return vnode;
}
function removeOriginal(vnode, detachedParent, originalParent) {
    if (vnode && originalParent) {
        vnode.__v = null;
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return removeOriginal(child, detachedParent, originalParent);
        });
        if (vnode.__c) {
            if (vnode.__c.__P === detachedParent) {
                if (vnode.__e) originalParent.appendChild(vnode.__e);
                vnode.__c.__e = true;
                vnode.__c.__P = originalParent;
            }
        }
    }
    return vnode;
}
// having custom inheritance instead of a class here saves a lot of bytes
function Suspense() {
    // we do not call super here to golf some bytes...
    this.__u = 0;
    this._suspenders = null;
    this.__b = null;
}
// Things we do here to save some bytes but are not proper JS inheritance:
// - call `new Component()` as the prototype
// - do not set `Suspense.prototype.constructor` to `Suspense`
Suspense.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
/**
 * @this {import('./internal').SuspenseComponent}
 * @param {Promise} promise The thrown promise
 * @param {import('./internal').VNode<any, any>} suspendingVNode The suspending component
 */ Suspense.prototype.__c = function(promise, suspendingVNode) {
    var suspendingComponent = suspendingVNode.__c;
    /** @type {import('./internal').SuspenseComponent} */ var c = this;
    if (c._suspenders == null) c._suspenders = [];
    c._suspenders.push(suspendingComponent);
    var resolve = suspended(c.__v);
    var resolved = false;
    var onResolved = function onResolved() {
        if (resolved) return;
        resolved = true;
        suspendingComponent.__R = null;
        if (resolve) resolve(onSuspensionComplete);
        else onSuspensionComplete();
    };
    suspendingComponent.__R = onResolved;
    var onSuspensionComplete = function onSuspensionComplete() {
        if (!--c.__u) {
            // If the suspension was during hydration we don't need to restore the
            // suspended children into the _children array
            if (c.state.__a) {
                var suspendedVNode = c.state.__a;
                c.__v.__k[0] = removeOriginal(suspendedVNode, suspendedVNode.__c.__P, suspendedVNode.__c.__O);
            }
            c.setState({
                __a: c.__b = null
            });
            var _suspended;
            while(_suspended = c._suspenders.pop())_suspended.forceUpdate();
        }
    };
    /**
   * We do not set `suspended: true` during hydration because we want the actual markup
   * to remain on screen and hydrate it when the suspense actually gets resolved.
   * While in non-hydration cases the usual fallback -> component flow would occour.
   */ if (!c.__u++ && !(suspendingVNode.__u & MODE_HYDRATE)) c.setState({
        __a: c.__b = c.__v.__k[0]
    });
    promise.then(onResolved, onResolved);
};
Suspense.prototype.componentWillUnmount = function() {
    this._suspenders = [];
};
/**
 * @this {import('./internal').SuspenseComponent}
 * @param {import('./internal').SuspenseComponent["props"]} props
 * @param {import('./internal').SuspenseState} state
 */ Suspense.prototype.render = function(props, state) {
    if (this.__b) {
        // When the Suspense's _vnode was created by a call to createVNode
        // (i.e. due to a setState further up in the tree)
        // it's _children prop is null, in this case we "forget" about the parked vnodes to detach
        if (this.__v.__k) {
            var detachedParent = preact__WEBPACK_IMPORTED_MODULE_0__.options.document.createElement('div');
            var detachedComponent = this.__v.__k[0].__c;
            this.__v.__k[0] = detachedClone(this.__b, detachedParent, detachedComponent.__O = detachedComponent.__P);
        }
        this.__b = null;
    }
    // Wrap fallback tree in a VNode that prevents itself from being marked as aborting mid-hydration:
    /** @type {import('./internal').VNode} */ var fallback = state.__a && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.fallback);
    if (fallback) fallback.__u &= ~MODE_HYDRATE;
    return [
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, state.__a ? null : props.children),
        fallback
    ];
};
/**
 * Checks and calls the parent component's _suspended method, passing in the
 * suspended vnode. This is a way for a parent (e.g. SuspenseList) to get notified
 * that one of its children/descendants suspended.
 *
 * The parent MAY return a callback. The callback will get called when the
 * suspension resolves, notifying the parent of the fact.
 * Moreover, the callback gets function `unsuspend` as a parameter. The resolved
 * child descendant will not actually get unsuspended until `unsuspend` gets called.
 * This is a way for the parent to delay unsuspending.
 *
 * If the parent does not return a callback then the resolved vnode
 * gets unsuspended immediately when it resolves.
 *
 * @param {import('./internal').VNode} vnode
 * @returns {((unsuspend: () => void) => void)?}
 */ function suspended(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__.__c;
    return component && component.__a && component.__a(vnode);
}
function lazy(loader) {
    var prom;
    var component;
    var error;
    function Lazy(props) {
        if (!prom) {
            prom = loader();
            prom.then(function(exports) {
                component = exports.default || exports;
            }, function(e) {
                error = e;
            });
        }
        if (error) throw error;
        if (!component) throw prom;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, props);
    }
    Lazy.displayName = 'Lazy';
    Lazy.__f = true;
    return Lazy;
}
// Indexes to linked list nodes (nodes are stored as arrays to save bytes).
var SUSPENDED_COUNT = 0;
var RESOLVED_COUNT = 1;
var NEXT_NODE = 2;
// Having custom inheritance instead of a class here saves a lot of bytes.
function SuspenseList() {
    this._next = null;
    this._map = null;
}
// Mark one of child's earlier suspensions as resolved.
// Some pending callbacks may become callable due to this
// (e.g. the last suspended descendant gets resolved when
// revealOrder === 'together'). Process those callbacks as well.
var resolve = function resolve(list, child, node) {
    if (++node[RESOLVED_COUNT] === node[SUSPENDED_COUNT]) // matches the number of times it's been resolved. Therefore we
    // mark the child as completely resolved by deleting it from ._map.
    // This is used to figure out when *all* children have been completely
    // resolved when revealOrder is 'together'.
    list._map.delete(child);
    // If revealOrder is falsy then we can do an early exit, as the
    // callbacks won't get queued in the node anyway.
    // If revealOrder is 'together' then also do an early exit
    // if all suspended descendants have not yet been resolved.
    if (!list.props.revealOrder || list.props.revealOrder[0] === 't' && list._map.size) return;
    // Walk the currently suspended children in order, calling their
    // stored callbacks on the way. Stop if we encounter a child that
    // has not been completely resolved yet.
    node = list._next;
    while(node){
        while(node.length > 3)node.pop()();
        if (node[RESOLVED_COUNT] < node[SUSPENDED_COUNT]) break;
        list._next = node = node[NEXT_NODE];
    }
};
// Things we do here to save some bytes but are not proper JS inheritance:
// - call `new Component()` as the prototype
// - do not set `Suspense.prototype.constructor` to `Suspense`
SuspenseList.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
SuspenseList.prototype.__a = function(child) {
    var list = this;
    var delegated = suspended(list.__v);
    var node = list._map.get(child);
    node[SUSPENDED_COUNT]++;
    return function(unsuspend) {
        var wrappedUnsuspend = function wrappedUnsuspend() {
            if (!list.props.revealOrder) // is no need to coordinate a specific order or unsuspends.
            unsuspend();
            else {
                node.push(unsuspend);
                resolve(list, child, node);
            }
        };
        if (delegated) delegated(wrappedUnsuspend);
        else wrappedUnsuspend();
    };
};
SuspenseList.prototype.render = function(props) {
    this._next = null;
    this._map = new Map();
    var children = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(props.children);
    if (props.revealOrder && props.revealOrder[0] === 'b') // then flip the child list around so that the last child will be
    // the first in the linked list.
    children.reverse();
    // Build the linked list. Iterate through the children in reverse order
    // so that `_next` points to the first linked list node to be resolved.
    for(var i = children.length; i--;)// 	[suspended_count, resolved_count, next_node]
    // where suspended_count and resolved_count are numeric counters for
    // keeping track how many times a node has been suspended and resolved.
    //
    // Note that suspended_count starts from 1 instead of 0, so we can block
    // processing callbacks until componentDidMount has been called. In a sense
    // node is suspended at least until componentDidMount gets called!
    //
    // Pending callbacks are added to the end of the node:
    // 	[suspended_count, resolved_count, next_node, callback_0, callback_1, ...]
    this._map.set(children[i], this._next = [
        1,
        0,
        this._next
    ]);
    return props.children;
};
SuspenseList.prototype.componentDidUpdate = SuspenseList.prototype.componentDidMount = function() {
    var _this = this;
    // Iterate through all children after mounting for two reasons:
    // 1. As each node[SUSPENDED_COUNT] starts from 1, this iteration increases
    //    each node[RELEASED_COUNT] by 1, therefore balancing the counters.
    //    The nodes can now be completely consumed from the linked list.
    // 2. Handle nodes that might have gotten resolved between render and
    //    componentDidMount.
    this._map.forEach(function(node, child) {
        resolve(_this, child, node);
    });
};
/**
 * @param {import('../../src/index').RenderableProps<{ context: any }>} props
 */ function ContextProvider(props) {
    this.getChildContext = function() {
        return props.context;
    };
    return props.children;
}
/**
 * Portal component
 * @this {import('./internal').Component}
 * @param {object | null | undefined} props
 *
 * TODO: use createRoot() instead of fake root
 */ function Portal(props) {
    var _this = this;
    var container = props._container;
    _this.componentWillUnmount = function() {
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, _this._temp);
        _this._temp = null;
        _this._container = null;
    };
    // When we change container we should clear our old container and
    // indicate a new mount.
    if (_this._container && _this._container !== container) _this.componentWillUnmount();
    if (!_this._temp) {
        _this._container = container;
        // Create a fake DOM parent node that manages a subset of `container`'s children:
        _this._temp = {
            nodeType: 1,
            parentNode: container,
            childNodes: [],
            contains: function contains() {
                return true;
            },
            appendChild: function appendChild(child) {
                this.childNodes.push(child);
                _this._container.appendChild(child);
            },
            insertBefore: function insertBefore(child, before) {
                this.childNodes.push(child);
                _this._container.appendChild(child);
            },
            removeChild: function removeChild(child) {
                this.childNodes.splice(this.childNodes.indexOf(child) >>> 1, 1);
                _this._container.removeChild(child);
            }
        };
    }
    // Render our wrapping element into temp.
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContextProvider, {
        context: _this.context
    }, props.__v), _this._temp);
}
/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node
 * @param {import('./internal').VNode} vnode The vnode to render
 * @param {import('./internal').PreactElement} container The DOM node to continue rendering in to.
 */ function createPortal(vnode, container) {
    var el = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Portal, {
        __v: vnode,
        _container: container
    });
    el.containerInfo = container;
    return el;
}
var REACT_ELEMENT_TYPE = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;
// Some libraries like `react-virtualized` explicitly check for this.
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent = {};
var oldVNodeHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function(vnode) {
    vnode.$$typeof = REACT_ELEMENT_TYPE;
    if (oldVNodeHook) oldVNodeHook(vnode);
};
// `UNSAFE_*` lifecycle hooks
// Preact only ever invokes the unprefixed methods.
// Here we provide a base "fallback" implementation that calls any defined UNSAFE_ prefixed method.
// - If a component defines its own `componentDidMount()` (including via defineProperty), use that.
// - If a component defines `UNSAFE_componentDidMount()`, `componentDidMount` is the alias getter/setter.
// - If anything assigns to an `UNSAFE_*` property, the assignment is forwarded to the unprefixed property.
// See https://github.com/preactjs/preact/issues/1941
[
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate'
].forEach(function(key) {
    Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype, key, {
        configurable: true,
        get: function get() {
            return this['UNSAFE_' + key];
        },
        set: function set(v) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                value: v
            });
        }
    });
});
/**
 * Proxy render() since React returns a Component reference.
 * @param {import('./internal').VNode} vnode VNode tree to render
 * @param {import('./internal').PreactElement} parent DOM node to render vnode tree into
 * @param {() => void} [callback] Optional callback that will be called after rendering
 * @returns {import('./internal').Component | null} The root component reference or null
 */ function render(vnode, parent, callback) {
    // React destroys any existing DOM nodes, see #1727
    // ...but only on the first render, see #1828
    if (parent.__k == null) parent.textContent = '';
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
function hydrate(vnode, parent, callback) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
var oldEventHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.event;
preact__WEBPACK_IMPORTED_MODULE_0__.options.event = function(e) {
    if (oldEventHook) e = oldEventHook(e);
    e.persist = empty;
    e.isPropagationStopped = isPropagationStopped;
    e.isDefaultPrevented = isDefaultPrevented;
    return e.nativeEvent = e;
};
function empty() {}
function isPropagationStopped() {
    return this.cancelBubble;
}
function isDefaultPrevented() {
    return this.defaultPrevented;
}
// This is a very very private internal function for React it
// is used to sort-of do runtime dependency injection.
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
    ReactCurrentDispatcher: {
        current: {
            useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
            useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
            useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
            useDeferredValue: useDeferredValue,
            useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
            useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
            useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
            useInsertionEffect: useInsertionEffect,
            useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
            useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
            // useMutableSource, // experimental-only and replaced by uSES, likely not worth supporting
            useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
            useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
            useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
            useSyncExternalStore: useSyncExternalStore,
            useTransition: useTransition
        }
    }
};
var version = '18.3.1'; // trick libraries to think we are react
/**
 * Legacy version of createElement.
 * @param {import('./internal').VNode["type"]} type The node name or Component constructor
 */ function createFactory(type) {
    return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null, type);
}
/**
 * Check if the passed element is a valid (p)react node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isValidElement(element) {
    return !!element && element.$$typeof === REACT_ELEMENT_TYPE;
}
/**
 * Check if the passed element is a Fragment node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isFragment(element) {
    return isValidElement(element) && element.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
/**
 * Check if the passed element is a Memo node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isMemo(element) {
    return !!element && !!element.displayName && (typeof element.displayName === 'string' || element.displayName instanceof String) && element.displayName.startsWith('Memo(');
}
/**
 * Wrap `cloneElement` to abort if the passed element is not a valid element and apply
 * all vnode normalizations.
 * @param {import('./internal').VNode} element The vnode to clone
 * @param {object} props Props to add when cloning
 * @param {Array<import('./internal').ComponentChildren>} rest Optional component children
 */ function cloneElement(element) {
    if (!isValidElement(element)) return element;
    return preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null, arguments);
}
/**
 * Remove a component tree from the DOM, including state and event handlers.
 * @param {import('./internal').PreactElement} container
 * @returns {boolean}
 */ function unmountComponentAtNode(container) {
    if (container.__k) {
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, container);
        return true;
    }
    return false;
}
/**
 * Get the matching DOM node for a component
 * @param {import('./internal').Component} component
 * @returns {import('./internal').PreactElement | null}
 */ function findDOMNode(component) {
    return component && (component.base || component.nodeType === 1 && component) || null;
}
/**
 * Deprecated way to control batched rendering inside the reconciler, but we
 * already schedule in batches inside our rendering code
 * @template Arg
 * @param {(arg: Arg) => void} callback function that triggers the updated
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 */ // eslint-disable-next-line camelcase
var unstable_batchedUpdates = function unstable_batchedUpdates(callback, arg) {
    return callback(arg);
};
/**
 * In React, `flushSync` flushes the entire tree and forces a rerender. It's
 * implmented here as a no-op.
 * @template Arg
 * @template Result
 * @param {(arg: Arg) => Result} callback function that runs before the flush
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 * @returns
 */ var flushSync = function flushSync(callback, arg) {
    return callback(arg);
};
/**
 * Strict Mode is not implemented in Preact, so we provide a stand-in for it
 * that just renders its children without imposing any restrictions.
 */ var StrictMode = preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function startTransition(cb) {
    cb();
}
function useDeferredValue(val) {
    return val;
}
function useTransition() {
    return [
        false,
        startTransition
    ];
}
// TODO: in theory this should be done after a VNode is diffed as we want to insert
// styles/... before it attaches
var useInsertionEffect = preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;
// compat to react-is
var isElement = isValidElement;
/**
 * This is taken from https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js#L84
 * on a high level this cuts out the warnings, ... and attempts a smaller implementation
 * @typedef {{ _value: any; _getSnapshot: () => any }} Store
 */ function useSyncExternalStore(subscribe, getSnapshot) {
    var value = getSnapshot();
    /**
   * @typedef {{ _instance: Store }} StoreRef
   * @type {[StoreRef, (store: StoreRef) => void]}
   */ var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
        _instance: {
            __: value,
            _getSnapshot: getSnapshot
        }
    }), _instance = _useState[0]._instance, forceUpdate = _useState[1];
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function() {
        _instance.__ = value;
        _instance._getSnapshot = getSnapshot;
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
    }, [
        subscribe,
        value,
        getSnapshot
    ]);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
        return subscribe(function() {
            if (didSnapshotChange(_instance)) forceUpdate({
                _instance: _instance
            });
        });
    }, [
        subscribe
    ]);
    return value;
}
/** @type {(inst: Store) => boolean} */ function didSnapshotChange(inst) {
    var latestGetSnapshot = inst._getSnapshot;
    var prevValue = inst.__;
    try {
        var nextValue = latestGetSnapshot();
        return !is(prevValue, nextValue);
    } catch (error) {
        return true;
    }
}
// React copies the named exports to the default one.
var index = {
    useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
    useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
    useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
    useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
    useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
    useInsertionEffect: useInsertionEffect,
    useTransition: useTransition,
    useDeferredValue: useDeferredValue,
    useSyncExternalStore: useSyncExternalStore,
    startTransition: startTransition,
    useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
    useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
    useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
    useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
    useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
    useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
    version: version,
    Children: Children,
    render: render,
    hydrate: hydrate,
    unmountComponentAtNode: unmountComponentAtNode,
    createPortal: createPortal,
    createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
    createContext: preact__WEBPACK_IMPORTED_MODULE_0__.createContext,
    createFactory: createFactory,
    cloneElement: cloneElement,
    createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
    Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    isValidElement: isValidElement,
    isElement: isElement,
    isFragment: isFragment,
    isMemo: isMemo,
    findDOMNode: findDOMNode,
    Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
    PureComponent: PureComponent,
    memo: memo,
    forwardRef: forwardRef,
    flushSync: flushSync,
    unstable_batchedUpdates: unstable_batchedUpdates,
    StrictMode: StrictMode,
    Suspense: Suspense,
    SuspenseList: SuspenseList,
    lazy: lazy,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
};
 //# sourceMappingURL=compat.module.js.map


}),
"(react:background)/./node_modules/preact/dist/preact.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Component: () => (BaseComponent),
  Fragment: () => (Fragment),
  cloneElement: () => (cloneElement),
  createContext: () => (createContext),
  createElement: () => (createElement),
  createRef: () => (createRef),
  h: () => (createElement),
  hydrate: () => (hydrate),
  isValidElement: () => (isValidElement),
  options: () => (options),
  render: () => (render),
  toChildArray: () => (toChildArray)
});
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
/** Signifies this VNode suspended on the previous render */ var MODE_SUSPENDED = 128;
/** Indicates that this node needs to be inserted while patching children */ var INSERT_VNODE = 65536;
/** Indicates a VNode has been matched with another VNode in the diff */ var MATCHED = 131072;
/** Reset all mode flags */ var RESET_MODE = ~(MODE_HYDRATE | MODE_SUSPENDED);
var EMPTY_OBJ = /** @type {any} */ {};
var EMPTY_ARR = [];
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var isArray = Array.isArray;
/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    // @ts-expect-error We change the type of `obj` to be `O & P`
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Remove a child node from its parent if attached. This is a workaround for
 * IE11 which doesn't support `Element.prototype.remove()`. Using this function
 * is smaller than including a dedicated polyfill.
 * @param {preact.ContainerNode} node The node to remove
 */ function removeNode(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
}
var slice = EMPTY_ARR.slice;
/**
 * Find the closest error boundary to a thrown error and call it
 * @param {object} error The thrown value
 * @param {VNode} vnode The vnode that threw the error that was caught (except
 * for unmounting when this parameter is the highest parent that was being
 * unmounted)
 * @param {VNode} [oldVNode]
 * @param {ErrorInfo} [errorInfo]
 */ function _catchError(error, vnode, oldVNode, errorInfo) {
    /** @type {Component} */ var component, /** @type {ComponentType} */ ctor, /** @type {boolean} */ handled;
    for(; vnode = vnode.__;){
        if ((component = vnode.__c) && !component.__) try {
            ctor = component.constructor;
            if (ctor && ctor.getDerivedStateFromError != null) {
                component.setState(ctor.getDerivedStateFromError(error));
                handled = component.__d;
            }
            if (component.componentDidCatch != null) {
                component.componentDidCatch(error, errorInfo || {});
                handled = component.__d;
            }
            // This is an error boundary. Mark it as having bailed out, and whether it was mid-hydration.
            if (handled) return component.__E = component;
        } catch (e) {
            error = e;
        }
    }
    throw error;
}
/**
 * The `option` object can potentially contain callback functions
 * that are called during various stages of our renderer. This is the
 * foundation on which all our addons like `preact/debug`, `preact/compat`,
 * and `preact/hooks` are based on. See the `Options` type in `internal.d.ts`
 * for a full list of available option hooks (most editors/IDEs allow you to
 * ctrl+click or cmd+click on mac the type definition below).
 * @type {Options}
 */ var options = {
    __e: _catchError
};
var vnodeId = 0;
/**
 * Create an virtual node (used for JSX)
 * @param {VNode["type"]} type The node name or Component constructor for this
 * virtual node
 * @param {object | null | undefined} [props] The properties of the virtual node
 * @param {Array<import('.').ComponentChildren>} [children] The children of the
 * virtual node
 * @returns {VNode}
 */ function createElement(type, props, children) {
    var normalizedProps = {}, key, ref, i;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    // If a Component VNode, check for and apply defaultProps
    // Note: type may be undefined in development, must never error here.
    if (typeof type == 'function' && type.defaultProps != null) {
        for(i in type.defaultProps)if (normalizedProps[i] === undefined) normalizedProps[i] = type.defaultProps[i];
    }
    return createVNode(type, normalizedProps, key, ref, null);
}
/**
 * Create a VNode (used internally by Preact)
 * @param {VNode["type"]} type The node name or Component
 * Constructor for this virtual node
 * @param {object | string | number | null} props The properties of this virtual node.
 * If this virtual node represents a text node, this is the text of the node (string or number).
 * @param {string | number | null} key The key for this virtual node, used when
 * diffing it against its children
 * @param {VNode["ref"]} ref The ref property that will
 * receive a reference to its created child
 * @returns {VNode}
 */ function createVNode(type, props, key, ref, original) {
    // V8 seems to be better at detecting type shapes if the object is allocated from the same call site
    // Do not inline into createElement and coerceToVNode!
    /** @type {VNode} */ var vnode = {
        type: type,
        props: props,
        key: key,
        ref: ref,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        // _nextDom must be initialized to undefined b/c it will eventually
        // be set to dom.nextSibling which can return `null` and it is important
        // to be able to distinguish between an uninitialized _nextDom and
        // a _nextDom that has been set to `null`
        __d: undefined,
        __c: null,
        constructor: undefined,
        __v: original == null ? ++vnodeId : original,
        __i: -1,
        __u: 0
    };
    // Only invoke the vnode hook if this was *not* a direct copy:
    if (original == null && options.vnode != null) options.vnode(vnode);
    return vnode;
}
function createRef() {
    return {
        current: null
    };
}
function Fragment(props) {
    return props.children;
}
/**
 * Check if a the argument is a valid Preact VNode.
 * @param {*} vnode
 * @returns {vnode is VNode}
 */ var isValidElement = function isValidElement(vnode) {
    return vnode != null && vnode.constructor == undefined;
};
/**
 * Base Component class. Provides `setState()` and `forceUpdate()`, which
 * trigger rendering
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components'
 * getChildContext
 */ function BaseComponent(props, context) {
    this.props = props;
    this.context = context;
}
/**
 * Update component state and schedule a re-render.
 * @this {Component}
 * @param {object | ((s: object, p: object) => object)} update A hash of state
 * properties to update with new values or a function that given the current
 * state and props returns a new partial state
 * @param {() => void} [callback] A function to be called once component state is
 * updated
 */ BaseComponent.prototype.setState = function(update, callback) {
    // only clone state when copying to nextState the first time.
    var s;
    if (this.__s != null && this.__s !== this.state) s = this.__s;
    else s = this.__s = assign({}, this.state);
    if (typeof update == 'function') // preventing us from mutating it, so we need to clone it. See #2716
    update = update(assign({}, s), this.props);
    if (update) assign(s, update);
    // Skip update if updater function returned null
    if (update == null) return;
    if (this.__v) {
        if (callback) this._sb.push(callback);
        enqueueRender(this);
    }
};
/**
 * Immediately perform a synchronous re-render of the component
 * @this {Component}
 * @param {() => void} [callback] A function to be called after component is
 * re-rendered
 */ BaseComponent.prototype.forceUpdate = function(callback) {
    if (this.__v) {
        // Set render mode so that we can differentiate where the render request
        // is coming from. We need this because forceUpdate should never call
        // shouldComponentUpdate
        this.__e = true;
        if (callback) this.__h.push(callback);
        enqueueRender(this);
    }
};
/**
 * Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
 * Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
 * @param {object} props Props (eg: JSX attributes) received from parent
 * element/component
 * @param {object} state The component's current state
 * @param {object} context Context object, as returned by the nearest
 * ancestor's `getChildContext()`
 * @returns {ComponentChildren | void}
 */ BaseComponent.prototype.render = Fragment;
/**
 * @param {VNode} vnode
 * @param {number | null} [childIndex]
 */ function getDomSibling(vnode, childIndex) {
    if (childIndex == null) return vnode.__ ? getDomSibling(vnode.__, vnode.__i + 1) : null;
    var sibling;
    for(; childIndex < vnode.__k.length; childIndex++){
        sibling = vnode.__k[childIndex];
        if (sibling != null && sibling.__e != null) // we can rely on _dom to tell us if this subtree contains a
        // rendered DOM node, and what the first rendered DOM node is
        return sibling.__e;
    }
    // If we get here, we have not found a DOM node in this vnode's children.
    // We must resume from this vnode's sibling (in it's parent _children array)
    // Only climb up and search the parent if we aren't searching through a DOM
    // VNode (meaning we reached the DOM parent of the original vnode that began
    // the search)
    return typeof vnode.type == 'function' ? getDomSibling(vnode) : null;
}
/**
 * Trigger in-place re-rendering of a component.
 * @param {Component} component The component to rerender
 */ function renderComponent(component) {
    var oldVNode = component.__v, oldDom = oldVNode.__e, commitQueue = [], refQueue = [];
    if (component.__P) {
        var newVNode = assign({}, oldVNode);
        newVNode.__v = oldVNode.__v + 1;
        if (options.vnode) options.vnode(newVNode);
        diff(component.__P, newVNode, oldVNode, component.__n, component.__P.namespaceURI, oldVNode.__u & MODE_HYDRATE ? [
            oldDom
        ] : null, commitQueue, oldDom == null ? getDomSibling(oldVNode) : oldDom, !!(oldVNode.__u & MODE_HYDRATE), refQueue);
        newVNode.__v = oldVNode.__v;
        newVNode.__.__k[newVNode.__i] = newVNode;
        commitRoot(commitQueue, newVNode, refQueue);
        if (newVNode.__e != oldDom) updateParentDomPointers(newVNode);
    }
}
/**
 * @param {VNode} vnode
 */ function updateParentDomPointers(vnode) {
    if ((vnode = vnode.__) != null && vnode.__c != null) {
        vnode.__e = vnode.__c.base = null;
        for(var i = 0; i < vnode.__k.length; i++){
            var child = vnode.__k[i];
            if (child != null && child.__e != null) {
                vnode.__e = vnode.__c.base = child.__e;
                break;
            }
        }
        return updateParentDomPointers(vnode);
    }
}
/**
 * The render queue
 * @type {Array<Component>}
 */ var rerenderQueue = [];
/*
 * The value of `Component.debounce` must asynchronously invoke the passed in callback. It is
 * important that contributors to Preact can consistently reason about what calls to `setState`, etc.
 * do, and when their effects will be applied. See the links below for some further reading on designing
 * asynchronous APIs.
 * * [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony)
 * * [Callbacks synchronous and asynchronous](https://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/)
 */ var prevDebounce;
var defer = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
/**
 * Enqueue a rerender of a component
 * @param {Component} c The component to rerender
 */ function enqueueRender(c) {
    if (!c.__d && (c.__d = true) && rerenderQueue.push(c) && !process.__r++ || prevDebounce !== options.debounceRendering) {
        prevDebounce = options.debounceRendering;
        (prevDebounce || defer)(process);
    }
}
/**
 * @param {Component} a
 * @param {Component} b
 */ var depthSort = function depthSort(a, b) {
    return a.__v.__b - b.__v.__b;
};
/** Flush the render queue by rerendering all queued components */ function process() {
    var c;
    rerenderQueue.sort(depthSort);
    // Don't update `renderCount` yet. Keep its value non-zero to prevent unnecessary
    // process() calls from getting scheduled while `queue` is still being consumed.
    while(c = rerenderQueue.shift())if (c.__d) {
        var renderQueueLength = rerenderQueue.length;
        renderComponent(c);
        if (rerenderQueue.length > renderQueueLength) // keep the order from top to bottom with those new items so we can handle them in a
        // single pass
        rerenderQueue.sort(depthSort);
    }
    process.__r = 0;
}
process.__r = 0;
/**
 * Diff the children of a virtual node
 * @param {PreactElement} parentDom The DOM element whose children are being
 * diffed
 * @param {ComponentChildren[]} renderResult
 * @param {VNode} newParentVNode The new virtual node whose children should be
 * diff'ed against oldParentVNode
 * @param {VNode} oldParentVNode The old virtual node whose children should be
 * diff'ed against newParentVNode
 * @param {object} globalContext The current context object - modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    var i, /** @type {VNode} */ oldVNode, /** @type {VNode} */ childVNode, /** @type {PreactElement} */ newDom, /** @type {PreactElement} */ firstChildDom;
    // This is a compression of oldParentVNode!=null && oldParentVNode != EMPTY_OBJ && oldParentVNode._children || EMPTY_ARR
    // as EMPTY_OBJ._children should be `undefined`.
    /** @type {VNode[]} */ var oldChildren = oldParentVNode && oldParentVNode.__k || EMPTY_ARR;
    var newChildrenLength = renderResult.length;
    newParentVNode.__d = oldDom;
    constructNewChildrenArray(newParentVNode, renderResult, oldChildren);
    oldDom = newParentVNode.__d;
    for(i = 0; i < newChildrenLength; i++){
        childVNode = newParentVNode.__k[i];
        if (childVNode == null) continue;
        // At this point, constructNewChildrenArray has assigned _index to be the
        // matchingIndex for this VNode's oldVNode (or -1 if there is no oldVNode).
        if (childVNode.__i === -1) oldVNode = EMPTY_OBJ;
        else oldVNode = oldChildren[childVNode.__i] || EMPTY_OBJ;
        // Update childVNode._index to its final index
        childVNode.__i = i;
        // Morph the old element into the new one, but don't append it to the dom yet
        diff(parentDom, childVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        // Adjust DOM nodes
        newDom = childVNode.__e;
        if (childVNode.ref && oldVNode.ref != childVNode.ref) {
            if (oldVNode.ref) applyRef(oldVNode.ref, null, childVNode);
            refQueue.push(childVNode.ref, childVNode.__c || newDom, childVNode);
        }
        if (firstChildDom == null && newDom != null) firstChildDom = newDom;
        if (childVNode.__u & INSERT_VNODE || oldVNode.__k === childVNode.__k) oldDom = insert(childVNode, oldDom, parentDom);
        else if (typeof childVNode.type == 'function' && childVNode.__d !== undefined) // contain multiple DOM nodes as the same level, continue the diff from
        // the sibling of last DOM child of this child VNode
        oldDom = childVNode.__d;
        else if (newDom) oldDom = newDom.nextSibling;
        // Eagerly cleanup _nextDom. We don't need to persist the value because it
        // is only used by `diffChildren` to determine where to resume the diff
        // after diffing Components and Fragments. Once we store it the nextDOM
        // local var, we can clean up the property. Also prevents us hanging on to
        // DOM nodes that may have been unmounted.
        childVNode.__d = undefined;
        // Unset diffing flags
        childVNode.__u &= ~(INSERT_VNODE | MATCHED);
    }
    // TODO: With new child diffing algo, consider alt ways to diff Fragments.
    // Such as dropping oldDom and moving fragments in place
    //
    // Because the newParentVNode is Fragment-like, we need to set it's
    // _nextDom property to the nextSibling of its last child DOM node.
    //
    // `oldDom` contains the correct value here because if the last child
    // is a Fragment-like, then oldDom has already been set to that child's _nextDom.
    // If the last child is a DOM VNode, then oldDom will be set to that DOM
    // node's nextSibling.
    newParentVNode.__d = oldDom;
    newParentVNode.__e = firstChildDom;
}
/**
 * @param {VNode} newParentVNode
 * @param {ComponentChildren[]} renderResult
 * @param {VNode[]} oldChildren
 */ function constructNewChildrenArray(newParentVNode, renderResult, oldChildren) {
    /** @type {number} */ var i;
    /** @type {VNode} */ var childVNode;
    /** @type {VNode} */ var oldVNode;
    var newChildrenLength = renderResult.length;
    var oldChildrenLength = oldChildren.length, remainingOldChildren = oldChildrenLength;
    var skew = 0;
    newParentVNode.__k = [];
    for(i = 0; i < newChildrenLength; i++){
        // @ts-expect-error We are reusing the childVNode variable to hold both the
        // pre and post normalized childVNode
        childVNode = renderResult[i];
        if (childVNode == null || typeof childVNode == 'boolean' || typeof childVNode == 'function') {
            childVNode = newParentVNode.__k[i] = null;
            continue;
        } else if (typeof childVNode == 'string' || typeof childVNode == 'number' || // eslint-disable-next-line valid-typeof
        typeof childVNode == 'bigint' || childVNode.constructor == String) childVNode = newParentVNode.__k[i] = createVNode(null, childVNode, null, null, null);
        else if (isArray(childVNode)) childVNode = newParentVNode.__k[i] = createVNode(Fragment, {
            children: childVNode
        }, null, null, null);
        else if (childVNode.constructor === undefined && childVNode.__b > 0) // scenario:
        //   const reuse = <div />
        //   <div>{reuse}<span />{reuse}</div>
        childVNode = newParentVNode.__k[i] = createVNode(childVNode.type, childVNode.props, childVNode.key, childVNode.ref ? childVNode.ref : null, childVNode.__v);
        else childVNode = newParentVNode.__k[i] = childVNode;
        var skewedIndex = i + skew;
        childVNode.__ = newParentVNode;
        childVNode.__b = newParentVNode.__b + 1;
        // Temporarily store the matchingIndex on the _index property so we can pull
        // out the oldVNode in diffChildren. We'll override this to the VNode's
        // final index after using this property to get the oldVNode
        var matchingIndex = childVNode.__i = findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren);
        oldVNode = null;
        if (matchingIndex !== -1) {
            oldVNode = oldChildren[matchingIndex];
            remainingOldChildren--;
            if (oldVNode) oldVNode.__u |= MATCHED;
        }
        // Here, we define isMounting for the purposes of the skew diffing
        // algorithm. Nodes that are unsuspending are considered mounting and we detect
        // this by checking if oldVNode._original === null
        var isMounting = oldVNode == null || oldVNode.__v === null;
        if (isMounting) {
            if (matchingIndex == -1) skew--;
            // If we are mounting a DOM VNode, mark it for insertion
            if (typeof childVNode.type != 'function') childVNode.__u |= INSERT_VNODE;
        } else if (matchingIndex !== skewedIndex) {
            // When we move elements around i.e. [0, 1, 2] --> [1, 0, 2]
            // --> we diff 1, we find it at position 1 while our skewed index is 0 and our skew is 0
            //     we set the skew to 1 as we found an offset.
            // --> we diff 0, we find it at position 0 while our skewed index is at 2 and our skew is 1
            //     this makes us increase the skew again.
            // --> we diff 2, we find it at position 2 while our skewed index is at 4 and our skew is 2
            //
            // this becomes an optimization question where currently we see a 1 element offset as an insertion
            // or deletion i.e. we optimize for [0, 1, 2] --> [9, 0, 1, 2]
            // while a more than 1 offset we see as a swap.
            // We could probably build heuristics for having an optimized course of action here as well, but
            // might go at the cost of some bytes.
            //
            // If we wanted to optimize for i.e. only swaps we'd just do the last two code-branches and have
            // only the first item be a re-scouting and all the others fall in their skewed counter-part.
            // We could also further optimize for swaps
            if (matchingIndex == skewedIndex - 1) skew--;
            else if (matchingIndex == skewedIndex + 1) skew++;
            else {
                if (matchingIndex > skewedIndex) skew--;
                else skew++;
                // Move this VNode's DOM if the original index (matchingIndex) doesn't
                // match the new skew index (i + new skew)
                // In the former two branches we know that it matches after skewing
                childVNode.__u |= INSERT_VNODE;
            }
        }
    }
    // Remove remaining oldChildren if there are any. Loop forwards so that as we
    // unmount DOM from the beginning of the oldChildren, we can adjust oldDom to
    // point to the next child, which needs to be the first DOM node that won't be
    // unmounted.
    if (remainingOldChildren) for(i = 0; i < oldChildrenLength; i++){
        oldVNode = oldChildren[i];
        if (oldVNode != null && (oldVNode.__u & MATCHED) === 0) {
            if (oldVNode.__e == newParentVNode.__d) newParentVNode.__d = getDomSibling(oldVNode);
            unmount(oldVNode, oldVNode);
        }
    }
}
/**
 * @param {VNode} parentVNode
 * @param {PreactElement} oldDom
 * @param {PreactElement} parentDom
 * @returns {PreactElement}
 */ function insert(parentVNode, oldDom, parentDom) {
    // Note: VNodes in nested suspended trees may be missing _children.
    if (typeof parentVNode.type == 'function') {
        var children = parentVNode.__k;
        for(var i = 0; children && i < children.length; i++)if (children[i]) {
            // If we enter this code path on sCU bailout, where we copy
            // oldVNode._children to newVNode._children, we need to update the old
            // children's _parent pointer to point to the newVNode (parentVNode
            // here).
            children[i].__ = parentVNode;
            oldDom = insert(children[i], oldDom, parentDom);
        }
        return oldDom;
    } else if (parentVNode.__e != oldDom) {
        if (oldDom && parentVNode.type && !parentDom.contains(oldDom)) oldDom = getDomSibling(parentVNode);
        parentDom.insertBefore(parentVNode.__e, oldDom || null);
        oldDom = parentVNode.__e;
    }
    do oldDom = oldDom && oldDom.nextSibling;
    while (oldDom != null && oldDom.nodeType === 8)
    return oldDom;
}
/**
 * Flatten and loop through the children of a virtual node
 * @param {ComponentChildren} children The unflattened children of a virtual
 * node
 * @returns {VNode[]}
 */ function toChildArray(children, out) {
    out = out || [];
    if (children == null || typeof children == 'boolean') ;
    else if (isArray(children)) children.some(function(child) {
        toChildArray(child, out);
    });
    else out.push(children);
    return out;
}
/**
 * @param {VNode} childVNode
 * @param {VNode[]} oldChildren
 * @param {number} skewedIndex
 * @param {number} remainingOldChildren
 * @returns {number}
 */ function findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren) {
    var key = childVNode.key;
    var type = childVNode.type;
    var x = skewedIndex - 1;
    var y = skewedIndex + 1;
    var oldVNode = oldChildren[skewedIndex];
    // We only need to perform a search if there are more children
    // (remainingOldChildren) to search. However, if the oldVNode we just looked
    // at skewedIndex was not already used in this diff, then there must be at
    // least 1 other (so greater than 1) remainingOldChildren to attempt to match
    // against. So the following condition checks that ensuring
    // remainingOldChildren > 1 if the oldVNode is not already used/matched. Else
    // if the oldVNode was null or matched, then there could needs to be at least
    // 1 (aka `remainingOldChildren > 0`) children to find and compare against.
    var shouldSearch = remainingOldChildren > (oldVNode != null && (oldVNode.__u & MATCHED) === 0 ? 1 : 0);
    if (oldVNode === null || oldVNode && key == oldVNode.key && type === oldVNode.type && (oldVNode.__u & MATCHED) === 0) return skewedIndex;
    else if (shouldSearch) while(x >= 0 || y < oldChildren.length){
        if (x >= 0) {
            oldVNode = oldChildren[x];
            if (oldVNode && (oldVNode.__u & MATCHED) === 0 && key == oldVNode.key && type === oldVNode.type) return x;
            x--;
        }
        if (y < oldChildren.length) {
            oldVNode = oldChildren[y];
            if (oldVNode && (oldVNode.__u & MATCHED) === 0 && key == oldVNode.key && type === oldVNode.type) return y;
            y++;
        }
    }
    return -1;
}
function setStyle(style, key, value) {
    if (key[0] === '-') style.setProperty(key, value == null ? '' : value);
    else if (value == null) style[key] = '';
    else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) style[key] = value;
    else style[key] = value + 'px';
}
// A logical clock to solve issues like https://github.com/preactjs/preact/issues/3927.
// When the DOM performs an event it leaves micro-ticks in between bubbling up which means that
// an event can trigger on a newly reated DOM-node while the event bubbles up.
//
// Originally inspired by Vue
// (https://github.com/vuejs/core/blob/caeb8a68811a1b0f79/packages/runtime-dom/src/modules/events.ts#L90-L101),
// but modified to use a logical clock instead of Date.now() in case event handlers get attached
// and events get dispatched during the same millisecond.
//
// The clock is incremented after each new event dispatch. This allows 1 000 000 new events
// per second for over 280 years before the value reaches Number.MAX_SAFE_INTEGER (2**53 - 1).
var eventClock = 0;
/**
 * Set a property value on a DOM node
 * @param {PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {string} namespace Whether or not this DOM node is an SVG node or not
 */ function setProperty(dom, name, value, oldValue, namespace) {
    var useCapture;
    o: if (name === 'style') {
        if (typeof value == 'string') dom.style.cssText = value;
        else {
            if (typeof oldValue == 'string') dom.style.cssText = oldValue = '';
            if (oldValue) {
                for(name in oldValue)if (!(value && name in value)) setStyle(dom.style, name, '');
            }
            if (value) {
                for(name in value)if (!oldValue || value[name] !== oldValue[name]) setStyle(dom.style, name, value[name]);
            }
        }
    } else if (name[0] === 'o' && name[1] === 'n') {
        useCapture = name !== (name = name.replace(/(PointerCapture)$|Capture$/i, '$1'));
        // Infer correct casing for DOM built-in events:
        if (name.toLowerCase() in dom || name === 'onFocusOut' || name === 'onFocusIn') name = name.toLowerCase().slice(2);
        else name = name.slice(2);
        if (!dom.l) dom.l = {};
        dom.l[name + useCapture] = value;
        if (value) {
            if (!oldValue) {
                value._attached = eventClock;
                dom.addEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
            } else value._attached = oldValue._attached;
        } else dom.removeEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
    } else {
        if (namespace == 'http://www.w3.org/2000/svg') // - xlink:href / xlinkHref --> href (xlink:href was removed from SVG and isn't needed)
        // - className --> class
        name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        else if (name != 'width' && name != 'height' && name != 'href' && name != 'list' && name != 'form' && // Default value in browsers is `-1` and an empty string is
        // cast to `0` instead
        name != 'tabIndex' && name != 'download' && name != 'rowSpan' && name != 'colSpan' && name != 'role' && name != 'popover' && name in dom) try {
            dom[name] = value == null ? '' : value;
            break o;
        } catch (e) {}
        // aria- and data- attributes have no boolean representation.
        // A `false` value is different from the attribute not being
        // present, so we can't remove it. For non-boolean aria
        // attributes we could treat false as a removal, but the
        // amount of exceptions would cost too many bytes. On top of
        // that other frameworks generally stringify `false`.
        if (typeof value == 'function') ;
        else if (value != null && (value !== false || name[4] === '-')) dom.setAttribute(name, name == 'popover' && value == true ? '' : value);
        else dom.removeAttribute(name);
    }
}
/**
 * Create an event proxy function.
 * @param {boolean} useCapture Is the event handler for the capture phase.
 * @private
 */ function createEventProxy(useCapture) {
    /**
   * Proxy an event to hooked event handlers
   * @param {PreactEvent} e The event object from the browser
   * @private
   */ return function(e) {
        if (this.l) {
            var eventHandler = this.l[e.type + useCapture];
            if (e._dispatched == null) e._dispatched = eventClock++;
            else if (e._dispatched < eventHandler._attached) return;
            return eventHandler(options.event ? options.event(e) : e);
        }
    };
}
var eventProxy = createEventProxy(false);
var eventProxyCapture = createEventProxy(true);
/**
 * Diff two virtual nodes and apply proper changes to the DOM
 * @param {PreactElement} parentDom The parent of the DOM element
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object. Modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diff(parentDom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    /** @type {any} */ var tmp, newType = newVNode.type;
    // When passing through createElement it assigns the object
    // constructor as undefined. This to prevent JSON-injection.
    if (newVNode.constructor !== undefined) return null;
    // If the previous diff bailed out, resume creating/hydrating.
    if (oldVNode.__u & MODE_SUSPENDED) {
        isHydrating = !!(oldVNode.__u & MODE_HYDRATE);
        oldDom = newVNode.__e = oldVNode.__e;
        excessDomChildren = [
            oldDom
        ];
    }
    if (tmp = options.__b) tmp(newVNode);
    outer: if (typeof newType == 'function') try {
        var c, isNew, oldProps, oldState, snapshot, clearProcessingException;
        var newProps = newVNode.props;
        var isClassComponent = 'prototype' in newType && newType.prototype.render;
        // Necessary for createContext api. Setting this property will pass
        // the context value as `this.context` just for this component.
        tmp = newType.contextType;
        var provider = tmp && globalContext[tmp.__c];
        var componentContext = tmp ? provider ? provider.props.value : tmp.__ : globalContext;
        // Get component and set it to `c`
        if (oldVNode.__c) {
            c = newVNode.__c = oldVNode.__c;
            clearProcessingException = c.__ = c.__E;
        } else {
            // Instantiate the new component
            if (isClassComponent) newVNode.__c = c = new newType(newProps, componentContext); // eslint-disable-line new-cap
            else {
                // @ts-expect-error Trust me, Component implements the interface we want
                newVNode.__c = c = new BaseComponent(newProps, componentContext);
                c.constructor = newType;
                c.render = doRender;
            }
            if (provider) provider.sub(c);
            c.props = newProps;
            if (!c.state) c.state = {};
            c.context = componentContext;
            c.__n = globalContext;
            isNew = c.__d = true;
            c.__h = [];
            c._sb = [];
        }
        // Invoke getDerivedStateFromProps
        if (isClassComponent && c.__s == null) c.__s = c.state;
        if (isClassComponent && newType.getDerivedStateFromProps != null) {
            if (c.__s == c.state) c.__s = assign({}, c.__s);
            assign(c.__s, newType.getDerivedStateFromProps(newProps, c.__s));
        }
        oldProps = c.props;
        oldState = c.state;
        c.__v = newVNode;
        // Invoke pre-render lifecycle methods
        if (isNew) {
            if (isClassComponent && newType.getDerivedStateFromProps == null && c.componentWillMount != null) c.componentWillMount();
            if (isClassComponent && c.componentDidMount != null) c.__h.push(c.componentDidMount);
        } else {
            if (isClassComponent && newType.getDerivedStateFromProps == null && newProps !== oldProps && c.componentWillReceiveProps != null) c.componentWillReceiveProps(newProps, componentContext);
            if (!c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(newProps, c.__s, componentContext) === false || newVNode.__v === oldVNode.__v)) {
                // More info about this here: https://gist.github.com/JoviDeCroock/bec5f2ce93544d2e6070ef8e0036e4e8
                if (newVNode.__v !== oldVNode.__v) {
                    // When we are dealing with a bail because of sCU we have to update
                    // the props, state and dirty-state.
                    // when we are dealing with strict-equality we don't as the child could still
                    // be dirtied see #3883
                    c.props = newProps;
                    c.state = c.__s;
                    c.__d = false;
                }
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
                newVNode.__k.some(function(vnode) {
                    if (vnode) vnode.__ = newVNode;
                });
                for(var i = 0; i < c._sb.length; i++)c.__h.push(c._sb[i]);
                c._sb = [];
                if (c.__h.length) commitQueue.push(c);
                break outer;
            }
            if (c.componentWillUpdate != null) c.componentWillUpdate(newProps, c.__s, componentContext);
            if (isClassComponent && c.componentDidUpdate != null) c.__h.push(function() {
                c.componentDidUpdate(oldProps, oldState, snapshot);
            });
        }
        c.context = componentContext;
        c.props = newProps;
        c.__P = parentDom;
        c.__e = false;
        var renderHook = options.__r, count = 0;
        if (isClassComponent) {
            c.state = c.__s;
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            for(var _i = 0; _i < c._sb.length; _i++)c.__h.push(c._sb[_i]);
            c._sb = [];
        } else do {
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            // Handle setState called in render, see #2553
            c.state = c.__s;
        }while (c.__d && ++count < 25)
        // Handle setState called in render, see #2553
        c.state = c.__s;
        if (c.getChildContext != null) globalContext = assign(assign({}, globalContext), c.getChildContext());
        if (isClassComponent && !isNew && c.getSnapshotBeforeUpdate != null) snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
        var isTopLevelFragment = tmp != null && tmp.type === Fragment && tmp.key == null;
        var renderResult = isTopLevelFragment ? tmp.props.children : tmp;
        diffChildren(parentDom, isArray(renderResult) ? renderResult : [
            renderResult
        ], newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        c.base = newVNode.__e;
        // We successfully rendered this VNode, unset any stored hydration/bailout state:
        newVNode.__u &= RESET_MODE;
        if (c.__h.length) commitQueue.push(c);
        if (clearProcessingException) c.__E = c.__ = null;
    } catch (e) {
        newVNode.__v = null;
        // if hydrating or creating initial tree, bailout preserves DOM:
        if (isHydrating || excessDomChildren != null) {
            newVNode.__u |= isHydrating ? MODE_HYDRATE | MODE_SUSPENDED : MODE_HYDRATE;
            while(oldDom && oldDom.nodeType === 8 && oldDom.nextSibling)oldDom = oldDom.nextSibling;
            excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
            newVNode.__e = oldDom;
        } else {
            newVNode.__e = oldVNode.__e;
            newVNode.__k = oldVNode.__k;
        }
        options.__e(e, newVNode, oldVNode);
    }
    else if (excessDomChildren == null && newVNode.__v === oldVNode.__v) {
        newVNode.__k = oldVNode.__k;
        newVNode.__e = oldVNode.__e;
    } else newVNode.__e = diffElementNodes(oldVNode.__e, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue);
    if (tmp = options.diffed) tmp(newVNode);
}
/**
 * @param {Array<Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {VNode} root
 */ function commitRoot(commitQueue, root, refQueue) {
    root.__d = undefined;
    for(var i = 0; i < refQueue.length; i++)applyRef(refQueue[i], refQueue[++i], refQueue[++i]);
    if (options.__c) options.__c(root, commitQueue);
    commitQueue.some(function(c) {
        try {
            // @ts-expect-error Reuse the commitQueue variable here so the type changes
            commitQueue = c.__h;
            c.__h = [];
            commitQueue.some(function(cb) {
                // @ts-expect-error See above comment on commitQueue
                cb.call(c);
            });
        } catch (e) {
            options.__e(e, c.__v);
        }
    });
}
/**
 * Diff two virtual nodes representing DOM element
 * @param {PreactElement} dom The DOM element representing the virtual nodes
 * being diffed
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 * @returns {PreactElement}
 */ function diffElementNodes(dom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue) {
    var oldProps = oldVNode.props;
    var newProps = newVNode.props;
    var nodeType = /** @type {string} */ newVNode.type;
    /** @type {any} */ var i;
    /** @type {{ __html?: string }} */ var newHtml;
    /** @type {{ __html?: string }} */ var oldHtml;
    /** @type {ComponentChildren} */ var newChildren;
    var value;
    var inputValue;
    var checked;
    // Tracks entering and exiting namespaces when descending through the tree.
    if (nodeType === 'svg') namespace = 'http://www.w3.org/2000/svg';
    else if (nodeType === 'math') namespace = 'http://www.w3.org/1998/Math/MathML';
    else if (!namespace) namespace = 'http://www.w3.org/1999/xhtml';
    if (excessDomChildren != null) for(i = 0; i < excessDomChildren.length; i++){
        value = excessDomChildren[i];
        // if newVNode matches an element in excessDomChildren or the `dom`
        // argument matches an element in excessDomChildren, remove it from
        // excessDomChildren so it isn't later removed in diffChildren
        if (value && 'setAttribute' in value === !!nodeType && (nodeType ? value.localName === nodeType : value.nodeType === 3)) {
            dom = value;
            excessDomChildren[i] = null;
            break;
        }
    }
    if (dom == null) {
        if (nodeType === null) return options.document.createTextNode(newProps);
        dom = options.document.createElementNS(namespace, nodeType, newProps.is && newProps);
        // we are creating a new node, so we can assume this is a new subtree (in
        // case we are hydrating), this deopts the hydrate
        if (isHydrating) {
            if (options.__m) options.__m(newVNode, excessDomChildren);
            isHydrating = false;
        }
        // we created a new parent, so none of the previously attached children can be reused:
        excessDomChildren = null;
    }
    if (nodeType === null) {
        if (oldProps !== newProps && (!isHydrating || dom.data !== newProps)) dom.data = newProps;
    } else {
        // If excessDomChildren was not null, repopulate it with the current element's children:
        excessDomChildren = excessDomChildren && slice.call(dom.childNodes);
        oldProps = oldVNode.props || EMPTY_OBJ;
        // If we are in a situation where we are not hydrating but are using
        // existing DOM (e.g. replaceNode) we should read the existing DOM
        // attributes to diff them
        if (!isHydrating && excessDomChildren != null) {
            oldProps = {};
            for(i = 0; i < dom.attributes.length; i++){
                value = dom.attributes[i];
                oldProps[value.name] = value.value;
            }
        }
        for(i in oldProps){
            value = oldProps[i];
            if (i == 'children') ;
            else if (i == 'dangerouslySetInnerHTML') oldHtml = value;
            else if (!(i in newProps)) {
                if (i == 'value' && 'defaultValue' in newProps || i == 'checked' && 'defaultChecked' in newProps) continue;
                setProperty(dom, i, null, value, namespace);
            }
        }
        // During hydration, props are not diffed at all (including dangerouslySetInnerHTML)
        // @TODO we should warn in debug mode when props don't match here.
        for(i in newProps){
            value = newProps[i];
            if (i == 'children') newChildren = value;
            else if (i == 'dangerouslySetInnerHTML') newHtml = value;
            else if (i == 'value') inputValue = value;
            else if (i == 'checked') checked = value;
            else if ((!isHydrating || typeof value == 'function') && oldProps[i] !== value) setProperty(dom, i, value, oldProps[i], namespace);
        }
        // If the new vnode didn't have dangerouslySetInnerHTML, diff its children
        if (newHtml) {
            // Avoid re-applying the same '__html' if it did not changed between re-render
            if (!isHydrating && (!oldHtml || newHtml.__html !== oldHtml.__html && newHtml.__html !== dom.innerHTML)) dom.innerHTML = newHtml.__html;
            newVNode.__k = [];
        } else {
            if (oldHtml) dom.innerHTML = '';
            diffChildren(dom, isArray(newChildren) ? newChildren : [
                newChildren
            ], newVNode, oldVNode, globalContext, nodeType === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : namespace, excessDomChildren, commitQueue, excessDomChildren ? excessDomChildren[0] : oldVNode.__k && getDomSibling(oldVNode, 0), isHydrating, refQueue);
            // Remove children that are not part of any vnode.
            if (excessDomChildren != null) for(i = excessDomChildren.length; i--;)removeNode(excessDomChildren[i]);
        }
        // As above, don't diff props during hydration
        if (!isHydrating) {
            i = 'value';
            if (nodeType === 'progress' && inputValue == null) dom.removeAttribute('value');
            else if (inputValue !== undefined && // despite the attribute not being present. When the attribute
            // is missing the progress bar is treated as indeterminate.
            // To fix that we'll always update it when it is 0 for progress elements
            (inputValue !== dom[i] || nodeType === 'progress' && !inputValue || // This is only for IE 11 to fix <select> value not being updated.
            // To avoid a stale select value we need to set the option.value
            // again, which triggers IE11 to re-evaluate the select value
            nodeType === 'option' && inputValue !== oldProps[i])) setProperty(dom, i, inputValue, oldProps[i], namespace);
            i = 'checked';
            if (checked !== undefined && checked !== dom[i]) setProperty(dom, i, checked, oldProps[i], namespace);
        }
    }
    return dom;
}
/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param {Ref<any> & { _unmount?: unknown }} ref
 * @param {any} value
 * @param {VNode} vnode
 */ function applyRef(ref, value, vnode) {
    try {
        if (typeof ref == 'function') {
            var hasRefUnmount = typeof ref.__u == 'function';
            if (hasRefUnmount) ref.__u();
            if (!hasRefUnmount || value != null) // instance object itself to avoid shape
            // transitioning vnode
            ref.__u = ref(value);
        } else ref.current = value;
    } catch (e) {
        options.__e(e, vnode);
    }
}
/**
 * Unmount a virtual node from the tree and apply DOM changes
 * @param {VNode} vnode The virtual node to unmount
 * @param {VNode} parentVNode The parent of the VNode that initiated the unmount
 * @param {boolean} [skipRemove] Flag that indicates that a parent node of the
 * current element is already detached from the DOM.
 */ function unmount(vnode, parentVNode, skipRemove) {
    var r;
    if (options.unmount) options.unmount(vnode);
    if (r = vnode.ref) {
        if (!r.current || r.current === vnode.__e) applyRef(r, null, parentVNode);
    }
    if ((r = vnode.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (e) {
            options.__e(e, parentVNode);
        }
        r.base = r.__P = null;
    }
    if (r = vnode.__k) {
        for(var i = 0; i < r.length; i++)if (r[i]) unmount(r[i], parentVNode, skipRemove || typeof vnode.type != 'function');
    }
    if (!skipRemove) removeNode(vnode.__e);
    // Must be set to `undefined` to properly clean up `_nextDom`
    // for which `null` is a valid value. See comment in `create-element.js`
    vnode.__c = vnode.__ = vnode.__e = vnode.__d = undefined;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/**
 * Render a Preact virtual node into a DOM element
 * @param {ComponentChild} vnode The virtual node to render
 * @param {PreactElement} parentDom The DOM element to render into
 * @param {PreactElement | object} [replaceNode] Optional: Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`
 */ function render(vnode, parentDom, replaceNode) {
    if (options.__) options.__(vnode, parentDom);
    // We abuse the `replaceNode` parameter in `hydrate()` to signal if we are in
    // hydration mode or not by passing the `hydrate` function instead of a DOM
    // element..
    var isHydrating = typeof replaceNode == 'function';
    // To be able to support calling `render()` multiple times on the same
    // DOM node, we need to obtain a reference to the previous tree. We do
    // this by assigning a new `_children` property to DOM nodes which points
    // to the last rendered tree. By default this property is not present, which
    // means that we are mounting a new tree for the first time.
    var oldVNode = isHydrating ? null : replaceNode && replaceNode.__k || parentDom.__k;
    vnode = (!isHydrating && replaceNode || parentDom).__k = createElement(Fragment, null, [
        vnode
    ]);
    // List of effects that need to be called after diffing.
    var commitQueue = [], refQueue = [];
    diff(parentDom, // our custom `_children` property.
    vnode, oldVNode || EMPTY_OBJ, EMPTY_OBJ, parentDom.namespaceURI, !isHydrating && replaceNode ? [
        replaceNode
    ] : oldVNode ? null : parentDom.firstChild ? slice.call(parentDom.childNodes) : null, commitQueue, !isHydrating && replaceNode ? replaceNode : oldVNode ? oldVNode.__e : parentDom.firstChild, isHydrating, refQueue);
    // Flush all queued effects
    commitRoot(commitQueue, vnode, refQueue);
}
/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {ComponentChild} vnode The virtual node to render
 * @param {PreactElement} parentDom The DOM element to update
 */ function hydrate(vnode, parentDom) {
    render(vnode, parentDom, hydrate);
}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its
 * children.
 * @param {VNode} vnode The virtual DOM element to clone
 * @param {object} props Attributes/props to add when cloning
 * @param {Array<ComponentChildren>} rest Any additional arguments will be used
 * as replacement children.
 * @returns {VNode}
 */ function cloneElement(vnode, props, children) {
    var normalizedProps = assign({}, vnode.props), key, ref, i;
    var defaultProps;
    if (vnode.type && vnode.type.defaultProps) defaultProps = vnode.type.defaultProps;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else if (props[i] === undefined && defaultProps !== undefined) normalizedProps[i] = defaultProps[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    return createVNode(vnode.type, normalizedProps, key || vnode.key, ref || vnode.ref, null);
}
var i = 0;
function createContext(defaultValue, contextId) {
    contextId = '__cC' + i++;
    var context = {
        __c: contextId,
        __: defaultValue,
        /** @type {FunctionComponent} */ Consumer: function Consumer(props, contextValue) {
            // return props.children(
            // 	context[contextId] ? context[contextId].props.value : defaultValue
            // );
            return props.children(contextValue);
        },
        /** @type {FunctionComponent} */ Provider: function Provider(props) {
            if (!this.getChildContext) {
                /** @type {Component[] | null} */ var subs = [];
                var ctx = {};
                ctx[contextId] = this;
                this.getChildContext = function() {
                    return ctx;
                };
                this.componentWillUnmount = function() {
                    subs = null;
                };
                this.shouldComponentUpdate = function(_props) {
                    if (this.props.value !== _props.value) subs.some(function(c) {
                        c.__e = true;
                        enqueueRender(c);
                    });
                };
                this.sub = function(c) {
                    subs.push(c);
                    var old = c.componentWillUnmount;
                    c.componentWillUnmount = function() {
                        if (subs) subs.splice(subs.indexOf(c), 1);
                        if (old) old.call(c);
                    };
                };
            }
            return props.children;
        }
    };
    // Devtools needs access to the context object when it
    // encounters a Provider. This is necessary to support
    // setting `displayName` on the context object instead
    // of on the component itself. See:
    // https://reactjs.org/docs/context.html#contextdisplayname
    return context.Provider.__ = context.Consumer.contextType = context;
}
 //# sourceMappingURL=preact.module.js.map


}),
"(react:background)/./node_modules/preact/hooks/dist/hooks.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useCallback: () => (useCallback),
  useContext: () => (useContext),
  useDebugValue: () => (useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (useErrorBoundary),
  useId: () => (useId),
  useImperativeHandle: () => (useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (useMemo),
  useReducer: () => (useReducer),
  useRef: () => (useRef),
  useState: () => (useState)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");

/** @type {number} */ var currentIndex;
/** @type {import('./internal').Component} */ var currentComponent;
/** @type {import('./internal').Component} */ var previousComponent;
/** @type {number} */ var currentHook = 0;
/** @type {Array<import('./internal').Component>} */ var afterPaintEffects = [];
// Cast to use internal Options type
var options = /** @type {import('./internal').Options} */ preact__WEBPACK_IMPORTED_MODULE_0__.options;
var oldBeforeDiff = options.__b;
var oldBeforeRender = options.__r;
var oldAfterDiff = options.diffed;
var oldCommit = options.__c;
var oldBeforeUnmount = options.unmount;
var oldRoot = options.__;
var RAF_TIMEOUT = 100;
var prevRaf;
/** @type {(vnode: import('./internal').VNode) => void} */ options.__b = function(vnode) {
    currentComponent = null;
    if (oldBeforeDiff) oldBeforeDiff(vnode);
};
options.__ = function(vnode, parentDom) {
    if (vnode && parentDom.__k && parentDom.__k.__m) vnode.__m = parentDom.__k.__m;
    if (oldRoot) oldRoot(vnode, parentDom);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.__r = function(vnode) {
    if (oldBeforeRender) oldBeforeRender(vnode);
    currentComponent = vnode.__c;
    currentIndex = 0;
    var hooks = currentComponent.__H;
    if (hooks) {
        if (previousComponent === currentComponent) {
            hooks.__h = [];
            currentComponent.__h = [];
            hooks.__.forEach(function(hookItem) {
                if (hookItem.__N) hookItem.__ = hookItem.__N;
                hookItem._pendingArgs = hookItem.__N = undefined;
            });
        } else {
            hooks.__h.forEach(invokeCleanup);
            hooks.__h.forEach(invokeEffect);
            hooks.__h = [];
            currentIndex = 0;
        }
    }
    previousComponent = currentComponent;
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.diffed = function(vnode) {
    if (oldAfterDiff) oldAfterDiff(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        if (c.__H.__h.length) afterPaint(afterPaintEffects.push(c));
        c.__H.__.forEach(function(hookItem) {
            if (hookItem._pendingArgs) hookItem.__H = hookItem._pendingArgs;
            hookItem._pendingArgs = undefined;
        });
    }
    previousComponent = currentComponent = null;
};
// TODO: Improve typing of commitQueue parameter
/** @type {(vnode: import('./internal').VNode, commitQueue: any) => void} */ options.__c = function(vnode, commitQueue) {
    commitQueue.some(function(component) {
        try {
            component.__h.forEach(invokeCleanup);
            component.__h = component.__h.filter(function(cb) {
                return cb.__ ? invokeEffect(cb) : true;
            });
        } catch (e) {
            commitQueue.some(function(c) {
                if (c.__h) c.__h = [];
            });
            commitQueue = [];
            options.__e(e, component.__v);
        }
    });
    if (oldCommit) oldCommit(vnode, commitQueue);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.unmount = function(vnode) {
    if (oldBeforeUnmount) oldBeforeUnmount(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        var hasErrored;
        c.__H.__.forEach(function(s) {
            try {
                invokeCleanup(s);
            } catch (e) {
                hasErrored = e;
            }
        });
        c.__H = undefined;
        if (hasErrored) options.__e(hasErrored, c.__v);
    }
};
/**
 * Get a hook's state from the currentComponent
 * @param {number} index The index of the hook to get
 * @param {number} type The index of the hook to get
 * @returns {any}
 */ function getHookState(index, type) {
    if (options.__h) options.__h(currentComponent, index, currentHook || type);
    currentHook = 0;
    // Largely inspired by:
    // * https://github.com/michael-klein/funcy.js/blob/f6be73468e6ec46b0ff5aa3cc4c9baf72a29025a/src/hooks/core_hooks.mjs
    // * https://github.com/michael-klein/funcy.js/blob/650beaa58c43c33a74820a3c98b3c7079cf2e333/src/renderer.mjs
    // Other implementations to look at:
    // * https://codesandbox.io/s/mnox05qp8
    var hooks = currentComponent.__H || (currentComponent.__H = {
        __: [],
        __h: []
    });
    if (index >= hooks.__.length) hooks.__.push({});
    return hooks.__[index];
}
/**
 * @template {unknown} S
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} [initialState]
 * @returns {[S, (state: S) => void]}
 */ function useState(initialState) {
    currentHook = 1;
    return useReducer(invokeOrReturn, initialState);
}
/**
 * @template {unknown} S
 * @template {unknown} A
 * @param {import('./index').Reducer<S, A>} reducer
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} initialState
 * @param {(initialState: any) => void} [init]
 * @returns {[ S, (state: S) => void ]}
 */ function useReducer(reducer, initialState, init) {
    /** @type {import('./internal').ReducerHookState} */ var hookState = getHookState(currentIndex++, 2);
    hookState._reducer = reducer;
    if (!hookState.__c) {
        hookState.__ = [
            !init ? invokeOrReturn(undefined, initialState) : init(initialState),
            function(action) {
                var currentValue = hookState.__N ? hookState.__N[0] : hookState.__[0];
                var nextValue = hookState._reducer(currentValue, action);
                if (currentValue !== nextValue) {
                    hookState.__N = [
                        nextValue,
                        hookState.__[1]
                    ];
                    hookState.__c.setState({});
                }
            }
        ];
        hookState.__c = currentComponent;
        if (!currentComponent._hasScuFromHooks) {
            // This SCU has the purpose of bailing out after repeated updates
            // to stateful hooks.
            // we store the next value in _nextValue[0] and keep doing that for all
            // state setters, if we have next states and
            // all next states within a component end up being equal to their original state
            // we are safe to bail out for this specific component.
            /**
       *
       * @type {import('./internal').Component["shouldComponentUpdate"]}
       */ // @ts-ignore - We don't use TS to downtranspile
            // eslint-disable-next-line no-inner-declarations
            var updateHookState = function updateHookState(p, s, c) {
                if (!hookState.__c.__H) return true;
                /** @type {(x: import('./internal').HookState) => x is import('./internal').ReducerHookState} */ var isStateHook = function isStateHook(x) {
                    return !!x.__c;
                };
                var stateHooks = hookState.__c.__H.__.filter(isStateHook);
                var allHooksEmpty = stateHooks.every(function(x) {
                    return !x.__N;
                });
                // When we have no updated hooks in the component we invoke the previous SCU or
                // traverse the VDOM tree further.
                if (allHooksEmpty) return prevScu ? prevScu.call(this, p, s, c) : true;
                // We check whether we have components with a nextValue set that
                // have values that aren't equal to one another this pushes
                // us to update further down the tree
                var shouldUpdate = false;
                stateHooks.forEach(function(hookItem) {
                    if (hookItem.__N) {
                        var currentValue = hookItem.__[0];
                        hookItem.__ = hookItem.__N;
                        hookItem.__N = undefined;
                        if (currentValue !== hookItem.__[0]) shouldUpdate = true;
                    }
                });
                return shouldUpdate || hookState.__c.props !== p ? prevScu ? prevScu.call(this, p, s, c) : true : false;
            };
            currentComponent._hasScuFromHooks = true;
            var prevScu = currentComponent.shouldComponentUpdate;
            var prevCWU = currentComponent.componentWillUpdate;
            // If we're dealing with a forced update `shouldComponentUpdate` will
            // not be called. But we use that to update the hook values, so we
            // need to call it.
            currentComponent.componentWillUpdate = function(p, s, c) {
                if (this.__e) {
                    var tmp = prevScu;
                    // Clear to avoid other sCU hooks from being called
                    prevScu = undefined;
                    updateHookState(p, s, c);
                    prevScu = tmp;
                }
                if (prevCWU) prevCWU.call(this, p, s, c);
            };
            currentComponent.shouldComponentUpdate = updateHookState;
        }
    }
    return hookState.__N || hookState.__;
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 3);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__H.__h.push(state);
    }
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useLayoutEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 4);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__h.push(state);
    }
}
/** @type {(initialValue: unknown) => unknown} */ function useRef(initialValue) {
    currentHook = 5;
    return useMemo(function() {
        return {
            current: initialValue
        };
    }, []);
}
/**
 * @param {object} ref
 * @param {() => object} createHandle
 * @param {unknown[]} args
 * @returns {void}
 */ function useImperativeHandle(ref, createHandle, args) {
    currentHook = 6;
    useLayoutEffect(function() {
        if (typeof ref == 'function') {
            ref(createHandle());
            return function() {
                return ref(null);
            };
        } else if (ref) {
            ref.current = createHandle();
            return function() {
                return ref.current = null;
            };
        }
    }, args == null ? args : args.concat(ref));
}
/**
 * @template {unknown} T
 * @param {() => T} factory
 * @param {unknown[]} args
 * @returns {T}
 */ function useMemo(factory, args) {
    /** @type {import('./internal').MemoHookState<T>} */ var state = getHookState(currentIndex++, 7);
    if (argsChanged(state.__H, args)) {
        state.__ = factory();
        state.__H = args;
        state.__h = factory;
    }
    return state.__;
}
/**
 * @param {() => void} callback
 * @param {unknown[]} args
 * @returns {() => void}
 */ function useCallback(callback, args) {
    currentHook = 8;
    return useMemo(function() {
        return callback;
    }, args);
}
/**
 * @param {import('./internal').PreactContext} context
 */ function useContext(context) {
    var provider = currentComponent.context[context.__c];
    // We could skip this call here, but than we'd not call
    // `options._hook`. We need to do that in order to make
    // the devtools aware of this hook.
    /** @type {import('./internal').ContextHookState} */ var state = getHookState(currentIndex++, 9);
    // The devtools needs access to the context object to
    // be able to pull of the default value when no provider
    // is present in the tree.
    state.c = context;
    if (!provider) return context.__;
    // This is probably not safe to convert to "!"
    if (state.__ == null) {
        state.__ = true;
        provider.sub(currentComponent);
    }
    return provider.props.value;
}
/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, cb?: (value: T) => string | number) => void}
 */ function useDebugValue(value, formatter) {
    if (options.useDebugValue) options.useDebugValue(formatter ? formatter(value) : /** @type {any}*/ value);
}
/**
 * @param {(error: unknown, errorInfo: import('preact').ErrorInfo) => void} cb
 * @returns {[unknown, () => void]}
 */ function useErrorBoundary(cb) {
    /** @type {import('./internal').ErrorBoundaryHookState} */ var state = getHookState(currentIndex++, 10);
    var errState = useState();
    state.__ = cb;
    if (!currentComponent.componentDidCatch) currentComponent.componentDidCatch = function(err, errorInfo) {
        if (state.__) state.__(err, errorInfo);
        errState[1](err);
    };
    return [
        errState[0],
        function() {
            errState[1](undefined);
        }
    ];
}
/** @type {() => string} */ function useId() {
    /** @type {import('./internal').IdHookState} */ var state = getHookState(currentIndex++, 11);
    if (!state.__) {
        // Grab either the root node or the nearest async boundary node.
        /** @type {import('./internal.d').VNode} */ var root = currentComponent.__v;
        while(root !== null && !root.__m && root.__ !== null)root = root.__;
        var mask = root.__m || (root.__m = [
            0,
            0
        ]);
        state.__ = 'P' + mask[0] + '-' + mask[1]++;
    }
    return state.__;
}
/**
 * After paint effects consumer.
 */ function flushAfterPaintEffects() {
    var component;
    while(component = afterPaintEffects.shift()){
        if (!component.__P || !component.__H) continue;
        try {
            component.__H.__h.forEach(invokeCleanup);
            component.__H.__h.forEach(invokeEffect);
            component.__H.__h = [];
        } catch (e) {
            component.__H.__h = [];
            options.__e(e, component.__v);
        }
    }
}
var HAS_RAF = typeof requestAnimationFrame == 'function';
/**
 * Schedule a callback to be invoked after the browser has a chance to paint a new frame.
 * Do this by combining requestAnimationFrame (rAF) + setTimeout to invoke a callback after
 * the next browser frame.
 *
 * Also, schedule a timeout in parallel to the the rAF to ensure the callback is invoked
 * even if RAF doesn't fire (for example if the browser tab is not visible)
 *
 * @param {() => void} callback
 */ function afterNextFrame(callback) {
    var done = function done() {
        clearTimeout(timeout);
        if (HAS_RAF) cancelAnimationFrame(raf);
        setTimeout(callback);
    };
    var timeout = setTimeout(done, RAF_TIMEOUT);
    var raf;
    if (HAS_RAF) raf = requestAnimationFrame(done);
}
// Note: if someone used options.debounceRendering = requestAnimationFrame,
// then effects will ALWAYS run on the NEXT frame instead of the current one, incurring a ~16ms delay.
// Perhaps this is not such a big deal.
/**
 * Schedule afterPaintEffects flush after the browser paints
 * @param {number} newQueueLength
 * @returns {void}
 */ function afterPaint(newQueueLength) {
    if (newQueueLength === 1 || prevRaf !== options.requestAnimationFrame) {
        prevRaf = options.requestAnimationFrame;
        (prevRaf || afterNextFrame)(flushAfterPaintEffects);
    }
}
/**
 * @param {import('./internal').HookState} hook
 * @returns {void}
 */ function invokeCleanup(hook) {
    // A hook cleanup can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    var cleanup = hook.__c;
    if (typeof cleanup == 'function') {
        hook.__c = undefined;
        cleanup();
    }
    currentComponent = comp;
}
/**
 * Invoke a Hook's effect
 * @param {import('./internal').EffectHookState} hook
 * @returns {void}
 */ function invokeEffect(hook) {
    // A hook call can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    hook.__c = hook.__();
    currentComponent = comp;
}
/**
 * @param {unknown[]} oldArgs
 * @param {unknown[]} newArgs
 * @returns {boolean}
 */ function argsChanged(oldArgs, newArgs) {
    return !oldArgs || oldArgs.length !== newArgs.length || newArgs.some(function(arg, index) {
        return arg !== oldArgs[index];
    });
}
/**
 * @template Arg
 * @param {Arg} arg
 * @param {(arg: Arg) => any} f
 * @returns {any}
 */ function invokeOrReturn(arg, f) {
    return typeof f == 'function' ? f(arg) : f;
}
 //# sourceMappingURL=hooks.module.js.map


}),
"(react:background)/./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  jsx: () => (createVNode),
  jsxAttr: () => (jsxAttr),
  jsxDEV: () => (createVNode),
  jsxEscape: () => (jsxEscape),
  jsxTemplate: () => (jsxTemplate),
  jsxs: () => (createVNode)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");


var ENCODED_ENTITIES = /["&<]/;
/** @param {string} str */ function encodeEntities(str) {
    // Skip all work for strings with no entities needing encoding:
    if (str.length === 0 || ENCODED_ENTITIES.test(str) === false) return str;
    var last = 0, i = 0, out = '', ch = '';
    // Seek forward in str until the next entity char:
    for(; i < str.length; i++){
        switch(str.charCodeAt(i)){
            case 34:
                ch = '&quot;';
                break;
            case 38:
                ch = '&amp;';
                break;
            case 60:
                ch = '&lt;';
                break;
            default:
                continue;
        }
        // Append skipped/buffered characters and the encoded entity:
        if (i !== last) out += str.slice(last, i);
        out += ch;
        // Start the next seek/buffer after the entity's offset:
        last = i + 1;
    }
    if (i !== last) out += str.slice(last, i);
    return out;
}
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var vnodeId = 0;
var isArray = Array.isArray;
/**
 * @fileoverview
 * This file exports various methods that implement Babel's "automatic" JSX runtime API:
 * - jsx(type, props, key)
 * - jsxs(type, props, key)
 * - jsxDEV(type, props, key, __source, __self)
 *
 * The implementation of createVNode here is optimized for performance.
 * Benchmarks: https://esbench.com/bench/5f6b54a0b4632100a7dcd2b3
 */ /**
 * JSX.Element factory used by Babel's {runtime:"automatic"} JSX transform
 * @param {VNode['type']} type
 * @param {VNode['props']} props
 * @param {VNode['key']} [key]
 * @param {unknown} [isStaticChildren]
 * @param {unknown} [__source]
 * @param {unknown} [__self]
 */ function createVNode(type, props, key, isStaticChildren, __source, __self) {
    if (!props) props = {};
    // We'll want to preserve `ref` in props to get rid of the need for
    // forwardRef components in the future, but that should happen via
    // a separate PR.
    var normalizedProps = props, ref, i;
    if ('ref' in normalizedProps) {
        normalizedProps = {};
        for(i in props)if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    /** @type {VNode & { __source: any; __self: any }} */ var vnode = {
        type: type,
        props: normalizedProps,
        key: key,
        ref: ref,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: undefined,
        __c: null,
        constructor: undefined,
        __v: --vnodeId,
        __i: -1,
        __u: 0,
        __source: __source,
        __self: __self
    };
    // If a Component VNode, check for and apply defaultProps.
    // Note: `type` is often a String, and can be `undefined` in development.
    if (typeof type === 'function' && (ref = type.defaultProps)) {
        for(i in ref)if (typeof normalizedProps[i] === 'undefined') normalizedProps[i] = ref[i];
    }
    if (preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode) preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(vnode);
    return vnode;
}
/**
 * Create a template vnode. This function is not expected to be
 * used directly, but rather through a precompile JSX transform
 * @param {string[]} templates
 * @param  {Array<string | null | VNode>} exprs
 * @returns {VNode}
 */ function jsxTemplate(templates) {
    var vnode = createVNode(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        tpl: templates,
        exprs: [].slice.call(arguments, 1)
    });
    // Bypass render to string top level Fragment optimization
    vnode.key = vnode.__v;
    return vnode;
}
var JS_TO_CSS = {};
var CSS_REGEX = /[A-Z]/g;
/**
 * Serialize an HTML attribute to a string. This function is not
 * expected to be used directly, but rather through a precompile
 * JSX transform
 * @param {string} name The attribute name
 * @param {*} value The attribute value
 * @returns {string}
 */ function jsxAttr(name, value) {
    if (preact__WEBPACK_IMPORTED_MODULE_0__.options.attr) {
        var result = preact__WEBPACK_IMPORTED_MODULE_0__.options.attr(name, value);
        if (typeof result === 'string') return result;
    }
    if (name === 'ref' || name === 'key') return '';
    if (name === 'style' && typeof value === 'object') {
        var str = '';
        for(var prop in value){
            var val = value[prop];
            if (val != null && val !== '') {
                var _name = prop[0] == '-' ? prop : JS_TO_CSS[prop] || (JS_TO_CSS[prop] = prop.replace(CSS_REGEX, '-$&').toLowerCase());
                var suffix = ';';
                if (typeof val === 'number' && // Exclude custom-attributes
                !_name.startsWith('--') && !IS_NON_DIMENSIONAL.test(_name)) suffix = 'px;';
                str = str + _name + ':' + val + suffix;
            }
        }
        return name + '="' + str + '"';
    }
    if (value == null || value === false || typeof value === 'function' || typeof value === 'object') return '';
    else if (value === true) return name;
    return name + '="' + encodeEntities(value) + '"';
}
/**
 * Escape a dynamic child passed to `jsxTemplate`. This function
 * is not expected to be used directly, but rather through a
 * precompile JSX transform
 * @param {*} value
 * @returns {string | null | VNode | Array<string | null | VNode>}
 */ function jsxEscape(value) {
    if (value == null || typeof value === 'boolean' || typeof value === 'function') return null;
    if (typeof value === 'object') {
        // Check for VNode
        if (value.constructor === undefined) return value;
        if (isArray(value)) {
            for(var i = 0; i < value.length; i++)value[i] = jsxEscape(value[i]);
            return value;
        }
    }
    return encodeEntities('' + value);
}
 //# sourceMappingURL=jsxRuntime.module.js.map


}),
"(react:background)/./src/App.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  App: () => (App)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/App.css");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");
// import { useCallback, useEffect, useState } from '@lynx-js/react'



const __snapshot_835da_4eb9e_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_835da_4eb9e_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateElement("canvas", pageId);
    __SetID(el1, "game");
    __AppendElement(el, el1);
    const el2 = __CreateElement("p", pageId);
    __SetID(el2, "description");
    __SetClasses(el2, "game-description");
    __AppendElement(el, el2);
    const el3 = __CreateRawText("Press 'spacebar' or 'click' to begin");
    __AppendElement(el2, el3);
    return [
        el,
        el1,
        el2,
        el3
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateRef */.updateRef)(snapshot, index, oldValue, 1, ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateRef */.updateRef)(snapshot, index, oldValue, 2, '')
], null, undefined, globDynamicComponentEntry);
// import arrow from './assets/arrow.png'
// import lynxLogo from './assets/lynx-logo.png'
// import reactLynxLogo from './assets/react-logo.png'
function App() {
    // const [alterLogo, setAlterLogo] = useState(false)
    // useEffect(() => {
    //   console.info('Hello, ReactLynx')
    // }, [])
    // const onTap = useCallback(() => {
    //   'background only'
    //   setAlterLogo(!alterLogo)
    // }, [alterLogo])
    const canvasRef = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const descriptionRef = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const baseWidth = 300;
    const baseHeight = 500;
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const cvs = canvasRef.current;
        const description = descriptionRef.current;
        const ctx = cvs.getContext('2d');
        let theme1 = new Image();
        let theme2 = new Image();
        let frame = 0;
        let degree = Math.PI / 180;
        let scale = 1;
        let bg, pipes, ground, map, score, bird, bird1, bird2;
        let getReady, gameOver, medal;
        const SFX_SCORE = new Audio();
        const SFX_FLAP = new Audio();
        const SFX_COLLISION = new Audio();
        const SFX_FALL = new Audio();
        const SFX_SWOOSH = new Audio();
        theme1.src = './assets/img/og-theme.png';
        theme2.src = './assets/img/og-theme-2.png';
        SFX_SCORE.src = './assets/audio/sfx_point.wav';
        SFX_FLAP.src = './assets/audio/sfx_wing.wav';
        SFX_COLLISION.src = './assets/audio/sfx_hit.wav';
        SFX_FALL.src = './assets/audio/sfx_die.wav';
        SFX_SWOOSH.src = './assets/audio/sfx_swooshing.wav';
        let gameState = {
            current: 0,
            getReady: 0,
            play: 1,
            gameOver: 2
        };
        bg = {
            imgX: 0,
            imgY: 0,
            width: 276,
            height: 228,
            x: 0,
            y: 0,
            w: 276,
            h: 228,
            dx: 0.2,
            render: function() {
                ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x, this.y, this.w, this.h);
                ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x + this.w, this.y, this.w, this.h);
                ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x + this.w * 2, this.y, this.w, this.h);
            },
            position: function() {
                if (gameState.current === gameState.getReady) this.x = 0;
                if (gameState.current === gameState.play) this.x = (this.x - this.dx * scale) % this.w;
            }
        };
        medal = {
            bronze: {
                imgX: 359,
                imgY: 157
            },
            silver: {
                imgX: 359,
                imgY: 113
            },
            gold: {
                imgX: 359,
                imgY: 69
            },
            platinum: {
                imgX: 359,
                imgY: 25
            },
            width: 44,
            height: 44,
            x: 0,
            y: 0,
            w: 44,
            h: 44,
            relativeX: 31,
            relativeY: 47,
            type: null,
            setMedalType: function(score) {
                if (score >= 40) this.type = 'platinum';
                else if (score >= 30) this.type = 'gold';
                else if (score >= 20) this.type = 'silver';
                else if (score >= 10) this.type = 'bronze';
                else this.type = null;
            },
            render: function() {
                if (gameState.current === gameState.gameOver && this.type) {
                    const medalType = this.type;
                    ctx.drawImage(theme1, this[medalType].imgX, this[medalType].imgY, this.width, this.height, this.x, this.y, this.w, this.h);
                }
            }
        };
        pipes = {
            top: {
                imgX: 56,
                imgY: 323
            },
            bot: {
                imgX: 84,
                imgY: 323
            },
            width: 26,
            height: 160,
            w: 55,
            h: 300,
            gap: 150,
            dx: 2,
            minY: 0,
            maxY: 0,
            pipeGenerator: [],
            reset: function() {
                this.pipeGenerator = [];
            },
            render: function() {
                for(let i = 0; i < this.pipeGenerator.length; i++){
                    let pipe = this.pipeGenerator[i];
                    ctx.drawImage(theme2, this.top.imgX, this.top.imgY, this.width, this.height, pipe.x, pipe.topY, this.w, this.h);
                    ctx.drawImage(theme2, this.bot.imgX, this.bot.imgY, this.width, this.height, pipe.x, pipe.bottomY, this.w, this.h);
                }
            },
            position: function() {
                if (gameState.current !== gameState.play) return;
                if (frame % 100 === 0) {
                    const minPipeVisibility = -this.h / 2;
                    let minGapPos = cvs.height * 0.25;
                    let maxGapPos = cvs.height * 0.65 - this.gap;
                    let gapCenter = Math.floor(Math.random() * (maxGapPos - minGapPos)) + minGapPos;
                    let topPipeY = gapCenter - this.h;
                    topPipeY = Math.max(topPipeY, minPipeVisibility);
                    let bottomPipeY = gapCenter + this.gap;
                    bottomPipeY = Math.min(bottomPipeY, cvs.height - ground.h - this.h / 4);
                    this.pipeGenerator.push({
                        x: cvs.width,
                        topY: topPipeY,
                        bottomY: bottomPipeY
                    });
                }
                for(let i = 0; i < this.pipeGenerator.length; i++){
                    let pg = this.pipeGenerator[i];
                    let b = {
                        left: bird.x - bird.r,
                        right: bird.x + bird.r,
                        top: bird.y - bird.r,
                        bottom: bird.y + bird.r
                    };
                    let p = {
                        top: {
                            top: pg.topY,
                            bottom: pg.topY + this.h
                        },
                        bot: {
                            top: pg.bottomY,
                            bottom: pg.bottomY + this.h
                        },
                        left: pg.x,
                        right: pg.x + this.w
                    };
                    pg.x -= this.dx * scale;
                    if (pg.x < -this.w) {
                        this.pipeGenerator.shift();
                        score.current++;
                        SFX_SCORE.play();
                    }
                    if (b.left < p.right && b.right > p.left && b.top < p.top.bottom && b.bottom > p.top.top) {
                        gameState.current = gameState.gameOver;
                        SFX_COLLISION.play();
                        score.setBestScore();
                        medal.setMedalType(score.current);
                    }
                    if (b.left < p.right && b.right > p.left && b.top < p.bot.bottom && b.bottom > p.bot.top) {
                        gameState.current = gameState.gameOver;
                        SFX_COLLISION.play();
                        score.setBestScore();
                        medal.setMedalType(score.current);
                    }
                }
            }
        };
        ground = {
            imgX: 276,
            imgY: 0,
            width: 224,
            height: 112,
            x: 0,
            y: 0,
            w: 224,
            h: 112,
            dx: 2,
            render: function() {
                ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x, this.y, this.w, this.h);
                ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x + this.w, this.y, this.w, this.h);
            },
            position: function() {
                if (gameState.current === gameState.getReady) this.x = 0;
                if (gameState.current === gameState.play) this.x = (this.x - this.dx * scale) % (this.w / 2);
            }
        };
        map = [
            {
                imgX: 496,
                imgY: 60,
                width: 12,
                height: 18
            },
            {
                imgX: 135,
                imgY: 455,
                width: 10,
                height: 18
            },
            {
                imgX: 292,
                imgY: 160,
                width: 12,
                height: 18
            },
            {
                imgX: 306,
                imgY: 160,
                width: 12,
                height: 18
            },
            {
                imgX: 320,
                imgY: 160,
                width: 12,
                height: 18
            },
            {
                imgX: 334,
                imgY: 160,
                width: 12,
                height: 18
            },
            {
                imgX: 292,
                imgY: 184,
                width: 12,
                height: 18
            },
            {
                imgX: 306,
                imgY: 184,
                width: 12,
                height: 18
            },
            {
                imgX: 320,
                imgY: 184,
                width: 12,
                height: 18
            },
            {
                imgX: 334,
                imgY: 184,
                width: 12,
                height: 18
            }
        ];
        score = {
            current: 0,
            best: 0,
            x: cvs.width / 2,
            y: 40,
            w: 15,
            h: 25,
            setBestScore: function() {
                if (this.current > this.best) {
                    this.best = this.current;
                    localStorage.setItem('flappyBirdBestScore', this.best.toString());
                }
            },
            reset: function() {
                this.current = 0;
            },
            render: function() {
                if (gameState.current === gameState.play) this.drawNumber(this.current, this.x, this.y);
                else if (gameState.current === gameState.gameOver) {
                    const scoreY = gameOver.y + gameOver.h * 0.38;
                    const bestY = gameOver.y + gameOver.h * 0.58;
                    this.drawNumber(this.current, gameOver.x + gameOver.w * 0.6, scoreY);
                    this.drawNumber(this.best, gameOver.x + gameOver.w * 0.6, bestY);
                }
            },
            drawNumber: function(value, x, y) {
                const string = value.toString();
                const digits = string.length;
                let startX = x - digits * this.w / 2;
                if (digits % 2 === 0) startX += this.w / 4;
                for(let i = 0; i < digits; i++){
                    const digit = parseInt(string[i]);
                    ctx.drawImage(theme2, map[digit].imgX, map[digit].imgY, map[digit].width, map[digit].height, startX + i * this.w, y, this.w, this.h);
                }
            }
        };
        const savedBestScore = localStorage.getItem('flappyBirdBestScore');
        if (savedBestScore) score.best = parseInt(savedBestScore, 10);
        bird = {
            animation: [
                {
                    imgX: 276,
                    imgY: 114
                },
                {
                    imgX: 276,
                    imgY: 140
                },
                {
                    imgX: 276,
                    imgY: 166
                },
                {
                    imgX: 276,
                    imgY: 140
                }
            ],
            fr: 0,
            width: 34,
            height: 24,
            x: 50,
            y: 160,
            w: 34,
            h: 24,
            r: 12,
            fly: 5.25,
            gravity: 0.32,
            velocity: 0,
            rotation: 0,
            reset: function() {
                this.velocity = 0;
                this.y = 160 * scale;
                this.rotation = 0;
                this.fr = 0;
            },
            render: function() {
                let birdFrame = this.animation[this.fr];
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.drawImage(theme1, birdFrame.imgX, birdFrame.imgY, this.width, this.height, -this.w / 2, -this.h / 2, this.w, this.h);
                ctx.restore();
            },
            flap: function() {
                this.velocity = -this.fly;
            },
            position: function() {
                if (gameState.current === gameState.getReady) {
                    this.y = 160 * scale;
                    this.rotation = 0;
                    if (frame % 20 === 0) this.fr = (this.fr + 1) % this.animation.length;
                } else {
                    if (frame % 4 === 0) this.fr = (this.fr + 1) % this.animation.length;
                    this.velocity += this.gravity;
                    this.y += this.velocity * scale;
                    if (this.velocity <= this.fly) this.rotation = -15 * degree;
                    else if (this.velocity >= this.fly + 2) {
                        this.rotation = 70 * degree;
                        this.fr = 1;
                    } else this.rotation = 0;
                    if (this.y + this.h / 2 >= cvs.height - ground.h) {
                        this.y = cvs.height - ground.h - this.h / 2;
                        this.fr = 2;
                        this.rotation = 70 * degree;
                        if (gameState.current === gameState.play) {
                            gameState.current = gameState.gameOver;
                            SFX_FALL.play();
                            score.setBestScore();
                            medal.setMedalType(score.current);
                        }
                    }
                    if (this.y - this.h / 2 <= 0) this.y = this.r * scale;
                }
            }
        };
        bird1 = {
            animation: [
                {
                    imgX: 115,
                    imgY: 381
                },
                {
                    imgX: 115,
                    imgY: 407
                },
                {
                    imgX: 115,
                    imgY: 433
                },
                {
                    imgX: 115,
                    imgY: 407
                }
            ],
            fr: 0,
            width: 18,
            height: 12,
            x: 50,
            y: 160,
            w: 34,
            h: 24,
            r: 12,
            fly: 5.25,
            gravity: 0.32,
            velocity: 0,
            render: function() {
                let birdFrame = this.animation[this.fr];
                ctx.drawImage(theme2, birdFrame.imgX, birdFrame.imgY, this.width, this.height, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
            },
            flap: function() {
                this.velocity = -this.fly;
            },
            position: function() {
                if (gameState.current === gameState.getReady) {
                    this.y = 160 * scale;
                    if (frame % 20 === 0) this.fr = (this.fr + 1) % this.animation.length;
                } else {
                    if (frame % 4 === 0) this.fr = (this.fr + 1) % this.animation.length;
                    this.velocity += this.gravity;
                    this.y += this.velocity * scale;
                    if (this.y + this.h / 2 >= cvs.height - ground.h) {
                        this.y = cvs.height - ground.h - this.h / 2;
                        this.fr = 2;
                        if (gameState.current === gameState.play) {
                            gameState.current = gameState.gameOver;
                            SFX_FALL.play();
                            score.setBestScore();
                            medal.setMedalType(score.current);
                        }
                    }
                    if (this.y - this.h / 2 <= 0) this.y = this.r * scale;
                }
            }
        };
        bird2 = {
            animation: [
                {
                    imgX: 87,
                    imgY: 491
                },
                {
                    imgX: 115,
                    imgY: 329
                },
                {
                    imgX: 115,
                    imgY: 355
                },
                {
                    imgX: 115,
                    imgY: 329
                }
            ],
            fr: 0,
            width: 18,
            height: 12,
            x: 50,
            y: 160,
            w: 34,
            h: 24,
            r: 12,
            fly: 5.25,
            gravity: 0.32,
            velocity: 0,
            render: function() {
                let birdFrame = this.animation[this.fr];
                ctx.drawImage(theme2, birdFrame.imgX, birdFrame.imgY, this.width, this.height, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
            },
            flap: function() {
                this.velocity = -this.fly;
            },
            position: function() {
                if (gameState.current === gameState.getReady) {
                    this.y = 160 * scale;
                    if (frame % 20 === 0) this.fr = (this.fr + 1) % this.animation.length;
                } else {
                    if (frame % 4 === 0) this.fr = (this.fr + 1) % this.animation.length;
                    this.velocity += this.gravity;
                    this.y += this.velocity * scale;
                    if (this.y + this.h / 2 >= cvs.height - ground.h) {
                        this.y = cvs.height - ground.h - this.h / 2;
                        this.fr = 2;
                        if (gameState.current === gameState.play) {
                            gameState.current = gameState.gameOver;
                            SFX_FALL.play();
                            score.setBestScore();
                            medal.setMedalType(score.current);
                        }
                    }
                    if (this.y - this.h / 2 <= 0) this.y = this.r * scale;
                }
            }
        };
        getReady = {
            imgX: 0,
            imgY: 228,
            width: 174,
            height: 160,
            x: 0,
            y: 0,
            w: 174,
            h: 160,
            render: function() {
                if (gameState.current === gameState.getReady) ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x, this.y, this.w, this.h);
            }
        };
        gameOver = {
            imgX: 174,
            imgY: 228,
            width: 226,
            height: 158,
            x: 0,
            y: 0,
            w: 226,
            h: 158,
            render: function() {
                if (gameState.current === gameState.gameOver) {
                    ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x, this.y, this.w, this.h);
                    if (description) description.style.visibility = "visible";
                }
            }
        };
        const resizeCanvas = ()=>{
            if (cvs) {
                cvs.width = window.innerWidth;
                cvs.height = window.innerHeight;
                scale = Math.min(cvs.width / baseWidth, cvs.height / baseHeight);
                bg.w = 276 * scale;
                bg.h = 228 * scale;
                bg.y = cvs.height - bg.h;
                ground.w = 224 * scale;
                ground.h = 112 * scale;
                ground.y = cvs.height - ground.h;
                getReady.w = 174 * scale;
                getReady.h = 160 * scale;
                getReady.x = (cvs.width - getReady.w) / 2;
                getReady.y = (cvs.height - getReady.h) / 2;
                gameOver.w = 226 * scale;
                gameOver.h = 158 * scale;
                gameOver.x = (cvs.width - gameOver.w) / 2;
                gameOver.y = (cvs.height - gameOver.h) / 2;
                medal.w = 40 * scale;
                medal.h = 40 * scale;
                const medalRelativeXScale = medal.relativeX / gameOver.width;
                const medalRelativeYScale = medal.relativeY / gameOver.height;
                medal.x = gameOver.x + gameOver.w * medalRelativeXScale;
                medal.y = gameOver.y + gameOver.h * medalRelativeYScale;
                pipes.w = 55 * scale;
                pipes.h = 300 * scale;
                pipes.gap = 150 * scale;
                score.x = cvs.width / 2;
                score.y = 40 * scale;
                score.w = 15 * scale;
                score.h = 25 * scale;
                bird.w = 34 * scale;
                bird.h = 24 * scale;
                bird.x = 50 * scale;
                bird.y = 160 * scale;
                bird.r = 12 * scale;
                bird1.w = 34 * scale;
                bird1.h = 24 * scale;
                bird1.x = 50 * scale;
                bird1.y = 160 * scale;
                bird1.r = 12 * scale;
                bird2.w = 34 * scale;
                bird2.h = 24 * scale;
                bird2.x = 50 * scale;
                bird2.y = 160 * scale;
                bird2.r = 12 * scale;
            }
        };
        const draw = ()=>{
            ctx.fillStyle = '#00bbc4';
            ctx.fillRect(0, 0, cvs.width, cvs.height);
            bg.render();
            pipes.render();
            ground.render();
            bird.render();
            getReady.render();
            gameOver.render();
            if (gameState.current === gameState.gameOver) medal.render();
            score.render();
        };
        const update = ()=>{
            bird.position();
            bg.position();
            pipes.position();
            ground.position();
        };
        const loop = ()=>{
            draw();
            update();
            frame++;
        };
        const resetGame = ()=>{
            pipes.reset();
            score.reset();
            bird.reset();
            medal.type = null;
            gameState.current = gameState.getReady;
            SFX_SWOOSH.play();
            if (description) description.style.visibility = "hidden";
        };
        const handleClick = ()=>{
            if (gameState.current === gameState.getReady) gameState.current = gameState.play;
            else if (gameState.current === gameState.play) {
                bird.flap();
                SFX_FLAP.play();
                if (description) description.style.visibility = "hidden";
            } else if (gameState.current === gameState.gameOver) resetGame();
        };
        // Set up event listeners
        window.addEventListener('resize', resizeCanvas);
        cvs.addEventListener('click', handleClick);
        // Initialize the game
        resizeCanvas();
        const gameInterval = setInterval(loop, 17);
        // Cleanup function when component unmounts
        return ()=>{
            window.removeEventListener('resize', resizeCanvas);
            cvs.removeEventListener('click', handleClick);
            clearInterval(gameInterval);
        };
    }, []);
    return(//   <view className='Background' />
    //   <view className='App'>
    //     <view className='Banner'>
    //       <view className='Logo' bindtap={onTap}>
    //         {alterLogo
    //           ? <image src={reactLynxLogo} className='Logo--react' />
    //           : <image src={lynxLogo} className='Logo--lynx' />}
    //       </view>
    //       <text className='Title'>wrewwefw</text>
    //       <text className='Subtitle'>on Lynx</text>
    //     </view>
    //     <view className='Content'>
    //       <image src={arrow} className='Arrow' />
    //       <text className='Description'>Tap the logo and have fun!</text>
    //       <text className='Hint'>
    //         Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
    //         to see updates!
    //       </text>
    //     </view>
    //     <view style={{ flex: 1 }}></view>
    //   </view>
    // </view>
    /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_835da_4eb9e_1, {
        values: [
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .transformRef */.transformRef)(canvasRef),
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .transformRef */.transformRef)(descriptionRef)
        ]
    }, void 0, false, {
        fileName: "/Users/jonathanperis/Projects/hisllaylla-bird-lynx/src/App.tsx",
        lineNumber: 744,
        columnNumber: 5
    }, this));
}


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/index.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/App.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");



_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.root.render(/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App_js__WEBPACK_IMPORTED_MODULE_2__.App, {}, void 0, false, {
    fileName: "/Users/jonathanperis/Projects/hisllaylla-bird-lynx/src/index.tsx",
    lineNumber: 5,
    columnNumber: 13
}, undefined));
if (true) module.hot.accept();


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/App.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

  if (true) {
    (function() {
      var localsJsonString = undefined;
      // 1742235157681
      var cssReload = __webpack_require__("(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs")(module.id, {}, "");
      // only invalidate when locals change
      if (
        module.hot.data &&
        module.hot.data.value &&
        module.hot.data.value !== localsJsonString
      ) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }
      module.hot.dispose(function(data) {
        data.value = localsJsonString;
        cssReload();
      });
    })();
  }

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
if (cachedModule.error !== undefined) throw cachedModule.error;
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
try {

var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
module = execOptions.module;
if (!execOptions.factory) {
  console.error("undefined factory", moduleId)
}
execOptions.factory.call(module.exports, module, module.exports, execOptions.require);

} catch (e) {
module.error = e;
throw e;
}
// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = (module) => {
  module = Object.create(module);
  if (!module.children) module.children = [];
  Object.defineProperty(module, 'exports', {
      enumerable: true,
      set: () => {
          throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
      }
  });
  return module;
};
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("fc5307ceb81ba812")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "main." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus; 
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	} 
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}
// @ts-nocheck
__webpack_require__.i.push(function(options) {
  if (
    // This means this is in main-thread
    !globalThis.__PREFRESH__
    // Loading a module of background layer in main-thread, we replace the layer with the main-thread.
    && options.id.includes('(react:background)')
  ) {
    // We may serialize the snapshot from background to main-thread.
    // The `(react:background)` layer in the module id cannot be found in the main-thread.
    // Thus we replace it here to make HMR work.
    //
    // Maybe it is better to run chunk loading on main thread.
    options.id = options.id.replace(
      `(react:background)`, // This is replaced by ReactRefreshWebpackPlugin
      '(react:main-thread)', // This is replaced by ReactRefreshWebpackPlugin
    );
    const factory = __webpack_modules__[options.id];
    if (factory) {
      options.factory = factory;
    }
    return;
  }
  var originalFactory = options.factory;
  options.factory = function(moduleObject, moduleExports, webpackRequire) {
    var prevRefreshReg = globalThis.$RefreshReg$;
    var prevRefreshSig = globalThis.$RefreshSig$;
    globalThis.$RefreshSig$ = function() {
      var status = 'begin';
      var savedType;

      return function(type, key, forceReset, getCustomHooks) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        // TODO(wangqingyu): Replace globalThis.__PREFRESH__ with lynx.__PREFRESH__
        if (!globalThis.__PREFRESH__) {
          return type;
        }
        if (!savedType) savedType = type;

        status = globalThis.__PREFRESH__.sign(
          type || savedType,
          key,
          forceReset,
          getCustomHooks,
          status,
        );
        return type;
      };
    };
    var reg = function(currentModuleId) {
      globalThis.$RefreshReg$ = function(type, id) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        if (globalThis.__PREFRESH__) {
          globalThis.__PREFRESH__.register(type, currentModuleId + ' ' + id);
        }
      };
    };
    reg();
    try {
      originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
    } finally {
      globalThis.$RefreshReg$ = prevRefreshReg;
      globalThis.$RefreshSig$ = prevRefreshSig;
    }
  };
});

// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
  globalThis.$RefreshReg$ = function () {};
  globalThis.$RefreshSig$ = function () {
    return function(type) {
      return type;
    };
  };
}
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "http://192.168.64.1:3000/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.2.8")
})();
// webpack/runtime/require_chunk_loading
(() => {
var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {"main": 1,};
function loadUpdateChunk(chunkId, updatedModulesList) {
	var update = require("./" + __webpack_require__.hu(chunkId));
	var updatedModules = update.modules;
	var runtime = update.runtime;
	for (var moduleId in updatedModules) {
		if (__webpack_require__.o(updatedModules, moduleId)) {
			currentUpdate[moduleId] = updatedModules[moduleId];
			if (updatedModulesList) updatedModulesList.push(moduleId);
		}
	}
	if (runtime) currentUpdateRuntime.push(runtime);
}var currentUpdateChunks;
var currentUpdate;
var currentUpdateRemovedChunks;
var currentUpdateRuntime;
function applyHandler(options) {
	if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
	currentUpdateChunks = undefined;
	function getAffectedModuleEffects(updateModuleId) {
		var outdatedModules = [updateModuleId];
		var outdatedDependencies = {};
		var queue = outdatedModules.map(function (id) {
			return {
				chain: [id],
				id: id
			};
		});
		while (queue.length > 0) {
			var queueItem = queue.pop();
			var moduleId = queueItem.id;
			var chain = queueItem.chain;
			var module = __webpack_require__.c[moduleId];
			if (
				!module ||
				(module.hot._selfAccepted && !module.hot._selfInvalidated)
			) {
				continue;
			}

			if (module.hot._selfDeclined) {
				return {
					type: "self-declined",
					chain: chain,
					moduleId: moduleId
				};
			}

			if (module.hot._main) {
				return {
					type: "unaccepted",
					chain: chain,
					moduleId: moduleId
				};
			}

			for (var i = 0; i < module.parents.length; i++) {
				var parentId = module.parents[i];
				var parent = __webpack_require__.c[parentId];
				if (!parent) {
					continue;
				}
				if (parent.hot._declinedDependencies[moduleId]) {
					return {
						type: "declined",
						chain: chain.concat([parentId]),
						moduleId: moduleId,
						parentId: parentId
					};
				}
				if (outdatedModules.indexOf(parentId) !== -1) {
					continue;
				}
				if (parent.hot._acceptedDependencies[moduleId]) {
					if (!outdatedDependencies[parentId]) {
						outdatedDependencies[parentId] = [];
					}
					addAllToSet(outdatedDependencies[parentId], [moduleId]);
					continue;
				}
				delete outdatedDependencies[parentId];
				outdatedModules.push(parentId);
				queue.push({
					chain: chain.concat([parentId]),
					id: parentId
				});
			}
		}

		return {
			type: "accepted",
			moduleId: updateModuleId,
			outdatedModules: outdatedModules,
			outdatedDependencies: outdatedDependencies
		};
	}

	function addAllToSet(a, b) {
		for (var i = 0; i < b.length; i++) {
			var item = b[i];
			if (a.indexOf(item) === -1) a.push(item);
		}
	}

	var outdatedDependencies = {};
	var outdatedModules = [];
	var appliedUpdate = {};

	var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
		console.warn(
			"[HMR] unexpected require(" + module.id + ") to disposed module"
		);
	};

	for (var moduleId in currentUpdate) {
		if (__webpack_require__.o(currentUpdate, moduleId)) {
			var newModuleFactory = currentUpdate[moduleId];
			var result = newModuleFactory ? getAffectedModuleEffects(moduleId) : {
				type: "disposed",
				moduleId: moduleId
			};
			var abortError = false;
			var doApply = false;
			var doDispose = false;
			var chainInfo = "";
			if (result.chain) {
				chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
			}
			switch (result.type) {
				case "self-declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of self decline: " + result.moduleId + chainInfo
						);
					break;
				case "declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of declined dependency: " +
							result.moduleId +
							" in " +
							result.parentId +
							chainInfo
						);
					break;
				case "unaccepted":
					if (options.onUnaccepted) options.onUnaccepted(result);
					if (!options.ignoreUnaccepted)
						abortError = new Error(
							"Aborted because " + moduleId + " is not accepted" + chainInfo
						);
					break;
				case "accepted":
					if (options.onAccepted) options.onAccepted(result);
					doApply = true;
					break;
				case "disposed":
					if (options.onDisposed) options.onDisposed(result);
					doDispose = true;
					break;
				default:
					throw new Error("Unexception type " + result.type);
			}
			if (abortError) {
				return {
					error: abortError
				};
			}
			if (doApply) {
				appliedUpdate[moduleId] = newModuleFactory;
				addAllToSet(outdatedModules, result.outdatedModules);
				for (moduleId in result.outdatedDependencies) {
					if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
						if (!outdatedDependencies[moduleId])
							outdatedDependencies[moduleId] = [];
						addAllToSet(
							outdatedDependencies[moduleId],
							result.outdatedDependencies[moduleId]
						);
					}
				}
			}
			if (doDispose) {
				addAllToSet(outdatedModules, [result.moduleId]);
				appliedUpdate[moduleId] = warnUnexpectedRequire;
			}
		}
	}
	currentUpdate = undefined;

	var outdatedSelfAcceptedModules = [];
	for (var j = 0; j < outdatedModules.length; j++) {
		var outdatedModuleId = outdatedModules[j];
		var module = __webpack_require__.c[outdatedModuleId];
		if (
			module &&
			(module.hot._selfAccepted || module.hot._main) &&
			// removed self-accepted modules should not be required
			appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
			// when called invalidate self-accepting is not possible
			!module.hot._selfInvalidated
		) {
			outdatedSelfAcceptedModules.push({
				module: outdatedModuleId,
				require: module.hot._requireSelf,
				errorHandler: module.hot._selfAccepted
			});
		}
	} 

	var moduleOutdatedDependencies;
	return {
		dispose: function () {
			currentUpdateRemovedChunks.forEach(function (chunkId) {
				delete installedChunks[chunkId];
			});
			currentUpdateRemovedChunks = undefined;

			var idx;
			var queue = outdatedModules.slice();
			while (queue.length > 0) {
				var moduleId = queue.pop();
				var module = __webpack_require__.c[moduleId];
				if (!module) continue;

				var data = {};

				// Call dispose handlers
				var disposeHandlers = module.hot._disposeHandlers; 
				for (j = 0; j < disposeHandlers.length; j++) {
					disposeHandlers[j].call(null, data);
				}
				__webpack_require__.hmrD[moduleId] = data;

				module.hot.active = false;

				delete __webpack_require__.c[moduleId];

				delete outdatedDependencies[moduleId];

				for (j = 0; j < module.children.length; j++) {
					var child = __webpack_require__.c[module.children[j]];
					if (!child) continue;
					idx = child.parents.indexOf(moduleId);
					if (idx >= 0) {
						child.parents.splice(idx, 1);
					}
				}
			}

			var dependency;
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						for (j = 0; j < moduleOutdatedDependencies.length; j++) {
							dependency = moduleOutdatedDependencies[j];
							idx = module.children.indexOf(dependency);
							if (idx >= 0) module.children.splice(idx, 1);
						}
					}
				}
			}
		},
		apply: function (reportError) {
			// insert new code
			for (var updateModuleId in appliedUpdate) {
				if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
					__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId]; 
				}
			}

			// run new runtime modules
			for (var i = 0; i < currentUpdateRuntime.length; i++) {
				currentUpdateRuntime[i](__webpack_require__);
			}

			// call accept handlers
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					var module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						var callbacks = [];
						var errorHandlers = [];
						var dependenciesForCallbacks = [];
						for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
							var dependency = moduleOutdatedDependencies[j];
							var acceptCallback = module.hot._acceptedDependencies[dependency];
							var errorHandler = module.hot._acceptedErrorHandlers[dependency];
							if (acceptCallback) {
								if (callbacks.indexOf(acceptCallback) !== -1) continue;
								callbacks.push(acceptCallback);
								errorHandlers.push(errorHandler); 
								dependenciesForCallbacks.push(dependency);
							}
						}
						for (var k = 0; k < callbacks.length; k++) {
							try {
								callbacks[k].call(null, moduleOutdatedDependencies);
							} catch (err) {
								if (typeof errorHandlers[k] === "function") {
									try {
										errorHandlers[k](err, {
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k]
										});
									} catch (err2) {
										if (options.onErrored) {
											options.onErrored({
												type: "accept-error-handler-errored",
												moduleId: outdatedModuleId,
												dependencyId: dependenciesForCallbacks[k],
												error: err2,
												originalError: err
											});
										}
										if (!options.ignoreErrored) {
											reportError(err2);
											reportError(err);
										}
									}
								} else {
									if (options.onErrored) {
										options.onErrored({
											type: "accept-errored",
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k],
											error: err
										});
									}
									if (!options.ignoreErrored) {
										reportError(err);
									}
								}
							}
						}
					}
				}
			}

			// Load self accepted modules
			for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
				var item = outdatedSelfAcceptedModules[o];
				var moduleId = item.module;
				try {
					item.require(moduleId);
				} catch (err) {
					if (typeof item.errorHandler === "function") {
						try {
							item.errorHandler(err, {
								moduleId: moduleId,
								module: __webpack_require__.c[moduleId]
							});
						} catch (err1) {
							if (options.onErrored) {
								options.onErrored({
									type: "self-accept-error-handler-errored",
									moduleId: moduleId,
									error: err1,
									originalError: err
								});
							}
							if (!options.ignoreErrored) {
								reportError(err1);
								reportError(err);
							}
						}
					} else {
						if (options.onErrored) {
							options.onErrored({
								type: "self-accept-errored",
								moduleId: moduleId,
								error: err
							});
						}
						if (!options.ignoreErrored) {
							reportError(err);
						}
					}
				}
			}

			return outdatedModules;
		}
	};
}

__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
	if (!currentUpdate) {
		currentUpdate = {};
		currentUpdateRuntime = [];
		currentUpdateRemovedChunks = [];
		applyHandlers.push(applyHandler);
	}
	if (!__webpack_require__.o(currentUpdate, moduleId)) {
		currentUpdate[moduleId] = __webpack_require__.m[moduleId];
	}
};

__webpack_require__.hmrC.require = function (
	chunkIds,
	removedChunks,
	removedModules,
	promises,
	applyHandlers,
	updatedModulesList
) {
	applyHandlers.push(applyHandler);
	currentUpdateChunks = {};
	currentUpdateRemovedChunks = removedChunks;
	currentUpdate = removedModules.reduce(function (obj, key) {
		obj[key] = false;
		return obj;
	}, {});
	currentUpdateRuntime = [];
	chunkIds.forEach(function (chunkId) {
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId] !== undefined
		) {
			promises.push(loadUpdateChunk(chunkId, updatedModulesList));
			currentUpdateChunks[chunkId] = true;
		} else {
			currentUpdateChunks[chunkId] = false;
		}
	});
	if (__webpack_require__.f) {
		__webpack_require__.f.requireHmr = function (chunkId, promises) {
			if (
				currentUpdateChunks &&
				__webpack_require__.o(currentUpdateChunks, chunkId) &&
				!currentUpdateChunks[chunkId]
			) {
				promises.push(loadUpdateChunk(chunkId));
				currentUpdateChunks[chunkId] = true;
			}
		};
	}
};
__webpack_require__.hmrM = () => {
	return Promise.resolve()
		.then(() => {
			return require("./" + __webpack_require__.hmrF());
		})['catch']((err) => {
			if (err.code !== 'MODULE_NOT_FOUND') throw err;
		});
};
      __webpack_require__.cssHotUpdateList = [["main",".rspeedy/main/main.a55858ac9a2f54dc.css.hot-update.json"]];
    

    // TODO: replace this with `withLoading`
    if (__webpack_require__.f) {
        // require() chunk loading for javascript
        __webpack_require__.f.require = function (chunkId, promises) {
            var installedChunkData = installedChunks[chunkId];
            // "1" is the signal for "already loaded"
            if (installedChunkData !== 1) {
                if (installedChunkData) {
                    // array of [resolve, reject, promise] means "currently loading"
                    promises.push(installedChunkData[2]);
                }
                else {
                    if ("true") {
                        if (__webpack_require__.lynx_aci
                            && __webpack_require__.lynx_aci[chunkId]) {
                            installedChunkData = installedChunks[chunkId] = [null, null];
                            const promise = lynx.loadLazyBundle(__webpack_require__.p
                                + __webpack_require__.lynx_aci[chunkId]).then((exports) => {
                                installChunk(exports);
                                return exports;
                            });
                            installedChunkData[2] = promise;
                            promises.push(promise);
                            return;
                        }
                        const promise = new Promise((resolve, reject) => {
                            installedChunkData = installedChunks[chunkId] = [resolve, reject];
                            lynx.requireModuleAsync(__webpack_require__.p
                                + __webpack_require__.u(chunkId), (err, exports) => {
                                if (err) {
                                    reject(err);
                                    return;
                                }
                                installChunk(exports);
                                resolve(exports);
                            });
                        });
                        installedChunkData[2] = promise;
                        promises.push(promise);
                    }
                    else {
                        installedChunks[chunkId] = 1;
                    }
                }
            }
        };
    }
    if (typeof installChunk !== 'undefined') {
        __webpack_require__.C = installChunk;
    }
    if (__webpack_require__.O) {
        __webpack_require__.O.require = function (chunkId) {
            // "1" is the signal for "already loaded"
            return installedChunks[chunkId] === 1;
        };
    }
    function loadUpdateChunk(chunkId, updatedModulesList) {
        return new Promise((resolve, reject) => {
            lynx.requireModuleAsync(__webpack_require__.p
                + __webpack_require__.hu(chunkId), (err, update) => {
                if (err) {
                    reject(err);
                    return;
                }
                var updatedModules = update.modules;
                var runtime = update.runtime;
                for (var moduleId in updatedModules) {
                    if (__webpack_require__.o(updatedModules, moduleId)) {
                        currentUpdate[moduleId] = updatedModules[moduleId];
                        if (updatedModulesList)
                            updatedModulesList.push(moduleId);
                    }
                }
                if (runtime)
                    currentUpdateRuntime.push(runtime);
                resolve();
            });
        });
    }

    var currentUpdateChunks;
    var currentUpdate;
    var currentUpdateRemovedChunks;
    var currentUpdateRuntime;
    function applyHandler(options) {
        if (__webpack_require__.f) {
            delete __webpack_require__.f.requireHmr;
        }
        currentUpdateChunks = undefined;
        function getAffectedModuleEffects(updateModuleId) {
            var outdatedModules = [updateModuleId];
            var outdatedDependencies = {};
            var queue = outdatedModules.map(function (id) {
                return {
                    chain: [id],
                    id: id,
                };
            });
            while (queue.length > 0) {
                var queueItem = queue.pop();
                var moduleId = queueItem.id;
                var chain = queueItem.chain;
                var module = __webpack_require__.c[moduleId];
                if (!module
                    || (module.hot._selfAccepted && !module.hot._selfInvalidated)) {
                    continue;
                }
                if (module.hot._selfDeclined) {
                    return {
                        type: 'self-declined',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                if (module.hot._main) {
                    return {
                        type: 'unaccepted',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                for (var i = 0; i < module.parents.length; i++) {
                    var parentId = module.parents[i];
                    var parent = __webpack_require__.c[parentId];
                    if (!parent)
                        continue;
                    if (parent.hot._declinedDependencies[moduleId]) {
                        return {
                            type: 'declined',
                            chain: chain.concat([parentId]),
                            moduleId: moduleId,
                            parentId: parentId,
                        };
                    }
                    if (outdatedModules.indexOf(parentId) !== -1)
                        continue;
                    if (parent.hot._acceptedDependencies[moduleId]) {
                        if (!outdatedDependencies[parentId]) {
                            outdatedDependencies[parentId] = [];
                        }
                        addAllToSet(outdatedDependencies[parentId], [moduleId]);
                        continue;
                    }
                    delete outdatedDependencies[parentId];
                    outdatedModules.push(parentId);
                    queue.push({
                        chain: chain.concat([parentId]),
                        id: parentId,
                    });
                }
            }
            return {
                type: 'accepted',
                moduleId: updateModuleId,
                outdatedModules: outdatedModules,
                outdatedDependencies: outdatedDependencies,
            };
        }
        function addAllToSet(a, b) {
            for (var i = 0; i < b.length; i++) {
                var item = b[i];
                if (a.indexOf(item) === -1)
                    a.push(item);
            }
        }
        // at begin all updates modules are outdated
        // the "outdated" status can propagate to parents if they don't accept the children
        var outdatedDependencies = {};
        var outdatedModules = [];
        var appliedUpdate = {};
        var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
            console.warn('[HMR] unexpected require(' + module.id + ') to disposed module');
        };
        for (var moduleId in currentUpdate) {
            if (__webpack_require__.o(currentUpdate, moduleId)) {
                var newModuleFactory = currentUpdate[moduleId];
                /** @type {TODO} */
                var result;
                if (newModuleFactory) {
                    result = getAffectedModuleEffects(moduleId);
                }
                else {
                    result = {
                        type: 'disposed',
                        moduleId: moduleId,
                    };
                }
                /** @type {Error|false} */
                var abortError = false;
                var doApply = false;
                var doDispose = false;
                var chainInfo = '';
                if (result.chain) {
                    chainInfo = '\nUpdate propagation: ' + result.chain.join(' -> ');
                }
                switch (result.type) {
                    case 'self-declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of self decline: '
                                + result.moduleId
                                + chainInfo);
                        }
                        break;
                    case 'declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of declined dependency: '
                                + result.moduleId
                                + ' in '
                                + result.parentId
                                + chainInfo);
                        }
                        break;
                    case 'unaccepted':
                        if (options.onUnaccepted)
                            options.onUnaccepted(result);
                        if (!options.ignoreUnaccepted) {
                            abortError = new Error('Aborted because ' + moduleId + ' is not accepted' + chainInfo);
                        }
                        break;
                    case 'accepted':
                        if (options.onAccepted)
                            options.onAccepted(result);
                        doApply = true;
                        break;
                    case 'disposed':
                        if (options.onDisposed)
                            options.onDisposed(result);
                        doDispose = true;
                        break;
                    default:
                        throw new Error('Un-exception type ' + result.type);
                }
                if (abortError) {
                    return {
                        error: abortError,
                    };
                }
                if (doApply) {
                    appliedUpdate[moduleId] = newModuleFactory;
                    addAllToSet(outdatedModules, result.outdatedModules);
                    for (moduleId in result.outdatedDependencies) {
                        if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
                            if (!outdatedDependencies[moduleId]) {
                                outdatedDependencies[moduleId] = [];
                            }
                            addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
                        }
                    }
                }
                if (doDispose) {
                    addAllToSet(outdatedModules, [result.moduleId]);
                    appliedUpdate[moduleId] = warnUnexpectedRequire;
                }
            }
        }
        currentUpdate = undefined;
        // Store self accepted outdated modules to require them later by the module system
        var outdatedSelfAcceptedModules = [];
        for (var j = 0; j < outdatedModules.length; j++) {
            var outdatedModuleId = outdatedModules[j];
            var module = __webpack_require__.c[outdatedModuleId];
            if (module
                && (module.hot._selfAccepted || module.hot._main)
                // removed self-accepted modules should not be required
                && appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire
                // when called invalidate self-accepting is not possible
                && !module.hot._selfInvalidated) {
                outdatedSelfAcceptedModules.push({
                    module: outdatedModuleId,
                    require: module.hot._requireSelf,
                    errorHandler: module.hot._selfAccepted,
                });
            }
        }
        var moduleOutdatedDependencies;
        return {
            dispose: function () {
                currentUpdateRemovedChunks.forEach(function (chunkId) {
                    delete installedChunks[chunkId];
                });
                currentUpdateRemovedChunks = undefined;
                var idx;
                var queue = outdatedModules.slice();
                while (queue.length > 0) {
                    var moduleId = queue.pop();
                    var module = __webpack_require__.c[moduleId];
                    if (!module)
                        continue;
                    var data = {};
                    // Call dispose handlers
                    var disposeHandlers = module.hot._disposeHandlers;
                    for (j = 0; j < disposeHandlers.length; j++) {
                        disposeHandlers[j].call(null, data);
                    }
                    __webpack_require__.hmrD[moduleId] = data;
                    // disable module (this disables requires from this module)
                    module.hot.active = false;
                    // remove module from cache
                    delete __webpack_require__.c[moduleId];
                    // when disposing there is no need to call dispose handler
                    delete outdatedDependencies[moduleId];
                    // remove "parents" references from all children
                    for (j = 0; j < module.children.length; j++) {
                        var child = __webpack_require__.c[module.children[j]];
                        if (!child)
                            continue;
                        idx = child.parents.indexOf(moduleId);
                        if (idx >= 0) {
                            child.parents.splice(idx, 1);
                        }
                    }
                }
                // remove outdated dependency from module children
                var dependency;
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            for (j = 0; j < moduleOutdatedDependencies.length; j++) {
                                dependency = moduleOutdatedDependencies[j];
                                idx = module.children.indexOf(dependency);
                                if (idx >= 0)
                                    module.children.splice(idx, 1);
                            }
                        }
                    }
                }
            },
            apply: function (reportError) {
                // insert new code
                for (var updateModuleId in appliedUpdate) {
                    if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
                        __webpack_require__.m[updateModuleId] =
                            appliedUpdate[updateModuleId];
                    }
                }
                // run new runtime modules
                for (var i = 0; i < currentUpdateRuntime.length; i++) {
                    currentUpdateRuntime[i](__webpack_require__);
                }
                // call accept handlers
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        var module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            var callbacks = [];
                            var errorHandlers = [];
                            var dependenciesForCallbacks = [];
                            for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
                                var dependency = moduleOutdatedDependencies[j];
                                var acceptCallback = module.hot._acceptedDependencies[dependency];
                                var errorHandler = module.hot._acceptedErrorHandlers[dependency];
                                if (acceptCallback) {
                                    if (callbacks.indexOf(acceptCallback) !== -1)
                                        continue;
                                    callbacks.push(acceptCallback);
                                    errorHandlers.push(errorHandler);
                                    dependenciesForCallbacks.push(dependency);
                                }
                            }
                            for (var k = 0; k < callbacks.length; k++) {
                                try {
                                    callbacks[k].call(null, moduleOutdatedDependencies);
                                }
                                catch (err) {
                                    if (typeof errorHandlers[k] === 'function') {
                                        try {
                                            errorHandlers[k](err, {
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                            });
                                        }
                                        catch (err2) {
                                            if (options.onErrored) {
                                                options.onErrored({
                                                    type: 'accept-error-handler-errored',
                                                    moduleId: outdatedModuleId,
                                                    dependencyId: dependenciesForCallbacks[k],
                                                    error: err2,
                                                    originalError: err,
                                                });
                                            }
                                            if (!options.ignoreErrored) {
                                                reportError(err2);
                                                reportError(err);
                                            }
                                        }
                                    }
                                    else {
                                        if (options.onErrored) {
                                            options.onErrored({
                                                type: 'accept-errored',
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                                error: err,
                                            });
                                        }
                                        if (!options.ignoreErrored) {
                                            reportError(err);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // Load self accepted modules
                for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
                    var item = outdatedSelfAcceptedModules[o];
                    var moduleId = item.module;
                    try {
                        item.require(moduleId);
                    }
                    catch (err) {
                        if (typeof item.errorHandler === 'function') {
                            try {
                                item.errorHandler(err, {
                                    moduleId: moduleId,
                                    module: __webpack_require__.c[moduleId],
                                });
                            }
                            catch (err2) {
                                if (options.onErrored) {
                                    options.onErrored({
                                        type: 'self-accept-error-handler-errored',
                                        moduleId: moduleId,
                                        error: err2,
                                        originalError: err,
                                    });
                                }
                                if (!options.ignoreErrored) {
                                    reportError(err2);
                                    reportError(err);
                                }
                            }
                        }
                        else {
                            if (options.onErrored) {
                                options.onErrored({
                                    type: 'self-accept-errored',
                                    moduleId: moduleId,
                                    error: err,
                                });
                            }
                            if (!options.ignoreErrored) {
                                reportError(err);
                            }
                        }
                    }
                }
                return outdatedModules;
            },
        };
    }
    __webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
        if (!currentUpdate) {
            currentUpdate = {};
            currentUpdateRuntime = [];
            currentUpdateRemovedChunks = [];
            applyHandlers.push(applyHandler);
        }
        if (!__webpack_require__.o(currentUpdate, moduleId)) {
            currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        }
    };
    __webpack_require__.hmrC.require = function (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
        applyHandlers.push(applyHandler);
        currentUpdateChunks = {};
        currentUpdateRemovedChunks = removedChunks;
        currentUpdate = removedModules.reduce(function (obj, key) {
            obj[key] = false;
            return obj;
        }, {});
        currentUpdateRuntime = [];
        chunkIds.forEach(function (chunkId) {
            if (__webpack_require__.o(installedChunks, chunkId)
                && installedChunks[chunkId] !== undefined) {
                promises.push(loadUpdateChunk(chunkId, updatedModulesList));
                currentUpdateChunks[chunkId] = true;
            }
            else {
                currentUpdateChunks[chunkId] = false;
            }
        });
        if (__webpack_require__.f) {
            __webpack_require__.f.requireHmr = function (chunkId, promises) {
                if (currentUpdateChunks
                    && __webpack_require__.o(currentUpdateChunks, chunkId)
                    && !currentUpdateChunks[chunkId]) {
                    promises.push(loadUpdateChunk(chunkId));
                    currentUpdateChunks[chunkId] = true;
                }
            };
        }
    };
    __webpack_require__.hmrM = function () {
        return new Promise((resolve, reject) => lynx.requireModuleAsync(__webpack_require__.p
            + __webpack_require__.hmrF(), (err, ret) => {
            if (err)
                return reject(err);
            resolve(ret);
        }))['catch'](function (err) {
            if (err.code !== 'MODULE_NOT_FOUND')
                throw err;
        });
    };
})();
/************************************************************************/
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__("(react:background)/./src/index.tsx");
__webpack_require__("(react:background)/./node_modules/@rspack/core/hot/dev-server.js");
__webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/index.js?hostname=192.168.64.1&port=3000&pathname=/rsbuild-hmr&hot=true&live-reload=true&protocol=ws");
var __webpack_exports__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js");


    });
    return tt.require("background.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://192.168.64.1:3000/.rspeedy/main/background.js.map