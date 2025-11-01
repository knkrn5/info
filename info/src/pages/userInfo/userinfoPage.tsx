import React from "react";
import "./userinfoPage.css";



export function UserinfoPage({locationData, address}) {
  return (
    <div className="container">
      <h1 className="title">🌍 Your Location Information</h1>

      {/* Address Card */}
      <div className="card address-card">
        <h2>📍 Address Nearby</h2>
        <p className="address-text">{address}</p>
      </div>

      {/* Location Details Grid */}
      <div className="grid">
        {/* IP & Network Info */}
        <div className="card">
          <h3>🌐 Network Information</h3>
          <div className="info-group">
            <div className="info-item">
              <span className="label">IP Address:</span>
              <span className="value">{locationData?.ip}</span>
            </div>
            <div className="info-item">
              <span className="label">Network:</span>
              <span className="value">{locationData?.network}</span>
            </div>
            <div className="info-item">
              <span className="label">Version:</span>
              <span className="value">{locationData?.version}</span>
            </div>
            <div className="info-item">
              <span className="label">ISP:</span>
              <span className="value">{locationData?.org}</span>
            </div>
            <div className="info-item">
              <span className="label">ASN:</span>
              <span className="value">{locationData?.asn}</span>
            </div>
          </div>
        </div>

        {/* Geographic Info */}
        <div className="card">
          <h3>📌 Geographic Details</h3>
          <div className="info-group">
            <div className="info-item">
              <span className="label">City:</span>
              <span className="value">{locationData?.city}</span>
            </div>
            <div className="info-item">
              <span className="label">Region:</span>
              <span className="value">
                {locationData?.region} ({locationData?.region_code})
              </span>
            </div>
            <div className="info-item">
              <span className="label">Postal Code:</span>
              <span className="value">{locationData?.postal}</span>
            </div>
            <div className="info-item">
              <span className="label">Coordinates:</span>
              <span className="value">
                {locationData?.latitude}°N, {locationData?.longitude}°E
              </span>
            </div>
          </div>
        </div>

        {/* Country Info */}
        <div className="card">
          <h3>🏳️ Country Information</h3>
          <div className="info-group">
            <div className="info-item">
              <span className="label">Country:</span>
              <span className="value">{locationData?.country_name}</span>
            </div>
            <div className="info-item">
              <span className="label">Country Code:</span>
              <span className="value">
                {locationData?.country_code} / {locationData?.country_code_iso3}
              </span>
            </div>
            <div className="info-item">
              <span className="label">Capital:</span>
              <span className="value">{locationData?.country_capital}</span>
            </div>
            <div className="info-item">
              <span className="label">Continent:</span>
              <span className="value">{locationData?.continent_code}</span>
            </div>
            <div className="info-item">
              <span className="label">TLD:</span>
              <span className="value">{locationData?.country_tld}</span>
            </div>
            <div className="info-item">
              <span className="label">In EU:</span>
              <span className="value">
                {locationData?.in_eu ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>

        {/* Time & Contact Info */}
        <div className="card">
          <h3>⏰ Time & Contact</h3>
          <div className="info-group">
            <div className="info-item">
              <span className="label">Timezone:</span>
              <span className="value">{locationData?.timezone}</span>
            </div>
            <div className="info-item">
              <span className="label">UTC Offset:</span>
              <span className="value">{locationData?.utc_offset}</span>
            </div>
            <div className="info-item">
              <span className="label">Calling Code:</span>
              <span className="value">
                {locationData?.country_calling_code}
              </span>
            </div>
            <div className="info-item">
              <span className="label">Currency:</span>
              <span className="value">
                {locationData?.currency_name} ({locationData?.currency})
              </span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="card full-width">
          <h3>📊 Country Statistics</h3>
          <div className="info-group">
            <div className="info-item">
              <span className="label">Population:</span>
              <span className="value">
                {locationData?.country_population.toLocaleString()}
              </span>
            </div>
            <div className="info-item">
              <span className="label">Area:</span>
              <span className="value">
                {locationData?.country_area.toLocaleString()} km²
              </span>
            </div>
            <div className="info-item full-width">
              <span className="label">Languages:</span>
              <span className="value languages">{locationData?.languages}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Note */}
      <div className="disclaimer">
        <p>
          ⚠️ <strong>Note:</strong> This address may not be accurate. IP
          geolocation is approximate and based on available data from the ISP.
          Actual location may vary. For precise location information, use GPS or
          other location services.
        </p>
      </div>
    </div>
  );
}
