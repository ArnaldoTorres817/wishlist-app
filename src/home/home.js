export class Home {
  item = {
    title: "Hello World",
    description: "",
    link: "https://www.google.com",
    tags: [{ name: "Hello" }, { name: "World" }],
  };

  item2 = {
    title: "Computer Monitor",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    link: "https://www.google.com",
    tags: [{ name: "Hello" }, { name: "World" }],
  };

  item3 = {
    title: "Hello World",
    description: "Lorem ipsum dolor sit amet.",
    link: "https://www.google.com",
    tags: [{ name: "Hello" }, { name: "World" }],
  };

  wishItems = [{ ...this.item }, { ...this.item2 }, { ...this.item3 }];

  constructor() {
    this.message = "Hello world";
  }
}
