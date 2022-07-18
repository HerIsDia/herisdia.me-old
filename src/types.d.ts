export interface Social {
  text: string;
  href: string;
  color: string;
}

export interface LanguageText {
  title: string;
  subtitle: string;
  lists: string[][];
  social: Social[];
}

export interface LanguageContent {
  [key: string]: LanguageText;
}
