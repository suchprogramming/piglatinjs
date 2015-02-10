describe('pigLatin', function() {
  it("adds ay to words that begin with a vowel", function() {
    expect(pigLatin("otter")).to.equal("otteray");
  });

  it("takes the first consonant and adds it to the end with ay", function() {
    expect(pigLatin("kitty")).to.equal("ittykay");
  });

  it("takes the first two letters that make a single sound and add them with ay", function () {
    expect(pigLatin("shamrock")).to.equal("amrockshay");
  });
});
