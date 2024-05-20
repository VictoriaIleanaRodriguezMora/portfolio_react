import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Interface_Proyecto_Item {
  project_link: string;
  project_title: string;
  project_description: string;
  project_icons?: IconDefinition | IconDefinition[];
  project_item_className?: string;
}
