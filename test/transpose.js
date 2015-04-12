var md5TransposeFactory = require('../src');

describe('md5-transpose-list', function() {
    var md5Transposer = md5TransposeFactory();
    describe('#transpose', function() {
        var files = [
            'test/fixture/md5test.txt',
            'nonexistant',
            'test/fixture/md5test.txt'
        ];
        it('should transpose and remain the same array length', function(done) {
            md5Transposer.transpose(files).should.eventually.have.length(3).notify(done);
        });
        it('should transpose a file list into an array of objects containing the md5 sum', function(done) {
            var expected = [
                {
                    name: 'test/fixture/md5test.txt',
                    hash: '77284ae4aac90cd005586850dce5fbd9',
                }
            ];
            md5Transposer.transpose(files).should.eventually.be.deep.include.members(expected).notify(done);
        });
    });
});
