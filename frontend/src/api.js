// src/api.js

const API_BASE = "http://localhost:5000/api";

export const fetchComplaints = async () => {
  try {
    const response = await fetch(`${API_BASE}/complaints`);
    const result = await response.json();

    console.log("Fetched result:", result);

    if (!Array.isArray(result.data)) {
      throw new Error("Expected an array in result.data");
    }

    return result.data; // ✅ return only the array
  } catch (error) {
    console.error("Failed to fetch complaints:", error);
    return [];
  }
};
