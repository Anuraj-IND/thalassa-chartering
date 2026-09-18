'use client';

import { useEffect, useRef } from 'react';
import { Map as MlMap, Marker, Popup, NavigationControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const CITIES = [
  { name: 'London', lat: 51.5, lng: -0.12 },
  { name: 'Dubai', lat: 25.2, lng: 55.3 },
  { name: 'Delhi', lat: 28.6, lng: 77.2 },
  { name: 'Singapore', lat: 1.35, lng: 103.8 },
  { name: 'Hong Kong', lat: 22.3, lng: 114.2 },
];

export default function WorldMap() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MlMap | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const coarse = window.matchMedia('(pointer: coarse)').matches;

    const map = new MlMap({
      container: ref.current,
      style: 'https://tiles.openfreemap.org/styles/liberty',
      bounds: [
        [-16, 8],
        [126, 60],
      ],
      fitBoundsOptions: { padding: 36 },
      scrollZoom: false,
      dragPan: !coarse,
      cooperativeGestures: coarse,
      attributionControl: { compact: true },
    });
    mapRef.current = map;

    map.addControl(new NavigationControl({ showCompass: false }), 'bottom-right');

    CITIES.forEach((c) => {
      const el = document.createElement('div');
      el.className = 'ofm-dot';
      const marker = new Marker({ element: el })
        .setLngLat([c.lng, c.lat])
        .setPopup(
          new Popup({
            closeButton: false,
            closeOnClick: coarse,
            offset: 20,
            className: 'ofm-pop',
          }).setText(c.name)
        )
        .addTo(map);
      // Desktop: labels always visible. Touch: tap a marker to reveal its label.
      if (!coarse) marker.togglePopup();
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={ref} className="worldmap" />;
}
