const util = require('gulp-util');

const production = util.env.production || util.env.prod || false;
const distPath = 'dist';

const config = {
    env       : 'development',
    production: production,

    outputCSS: 'app.css',

    src: {
        root         : 'src',
        sass         : 'src/sass',
        scripts      : 'src/js',
        img          : 'src/img',
        fonts        : 'src/fonts',
        lib          : 'src/lib',
        static       : 'static'
    },
    dest: {
        root    : distPath,
        html    : distPath,
        css     : distPath + '/css',
        scripts : distPath + '/js',
        img     : distPath + '/img',
        fonts   : distPath + '/fonts',
        lib     : distPath + '/lib'
    },

    setEnv: function(env) {
        if (typeof env !== 'string') return;
        this.env = env;
        this.production = env === 'production';
        process.env.NODE_ENV = env;
    },

    logEnv: function() {
        util.log(
            'Environment:',
            util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
        );
    },

    errorHandler: require('./util/handle-errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
