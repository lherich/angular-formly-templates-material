import template from './hinttext.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'hinttext',
    apiCheck: (check) => ({
      templateOptions: {
        label: check.string.optional,
        text: check.string.optional,
        className: check.string.optional
      }
    })
  });
};
