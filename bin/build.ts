#!/usr/bin/env -S node --loader ts-node/esm

import browserslist from 'browserslist';
import { type BuildOptions, build } from 'esbuild';
import { esbuildPluginBrowserslist } from 'esbuild-plugin-browserslist';
import typescript from 'typescript';

(async () => {
  const entryPoints = ['./src/index.ts'];

  const esbuildOptions: BuildOptions = {
    entryPoints,
    bundle: true,
    minify: true,
    outdir: './dist',
    packages: 'external',
    plugins: [
      esbuildPluginBrowserslist(browserslist(), {
        printUnknownTargets: false,
      }),
    ],
    sourcemap: true,
  };

  try {
    await Promise.all([
      build({
        ...esbuildOptions,
        format: 'cjs',
        outExtension: {
          '.js': '.cjs',
        },
      }),

      build({
        ...esbuildOptions,
        format: 'esm',
      }),

      new Promise((resolve, reject) => {
        const res = typescript
          .createProgram(entryPoints, {
            declaration: true,
            declarationDir: esbuildOptions.outdir,
            emitDeclarationOnly: true,
            esModuleInterop: true,
            experimentalDecorators: true,
            jsx: typescript.JsxEmit.ReactJSX,
            module: typescript.ModuleKind.NodeNext,
            moduleResolution: typescript.ModuleResolutionKind.NodeNext,
            noEmitOnError: true,
            skipLibCheck: true,
            strict: true,
            target: typescript.ScriptTarget.ESNext,
          })
          .emit();
        /* eslint-enable import/no-named-as-default-member */
        const error = res.diagnostics.find((d) => d.code > 0);
        if (error) {
          reject(new Error(`Failed to build types (reason: ${error.messageText})`));
        } else {
          resolve(res);
        }
      }),
    ]);
  } catch (err) {
    console.error(err instanceof Error ? err.stack : String(err));
  }
})();
