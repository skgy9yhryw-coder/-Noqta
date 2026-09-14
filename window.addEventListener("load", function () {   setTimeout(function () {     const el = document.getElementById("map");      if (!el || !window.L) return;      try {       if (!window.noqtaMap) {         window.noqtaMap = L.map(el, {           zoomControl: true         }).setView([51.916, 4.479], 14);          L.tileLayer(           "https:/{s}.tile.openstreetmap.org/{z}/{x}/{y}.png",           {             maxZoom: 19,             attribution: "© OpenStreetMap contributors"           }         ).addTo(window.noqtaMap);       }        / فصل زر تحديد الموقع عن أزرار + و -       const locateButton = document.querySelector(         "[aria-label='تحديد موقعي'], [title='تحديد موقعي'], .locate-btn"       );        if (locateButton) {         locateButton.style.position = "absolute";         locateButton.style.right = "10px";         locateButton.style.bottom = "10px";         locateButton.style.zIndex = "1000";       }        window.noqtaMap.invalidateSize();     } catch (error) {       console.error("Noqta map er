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

      // فصل زر تحديد الموقع عن أزرار + و -
      const locateButton = document.querySelector(
        "[aria-label='تحديد موقعي'], [title='تحديد موقعي'], .locate-btn"
      );

      if (locateButton) {
        locateButton.style.position = "absolute";
        locateButton.style.right = "10px";
        locateButton.style.bottom = "10px";
        locateButton.style.zIndex = "1000";
      }

      window.noqtaMap.invalidateSize();
    } catch (error) {
      console.error("Noqta map error:", error);
    }
  }, 700);
});