import template from './spacer.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'spacer',
    apiCheck: (check) => ({
      templateOptions: {
        className: check.string.optional
      }
    })
  });
};
