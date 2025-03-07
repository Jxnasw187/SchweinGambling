import {
  componentOnReady
} from "/build/_shared/chunk-JX7OISDU.js";

// ../node_modules/@ionic/core/components/index8.js
var ION_CONTENT_TAG_NAME = "ION-CONTENT";
var ION_CONTENT_ELEMENT_SELECTOR = "ion-content";
var ION_CONTENT_CLASS_SELECTOR = ".ion-content-scroll-host";
var ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
var isIonContent = (el) => el.tagName === ION_CONTENT_TAG_NAME;
var getScrollElement = async (el) => {
  if (isIonContent(el)) {
    await new Promise((resolve) => componentOnReady(el, resolve));
    return el.getScrollElement();
  }
  return el;
};
var findClosestIonContent = (el) => {
  return el.closest(ION_CONTENT_SELECTOR);
};
var scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? "smooth" : "auto"
  }));
};
var scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }
  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? "smooth" : "auto"
  }));
};

export {
  getScrollElement,
  findClosestIonContent,
  scrollToTop,
  scrollByPoint
};
/*! Bundled license information:

@ionic/core/components/index8.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=/build/_shared/chunk-IQOGGHBC.js.map
