import { PLATFORM } from "aurelia-pal";

const routes = [
  {
    route: ["", "home"],
    name: "home",
    moduleId: PLATFORM.moduleName("home/home"),
  },
  {
    route: "add-wish-item",
    name: "add-wish-item",
    moduleId: PLATFORM.moduleName("add-wish-item/add-wish-item-view"),
    title: "Add Wish Item",
  },
];

export class App {
  configureRouter(config, router) {
    this.router = router;

    config.title = "Your Wishlist";

    config.map([...routes]);
  }
}
