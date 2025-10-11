import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import jsx from 'acorn-jsx';

const isProd = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  output: {
    file: 'public/index.js',
    format: 'iife',
    sourcemap: !isProd
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      preventAssignment: true
    }),

    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      include: ['src/**/*']
    }),

    resolve({ browser: true, extensions: ['.js', '.jsx'] }),
    commonjs(),

    postcss({ autoModules: true }),

    !isProd && serve({ contentBase: 'public', port: 3000, open: true }),
    !isProd && livereload('public')
  ].filter(Boolean)
};