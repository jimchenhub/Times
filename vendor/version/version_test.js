'use strict';

describe('TimesApp.version module', function() {
  beforeEach(module('TimesApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
