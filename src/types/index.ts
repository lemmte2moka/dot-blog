// notionAPI
export interface User {
  object: string;
  id: string;
}

export interface RichText {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface Properties {
  pagetitle: {
    id: string;
    type: string;
    rich_text: RichText[];
  };
  tag: {
    id: string;
    type: string;
    multi_select: MultiSelect[];
  };
  description: {
    id: string;
    type: string;
    rich_text: RichText[];
  };
  url: {
    id: string;
    type: string;
    url: string;
  };
  date: {
    id: string;
    type: string;
    date: string | null;
  };
  title: {
    id: string;
    type: string;
    title: RichText[];
  };
}

export interface Page {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  cover: string | null;
  icon: string | null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: Properties;
  url: string;
  public_url: string | null;
}

export interface NotionData {
  object: string;
  results: Page[];
}

export interface ApiResponse {
  message: string;
  data: NotionData;
}