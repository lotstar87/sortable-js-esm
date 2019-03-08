import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import url from 'rollup-plugin-url'

let pkg = require('./package.json')
let plugins = [
  url(),
  resolve({ browser: true, preferBuiltins: true }),
  babel(),
  commonjs(),
  terser()
]

export default [
  {
    input: 'src/index.js',
    plugins,
    output: [
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ]
  }
]
