import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const philosophy = async (): Promise<string> => {
  return `
"Fun" means literary "fun" but also means "function".
Coding with our funcsions can make the world interesting.

Our logo "f(c)" has the meaning like this.
We believe that technology can make the world better.
`;
};

export const skills = async (): Promise<string> => {
  return `
Frontend
- React, Next.js
- Vue.js, Nuxt
- Electron
- TypeScript, JavaScript

Backend
- Ruby on Rails
- FastAPI
- Spring Boot
- Ruby, Python, Java

Infrastructure
- AWS
- GCP

Native app
- Swift, SwiftUI
- Kotlin, Jetpack Compose
- React Native

ETC
- Docker
- Kubernates
- ElasticSearch

`;
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
