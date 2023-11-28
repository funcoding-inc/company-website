import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (): Promise<string> => {
  return 'guest';
};

export const date = async (): Promise<string> => {
  return new Date().toString();
};

export const contact = async (): Promise<string> => {
  window.open('mailto:support@funcoding.jp');

  return 'Opening mailto:support@funcoding.jp...';
};

export const repo = async (): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/funcoding-inc/company-website', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const info = async (): Promise<string> => {
  return `
Funcoding Inc.

Established 2014-04-01

CEO Tetsuyuki Okuzono

〒174-0072
Minamitokiwadai 1-11-6-101, Itabashi-ku, Tokyo, Japan

3,000,000 yen capital
`;
};

export const banner = (): string => {
  return `
███████╗██╗   ██╗███╗   ██╗ ██████╗ ██████╗ ██████╗ ██╗███╗   ██╗ ██████╗
██╔════╝██║   ██║████╗  ██║██╔════╝██╔═══██╗██╔══██╗██║████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║     ██║   ██║██║  ██║██║██╔██╗ ██║██║  ███╗
██╔══╝  ██║   ██║██║╚██╗██║██║     ██║   ██║██║  ██║██║██║╚██╗██║██║   ██║
██║     ╚██████╔╝██║ ╚████║╚██████╗╚██████╔╝██████╔╝██║██║ ╚████║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝ v${packageJson.version}

"Fun" + "Coding" makes the world interesting 🌎
Welcome to visit Funcoding Inc. official web page.

Type 'help' to see list of available commands.
`;
};
