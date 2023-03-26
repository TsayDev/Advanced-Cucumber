const {
  setWorldConstructor,
  World,
  supportCodeLibraryBuilder,
} = require("@cucumber/cucumber");

class ThisWorld extends World {
  constructor(options) {
    super(options);
  }

  step(sentence, table) {
    const stepdefs = supportCodeLibraryBuilder.stepDefinitionConfigs;
    const matchedDefs = stepdefs.filter((s) =>
      new RegExp(s.pattern).test(sentence)
    );

    if (matchedDefs.length == 0) {
      throw `No step definition for "${sentence}"`;
    } else if (matchedDefs.length > 1) {
      const patterns = matchedDefs.map((x) => x.pattern).join("\n");
      throw `Multiple step definitions for "${sentence}":\n${patterns}`;
    }

    const stepdef = matchedDefs[0];
    const args = new RegExp(stepdef.pattern).exec(sentence);
    if (table) {
      args.push(table);
    }
    args.shift();

    return stepdef.code.call(this, ...args);
  }
}

setWorldConstructor(ThisWorld);
