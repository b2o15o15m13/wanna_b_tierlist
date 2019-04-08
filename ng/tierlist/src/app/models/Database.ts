import {Primary} from "./Primary";
import {Secondary} from "./Secondary";
import {Melee} from "./Melee";
import {Alert} from "./Alert";
import {Archwing} from "./Archwing";
import {Archgun} from "./Archgun";
import { Archmelee } from "./Archmelee";
import {Companion} from "./Companion";
import {Disclaimer} from "./Disclaimer";
import {SentinelWeapon} from "./SentinelWeapon";
import {Tier} from "./Tier";

export class Database {
  primaries: (Primary | Tier)[];
  secondaries: (Secondary | Tier)[];
  melees: (Melee | Tier)[];
  archwings: Archwing[];
  archguns: Archgun[];
  archmelees: Archmelee[];
  companions: Companion[];
  sent_weps: SentinelWeapon[];
  //These are kind of annoying
  Primaries: {};
  Secondaries: {};
  Melees: {};

  version: string;
  alerts: Alert[];
  disclaimers: Disclaimer[];
  faq: Disclaimer[];
}

export enum Categories {
  PRIMARY = 'primaries',
  SECONDARY = 'Secondaries',
  MELEE = 'Melees',
  ARCHWING = 'Archwings',
  ARCHGUN = 'Archguns',
  ARCHMELEE = 'Archmelees',
  COMPANIONS = 'Companions'
}

export const columnDefs = {
  'primaries': ['name', 'base', 'category', 'dmg', 'mr', 'rivenDisposition', 'notes', 'type'],
  'Secondaries': ['name', 'base', 'dmg', 'mr', 'rivenDisposition', 'notes', 'type'],
  'Melees': ['name', 'base', 'dmg', 'mr', 'type', 'wepnotes'],
  'Archwing': ['name', 'use', 'base', 'notes'],
  'Archgun': ['name', 'use', 'firing', 'notes', 'base'],
  'Archmelee': ['name', 'use', 'notes', 'base']
};