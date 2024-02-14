const TS = require('rollup-plugin-typescript2');

module.exports = {
    input: [
        'src/index.ts',
        'src/atoms/Button/index.ts',
        'src/atoms/Colors/index.ts'
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [
        TS()
    ],
    external:["react","@d.labs/scss"]
};
