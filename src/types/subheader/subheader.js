import template from './subheader.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'subheader',
    apiCheck: (check) => ({
      templateOptions: {
        label: check.string.optional,
        className: check.string.optional,
        theme: check.string.optional
      }
    })
  });
};
