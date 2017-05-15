var autoPrefix = require('autoprefixer');

module.exports = {
    plugins:[
        autoPrefix({browsers:'ios >= 8'})
    ]
}
