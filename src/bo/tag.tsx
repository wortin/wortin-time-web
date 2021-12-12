export interface Tag {
  id: number;
  name: string;
  emoji: string;
}

export interface ListTag extends Tag {
  actionCount: number;
}

export interface ListTags {
  tags: Array<ListTag>;
  total: number;
}
