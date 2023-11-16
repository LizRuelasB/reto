module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {},
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'lcov' }
      ],
      check: {
        global: {
          statements: 75,
          branches: 75,
          functions: 75,
          lines: 75,
          excludes: [],
        },
      },
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['ChromiumNoSandbox', 'Chrome'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    restartOnFileChange: true
  });
};