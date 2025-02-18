module.exports = {
    default: {
      require: ['./steps/**/*.js', './hooks/**/*.js'],
      format: ['progress-bar', 'html:cucumber-report.html'],
      formatOptions: { snippetInterface: 'async-await' },
      paths: ['features/**/*.feature'],
      timeout:60000
    },
  };