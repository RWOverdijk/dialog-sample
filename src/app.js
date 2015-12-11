export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'one'],         name: 'one',        moduleId: 'one',        nav: true, title: 'Modal one' },
      { route: 'two', name: 'two',      moduleId: 'two',      nav: true, title: 'Modal two' }
    ]);

    this.router = router;
  }
}
