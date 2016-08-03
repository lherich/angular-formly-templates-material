import template from './hint.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    template,
    name: 'hint'
  });
};
