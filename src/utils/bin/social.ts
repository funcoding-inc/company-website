import config from '../../../config.json';

export const facebook = async (): Promise<string> => {
  window.open(`https://facebook.com/${config.social.facebook}/`);

  return 'Opening instagram...';
};

export const github = async (): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};
