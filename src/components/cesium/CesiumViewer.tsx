"use client";

import { useEffect, useRef } from "react";
import { Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const CesiumViewer = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = new Viewer(viewerRef.current);
      return () => {
        viewer.destroy();
      };
    }
  }, []);

  return <div ref={viewerRef} style={{ width: "100%", height: "100%" }} />;
};

export default CesiumViewer;
