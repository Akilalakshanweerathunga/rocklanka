
import { Activity, Testimonial, Journey } from './types';
import { ACTIVITIES as ACTIVITY_IMAGES, TESTIMONIALS as TESTIMONIAL_IMAGES, JOURNEY } from './assets/images';

export const ACTIVITIES: Activity[] = [
  { id: '1', title: 'Ceylon Tea Trails', category: 'Highlands', image: ACTIVITY_IMAGES.ceylonTeaTrails, span: 'md:col-span-2 md:row-span-2' },
  { id: '2', title: 'Yala Leopard Safari', category: 'Wild', image: ACTIVITY_IMAGES.yalaLeopardSafari, span: 'md:col-span-1 md:row-span-1' },
  { id: '3', title: 'Sigiriya Skies', category: 'History', image: ACTIVITY_IMAGES.sigiriyaSkies, span: 'md:col-span-1 md:row-span-2' },
  { id: '4', title: 'Mirissa Blue Whales', category: 'Coastal', image: ACTIVITY_IMAGES.mirissaBlueWhales, span: 'md:col-span-1 md:row-span-1' },
  { id: '5', title: 'Galle Fort Heritage', category: 'Colonial', image: ACTIVITY_IMAGES.galleFortHeritage, span: 'md:col-span-2 md:row-span-1' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', user: 'Sarah Mitchell', handle: '@sarah_explorer', content: 'Waking up to the mist over Ella Gap was a dream. RockLanka handles every detail with such grace.', image: TESTIMONIAL_IMAGES.alexandraVance, tags: ['#QuietLuxury', '#SriLanka'] },
  { id: '2', user: 'James Cooper', handle: '@james_travels', content: 'The leopard tracking in Yala was world-class. Our guide knew every turn of the jungle.', image: TESTIMONIAL_IMAGES.julianChen, tags: ['#Safari', '#Adventure'] },
  { id: '3', user: 'The Andersons', handle: '@anderson_family', content: 'Truly a bespoke experience. The kids loved the turtle hatcheries and the private villa in Mirissa.', image: TESTIMONIAL_IMAGES.millerFamily, tags: ['#FamilyTravel', '#Mirissa'] },
  { id: '4', user: 'Elena Rossi', handle: '@elena_rossi', content: 'A spiritual journey. The sunset at Sigiriya is something I will never forget.', image: TESTIMONIAL_IMAGES.elenaRossi, tags: ['#Culture', '#Sigiriya'] },
];

export const LEGACY_JOURNEY: Journey[] = [
  { day: 1, title: 'Arrival & Ancestral Roots', description: 'Begin your journey in the heart of the cultural triangle. Settle into your private eco-luxury villa nestled within ancient ruins.', image: JOURNEY.arrivalRoots },
  { day: 2, title: 'The Monarch Path', description: 'A private dawn climb of Sigiriya Rock followed by a traditional village feast prepared by local artisans.', image: JOURNEY.monarchPath },
  { day: 3, title: 'Mist & Mountains', description: 'The famous blue train ride into the tea country, where the air smells of fresh cinnamon and plucked leaves.', image: JOURNEY.mistMountains },
];
