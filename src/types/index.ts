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

// blogItems
export interface Article {
  _id: string;
  pickup: boolean;
  title: string;
  date: string;
  category: string;
  body: string;
  slug: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: number;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    }
  };
  thumb: {
    _id: string;
    altText: string;
    description: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    height: number;
    metadata: object; // 必要に応じて修正
    src: string;
    title: string;
    width: number;
  };
  sns: Array<{
    _id: string;
    snsLink: string;
  }>;
}