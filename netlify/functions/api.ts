import type { Handler } from "@netlify/functions";

// Placeholder API handler
// Netlify serverless functions can be added here

const handler: Handler = async (event) => {
  console.log("Netlify Function Handler - API Routes");
  
  const path = event.path;
  
  if (path.includes("/api/health")) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "ok",
        message: "Afrobility Family CIC API is running",
        timestamp: new Date().toISOString()
      }),
      headers: {
        "Content-Type": "application/json",
      }
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ error: "Not found" }),
    headers: {
      "Content-Type": "application/json",
    }
  };
};

export { handler };
