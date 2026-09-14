window.addEventListener("load", function () {
  setTimeout(function () {
    const el = document.getElementById("map");

    if (!el || !window.L) return;

    try {
      if (!window.noqtaMap) {
        window.noqtaMap = L.map(el).setView([51.916, 4.479], 14);

        L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            maxZoom: 19,
            attribution: "© OpenStreetMap contributors"
          }
        ).addTo(window.noqtaMap);
      }

      window.noqtaMap.invalidateSize();
    } catch (error) {
      console.error("Noqta map error:", error);
    }
  }, 700);
});