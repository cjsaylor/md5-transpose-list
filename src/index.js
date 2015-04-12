var q = require('q');
var Transpose = function(md5) {
    this.md5 = md5();
};

/**
 * Compute MD5 hashes for all files and transposes the data into array of objects.
 *
 * Return array of objects will be in the form of {name: '', hash: ''}
 *
 * @param array files
 * @param boolean isAbsolutePath Are the paths defined absolute?
 * @return promise
 */
Transpose.prototype.transpose = function(files, isAbsolutePath) {
    var sumPromises = [];
    var md5 = this.md5;
    var cwd = isAbsolutePath ? '' : process.cwd() + '/';
    return q.allSettled(files.map(function(file) {
        return md5.computeFromFile(cwd + file);
    }))
        // map the sums
        .then(function(data) {
            return files.map(function(entry, i) {
                return {
                    name: entry,
                    hash: data[i].state === 'fulfilled' ? data[i].value : null
                };
            });
        });
};

module.exports = function(container) {
    container = container || {};
    return new Transpose(container.md5 || require('md5-file-promise'));
};
module.exports.$type = 'factory';
module.exports.$name = 'md5TransposeList';
