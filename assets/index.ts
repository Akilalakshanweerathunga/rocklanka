/**
 * Rock Lanka Tours - Assets Index
 * Centralized exports for all assets
 */

// Image exports
export * from './images';

// Type definitions for assets
export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface IconAsset {
  name: string;
  path: string;
}
