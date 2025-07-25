interface Snippet {
  readonly id: string;
  readonly content: string;
  readonly source: SnippetSource;
}

interface SnippetSource {
  readonly path: string;
  readonly line: number;
}
