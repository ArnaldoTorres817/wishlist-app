import { PLATFORM } from 'aurelia-pal'

const routes = [
  {
    route: ['', 'home'],
    name: 'home',
    moduleId: PLATFORM.moduleName('home/home')
  }
]

export class App {
  configureRouter(config, router) {
    this.router = router;

    config.title = "Your Wishlist";

    config.map([...routes]);
  }
}
