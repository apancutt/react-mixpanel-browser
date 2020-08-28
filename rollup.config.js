import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      file: pkg.main,
    },
    {
      format: 'es',
      file: pkg.module,
    }
  ],
  external: [].concat(
    Object.keys(pkg.dependencies || {}),
    Object.keys(pkg.devDependencies || {}),
    Object.keys(pkg.peerDependencies || {}),
    /@babel\/runtime/,
  ),
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      plugins: [
        '@babel/plugin-transform-runtime',
      ],
      presets: [
        '@babel/preset-react',
      ],
    }),
    commonjs(),
  ],
};
