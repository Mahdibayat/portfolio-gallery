import { signal } from "@preact/signals-react";

export const pagesSignal = signal<'paintings' | 'poems' | 'designs' | 'CV' | 'contact'>('paintings');