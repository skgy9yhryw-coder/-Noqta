window.addEventListener("load", function () {
  setTimeout(function () {
    const el = document.getElementById("map");

    if (!el || !window.L) return;

    try {
      if (!window.noqtaMap) {
        window.noqtaMap = L.map(el, {
          zoomControl: true
        }).setView([51.916, 4.479], 14);

        L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            maxZoom: 19,
            attribution: "© OpenStreetMap contributors"
          }
        ).addTo(window.noqtaMap);
      }

      // وضع زر تحديد الموقع تحت أزرار + و -
      const style = document.createElement("style");
      style.textContent = `
        .mapwrap .locbtn {
          left: 12px !important;
          top: 82px !important;
          right: auto !important;
          bottom: auto !important;
          z-index: 1000 !important;
        }
      `;
      document.head.appendChild(style);

      window.noqtaMap.invalidateSize();
    } catch (error) {
      console.error("Noqta map error:", error);
    }
  }, 700);
});