import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const createBuild = (target, output) => ({
  input: 'src/index.ts',
  external: ['tinymce'],
  plugins: [
    typescript({
      target,
      // TypeScript 6 still emits ES5, but requires acknowledging its deprecation.
      ignoreDeprecations: target === 'ES5' ? '6.0' : undefined,
    }),
  ],
  output: output.map((options) => ({ ...options, sourcemap: true })),
});

// Preserve microbundle's Node 12 syntax target.
const nodeBuild = createBuild('ES2019', [
  { file: 'dist/index.module.js', format: 'es' },
  { file: 'dist/index.umd.js', format: 'umd' },
]);

const browserBuilds = [
  createBuild('ES5', [
    {
      file: 'dist/browser.umd.js',
      format: 'umd',
      plugins: [terser({ ecma: 5 })],
    },
  ]),
  createBuild('ES2017', [
    {
      file: 'dist/browser.module.js',
      format: 'es',
      plugins: [terser({ ecma: 2017, module: true })],
    },
  ]),
];

export default ({ configTarget }) => {
  if (configTarget === 'node') {
    return nodeBuild;
  }

  if (configTarget === 'browser') {
    return browserBuilds;
  }

  return [nodeBuild, ...browserBuilds];
};
