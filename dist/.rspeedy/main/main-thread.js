'use strict';var globDynamicComponentEntry=globDynamicComponentEntry||'__Card__';
"use strict";
var __webpack_modules__ = ({
"(react:main-thread)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.lepus.cjs": (function () {
function main() {
    try {
        lynx.getJSContext().addEventListener('lynx.hmr.css', (event)=>{
            try {
                const { data: { cssId, content, deps, entry } } = event;
                // Update the css deps first because the css deps are updated actually.
                if (Array.isArray(deps[cssId])) deps[cssId].forEach((depCSSId)=>{
                    lynx.getDevtool().replaceStyleSheetByIdWithBase64(Number(depCSSId), content, entry);
                });
                lynx.getDevtool().replaceStyleSheetByIdWithBase64(Number(cssId), content, entry);
                __FlushElementTree();
            } catch (error) {
                // TODO: use webpack-dev-server logger
                console.error(error);
            }
        });
    } catch (error) {
        // TODO: use webpack-dev-server logger
        console.warn(`[HMR] no lynx.getJSContext() found, will not HMR CSS`);
        console.warn(error);
    }
}
main();
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
  jsx: () => (createVNode),
  jsxDEV: () => (createVNode),
  jsxs: () => (createVNode)
});
/* ESM import */var _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function createVNode(type, props, _key) {
    if (typeof type === 'string') {
        const r = new _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.SnapshotInstance(type);
        r.props = props;
        r.__k = null;
        r.__ = null;
        r.__b = 0;
        r.__e = null;
        r.__d = undefined;
        r.__c = null;
        // r.__v = --vnodeId;
        r.__i = -1;
        r.__u = 0;
        return r;
    } else if (typeof type === 'function') {
        let normalizedProps = props;
        // let ref;
        if ('ref' in normalizedProps) {
            normalizedProps = {};
            for(let i in props){
                if (i == 'ref') ;
                else normalizedProps[i] = props[i];
            }
        }
        let defaultProps;
        if (defaultProps = type.defaultProps) {
            for(let i in defaultProps)if (typeof normalizedProps[i] === 'undefined') normalizedProps[i] = defaultProps[i];
        }
        return {
            type,
            props: normalizedProps,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            // __v: --vnodeId,
            __i: -1,
            __u: 0
        };
    }
}


// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    const useChanged = (callback)=>{};
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
        }
        constructor(props){
            super(props);
            this.state = {
                ...this.state,
                ...lynx.__initData
            };
        }
    }
    return C;
} //# sourceMappingURL=initData.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComponentFromReactRuntime: () => (ComponentFromReactRuntime),
  wrapWithLynxComponent: () => (wrapWithLynxComponent)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initProfileHook: () => (initProfileHook)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGesture: () => (processGesture)
});
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js");
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");


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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/hooks/dist/hooks.mjs");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useLynxGlobalEventListener: () => (useLynxGlobalEventListener)
});
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
 */ function useLynxGlobalEventListener() {} //# sourceMappingURL=useLynxGlobalEventListener.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  diffArrayAction: () => (diffArrayAction),
  diffArrayLepus: () => (diffArrayLepus),
  hydrate: () => (hydrate),
  isEmptyDiffResult: () => (isEmptyDiffResult)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Children),
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_5__.Component),
  Fragment: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Fragment),
  InitDataConsumer: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.InitDataConsumer),
  InitDataProvider: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.MainThreadRef),
  PureComponent: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.PureComponent),
  Suspense: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Suspense),
  createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_5__.createContext),
  createElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createElement),
  createRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createRef),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  forwardRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.forwardRef),
  isValidElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.isValidElement),
  lazy: () => (lazy),
  memo: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.memo),
  root: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.root),
  runOnBackground: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.runOnMainThread),
  useCallback: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useCallback),
  useContext: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useContext),
  useDebugValue: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useDebugValue),
  useEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useEffect),
  useErrorBoundary: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useErrorBoundary),
  useId: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useId),
  useImperativeHandle: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle),
  useInitData: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useInitData),
  useInitDataChanged: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useInitDataChanged),
  useLayoutEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect),
  useLynxGlobalEventListener: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useMainThreadRef),
  useMemo: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo),
  useReducer: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useReducer),
  useRef: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useRef),
  useState: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useState),
  useSyncExternalStore: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore),
  withInitDataInState: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.withInitDataInState)
});
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _lynx_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js");
/* ESM import */var _lynx_component_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lynx_component_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.








const lazy = _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__.mainThreadLazy;
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _compat_componentIs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js");
/* ESM import */var _snapshot_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_workletEvent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _snapshot_gesture_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _snapshot_platformInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _compat_lynxComponent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js");
/* ESM import */var _worklet_transformToWorklet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js");
/* ESM import */var _worklet_hmr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js");
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyBackground: () => (destroyBackground)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _patch_commit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");





let globalFlushOptions = {};
const globalCommitTaskMap = /*@__PURE__*/ new Map();
let nextCommitTaskId = 1;
let globalBackgroundSnapshotInstancesToRemove = [];
function replaceCommitHook() {
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMMIT];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMMIT] = async (vnode, commitQueue)=>{
        // for testing only
        commitQueue.length = 0;
        return;
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
                reloadVersion: (0,_pass_js__WEBPACK_IMPORTED_MODULE_4__.getReloadVersion)()
            }
        };
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.pack_changes_end);
        if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.globalPipelineOptions) {
            obj.patchOptions.pipelineOptions = _lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.globalPipelineOptions;
            (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.setPipeline)(undefined);
        }
        if (true) console.profileEnd();
        lynx.getNativeApp().callLepusMethod(_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.patchUpdate, obj, resolve);
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatchApply.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  snapshotPatchApply: () => (snapshotPatchApply)
});
/* ESM import */var _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");


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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/updateMainThread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  commitMainThreadPatchUpdate: () => (commitMainThreadPatchUpdate),
  injectUpdateMainThread: () => (injectUpdateMainThread)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _snapshotPatchApply_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatchApply.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  reloadBackground: () => (reloadBackground),
  reloadMainThread: () => (reloadMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
/* ESM import */var _render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js");
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _worklet_destroy_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderMainThread: () => (renderMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _opcodes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js");
/* ESM import */var _renderToOpcodes_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ListUpdateInfoRecording: () => (ListUpdateInfoRecording),
  __pendingListUpdates: () => (__pendingListUpdates),
  componentAtIndexFactory: () => (componentAtIndexFactory),
  enqueueComponentFactory: () => (enqueueComponentFactory),
  snapshotCreateList: () => (snapshotCreateList),
  snapshotDestroyList: () => (snapshotDestroyList)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/updateMainThread.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InitDataConsumer: () => (InitDataConsumer),
  InitDataProvider: () => (InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_7__.MainThreadRef),
  root: () => (root),
  runOnBackground: () => (/* reexport safe */ _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_6__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_5__.runOnMainThread),
  useInitData: () => (useInitData),
  useInitDataChanged: () => (useInitDataChanged),
  useLynxGlobalEventListener: () => (/* reexport safe */ _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_3__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_7__.useMainThreadRef),
  withInitDataInState: () => (/* reexport safe */ _compat_initData_js__WEBPACK_IMPORTED_MODULE_2__.withInitDataInState)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/preact/hooks/dist/hooks.mjs");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js");
/* ESM import */var _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js");
/* ESM import */var _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js");
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
        _root_js__WEBPACK_IMPORTED_MODULE_4__.__root.__jsx = jsx;
    },
    registerDataProcessors: (dataProcessorDefinition)=>{
        lynx.registerDataProcessors(dataProcessorDefinition);
    }
};
const _InitData = /* @__PURE__ */ (0,_compat_initData_js__WEBPACK_IMPORTED_MODULE_2__.factory)({
    createContext: preact_compat__WEBPACK_IMPORTED_MODULE_0__.createContext,
    useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_0__.createElement,
    useLynxGlobalEventListener: _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_3__.useLynxGlobalEventListener
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _debug_profile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js");
/* ESM import */var _lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/updateMainThread.js");
/* ESM import */var _lynx_calledByNative_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/calledByNative.js");
/* ESM import */var _lynx_env_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js");
/* ESM import */var _lynx_injectLepusMethods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/injectLepusMethods.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// to make sure preact's hooks to register earlier than ours






// @ts-expect-error Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature
if (typeof globalThis.processEvalResult === 'undefined') globalThis.processEvalResult = (result, schema)=>{
    return result === null || result === void 0 ? void 0 : result(schema);
};
(0,_lynx_calledByNative_js__WEBPACK_IMPORTED_MODULE_3__.injectCalledByNative)();
(0,_lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_2__.injectUpdateMainThread)();
if (true) (0,_lynx_injectLepusMethods_js__WEBPACK_IMPORTED_MODULE_5__.injectLepusMethods)();
// TODO: replace this with __PROFILE__
if (true) (0,_debug_profile_js__WEBPACK_IMPORTED_MODULE_1__.initProfileHook)();
(0,_lynx_env_js__WEBPACK_IMPORTED_MODULE_4__.setupLynxEnv)(); //# sourceMappingURL=lynx.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/calledByNative.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectCalledByNative: () => (injectCalledByNative)
});
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js");
/* ESM import */var _lifecycle_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js");
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _performance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.










function injectCalledByNative() {
    const calledByNative = {
        renderPage,
        updatePage,
        updateGlobalProps,
        getPageData: function() {
            return null;
        },
        removeComponents: function() {}
    };
    Object.assign(globalThis, calledByNative);
}
function renderPage(data) {
    // reset `jsReady` state
    isJSReady = false;
    jsReadyEventIdSwap = {};
    lynx.__initData = data || {};
    (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_0__.setupPage)(__CreatePage('0', 0));
    _root_js__WEBPACK_IMPORTED_MODULE_4__.__root.ensureElements();
    (0,_lifecycle_render_js__WEBPACK_IMPORTED_MODULE_6__.renderMainThread)();
    // always call this before `__FlushElementTree`
    // (There is an implict `__FlushElementTree` in `renderPage`)
    _list_js__WEBPACK_IMPORTED_MODULE_9__.__pendingListUpdates.flush();
    if (true) jsReady();
    else {}
}
function updatePage(data, options) {
    if (options === null || options === void 0 ? void 0 : options.reloadTemplate) {
        (0,_lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_5__.reloadMainThread)(data, options);
        return;
    }
    if (options === null || options === void 0 ? void 0 : options.resetPageData) lynx.__initData = {};
    if (typeof data == 'object' && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isEmptyObject)(data)) {
        var _lynx;
        var ___initData;
        (___initData = (_lynx = lynx).__initData) !== null && ___initData !== void 0 ? ___initData : _lynx.__initData = {};
        Object.assign(lynx.__initData, data);
    }
    if (!isJSReady) {
        const oldRoot = _root_js__WEBPACK_IMPORTED_MODULE_4__.__root;
        (0,_root_js__WEBPACK_IMPORTED_MODULE_4__.setRoot)(new _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotInstance('root'));
        _root_js__WEBPACK_IMPORTED_MODULE_4__.__root.__jsx = oldRoot.__jsx;
        (0,_performance_js__WEBPACK_IMPORTED_MODULE_8__.setPipeline)(options === null || options === void 0 ? void 0 : options.pipelineOptions);
        (0,_performance_js__WEBPACK_IMPORTED_MODULE_8__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_8__.PerformanceTimingKeys.update_diff_vdom_start);
        _list_js__WEBPACK_IMPORTED_MODULE_9__.__pendingListUpdates.clear();
        // ignore ref & unref before jsReady
        (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__.takeGlobalRefPatchMap)();
        (0,_lifecycle_render_js__WEBPACK_IMPORTED_MODULE_6__.renderMainThread)();
        // As said by codename `jsReadyEventIdSwap`, this swap will only be used for event remap,
        // because ref & unref cause by previous render will be ignored
        (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_7__.hydrate)(oldRoot, _root_js__WEBPACK_IMPORTED_MODULE_4__.__root, {
            skipUnRef: true,
            swap: jsReadyEventIdSwap
        });
        // always call this before `__FlushElementTree`
        _list_js__WEBPACK_IMPORTED_MODULE_9__.__pendingListUpdates.flush();
        (0,_performance_js__WEBPACK_IMPORTED_MODULE_8__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_8__.PerformanceTimingKeys.update_diff_vdom_end);
    }
    if (options) __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_0__.__page, options);
    else __FlushElementTree();
}
function updateGlobalProps(_data, options) {
    if (options) __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_0__.__page, options);
    else __FlushElementTree();
}
let isJSReady;
let jsReadyEventIdSwap;
function jsReady() {
    __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(_root_js__WEBPACK_IMPORTED_MODULE_4__.__root),
            refPatch: JSON.stringify((0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__.takeGlobalRefPatchMap)()),
            jsReadyEventIdSwap
        }
    ]);
    isJSReady = true;
    jsReadyEventIdSwap = {};
}
/**
 * @internal
 */  //# sourceMappingURL=calledByNative.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js": (function () {
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
//# sourceMappingURL=component.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __dynamicImport: () => (__dynamicImport),
  loadDynamicJS: () => (loadDynamicJS)
});
/* ESM import */var _lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function loadDynamicJS(url) {
    _ReportError(new Error(`A dynamic import (to "${url}") is leaked to Lepus bundle.`), {
        errorCode: 202
    });
    return Promise.reject();
}
function __dynamicImport(url, options) {
    var _options_with;
    const t = options === null || options === void 0 ? void 0 : (_options_with = options.with) === null || _options_with === void 0 ? void 0 : _options_with.type;
    if (t === 'component' || t === 'tsx' || t === 'jsx') return (0,_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__.loadLazyBundle)(url);
    else return loadDynamicJS(url);
} //# sourceMappingURL=dynamic-js.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupLynxEnv: () => (setupLynxEnv)
});
function setupLynxEnv() {
    // @ts-ignore
    lynx.__initData = {};
    // @ts-ignore
    globalThis.SystemInfo = lynx.SystemInfo || {};
    lynx.reportError = function(e) {
        _ReportError(e, {
            errorCode: 1101
        });
    };
    lynx.triggerGlobalEventFromLepus = function(eventName, params) {
        __OnLifecycleEvent([
            'globalEventFromLepus',
            [
                eventName,
                params
            ]
        ]);
    };
    {
        function __name(empty) {
            return `Native${empty}Modules`;
        }
        // TODO(hongzhiyuan.hzy): make sure this is run before any other code (especially code access `NativeModules`)
        // @ts-ignore
        if (typeof globalThis[__name('')] === 'undefined') globalThis[__name('')] = undefined;
    }
    lynx.registerDataProcessors = function(dataProcessorDefinition) {
        let hasDefaultDataProcessorExecuted = false;
        // @ts-ignore
        globalThis.processData = (data, processorName)=>{
            if (true) console.profile('processData');
            let r;
            try {
                var _dataProcessorDefinition_dataProcessors_processorName, _dataProcessorDefinition_dataProcessors, _dataProcessorDefinition_defaultDataProcessor;
                var _dataProcessorDefinition_dataProcessors_processorName1, _dataProcessorDefinition_defaultDataProcessor1;
                if (processorName) r = (_dataProcessorDefinition_dataProcessors_processorName1 = dataProcessorDefinition === null || dataProcessorDefinition === void 0 ? void 0 : (_dataProcessorDefinition_dataProcessors = dataProcessorDefinition.dataProcessors) === null || _dataProcessorDefinition_dataProcessors === void 0 ? void 0 : (_dataProcessorDefinition_dataProcessors_processorName = _dataProcessorDefinition_dataProcessors[processorName]) === null || _dataProcessorDefinition_dataProcessors_processorName === void 0 ? void 0 : _dataProcessorDefinition_dataProcessors_processorName.call(_dataProcessorDefinition_dataProcessors, data)) !== null && _dataProcessorDefinition_dataProcessors_processorName1 !== void 0 ? _dataProcessorDefinition_dataProcessors_processorName1 : data;
                else r = (_dataProcessorDefinition_defaultDataProcessor1 = dataProcessorDefinition === null || dataProcessorDefinition === void 0 ? void 0 : (_dataProcessorDefinition_defaultDataProcessor = dataProcessorDefinition.defaultDataProcessor) === null || _dataProcessorDefinition_defaultDataProcessor === void 0 ? void 0 : _dataProcessorDefinition_defaultDataProcessor.call(dataProcessorDefinition, data)) !== null && _dataProcessorDefinition_defaultDataProcessor1 !== void 0 ? _dataProcessorDefinition_defaultDataProcessor1 : data;
            } catch (e) {
                lynx.reportError(e);
                // when there is an error
                // we should perform like dataProcessor returns nothing
                // so use `{}` rather than `data`
                r = {};
            }
            if (true) console.profileEnd();
            if (hasDefaultDataProcessorExecuted === false) {
                // @ts-ignore
                if (globalThis.__I18N_RESOURCE_TRANSLATION__) r = {
                    ...r,
                    // @ts-ignore
                    __I18N_RESOURCE_TRANSLATION__: globalThis.__I18N_RESOURCE_TRANSLATION__
                };
                // @ts-ignore
                if (false) {}
            }
            if (processorName) ;
            else hasDefaultDataProcessorExecuted = true;
            return r;
        // TODO
        };
    };
    // register empty DataProcessors to make sure `globalThis.processData` is set
    lynx.registerDataProcessors();
} //# sourceMappingURL=env.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/injectLepusMethods.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectLepusMethods: () => (injectLepusMethods)
});
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function injectLepusMethods() {
    Object.assign(globalThis, {
        getUniqueIdListBySnapshotId,
        getSnapshotIdByUniqueId
    });
}
/**
 * Get the list of `unique_id` of the fiber element by the SnapshotInstance `__id`.
 */ function getUniqueIdListBySnapshotId({ snapshotId }) {
    var _si___elements;
    const si = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.get(snapshotId);
    if (si === null || si === void 0 ? void 0 : (_si___elements = si.__elements) === null || _si___elements === void 0 ? void 0 : _si___elements.length) {
        const uniqueIdList = [];
        for (const element of si.__elements){
            const uniqueId = __GetElementUniqueID(element);
            uniqueIdList.push(uniqueId);
        }
        return {
            uniqueIdList
        };
    }
    return null;
}
/**
 * Get the SnapshotInstance `__id` of the fiber element by the `unique_id`.
 */ function getSnapshotIdByUniqueId({ uniqueId }) {
    for (const si of _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.values()){
        var _si___elements;
        if (si === null || si === void 0 ? void 0 : (_si___elements = si.__elements) === null || _si___elements === void 0 ? void 0 : _si___elements.length) for (const element of si.__elements){
            const unique_id = __GetElementUniqueID(element);
            if (unique_id === uniqueId) return {
                snapshotId: si.__id
            };
        }
    }
    return null;
}
/**
 * @internal
 */  //# sourceMappingURL=injectLepusMethods.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadLazyBundle: () => (loadLazyBundle),
  mainThreadLazy: () => (mainThreadLazy),
  makeSyncThen: () => (makeSyncThen)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
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
    {
        const query = __QueryComponent(source);
        let result;
        try {
            result = query.evalResult;
        } catch (e) {
            // Here we cannot return a rejected promise
            // (which will eventually be an unhandled rejection and cause unnecessary redbox)
            // But we still need a object in shape of Promise
            // So we return a Promise which will never resolve or reject,
            // which fit our principle "lepus run only once at first-screen" better
            return new Promise(()=>{});
        }
        const r = Promise.resolve(result);
        // Why we should modify the implementation of `then`?
        // We should make it `sync` so lepus first-screen render can use result above instantly
        // We also should keep promise shape
        // @ts-ignore
        r.then = makeSyncThen(result);
        return r;
    }
    throw new Error('unreachable');
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
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
        oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff(vnode);
    };
}
/**
 * @internal
 */  //# sourceMappingURL=performance.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderOpcodesInto: () => (renderOpcodesInto)
});
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __root: () => (__root),
  setRoot: () => (setRoot)
});
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let __root;
function setRoot(root) {
    __root = root;
}
setRoot(new _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotInstance('root'));
 //# sourceMappingURL=root.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");



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
                    /* v8 ignore stop */ return [
                        __CreateElement('raw-text', __pageId)
                    ];
                },
                update: [
                    (ctx)=>{
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
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isDirectOrDeepEqual)(oldValue, newValue)) ;
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateGesture: () => (updateGesture)
});
/* ESM import */var _gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js");

function updateGesture(snapshot, expIndex, _oldValue, elementIndex, workletType) {
    if (!snapshot.__elements) return;
    if (true) console.profile('updateGesture');
    const value = snapshot.__values[expIndex];
    if (workletType === 'main-thread') (0,_gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__.processGesture)(snapshot.__elements[elementIndex], value);
    if (true) console.profileEnd();
} //# sourceMappingURL=gesture.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  platformInfoAttributes: () => (platformInfoAttributes),
  updateListItemPlatformInfo: () => (updateListItemPlatformInfo)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");

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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");



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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformSpread: () => (transformSpread),
  updateSpread: () => (updateSpread)
});
/* ESM import */var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _workletEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _gesture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletEvent: () => (updateWorkletEvent)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletRef: () => (updateWorkletRef),
  workletUnRef: () => (workletUnRef)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyTasks: () => (destroyTasks),
  destroyWorklet: () => (destroyWorklet)
});
/* ESM import */var _workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const destroyTasks = [];
function destroyWorklet() {
    (0,_workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__.takeWorkletRefInitValuePatch)();
    for (const task of destroyTasks)task();
    destroyTasks.length = 0;
} //# sourceMappingURL=destroy.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onFunctionCall: () => (onFunctionCall)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _indexMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



let resolveMap;
function initReturnValueListener() {
    const context = lynx.getJSContext();
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearConfigCacheForTesting: () => (clearConfigCacheForTesting),
  isMtsEnabled: () => (isMtsEnabled),
  isRunOnBackgroundEnabled: () => (isRunOnBackgroundEnabled)
});
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletOnBackground: () => (registerWorkletOnBackground)
});
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletCtx: () => (registerWorkletCtx),
  runJSFunction: () => (runJSFunction),
  runOnBackground: () => (runOnBackground)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
/* ESM import */var _functionCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



/**
 * @internal
 */ function runJSFunction() {}
/**
 * @internal
 */ function registerWorkletCtx() {}
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
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_1__.isRunOnBackgroundEnabled)()) throw new Error('runOnBackground requires Lynx sdk version 2.16.');
    const obj = f;
    if (obj._error) throw new Error(obj._error);
    return async (...params)=>{
        return new Promise((resolve)=>{
            const resolveId = (0,_functionCall_js__WEBPACK_IMPORTED_MODULE_2__.onFunctionCall)(resolve);
            lynx.getJSContext().dispatchEvent({
                type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runOnBackground,
                data: JSON.stringify({
                    obj: {
                        _jsFnId: obj._jsFnId,
                        _execId: obj._execId
                    },
                    params,
                    resolveId
                })
            });
        });
    };
}
 //# sourceMappingURL=runOnBackground.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runOnMainThread: () => (runOnMainThread)
});
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
    throw new Error('runOnMainThread can only be used on the background thread.');
} //# sourceMappingURL=runOnMainThread.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainThreadRef: () => (MainThreadRef),
  useMainThreadRef: () => (useMainThreadRef)
});
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");

class WorkletRef {
    get current() {
        if (true) /* v8 ignore next */ throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed outside of main thread script.');
        /* v8 ignore next */ return undefined;
    }
    set current(_) {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed outside of main thread script.');
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
        // Out of the js thread, the `WorkletRef` class here is just a placeholder and should not be accessed directly.
        // The real WorkletRef will be generated by the worklet runtime.
        this._id = -1;
        this._type = '__LEPUS__';
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
    }
}
function useMainThreadRef(initValue) {
    return (0,_hooks_react_js__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return new MainThreadRef(initValue);
    }, []);
} //# sourceMappingURL=workletRef.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addWorkletRefInitValue: () => (addWorkletRefInitValue),
  takeWorkletRefInitValuePatch: () => (takeWorkletRefInitValuePatch)
});
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var _loadRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js");
/* ESM import */var _bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js");
/* ESM import */var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


 //# sourceMappingURL=index.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadWorkletRuntime: () => (loadWorkletRuntime)
});
/* ESM import */var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js");
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}
 //# sourceMappingURL=global.js.map


}),
"(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/preact/hooks/dist/hooks.mjs");




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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/preact/dist/preact.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/preact/hooks/dist/hooks.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");

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
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/App.tsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  App: () => (App)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./src/App.css");
// import { useCallback, useEffect, useState } from '@lynx-js/react'



const __snapshot_835da_4eb9e_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_835da_4eb9e_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateRef */.updateRef)(snapshot, index, oldValue, 1, ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateRef */.updateRef)(snapshot, index, oldValue, 2, '')
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
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();
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
    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_835da_4eb9e_1, {
        values: [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .transformRef */.transformRef)(canvasRef),
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .transformRef */.transformRef)(descriptionRef)
        ]
    }, void 0, false, {
        fileName: "/Users/jonathanperis/Projects/hisllaylla-bird-lynx/src/App.tsx",
        lineNumber: 744,
        columnNumber: 5
    }, this));
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/index.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./src/App.tsx");



_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.root.render(/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App_js__WEBPACK_IMPORTED_MODULE_2__.App, {}, void 0, false, {
    fileName: "/Users/jonathanperis/Projects/hisllaylla-bird-lynx/src/index.tsx",
    lineNumber: 5,
    columnNumber: 13
}, undefined));
if (true) module.hot.accept();
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/App.css": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);


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
            return "main__main-thread." + __webpack_require__.h() + ".hot-update.json";
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
var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {"main__main-thread": 1,};
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
      __webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.a55858ac9a2f54dc.css.hot-update.json"]];
    

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
__webpack_require__("(react:main-thread)/./src/index.tsx");
var __webpack_exports__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.lepus.cjs");

//# sourceMappingURL=http://192.168.64.1:3000/.rspeedy/main/main-thread.js.map