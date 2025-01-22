import elkLayouts from '@mermaid-js/layout-elk';
import zenuml from '@mermaid-js/mermaid-zenuml';
import type { MermaidConfig, RenderResult } from 'mermaid';
import mermaid from 'mermaid';

mermaid.registerLayoutLoaders(elkLayouts);
const init = mermaid.registerExternalDiagrams([zenuml]);

mermaid.registerIconPacks([
  {
    name: 'logos',
    loader: () =>
      fetch('https://unpkg.com/@iconify-json/logos/icons.json').then((res) => res.json()),
  },
  {
    name: 'cbi',
    loader: () =>
      fetch('https://unpkg.com/@iconify-json/cbi/icons.json').then((res) => res.json()),
  },
  {
    name: 'simple',
    loader: () =>
      fetch('https://unpkg.com/@iconify-json/simple-icons/icons.json').then((res) => res.json()),
  },
  {
    name: 'la',
    loader: () =>
      fetch('https://unpkg.com/@iconify-json/la/icons.json').then((res) => res.json()),
  },
  {
    name: 'mas',
    loader: () =>
      fetch('https://unpkg.com/@iconify-json/material-symbols/icons.json').then((res) => res.json()),
  },
  {
    name: 'mdi',
    loader: () =>
      fetch('https://unpkg.com/@iconify-json/mdi/icons.json').then((res) => res.json()),
  },
  {
    name: 'tdesign',
    loader: () =>
      fetch('https://unpkg.com/@iconify-json/tdesign/icons.json').then((res) => res.json()),
  },
  {
    name: 'carbon',
    loader: () =>
      fetch('https://unpkg.com/@iconify-json/carbon/icons.json').then((res) => res.json()),
  },
]);

export const render = async (
  config: MermaidConfig,
  code: string,
  id: string
): Promise<RenderResult> => {
  await init;

  // Should be able to call this multiple times without any issues.
  mermaid.initialize(config);
  return await mermaid.render(id, code);
};

export const parse = async (code: string): Promise<unknown> => {
  return await mermaid.parse(code);
};
