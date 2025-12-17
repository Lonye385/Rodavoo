import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { 
  Menu, Volume2, VolumeX, TriangleAlert, 
  Plus, Fuel, Utensils, ParkingSquare, 
  CornerUpRight, CornerUpLeft, ArrowUp, LocateFixed,
  Navigation, Search, Star, MapPin,
  Leaf, Zap, X, Radio, Camera, Siren, CarFront,
  Trash2, Flag, Construction, Cone, Compass, Palette,
  MoreVertical, MinusCircle, GripVertical, PlayCircle,
  Clock, ArrowRight, Settings, Maximize, Spline, ShieldAlert,
  ArrowLeftRight, StopCircle, Bike, Bus, Truck, Car
} from 'lucide-react';

// --- LEAFLET ICONS FIX ---
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// --- CONSTANTS ---
const ZOOM_LEVEL_NAV = 18;
const ZOOM_LEVEL_OVERVIEW = 16;

// --- TYPES ---
type VehicleType = 'CAR' | 'MOTO' | 'TRUCK' | 'BUS' | 'TVDE';

interface NavState {
  isActive: boolean;
  instruction: string;
  subInstruction?: string;
  distanceToTurn: number;
  nextTurnIcon: 'left' | 'right' | 'straight' | 'uturn' | 'roundabout';
  speedLimit: number;
  eta: string;
  timeLeft: string;
  distanceTotal: string;
  currentStreet: string;
  laneGuidance?: ('left' | 'straight' | 'right')[];
}

interface SearchResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
}

interface RouteData {
    id: string;
    type: 'FAST' | 'ECO' | 'SHORT';
    label: string;
    coordinates: [number, number][];
    duration: number; // seconds
    distance: number; // meters
    summary?: string;
    diffTime?: string; // e.g. "+5 min"
    arrivalTime?: string; // HH:mm
}

interface RoutePOI {
    id: number;
    type: 'GAS' | 'FOOD' | 'PARKING' | 'RADAR' | 'ALERT';
    distanceFromStart: number;
    lat: number;
    lng: number;
}

interface Waypoint {
    id: string;
    lat: number;
    lng: number;
    address: string;
    type: 'current' | 'stop' | 'destination';
}

const INITIAL_POS: [number, number] = [38.7223, -9.1393]; 

// --- HELPERS ---
const toRad = (deg: number) => deg * Math.PI / 180;
const toDeg = (rad: number) => rad * 180 / Math.PI;

const getBearing = (startLat: number, startLng: number, destLat: number, destLng: number) => {
  const startLatRad = toRad(startLat);
  const startLngRad = toRad(startLng);
  const destLatRad = toRad(destLat);
  const destLngRad = toRad(destLng);

  const y = Math.sin(destLngRad - startLngRad) * Math.cos(destLatRad);
  const x = Math.cos(startLatRad) * Math.sin(destLatRad) -
            Math.sin(startLatRad) * Math.cos(destLatRad) * Math.cos(destLngRad - startLngRad);
  let brng = Math.atan2(y, x);
  brng = toDeg(brng);
  return (brng + 360) % 360;
};

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371e3; 
  const φ1 = lat1 * Math.PI/180;
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
};

const formatDuration = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.round((seconds % 3600) / 60);
    if (h > 0) return `${h} h ${m} min`;
    return `${m} min`;
};

// Generates POIs along the route for simulation
const generateRoutePOIs = (routeCoords: [number, number][], totalDist: number): RoutePOI[] => {
    const pois: RoutePOI[] = [];
    const definitions = [
        { type: 'RADAR', fraction: 0.15 },
        { type: 'GAS', fraction: 0.35 },
        { type: 'ALERT', fraction: 0.60 },
        { type: 'FOOD', fraction: 0.85 },
    ];

    definitions.forEach((def, i) => {
        const index = Math.floor(routeCoords.length * def.fraction);
        if (routeCoords[index]) {
            pois.push({
                id: Date.now() + i,
                type: def.type as any,
                distanceFromStart: totalDist * def.fraction,
                lat: routeCoords[index][0],
                lng: routeCoords[index][1]
            });
        }
    });
    
    return pois;
};

const searchLocation = async (query: string, signal?: AbortSignal): Promise<SearchResult[]> => {
  const coordRegex = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;
  const coordMatch = query.match(coordRegex);

  if (coordMatch) {
    return [{
      place_id: Date.now(),
      display_name: `Coordenadas: ${query}`,
      lat: coordMatch[1],
      lon: coordMatch[3],
      type: 'coordinate'
    }];
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1&countrycodes=pt,es`,
      { 
        headers: { 'User-Agent': 'RodaVO-App/1.0' },
        signal
      }
    );

    if (!response.ok) return [];
    return await response.json();
  } catch (error: any) {
    if (error.name !== 'AbortError') {
        console.error("Search failed", error);
    }
    return [];
  }
};

const fetchRealRoutes = async (waypoints: Waypoint[]): Promise<RouteData[]> => {
    try {
        const coordString = waypoints.map(w => `${w.lng},${w.lat}`).join(';');
        const url = `https://router.project-osrm.org/route/v1/driving/${coordString}?overview=full&geometries=geojson&alternatives=true&steps=true`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (!data.routes || data.routes.length === 0) return [];

        const routes: RouteData[] = [];
        const now = Date.now();

        // Helper to format ETA
        const getEta = (duration: number) => new Date(now + duration * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Helper to fuzz coordinates so lines don't overlap exactly
        // Increased offset to make lines visually distinct
        const offsetCoords = (coords: [number, number][], offsetLat: number, offsetLng: number): [number, number][] => {
            return coords.map(([lat, lng]) => [lat + offsetLat, lng + offsetLng]);
        };

        // 1. FASTEST (Main Route)
        const mainRoute = data.routes[0];
        const mainCoords = mainRoute.geometry.coordinates.map((coord: number[]) => [coord[1], coord[0]]);
        
        routes.push({
            id: 'fast',
            type: 'FAST',
            label: 'Mais Rápida',
            coordinates: mainCoords,
            duration: mainRoute.duration,
            distance: mainRoute.distance,
            summary: mainRoute.legs[0]?.summary,
            diffTime: 'Melhor',
            arrivalTime: getEta(mainRoute.duration)
        });

        // 2. ECO (If alternative exists, use it, else offset main significantly)
        const ecoRoute = data.routes.length > 1 ? data.routes[1] : null;
        const ecoCoords = ecoRoute 
            ? ecoRoute.geometry.coordinates.map((c: number[]) => [c[1], c[0]])
            : offsetCoords(mainCoords, 0.0008, 0.0008); // Increased offset for visibility

        const ecoDuration = ecoRoute ? ecoRoute.duration : mainRoute.duration * 1.15;
        const ecoDist = ecoRoute ? ecoRoute.distance : mainRoute.distance * 0.95;

        routes.push({
            id: 'eco',
            type: 'ECO',
            label: 'Económica',
            coordinates: ecoCoords as [number, number][], 
            duration: ecoDuration, 
            distance: ecoDist, 
            summary: ecoRoute ? ecoRoute.legs[0]?.summary : 'Via Alternativa',
            diffTime: `+${Math.round((ecoDuration - mainRoute.duration) / 60)} min`,
            arrivalTime: getEta(ecoDuration)
        });

        // 3. SHORT (If 3rd exists, use it, else offset main differently)
        const shortRoute = data.routes.length > 2 ? data.routes[2] : null;
        const shortCoords = shortRoute
            ? shortRoute.geometry.coordinates.map((c: number[]) => [c[1], c[0]])
            : offsetCoords(mainCoords, -0.0008, -0.0008); // Increased offset for visibility

        const shortDuration = shortRoute ? shortRoute.duration : mainRoute.duration * 1.25;
        const shortDist = shortRoute ? shortRoute.distance : mainRoute.distance * 0.85;

        routes.push({
            id: 'short',
            type: 'SHORT',
            label: 'Mais Curta',
            coordinates: shortCoords as [number, number][],
            duration: shortDuration, 
            distance: shortDist, 
            summary: shortRoute ? shortRoute.legs[0]?.summary : 'Via Local',
            diffTime: `+${Math.round((shortDuration - mainRoute.duration) / 60)} min`,
            arrivalTime: getEta(shortDuration)
        });

        return routes;
    } catch (error) {
        console.error("Routing failed:", error);
        return [];
    }
};

// --- SUB-COMPONENTS ---

const CameraController = ({ 
  center, 
  heading, 
  mode,
  autoCenter,
  setAutoCenter,
  routeBounds,
  hasCentered
}: { 
  center: [number, number], 
  heading: number, 
  mode: string,
  autoCenter: boolean,
  setAutoCenter: (v: boolean) => void,
  routeBounds: L.LatLngBounds | null,
  hasCentered: boolean
}) => {
  const map = useMap();
  
  useMapEvents({
    dragstart: () => setAutoCenter(false),
    zoomstart: () => {}, 
  });

  // Force initial snap immediately when location is found
  useEffect(() => {
      if (!hasCentered && map && center[0] !== 0) {
          map.invalidateSize(); // Ensure map knows its container size
          map.setView(center, ZOOM_LEVEL_OVERVIEW, { animate: false });
      }
  }, [hasCentered, center, map]);

  useEffect(() => {
    if (!map) return;

    if ((mode === 'ROUTE_SELECTION' || mode === 'ROUTE_PLANNING') && routeBounds) {
        map.fitBounds(routeBounds, { padding: [50, 150], animate: true, duration: 1.0 });
    } else if (autoCenter && hasCentered) {
        // Normal Navigation Follow Logic
        if (mode === 'NAVIGATION') {
            const offsetDistance = 0.002; 
            const rads = (heading * Math.PI) / 180;
            const offsetLat = Math.cos(rads) * offsetDistance;
            const offsetLng = Math.sin(rads) * offsetDistance;
            
            const targetCenter: [number, number] = [center[0] + offsetLat, center[1] + offsetLng];
            
            map.setView(targetCenter, ZOOM_LEVEL_NAV, { 
                animate: true, 
                duration: 1.0,
                easeLinearity: 0.2
            });
        } else {
            // Free Drive Follow - Strictly Center
            map.setView(center, ZOOM_LEVEL_OVERVIEW, { animate: true, duration: 0.8 });
        }
    }
  }, [center, heading, mode, map, autoCenter, routeBounds, hasCentered]);

  return null;
};

// --- MAIN COMPONENT ---

export const MapController = ({ onOpenNav }: { onOpenNav?: () => void }) => {
  const [mode, setMode] = useState<'FREE_DRIVE' | 'ROUTE_PLANNING' | 'ROUTE_SELECTION' | 'NAVIGATION'>('FREE_DRIVE');
  const [position, setPosition] = useState<[number, number]>(INITIAL_POS);
  const [heading, setHeading] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [autoCenter, setAutoCenter] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [hasCentered, setHasCentered] = useState(false);
  
  // New States
  const [vehicleType, setVehicleType] = useState<VehicleType>('CAR');
  const [showVehicleSelector, setShowVehicleSelector] = useState(false);
  
  const [waypoints, setWaypoints] = useState<Waypoint[]>([
      { id: 'start', lat: INITIAL_POS[0], lng: INITIAL_POS[1], address: 'Localização Atual', type: 'current' }
  ]);
  const [routes, setRoutes] = useState<RouteData[]>([]);
  const [selectedRouteIdx, setSelectedRouteIdx] = useState<number>(0);
  const [activePOIs, setActivePOIs] = useState<RoutePOI[]>([]);
  const [navState, setNavState] = useState<NavState>({
    isActive: false,
    instruction: "Siga em frente",
    distanceToTurn: 0,
    nextTurnIcon: 'straight',
    speedLimit: 50,
    eta: "--:--",
    timeLeft: "--",
    distanceTotal: "--",
    currentStreet: "A carregar...",
    laneGuidance: ['straight', 'straight', 'right']
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const lastPositionRef = useRef<[number, number] | null>(null);
  const totalRouteDistanceRef = useRef(1);
  const progressRef = useRef(0);

  const routeBounds = useMemo(() => {
      if (routes.length > 0 && routes[selectedRouteIdx]?.coordinates) {
          return L.latLngBounds(routes[selectedRouteIdx].coordinates);
      }
      return null;
  }, [routes, selectedRouteIdx]);

  useEffect(() => {
    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
        async (pos) => {
            const { latitude, longitude, heading: gpsHeading, speed: gpsSpeed } = pos.coords;
            const newPos: [number, number] = [latitude, longitude];
            
            // Immediate snap on first valid fix
            if (!hasCentered) {
                setPosition(newPos);
                setHasCentered(true);
            } else {
                setPosition(newPos);
            }

            let finalHeading = heading;
            if (gpsHeading && !isNaN(gpsHeading)) {
                finalHeading = gpsHeading;
            } else if (lastPositionRef.current) {
                const dist = calculateDistance(lastPositionRef.current[0], lastPositionRef.current[1], latitude, longitude);
                if (dist > 2) {
                    finalHeading = getBearing(lastPositionRef.current[0], lastPositionRef.current[1], latitude, longitude);
                }
            }
            
            lastPositionRef.current = newPos;
            setHeading(finalHeading);
            setSpeed((gpsSpeed || 0) * 3.6);

            if (mode === 'NAVIGATION' && routes[selectedRouteIdx]) {
                const route = routes[selectedRouteIdx];
                const dest = route.coordinates[route.coordinates.length - 1];
                const distRemaining = calculateDistance(latitude, longitude, dest[0], dest[1]);
                
                const totalDist = totalRouteDistanceRef.current;
                const progress = Math.max(0, Math.min(1, 1 - (distRemaining / totalDist)));
                progressRef.current = progress;

                const timeRemainingSeconds = (distRemaining / 1000) / (Math.max(30, (gpsSpeed || 30)*3.6) / 3600);
                const arrivalTime = new Date(Date.now() + timeRemainingSeconds * 1000);
                
                setNavState(prev => ({
                    ...prev,
                    distanceTotal: distRemaining > 1000 ? `${(distRemaining/1000).toFixed(1)} km` : `${Math.round(distRemaining)} m`,
                    timeLeft: formatDuration(timeRemainingSeconds),
                    eta: arrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }), // HH:mm format
                    distanceToTurn: Math.max(0, prev.distanceToTurn - ((gpsSpeed || 0) * 1))
                }));
            }
        },
        (err) => console.warn(err),
        { enableHighAccuracy: true, maximumAge: 1000, timeout: 5000 }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, [mode, routes, selectedRouteIdx, hasCentered]);

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      if (searchQuery.length > 2) {
        setIsSearching(true);
        const results = await searchLocation(searchQuery, controller.signal);
        if (!controller.signal.aborted) {
            setSearchResults(results);
            setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 500);
    return () => {
        clearTimeout(timer);
        controller.abort();
    };
  }, [searchQuery]);

  const handleSearchResultSelect = (result: SearchResult) => {
      const lat = parseFloat(result.lat);
      const lng = parseFloat(result.lon);
      
      const destWaypoint: Waypoint = {
          id: 'dest',
          lat,
          lng,
          address: result.display_name.split(',')[0],
          type: 'destination'
      };

      setWaypoints(prev => [prev[0], destWaypoint]);
      setSearchQuery('');
      setShowSearch(false);
      
      calculateRoute([waypoints[0], destWaypoint]);
  };

  const calculateRoute = async (points: Waypoint[]) => {
      const routeData = await fetchRealRoutes(points);
      if (routeData.length > 0) {
          setRoutes(routeData);
          setSelectedRouteIdx(0);
          totalRouteDistanceRef.current = routeData[0].distance;
          setActivePOIs(generateRoutePOIs(routeData[0].coordinates, routeData[0].distance));
          setMode('ROUTE_SELECTION');
          setAutoCenter(false);
      }
  };

  const startNavigation = () => {
      setMode('NAVIGATION');
      setAutoCenter(true);
      setNavState(prev => ({ ...prev, isActive: true }));
  };

  const stopNavigation = () => {
      setMode('FREE_DRIVE');
      setRoutes([]);
      setWaypoints([waypoints[0]]);
      setNavState(prev => ({ ...prev, isActive: false }));
  };

  const getVehicleIcon = () => {
      switch(vehicleType) {
          case 'MOTO': return <Bike size={20} />;
          case 'TRUCK': return <Truck size={20} />;
          case 'BUS': return <Bus size={20} />;
          case 'TVDE': return <CarFront size={20} />;
          default: return <Car size={20} />;
      }
  };

  return (
    <div className="relative h-full w-full bg-[#050b14] overflow-hidden font-display select-none touch-none">
      
      <style>{`
        .cockpit-panel {
            background: rgba(10, 14, 23, 0.95);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.8);
        }
        .nav-glow { box-shadow: 0 0 20px rgba(0, 242, 255, 0.3); }
        .danger-glow { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
        .slide-bar-bg {
            background: linear-gradient(to bottom, rgba(30,41,59,0), rgba(30,41,59,0.8) 10%, rgba(30,41,59,0.8) 90%, rgba(30,41,59,0));
        }
      `}</style>

      {/* MAP LAYER */}
      <div className="absolute inset-0 z-0">
        <MapContainer
          center={position}
          zoom={ZOOM_LEVEL_OVERVIEW}
          zoomControl={false}
          attributionControl={false}
          className="h-full w-full bg-[#050b14]"
          dragging={true}
          touchZoom={true}
          onDragStart={() => setAutoCenter(false)}
        >
          <TileLayer 
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" 
            opacity={1}
          />

          {/* Render All Routes in Selection Mode (with different colors) */}
          {(mode === 'ROUTE_SELECTION' || mode === 'NAVIGATION') && routes.map((r, i) => {
              // Only show selected route in nav mode, or all in selection mode
              if (mode === 'NAVIGATION' && i !== selectedRouteIdx) return null;
              
              const isSelected = i === selectedRouteIdx;
              const color = r.type === 'FAST' ? '#00f2ff' : r.type === 'ECO' ? '#4ade80' : '#facc15';
              const zIndex = isSelected ? 100 : 50;
              const opacity = isSelected ? 0.9 : 0.4;
              const weight = isSelected ? 5 : 4;

              return (
                  <React.Fragment key={r.id}>
                      {/* Glow for selected */}
                      {isSelected && <Polyline positions={r.coordinates} color={color} weight={10} opacity={0.3} />}
                      {/* Main Line */}
                      <Polyline positions={r.coordinates} color={color} weight={weight} opacity={opacity} pane="overlayPane" />
                  </React.Fragment>
              )
          })}

          {waypoints.length > 1 && (
              <Marker position={[waypoints[waypoints.length-1].lat, waypoints[waypoints.length-1].lng]} icon={L.divIcon({
                  html: '<div class="text-3xl">🏁</div>',
                  className: 'bg-transparent',
                  iconSize: [30, 30],
                  iconAnchor: [15, 30]
              })} />
          )}

          <Marker position={position} icon={L.divIcon({
              html: `<div style="transform: rotate(${heading}deg);" class="w-12 h-12 flex items-center justify-center transition-transform duration-300 filter drop-shadow-[0_0_10px_#00f2ff]">
                        <div class="relative w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[30px] border-b-white">
                            <div class="absolute top-[18px] -left-[12px] w-[24px] h-[12px] bg-[#00f2ff] opacity-50 blur-sm rounded-full"></div>
                        </div>
                     </div>`,
              className: 'bg-transparent',
              iconSize: [48, 48],
              iconAnchor: [24, 24]
          })} zIndexOffset={1000} />

          <CameraController 
            center={position} 
            heading={heading} 
            mode={mode} 
            autoCenter={autoCenter} 
            setAutoCenter={setAutoCenter} 
            routeBounds={routeBounds} 
            hasCentered={hasCentered}
          />
        </MapContainer>
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_50%,rgba(5,11,20,0.6)_100%)]"></div>
      </div>

      {/* --- HUD INTERFACE --- */}

      <div className="absolute inset-0 z-50 pointer-events-none flex justify-between p-4 pb- safe">
          
          {/* === LEFT COLUMN: Controls & Maneuvers === */}
          <div className="flex flex-col gap-4 w-full max-w-[280px] pointer-events-auto items-start h-full pb- safe-bottom">
              
              {/* 1. TOP LEFT: Maneuver or Search */}
              {mode === 'NAVIGATION' ? (
                  <div className="flex flex-col gap-2 w-full animate-in slide-in-from-left duration-300">
                      {/* Big Maneuver Card */}
                      <div className="cockpit-panel rounded-2xl flex overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] w-full">
                          <div className="bg-[#00f2ff] w-20 flex items-center justify-center text-black">
                              {navState.nextTurnIcon === 'left' && <CornerUpLeft size={42} strokeWidth={3} />}
                              {navState.nextTurnIcon === 'right' && <CornerUpRight size={42} strokeWidth={3} />}
                              {navState.nextTurnIcon === 'straight' && <ArrowUp size={42} strokeWidth={3} />}
                          </div>
                          <div className="flex-1 flex flex-col justify-center px-4 py-4 bg-[#0a0e17]">
                              <span className="text-4xl font-black text-white leading-none tracking-tighter">
                                  {Math.round(navState.distanceToTurn)}<span className="text-lg text-slate-400 font-medium ml-1">m</span>
                              </span>
                              <span className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-1 truncate">
                                  {navState.instruction}
                              </span>
                          </div>
                      </div>
                      
                      {/* Lane Assist (Mini) */}
                      {navState.laneGuidance && (
                          <div className="flex gap-1 bg-black/60 p-1.5 rounded-xl w-fit backdrop-blur-sm border border-white/5">
                              {navState.laneGuidance.map((lane, i) => (
                                  <div key={i} className={`w-5 h-6 rounded bg-black/40 border flex items-center justify-center ${i === 1 ? 'border-white text-white' : 'border-white/10 text-white/20'}`}>
                                      <ArrowUp size={12} />
                                  </div>
                              ))}
                          </div>
                      )}
                  </div>
              ) : (
                  // Free Drive Search (Replaces Maneuver)
                  <div className="cockpit-panel rounded-2xl p-2 flex items-center shadow-2xl w-full">
                      <button onClick={onOpenNav} className="p-3 text-slate-400 hover:text-white transition-colors active:scale-90">
                          <Menu size={24} />
                      </button>
                      <input 
                          type="text" 
                          className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-500 font-medium h-10 px-2 min-w-0"
                          placeholder="Para onde vamos?"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onFocus={() => setShowSearch(true)}
                      />
                      <button className="size-10 bg-[#00f2ff] rounded-xl flex items-center justify-center text-black hover:bg-[#00cce6] transition-colors">
                          <Search size={20} />
                      </button>
                  </div>
              )}

              {/* 2. LEFT TOOLBAR (Stacked Vertically) */}
              <div className="flex flex-col gap-3 mt-2 relative">
                  
                  {/* Vehicle Selector */}
                  <div className="relative">
                      <button 
                        onClick={() => setShowVehicleSelector(!showVehicleSelector)}
                        className={`size-12 rounded-xl border border-white/10 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 shadow-lg backdrop-blur-md transition-all ${showVehicleSelector ? 'bg-[#00f2ff] text-black' : 'bg-[#0a0e17]/90'}`}
                      >
                          {getVehicleIcon()}
                      </button>
                      
                      {/* Vehicle Dropdown */}
                      {showVehicleSelector && (
                          <div className="absolute left-14 top-0 bg-[#0a0e17]/95 border border-white/10 rounded-xl p-2 flex flex-col gap-2 shadow-xl animate-in slide-in-from-left-2 backdrop-blur-md min-w-[120px] z-[60]">
                              {(['CAR', 'MOTO', 'TRUCK', 'BUS', 'TVDE'] as VehicleType[]).map((v) => (
                                  <button
                                    key={v}
                                    onClick={() => { setVehicleType(v); setShowVehicleSelector(false); }}
                                    className={`flex items-center gap-3 p-2 rounded-lg text-sm font-bold uppercase transition-colors ${vehicleType === v ? 'bg-[#00f2ff] text-black' : 'text-slate-300 hover:bg-white/5'}`}
                                  >
                                      {v === 'CAR' && <Car size={16} />}
                                      {v === 'MOTO' && <Bike size={16} />}
                                      {v === 'TRUCK' && <Truck size={16} />}
                                      {v === 'BUS' && <Bus size={16} />}
                                      {v === 'TVDE' && <CarFront size={16} />}
                                      {v}
                                  </button>
                              ))}
                          </div>
                      )}
                  </div>

                  <button onClick={() => setIsMuted(!isMuted)} className="size-12 rounded-xl bg-[#0a0e17]/90 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 shadow-lg backdrop-blur-md">
                      {isMuted ? <VolumeX size={22} className="text-red-400" /> : <Volume2 size={22} />}
                  </button>

                  {/* Recenter Button (Always visible on left if not auto-centered) */}
                  <button 
                    onClick={() => setAutoCenter(true)} 
                    className={`size-12 rounded-xl border border-white/10 flex items-center justify-center active:scale-95 shadow-lg backdrop-blur-md transition-all ${autoCenter ? 'bg-[#0a0e17]/90 text-slate-600' : 'bg-[#00f2ff]/10 text-[#00f2ff] border-[#00f2ff]/30 animate-pulse'}`}
                  >
                      <LocateFixed size={22} />
                  </button>

                  {mode === 'NAVIGATION' && (
                      <button className="size-12 rounded-xl bg-[#0a0e17]/90 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 shadow-lg backdrop-blur-md">
                          <ShieldAlert size={22} className="text-orange-400" />
                      </button>
                  )}
              </div>

              {/* SEARCH RESULTS DROPDOWN (If active) */}
              {searchResults.length > 0 && showSearch && mode === 'FREE_DRIVE' && (
                  <div className="w-full cockpit-panel rounded-2xl overflow-hidden animate-in slide-in-from-top-2 absolute top-20 z-50">
                      {searchResults.map((res) => (
                          <button 
                              key={res.place_id}
                              onClick={() => handleSearchResultSelect(res)}
                              className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors group"
                          >
                              <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#00f2ff]">
                                  <MapPin size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                  <p className="text-white font-bold truncate text-sm">{res.display_name.split(',')[0]}</p>
                                  <p className="text-slate-500 text-xs truncate">{res.display_name}</p>
                              </div>
                          </button>
                      ))}
                  </div>
              )}

              {/* SPACER to push Speedometer to bottom */}
              <div className="flex-1"></div>

              {/* 3. BOTTOM LEFT: Speedometer */}
              <div className="relative mt-auto">
                  <div className="size-28 rounded-full bg-[#0a0e17]/80 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group">
                      {/* Gradient Ring */}
                      <div className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-[#00f2ff] border-r-[#00f2ff]/30 rotate-[-45deg] group-hover:rotate-[45deg] transition-transform duration-700"></div>
                      
                      <span className="text-5xl font-black text-white tracking-tighter leading-none font-display z-10">
                          {Math.round(speed)}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 z-10">km/h</span>
                  </div>
                  
                  {/* Speed Limit Bubble */}
                  {mode === 'NAVIGATION' && (
                      <div className="absolute -top-2 -right-2 size-10 rounded-full bg-white border-[3px] border-[#cc3333] flex items-center justify-center shadow-lg z-20">
                          <span className="text-[#1a1a1a] font-black text-sm">{navState.speedLimit}</span>
                      </div>
                  )}
              </div>
          </div>

          {/* === RIGHT COLUMN: Navigation Info (SlidePois) === */}
          <div className="flex flex-col items-center h-full pt-12 pb-24 pointer-events-auto">
              
              {mode === 'NAVIGATION' && (
                  <div className="flex flex-col items-center h-full animate-in slide-in-from-right duration-500">
                      
                      {/* ETA Header (Sits on top of the bar) */}
                      <div className="glass-panel px-3 py-2 rounded-xl border border-[#00f2ff]/30 flex flex-col items-center gap-0.5 mb-2 shadow-[0_0_15px_rgba(0,242,255,0.1)] backdrop-blur-md">
                          <span className="text-xl font-black text-white leading-none tracking-tight">{navState.eta}</span>
                          <div className="flex items-center gap-1">
                              <span className="text-[10px] font-bold text-[#00f2ff]">{navState.timeLeft}</span>
                              <span className="text-[10px] text-slate-500">•</span>
                              <span className="text-[10px] text-slate-400">{navState.distanceTotal}</span>
                          </div>
                      </div>

                      {/* The Neon SlideBar */}
                      <div className="relative flex-1 w-1.5 bg-[#1e293b]/50 rounded-full overflow-visible my-1 flex justify-center">
                          {/* Progress Fill (Inverse, from bottom) */}
                          <div 
                              className="absolute bottom-0 w-full bg-[#00f2ff] rounded-full transition-all duration-1000 ease-linear shadow-[0_0_10px_#00f2ff]"
                              style={{ height: `${progressRef.current * 100}%` }}
                          ></div>

                          {/* POI Icons attached to the bar */}
                          {activePOIs.map((poi) => {
                              const pct = (poi.distanceFromStart / totalRouteDistanceRef.current) * 100;
                              // Only show if ahead
                              if (pct > (progressRef.current * 100)) {
                                  return (
                                      <div 
                                          key={poi.id} 
                                          className="absolute left-1/2 -translate-x-1/2"
                                          style={{ bottom: `${pct}%` }}
                                      >
                                          <div className={`
                                              size-7 rounded-full border-2 flex items-center justify-center shadow-lg bg-[#0a0e17] z-10 relative
                                              ${poi.type === 'RADAR' ? 'border-red-500 text-red-500' : 
                                                poi.type === 'GAS' ? 'border-blue-400 text-blue-400' :
                                                'border-gray-500 text-gray-300'}
                                          `}>
                                              {poi.type === 'RADAR' && <Camera size={12} />}
                                              {poi.type === 'GAS' && <Fuel size={12} />}
                                              {poi.type === 'ALERT' && <TriangleAlert size={12} />}
                                              {poi.type === 'FOOD' && <Utensils size={12} />}
                                          </div>
                                      </div>
                                  );
                              }
                              return null;
                          })}
                      </div>

                      {/* Stop Button (Base of the bar) */}
                      <button onClick={stopNavigation} className="mt-2 size-10 rounded-full bg-red-500/10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center shadow-lg active:scale-90 backdrop-blur-sm">
                          <X size={20} strokeWidth={3} />
                      </button>
                  </div>
              )}
          </div>

      </div>

      {/* Route Confirm Drawer (Bottom Sheet) */}
      {mode === 'ROUTE_SELECTION' && (
          <div className="absolute bottom-4 left-4 right-4 z-[60] flex flex-col gap-4 animate-in slide-in-from-bottom-4 pointer-events-auto">
              
              {/* Route Options Cards */}
              <div className="grid grid-cols-3 gap-2">
                  {routes.map((route, idx) => (
                      <button
                        key={route.id}
                        onClick={() => setSelectedRouteIdx(idx)}
                        className={`
                            relative rounded-xl p-3 flex flex-col gap-1 transition-all border
                            ${selectedRouteIdx === idx 
                                ? `bg-[${route.type === 'FAST' ? '#00f2ff' : route.type === 'ECO' ? '#4ade80' : '#facc15'}]/20 border-[${route.type === 'FAST' ? '#00f2ff' : route.type === 'ECO' ? '#4ade80' : '#facc15'}] shadow-[0_0_15px_rgba(0,0,0,0.2)]`
                                : 'bg-[#0a0e17]/90 border-white/10 hover:bg-[#0a0e17]'}
                        `}
                        style={{
                            borderColor: selectedRouteIdx === idx ? (route.type === 'FAST' ? '#00f2ff' : route.type === 'ECO' ? '#4ade80' : '#facc15') : 'rgba(255,255,255,0.1)'
                        }}
                      >
                          {/* Badge */}
                          <div className={`
                              text-[9px] font-bold uppercase tracking-wider mb-1 px-1.5 py-0.5 rounded w-fit
                              ${route.type === 'FAST' ? 'bg-blue-500/20 text-blue-300' : 
                                route.type === 'ECO' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}
                          `}>
                              {route.label}
                          </div>
                          
                          {/* DURATION BIG */}
                          <span className={`text-xl font-black leading-none ${selectedRouteIdx === idx ? 'text-white' : 'text-slate-300'}`}>
                              {formatDuration(route.duration)}
                          </span>
                          
                          {/* ETA Small */}
                          <div className="flex items-center gap-1 text-[10px] text-slate-400">
                              <span className="text-white/60 font-bold">{route.arrivalTime || '--:--'}</span>
                              <span className="text-white/30">•</span>
                              <span>{(route.distance / 1000).toFixed(1)} km</span>
                          </div>

                          {/* Icon Overlay */}
                          <div className="absolute top-2 right-2 opacity-20">
                              {route.type === 'FAST' && <Zap size={24} />}
                              {route.type === 'ECO' && <Leaf size={24} />}
                              {route.type === 'SHORT' && <Compass size={24} />}
                          </div>
                      </button>
                  ))}
              </div>

              {/* Start Button Area */}
              <div className="cockpit-panel rounded-2xl p-4 flex gap-3">
                  <div className="flex-1">
                      <h2 className="text-xl font-bold text-white">{waypoints[waypoints.length-1].address}</h2>
                      <p className="text-slate-400 text-xs mt-0.5">Via {routes[selectedRouteIdx]?.summary || 'Rota Calculada'}</p>
                  </div>
                  
                  <button 
                      onClick={startNavigation}
                      className="bg-[#00f2ff] hover:bg-[#00cce6] text-black font-black text-lg px-8 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,242,255,0.4)] active:scale-[0.98] transition-all uppercase tracking-wide"
                  >
                      <Navigation size={24} fill="currentColor" />
                      Iniciar
                  </button>
              </div>
              
              <button 
                  onClick={() => setMode('FREE_DRIVE')}
                  className="mx-auto text-slate-400 font-bold text-xs uppercase tracking-wide hover:text-white transition-colors bg-black/40 px-4 py-2 rounded-full backdrop-blur-md"
              >
                  Cancelar
              </button>
          </div>
      )}

    </div>
  );
};