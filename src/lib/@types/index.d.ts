export interface CLIConfig {
  language: string;
  framework: string;
  orm?: string;
  db?: string;
}

export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';
