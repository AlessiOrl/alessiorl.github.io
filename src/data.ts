import {
  Bot,
  Boxes,
  BrainCircuit,
  CircuitBoard,
  CloudCog,
  Coffee,
  Cpu,
  Github,
  Home,
  Layers3,
  Pizza,
  Server,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  meta: string;
  href?: string;
  accent: string;
  icon: LucideIcon;
  stats: string[];
};

export type SystemNode = {
  title: string;
  label: string;
  description: string;
  icon: LucideIcon;
  command: string;
  bullets: string[];
};

export type LifestyleItem = {
  title: string;
  kicker: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export const navItems = [
  { label: 'Build', href: '#build' },
  { label: 'Systems', href: '#systems' },
  { label: 'Maker', href: '#maker' },
  { label: 'Beyond Code', href: '#life' },
];

export const terminalLines = [
  'docker compose up -d homelab',
  'ollama run local-builder',
  'rag ingest --source notes/',
  'zigbee link macropad --pair',
  'print job start enclosure-v12',
  'brew espresso --origin ethiopia',
];

export const projects: Project[] = [
  {
    title: 'ZigbeeMacropad',
    description:
      'A custom hardware macropad that treats Zigbee like a native creative control surface instead of an afterthought.',
    meta: 'Hardware / Zigbee / Input Design',
    accent: 'from-emerald-400/30 via-cyan-300/15 to-transparent',
    icon: CircuitBoard,
    stats: ['Custom PCB thinking', 'Wireless controls', 'Built for daily use'],
  },
  {
    title: 'Codee',
    description:
      'A Telegram assistant bot shaped around useful interactions, automation hooks, and pragmatic AI-powered workflows.',
    meta: 'Telegram / Bot / AI Workflows',
    accent: 'from-sky-400/25 via-blue-400/20 to-transparent',
    icon: Bot,
    stats: ['Conversation-first UX', 'Actionable replies', 'Always-on utility'],
  },
  {
    title: 'GitHub Portfolio',
    description:
      'A broader archive of experiments across automation, infrastructure, tools, and systems that keep evolving in public.',
    meta: 'Open Source / Experiments / Shipping',
    href: 'https://github.com/AlessiOrl',
    accent: 'from-fuchsia-400/20 via-pink-400/15 to-transparent',
    icon: Github,
    stats: ['Live code history', 'Multiple domains', 'Continuous iteration'],
  },
];

export const systemNodes: SystemNode[] = [
  {
    title: 'Unraid Backbone',
    label: 'infra.core',
    description:
      'The home lab runs as a maintained, living system rather than a pile of disconnected services.',
    icon: Server,
    command: 'unraid status --watch',
    bullets: ['Persistent storage', 'Reliable maintenance rhythm', 'Central point for experiments'],
  },
  {
    title: 'Docker Runtime',
    label: 'services.runtime',
    description:
      'Containerized services stay isolated, reproducible, and easy to expand when a new idea needs to exist tonight.',
    icon: Boxes,
    command: 'docker compose ps',
    bullets: ['Multiple self-hosted services', 'Composable stack design', 'Fast deployment loop'],
  },
  {
    title: 'Local LLMs + RAG',
    label: 'ai.stack',
    description:
      'Local models, retrieval pipelines, and agent systems are treated like tools to be stress-tested, not just demos to show off.',
    icon: BrainCircuit,
    command: 'agent run --mode local',
    bullets: ['Private-first experimentation', 'Retrieval pipelines', 'Agent orchestration'],
  },
  {
    title: 'Smart Home Mesh',
    label: 'domotics.mesh',
    description:
      'A connected environment where automations, sensors, and devices cooperate to shape the space in real time.',
    icon: Home,
    command: 'zigbee map --render',
    bullets: ['Many connected devices', 'Environmental control', 'Automation as daily infrastructure'],
  },
];

export const lifestyleItems: LifestyleItem[] = [
  {
    title: 'Ethiopian Coffee',
    kicker: 'Bright, floral, precise.',
    description:
      'Specialty coffee is another systems obsession: variables, timing, extraction, and the reward of getting it exactly right.',
    icon: Coffee,
    accent: 'from-amber-300/35 via-orange-300/20 to-transparent',
  },
  {
    title: 'Agrumello',
    kicker: 'Homemade citrus engineering.',
    description:
      'A personal citrus variation on limoncello, tuned by taste, iteration, and a builder’s instinct for refinement.',
    icon: Sparkles,
    accent: 'from-yellow-300/35 via-lime-300/15 to-transparent',
  },
  {
    title: 'Pizza + Focaccia',
    kicker: 'Dough is data.',
    description:
      'Hydration, fermentation, heat, and repetition. The kitchen becomes another workshop for fast learning and visible progress.',
    icon: Pizza,
    accent: 'from-rose-300/30 via-orange-300/20 to-transparent',
  },
];

export const makerSignals = [
  '3D printing is a problem-solving tool, not a shelf trophy.',
  'If a solution does not exist, design it.',
  'Electronics, software, food, and automation all reward iteration.',
];

export const heroMetrics = [
  {
    label: 'Active layers',
    value: 'Code / Hardware / Home / Kitchen',
    icon: Layers3,
  },
  {
    label: 'Always running',
    value: 'Unraid + Docker + automations',
    icon: CloudCog,
  },
  {
    label: 'Current mode',
    value: 'shipping experiments locally first',
    icon: Cpu,
  },
];