import { Feature, Point } from "@turf/turf";
import { CircleLayer, FillLayer, LineLayer } from "react-map-gl";

export const fogLayerStyle: FillLayer = {
  id: "fog",
  type: "fill",
  paint: {
    "fill-color": "black",
    "fill-opacity": 0.4,
    "fill-outline-color": "black",
  },
};

export const getLineLayerStyle = (): LineLayer => ({
  id: "lines",
  type: "line",
  paint: {
    "line-color": "white",
    "line-width": 0.5,
  },
});

const geohashToCircleRadius = (geohash: string) => {
  // The shorter the geohash, the bigger the circle
  return 1 / geohash.length;
};

export const getPointLayerStyle = (
  point: Feature<Point, { geohash: string }>
): CircleLayer => ({
  id: point.properties.geohash + "-circle",
  type: "circle",
  paint: {
    // Black
    "circle-color": "#9FE88D",
    "circle-stroke-width": 0.5,
    "circle-radius": 40 * geohashToCircleRadius(point.properties.geohash),
  },
});

export const getVisitedLayerStyle: (id: string) => FillLayer = (
  id: string
) => ({
  id,
  type: "fill",
  paint: {
    "fill-color": "black",
    "fill-opacity": 0.4,
    "fill-outline-color": "black",
  },
});