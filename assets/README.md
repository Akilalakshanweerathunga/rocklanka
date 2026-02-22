# Rock Lanka Tours - Assets

This directory contains all assets for the Rock Lanka Tours website, including images, icons, and logos.

## Directory Structure

```
assets/
├── images/
│   ├── hero/           # Hero section images
│   ├── destinations/   # Destination images
│   ├── activities/     # Activity images
│   ├── testimonials/    # Testimonial/user images
│   ├── ui/             # UI elements (placeholders, backgrounds)
│   └── ...
├── icons/              # SVG icons
├── logos/              # Logo files
├── images.tsx         # Centralized image exports (Unsplash URLs)
├── index.ts           # Main exports
└── README.md          # This file
```

## Using Images

### Import from centralized assets:

```tsx
import { IMAGES, HERO_SLIDER, DESTINATIONS } from '../assets';

// Using the complete images object
<img src={IMAGES.HERO_SLIDER.natureElegance} alt="Nature" />

// Or importing specific categories
<img src={HERO_SLIDER.coastalParadise} alt="Coast" />
<img src={DESTINATIONS.sigiriyaDambulla} alt="Sigiriya" />
```

### Using local images:

Place your local images in the appropriate folder under `assets/images/`, then import them:

```tsx
import localImage from '../assets/images/hero/my-custom-image.jpg';

// In your component
<img src={localImage} alt="Custom" />
```

## Adding New Images

### Option 1: Using Unsplash URLs

Add new Unsplash URLs to [`images.tsx`](./images.tsx) in the appropriate category:

```tsx
export const HERO_SLIDER = {
  // Add new entry
  newImage: 'https://images.unsplash.com/your-new-image-url',
};
```

### Option 2: Using Local Images

1. Place your image file in the appropriate folder under `assets/images/`
2. Import and use it directly in your component:

```tsx
import myImage from '../assets/images/destinations/my-image.jpg';

function MyComponent() {
  return <img src={myImage} alt="Description" />;
}
```

## Image Categories

- **HERO_SLIDER**: Main hero slider images on homepage
- **HERO**: Hero section backgrounds
- **ACTIVITIES**: Activity cards (BentoGrid)
- **TESTIMONIALS**: User photos for testimonials (WallOfLove)
- **JOURNEY**: Storyline/journey day images
- **DESTINATIONS**: Destination card images
- **ACTIVITIES_PAGE**: Activity detail page images
- **ITINERARIES**: Itinerary card images
- **PAGE_HERO**: Hero images for inner pages
- **LOGO**: Logo files

## Image Guidelines

- Recommended image format: WebP or JPEG
- Recommended resolution: 1920x1080 for hero images, 800x600 for cards
- For Unsplash: Use optimized URLs with `q=80&w=XXX&auto=format&fit=crop`
- File names: Use kebab-case (e.g., `sigiriya-rock.jpg`)

## Notes

- Currently, images are primarily sourced from Unsplash
- Local images can be added to the respective folders
- The `images.tsx` file serves as a central registry for all image URLs
