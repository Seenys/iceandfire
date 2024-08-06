export interface House {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: Founded;
  founder: string;
  diedOut: string;
  ancestralWeapons: any[];
  cadetBranches: string[];
  swornMembers: string[];
}

export enum Founded {
  ComingOfTheAndals = "Coming of the Andals",
  Empty = "",
  The299AC = "299 AC",
}

export interface SwornMember {
  name: string;
  died: string;
  titles: string[];
}
