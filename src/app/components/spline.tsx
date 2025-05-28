'use client';
import SplineNext from '@splinetool/react-spline/next';

export default function ClientOnlySpline({ 
  scene, 
  className 
}: { 
  scene: string; 
  className?: string; 
}) {
  return <SplineNext scene={scene} className={className} />;
}