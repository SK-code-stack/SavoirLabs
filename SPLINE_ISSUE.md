# Spline 3D Effect - Not Working

## Issue
The Spline "Clarity Stream" 3D effect is not rendering in the Hero section. Only the gradient fallback is showing.

## Intended Effect
- **Scene URL:** `https://prod.spline.design/og2rNwpoLMbbVX5f/scene.splinecode`
- **Embed URL:** `https://my.spline.design/claritystream-GDo5M0ccUgNTtZNCbeaLRwBe/`
- **Effect Name:** Clarity Stream (flowing/streaming visual)

## Current Setup
- **Package:** `@splinetool/react-spline@2.2.6`
- **Component:** `src/components/Hero3DVisual.tsx`
- **Integration:** Lazy loaded with `next/dynamic`, SSR disabled

## Code That Should Work
```tsx
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/og2rNwpoLMbbVX5f/scene.splinecode"
      />
    </main>
  );
}
```

## Alternative: iframe Embed
If the React component continues to fail, try iframe:
```html
<iframe
  src='https://my.spline.design/claritystream-GDo5M0ccUgNTtZNCbeaLRwBe/'
  frameborder='0'
  width='100%'
  height='100%'
></iframe>
```

## Troubleshooting Steps Tried
1. Installed `@splinetool/react-spline` (v4.1.0 had export issues, downgraded to v2.2.6)
2. Added `transpilePackages` in `next.config.mjs`
3. Used `dynamic()` import with `ssr: false`
4. Moved window checks to `useEffect` to avoid SSR issues

## Next Steps to Try
1. Check browser console for errors
2. Try the iframe approach instead of React component
3. Verify the scene URL is publicly accessible
4. Test in a fresh Next.js project to isolate the issue
5. Check if there's a CORS or network issue loading the scene

## Date
October 2026
