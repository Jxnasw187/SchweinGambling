import {
  findClosestIonContent,
  scrollToTop
} from "/build/_shared/chunk-IQOGGHBC.js";
import "/build/_shared/chunk-KVR6M7Z5.js";
import {
  readTask,
  writeTask
} from "/build/_shared/chunk-FVCVUIKX.js";
import {
  componentOnReady
} from "/build/_shared/chunk-JX7OISDU.js";
import "/build/_shared/chunk-PNG5AS42.js";

// ../node_modules/@ionic/core/components/status-tap.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(async () => {
            contentEl.style.setProperty("--overflow", "hidden");
            await scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          });
        });
      }
    });
  });
};
export {
  startStatusTap
};
/*! Bundled license information:

@ionic/core/components/status-tap.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=/build/_shared/status-tap-W4J7JFSG.js.map
