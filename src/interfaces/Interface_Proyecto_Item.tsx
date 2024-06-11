import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
 
export interface Interface_Proyecto_Item {
  project_title: string;
  project_description: string;
  project_icon: IconDefinition[];
  project_item_className: string[];
  project_github_link: string;
  project_deploy_link?: string;
  project_id?: string
  project_image?: string;
}