const TS = require('rollup-plugin-typescript2');

module.exports = {
    input: [
        'src/index.ts',
        'src/atoms/Button/index.ts',
        'src/atoms/Colors/index.ts',
        'src/atoms/text/index.ts',
        'src/atoms/Margins/index.ts',
        'src/atoms/Paddings/index.ts'
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
    external:["react","@d.labs/scss","@d.labs/foundations"]
};
