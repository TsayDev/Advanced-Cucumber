import { Then } from "@cucumber/cucumber";

Then(/^I do the following steps (\d+) times:$/, function (count, table) {
  for (let i = 0; i < count; i++) {
    for (let row of table.rawTable) {
      this.step(row[0]);
    }
  }
});

Then(/^I eat an apple$/, function () {
  console.log("apple");
});

Then(/^I eat an orange$/, function () {
  console.log("orange");
});

Then(/^I eat a banana$/, function () {
  console.log("banana");
});

Then(/^I am (hungry|full)$/, function (condition) {
  if (condition === "hungry") {
    this.hungry = true;
    this.full = false;
  } else {
    this.hungry = false;
    this.full = true;
  }
});

Then(/^(.*) if I am(| not) hungry:$/, function (step, condition, table) {
  if (condition === "" && this.hungry) {
    this.step(`${step}:`, table);
  } else {
    console.log("skip");
  }
});

Then(/^(.*) if I am(| not) hungry$/, function (step, condition) {
  if (condition === "" && this.hungry) {
    this.step(step);
  } else {
    console.log("skip");
  }
});

Then(/^I eat the following fruits:$/, function (table) {
  for (let row of table.rawTable) {
    console.log(row[0]);
  }
});

Then(/^I eat the meat$/, function () {
  console.log("meat");
});
