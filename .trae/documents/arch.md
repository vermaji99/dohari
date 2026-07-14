## 1. Architecture Design

```mermaid
graph TB
  subgraph "Frontend"
    A["Next.js 15 App Router"]
    B["React 19"]
    C["Tailwind CSS"]
    D["TypeScript"]
    E["GSAP"]
    F["Lenis"]
    G["Framer Motion"]
    H["Three.js (R3F + Drei)"]
    I["Shadcn UI"]
  end
  subgraph "Backend (Optional)"
    J["Node.js + Express"]
    K["MongoDB Atlas"]
    L["JWT Auth"]
    M["Cloudinary"]
  end
  subgraph "Deployment"
    N["Vercel (Frontend)"]
    O["Render (Backend)"]
  end
  A --> N
  J --> O
```

## 2. Technology Description
- Frontend: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Shadcn UI
- Animations: GSAP, Framer Motion, Lenis (smooth scroll), Three.js (React Three Fiber + Drei)
- Initialization Tool: create-next-app@latest
- Backend (future): Node.js + Express + MongoDB Atlas + JWT + Cloudinary
- Deployment: Vercel (frontend), Render (backend)

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | Home page with hero, navigation, storytelling |
| /about | About Dohrighat, history, culture, timeline |
| /explore | Explore interactive cards for key locations |
| /places | Famous places with modals and maps |
| /food | Food and markets showcase |
| /business | Business directory with search/filters |
| /gallery | Photo gallery (masonry, lightbox) |
| /events | Events and festivals timeline |
| /news | News portal |
| /contact | Contact page |
| /emergency | Emergency services |

## 4. API Definitions (future)
```typescript
// Business type
interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  phone?: string;
  whatsapp?: string;
  website?: string;
  rating?: number;
  openingHours?: string;
  image?: string;
  description?: string;
  location: { lat: number; lng: number };
}

// Place type
interface Place {
  id: string;
  name: string;
  description: string;
  history?: string;
  visitingTime?: string;
  gallery: string[];
  location: { lat: number; lng: number };
  nearbyAttractions?: string[];
}

// Event type
interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
}
```

## 5. Server Architecture Diagram (future)
```mermaid
graph LR
  A["Client"] --> B["Express Server"]
  B --> C["Auth (JWT)"]
  B --> D["Controllers"]
  D --> E["Services"]
  E --> F["MongoDB Atlas"]
  E --> G["Cloudinary"]
```

## 6. Data Model (future)
### 6.1 Data Model Definition
```mermaid
erDiagram
  BUSINESS ||--o{ CATEGORY : belongs_to
  PLACE ||--o{ GALLERY : has
  EVENT ||--o{ DATE : occurs_on
  NEWS ||--o{ CATEGORY : tagged_as
  
  BUSINESS {
    string id
    string name
    string category
    string address
    string phone
    string whatsapp
    string website
    float rating
    string openingHours
    string image
    string description
    object location
  }
  PLACE {
    string id
    string name
    string description
    string history
    string visitingTime
    array gallery
    object location
    array nearbyAttractions
  }
```
