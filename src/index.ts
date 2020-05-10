import { Compiler } from "webpack";
import ejs from "ejs";

import template from "./template.ejs";

export interface Options {
  entryName?: string;
  url?: string;
}

export class WebpackRemaxPhoneFramePlugin {
  constructor(
    private options: Options = {
      entryName: "entry.html",
      url: "https://remaxjs.org",
    }
  ) {}

  apply(compiler: Compiler) {
    compiler.hooks.emit.tap("RemaxPhoneFrame", (compilation) => {
      const { options } = this;
      const { entryName, url } = options;
      const { assets } = compilation;
      const index = ejs.render(template, { entryName, url });
      if (!assets["index.html"]) return;

      assets["entry.html"] = assets["index.html"];
      assets["index.html"] = {
        source: () => index,
        size: () => index.length,
      };
    });
  }
}

module.exports = WebpackRemaxPhoneFramePlugin;
