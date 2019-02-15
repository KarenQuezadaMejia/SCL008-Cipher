describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "wigi ymn3m2" para "como est@s?" con offset 20', () =>{
    assert.equal(cipher.encode(20, "como est@s?"), "wigi ymn3m2");
  });

    it('debería retornar "XIrks 598 tvy7f8" para "TEngo 154 pru3b4" con offset 4', () =>{
    assert.equal(cipher.encode(4, "TEngo 154 pru3b4"), "XIrks 598 tvy7f8");
  });


    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () =>{
    assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
  });
    
    
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
    assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
  });

    it('debería retornar "ÛKXNä" para "ÑANDÚ" con offset 10', () =>{
    assert.equal(cipher.encode(10, "ÑANDÚ"), "ÛKXNä");
  });

  });


  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "como est@s?" para "wigi ymn3m2" con offset 20', () =>{
    assert.equal(cipher.decode(20, "wigi ymn3m2"), "como est@s?");
  });

    it('debería retornar "TEngo 154 pru3b4" para "XIrks 598 tvy7f8" con offset 4', () =>{
    assert.equal(cipher.decode(4, "XIrks 598 tvy7f8"), "TEngo 154 pru3b4");
  });

     it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () =>{
    assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
  });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () =>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFg"), "ABCDEFGHIJKLMNOPQRSTUVWXYz");
    });

    it('debería retornar "ñandú" para "ûkxnÄ" con offset 10', () =>{
    assert.equal(cipher.decode(10, "ûkxnÄ"), "ñandú");
  });

});
});


