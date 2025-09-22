export async function handler(event) {
  try {
    const ip = event.headers['x-nf-client-connection-ip'] || "0.0.0.0";
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoRes.json();

    let country = geoData.country || "OTHER";
    let lang = "en";

    if (country === "HU") {
      lang = "hu";
    } else if (country === "GB") {
      lang = "en_gb";
    } else if (["ES","MX","AR","CL","CO","PE","VE","UY","EC"].includes(country)) {
      lang = "es";
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ country, lang })
    };
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({ country: "OTHER", lang: "en" })
    };
  }
}
